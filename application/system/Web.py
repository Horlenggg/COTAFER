"""
Author: masakokh
Year: 2020
Version: 2.0.0
Package: Framework
"""
# built-in
import sys
import types
import typing as t
from typing import Any
# external
from flask import Flask, Response, Blueprint, json, request, make_response, send_from_directory as sfd
from flask.scaffold import _endpoint_from_view_func
from flask.app import setupmethod
# internal
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

	@setupmethod
	def add_url_rule(
			self,
			rule: str,
			endpoint: t.Optional[str] = None,
			view_func: t.Optional[t.Callable] = None,
			provide_automatic_options: t.Optional[bool] = None,
			**options: t.Any,
	) -> None:
		if endpoint is None:
			endpoint = _endpoint_from_view_func(view_func)  # type: ignore
		options["endpoint"] = endpoint
		methods = options.pop("methods", None)

		# if the methods are not given and the view_func object knows its
		# methods we can use that instead.  If neither exists, we go with
		# a tuple of only ``GET`` as default.
		if methods is None:
			methods = getattr(view_func, "methods", None) or ("GET",)
		if isinstance(methods, str):
			raise TypeError(
				"Allowed methods must be a list of strings, for"
				' example: @app.route(..., methods=["POST"])'
			)
		methods = {item.upper() for item in methods}

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
		rule.provide_automatic_options = provide_automatic_options  # type: ignore

		self.url_map.add(rule)
		if view_func is not None:
			old_func = self.view_functions.get(endpoint)
			if old_func is not None and old_func != view_func:
				raise AssertionError(
					"View function mapping is overwriting an existing"
					f" endpoint function: {endpoint}"
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

		:return:
		"""
		# environment
		env                 = Env()
		self.config['ENV']  = env.getValue()

		# system runs
		self.run(
			host    = ac.IP
			, port  = ac.PORT
			, debug = not Env().isProduction()
		)
