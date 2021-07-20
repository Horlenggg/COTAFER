from application.data.request.HeaderParam import HeaderParam
import json
from typing import Any
from flask import request
from application.data.request.Body import Body
from application.data.request.Header import Header

from library.MyLogger import MyLogger

log = MyLogger()


class Front:
    """

    """
    def __init__(self):
        """

        """
        try:

            self.header         = Header()
            self.body           = Body()

        except Exception as e:
            log.info(f'Front.__init__ - ex :: {str(e)}')
            pass
