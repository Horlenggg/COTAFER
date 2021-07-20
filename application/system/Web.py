"""
Author: masakokh
Year: 2020
Version: 1.1.1
Package: Framework
"""
import sys
import types
from typing import Any

from werkzeug.exceptions import BadRequestKeyError, HTTPException
from flask import Flask, Response, Blueprint, json, make_response, send_from_directory as sfd
from flask import globals
from flask._compat import reraise
from flask.signals import request_finished, request_started
from flask.app import setupmethod

from application.system.Env import Env
import application.constants as ac


class Web(Flask):
    """

    """
    def __init__(self):
        """

        """
        # call parent class
        super().__init__(__name__)

    def __call__(self, environ, start_response):
        """

        """
        return self._wsgiApp(environ, start_response)

    def _changeFunctionArgs(function, new_args):
        """ Create a new function with its arguments renamed to new_args. """
        code_obj = function.func_code
        assert (0 <= len(new_args) <= code_obj.co_argcount)
        # the arguments are just the first co_argcount co_varnames
        # replace them with the new argument names in new_args
        new_varnames = tuple(list(new_args[:code_obj.co_argcount]) +
                             list(code_obj.co_varnames[code_obj.co_argcount:]))
        # type help(types.CodeType) at the interpreter prompt for information
        new_code_obj = types.CodeType(code_obj.co_argcount,
                                      code_obj.co_nlocals,
                                      code_obj.co_stacksize,
                                      code_obj.co_flags,
                                      code_obj.co_code,
                                      code_obj.co_consts,
                                      code_obj.co_names,
                                      new_varnames,
                                      code_obj.co_filename,
                                      code_obj.co_name,
                                      code_obj.co_firstlineno,
                                      code_obj.co_lnotab,
                                      code_obj.co_freevars,
                                      code_obj.co_cellvars)
        modified = types.FunctionType(new_code_obj, function.func_globals)
        function.__code__ = modified.__code__  # replace code portion of original

    def _dispatchRequest(self) -> Response:
        """

        """

        req     = globals._request_ctx_stack.top.request

        if req.routing_exception is not None:
            self.raise_routing_exception(req)

        rule    = req.url_rule

        # if we provide automatic options for this URL and the
        # request came with the OPTIONS method, reply automatically
        if getattr(rule, 'provide_automatic_options', False) \
           and req.method == 'OPTIONS':
            return self.make_default_options_response()

        # otherwise dispatch to the handler for that endpoint
        return self.view_functions[rule.endpoint](**req.view_args)

    def _finalizeRequest(self, rv, fromErrorHandler= False):
        """

        :param rv:
        :param from_error_handler:
        :return:
        """
        response    = self.make_response(rv)

        try:
            response = self.process_response(response)
            request_finished.send(self, response=response)
        except Exception:
            if not fromErrorHandler:
                raise
            self.logger.exception('Request finalizing failed with an '
                                  'error while handling an error')
        return response

    def _fullDispatchRequest(self) -> Response:
        """

        :return:
        """
        self.try_trigger_before_first_request_functions()
        try:
            request_started.send(self)
            rv = self.preprocess_request()

            if rv is None:
                rv = self._dispatchRequest()

        except Exception as e:
            rv = self._handleUserException(e)

        return self._finalizeRequest(rv)

    def _handleUserException(self, e):
        """

        :param e:
        :return:
        """
        exc_type, exc_value, tb = sys.exc_info()
        assert exc_value is e

        # ensure not to trash sys.exc_info() at that point in case someone
        if (
            (self.debug or self.config['TRAP_BAD_REQUEST_ERRORS'])
            and isinstance(e, BadRequestKeyError)
            # only set it if it's still the default description
            and e.description is BadRequestKeyError.description
        ):
            e.description = "KeyError: '{0}'".format(*e.args)

        if isinstance(e, HTTPException) and not self.trap_http_exception(e):
            return self.handle_http_exception(e)

        handler = self._find_error_handler(e)

        if handler is None:
            reraise(exc_type, exc_value, tb)

        return handler(e)

    def _route(self, rule, **options):
        """

        :param rule:
        :param options:
        :return:
        """
        def decorator(functionName):
            endpoint = options.pop("endpoint", None)
            self.add_url_rule(rule, endpoint, functionName, **options)

            # kun e
            return functionName

        return decorator

    def _wsgiApp(self, environ, start_response) -> None:
        """

        """
        ctx = self.request_context(environ)
        error = None
        try:
            try:
                ctx.push()
                response = self._fullDispatchRequest()
            except Exception as e:
                error = e
                response = self.handle_exception(e)
            except:  # noqa: B001
                error = sys.exc_info()[1]
                raise
            return response(environ, start_response)
        finally:
            if self.should_ignore_error(error):
                error = None
            ctx.auto_pop(error)

    @setupmethod
    def add_url_rule(
            self,
            rule,
            endpoint=None,
            view_func=None,
            provide_automatic_options=None,
            **options
    ):
        string_types = (str,)

        def _endpoint_from_view_func(view_func):
            """Internal helper that returns the default endpoint for a given
            function.  This always is the function name.
            """
            # assert view_func is not None, "expected view func if endpoint is not provided.")
            return view_func.__name__

        if endpoint is None:
            endpoint = _endpoint_from_view_func(view_func)

        options["endpoint"] = endpoint
        methods = options.pop("methods", None)

        # if the methods are not given and the view_func object knows its
        # methods we can use that instead.  If neither exists, we go with
        # a tuple of only ``GET`` as default.
        if methods is None:
            methods = getattr(view_func, "methods", None) or ("GET",)
        if isinstance(methods, string_types):
            raise TypeError(
                "Allowed methods have to be iterables of strings, "
                'for example: @app.route(..., methods=["POST"])'
            )
        methods = set(item.upper() for item in methods)

        # Methods that should always be added
        required_methods = set(getattr(view_func, "required_methods", ()))
        # starting with Flask 0.8 the view_func object can disable and
        # force-enable the automatic options handling.
        if provide_automatic_options is None:
            provide_automatic_options = getattr(
                view_func, "provide_automatic_options", None
            )
        if provide_automatic_options is None:
            if "OPTIONS" not in methods:
                provide_automatic_options = True
                required_methods.add("OPTIONS")
            else:
                provide_automatic_options = False

        # Add the required methods now.
        methods |= required_methods

        rule = self.url_rule_class(rule, methods=methods, **options)
        rule.provide_automatic_options = provide_automatic_options

        # add rule
        self.url_map.add(rule)

        #
        if view_func is not None:
            old_func = self.view_functions.get(endpoint)
            if old_func is not None and old_func != view_func:
                raise AssertionError(
                    "View function mapping is overwriting an "
                    "existing endpoint function: %s" % endpoint
                )
            self.view_functions[endpoint] = view_func

    def delete(self, rule, **options) -> Any:
        """

        :param rule:
        :param options:
        :return:
        """
        return self._route(rule, methods= ['DELETE'])

    def get(self, rule, **options) -> Any:
        """

        :param rule:
        :param options:
        :return:
        """
        return self._route(rule, methods= ['GET'])

    def head(self, rule, **options) -> Any:
        """

        :param rule:
        :param options:
        :return:
        """
        return self._route(rule, methods= ['HEAD'])

    def options(self, rule, **options) -> Any:
        """

        :param rule:
        :param options:
        :return:
        """
        return self._route(rule, methods= ['OPTIONS'])

    def patch(self, rule, **options) -> Any:
        """

        :param rule:
        :param options:
        :return:
        """
        return self._route(rule, methods= ['PATCH'])

    def post(self, rule, **options) -> Any:
        """

        :param rule:
        :param options:
        :return:
        """
        return self._route(rule, methods= ['POST'])

    def put(self, rule, **options) -> Any:
        """

        :param rule:
        :param options:
        :return:
        """
        return self._route(rule, methods= ['PUT'])

    def start(self) -> None:
        """

        """

        env                 = Env()
        self.config['ENV']  = env.getValue()

        # system runs
        self.run(
            host    = ac.IP
            , port  = ac.PORT
            , debug = not env.isProduction()
        )
