"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from functools import wraps
from application.mvc.Controller import Controller, MyLogger

# declare
_log    = MyLogger()

def authenticated(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        try:

            # check token
            if not args[0].session.found(args[0].session.TOKEN):
                # log
                _log.error('authenticated', 'TOKEN')
                # redirect
                return Controller().redirect('authLogout')

        except Exception as e:
            _log.error(f'authenticated Exception', str(e))

        return f(*args, **kwargs)
    return wrapper

def authenticatedAjax(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        try:

            # check token
            if not args[0].session.found(args[0].session.TOKEN):
                # log
                _log.error('authenticated', 'TOKEN')
                # redirect
                return args[0].httpAjaxResponseTokenExpired()

        except Exception as e:
            _log.error(f'authenticated Exception', str(e))

        return f(*args, **kwargs)
    return wrapper
