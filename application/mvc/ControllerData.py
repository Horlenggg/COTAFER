"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from flask import request


class ControllerData:

    def __init__(self):

        # file
        self.file           = request.files
        # form
        self.form           = request.form
        # json
        self.json = {}
        try:
            self.json           = request.json or {}
        except Exception as e:
            pass
        
        # query string
        self.queryString    = request.args
        # string
        self.string         = request.data
        # values
        self.value          = request.values
