import json
from typing import Any
from flask import request
from library.MyLogger import MyLogger

log = MyLogger()

class Body:
    """

    """
    def __init__(self):
        """

        """

    def file(self) -> Any:
        """

        """
        # upload file
        return request.files

    def form(self) -> Any:
        """

        """
        # form
        return request.form

    def get(self) -> dict:
        """

        """
        # get query url
        return request.args

    def json(self) -> json:
        """

        """
        # json
        return request.json

    def jsonString(self) -> str:
        """

        """
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
    def param(self) -> dict:
        """
        """
        _items    =   {}
        try:
            # print('is-json::%',self.is_json(request.get_json()))
            if self.is_json(request.json) is False:
                _requestParam    = self.form()
            else:
                _requestParam    = self.json()

            if isinstance(_requestParam, dict) and _requestParam == {}:
                _requestParam       = self.json()

            if _requestParam is not None and isinstance(_requestParam, dict) is True:

                try:
                    _requestParam = _requestParam.to_dict(flat=False)
                    for key, value in _requestParam.items():
                        if key.find('-s', len(key)-2, len(key)) == -1:
                            _items.update({key:  value[0]})
                        else:
                            _items.update({key:  value})
                except Exception as ne:
                    for key, value in _requestParam.items():
                        _items.update({key:  value}) # if isinstance(value, list) else value})
        except Exception as e:
            # print(str(e))
            _items = {}

        return _items
