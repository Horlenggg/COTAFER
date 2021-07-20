import json
from typing import Any
from flask import request
from application.data.request.HeaderParam import HeaderParam
from library.MyLogger import MyLogger

log = MyLogger()


class Header:
    """

    """
    def __init__(self):
        """

        """
        self.param = {}

        if request is not None:
            self.param = {
                'Os'        : request.user_agent.platform   or ''
                , 'Browser' : request.user_agent.browser    or ''
                , 'Host'    : request.headers['Host']       or ''
            }
