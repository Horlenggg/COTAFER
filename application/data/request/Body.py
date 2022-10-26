import json
from typing import Any
from flask import request
from library.MyLogger import MyLogger

log = MyLogger()


class Body:

    def __init__(self):
        pass

    def file(self) -> Any:

        # upload file
        return request.files

    def form(self) -> Any:

        # form
        return request.form

    def get(self) -> dict:

        # get query url
        return request.args

    def json(self) -> json:

        # json
        return request.json

    def jsonString(self) -> str:

        return request.get_json(force = True)

    def is_json(self, myjson):
        try:
            json_object = json.loads(myjson)
        except ValueError as e:
            return False
        except TypeError as e:
            return False
        return True
    
    @property
    def contentType(self) -> str:
        try:
            return (request.content_type or '')
        except Exception as e:
            return ''

    @property
    def param(self) -> dict:
        """
        """
        _items    =   {}
        try: 
            if not self.contentType.startswith('application/json') or self.is_json(request.json) is False: 
                _requestParam    = (self.form()).to_dict(flat=True)
            else:
                _requestParam    = self.json() 

            if self.contentType.startswith('application/json') and isinstance(_requestParam, dict) and _requestParam == {}:
                _requestParam       = self.json()

            if _requestParam is not None and isinstance(_requestParam, dict) is True:
                # multipart/form-data
                if self.contentType.startswith('multipart/form-data'):
                    __files = (self.file()).to_dict(flat=True) 
 
                    if (__files.get('file') is not None):
                        _requestParam.update(__files)

                for key, value in _requestParam.items():
                    _items.update({key:  value}) # if isinstance(value, list) else value})
 
        except Exception as e:
            log.error('Body.param Ex ::', str(e))
            print('Body.param Ex :: ', e)
            _items = {}

        return _items
