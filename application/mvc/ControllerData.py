"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from flask import request


class ControllerData:
    """

    """
    def __init__(self):
        """

        """
        # file
        self.file           = request.files
        # form
        self.form           = request.form
        # json
        self.json           = request.json
        # query string
        self.queryString    = request.args
        # string
        self.string         = request.data
        # values
        self.value          = request.values
