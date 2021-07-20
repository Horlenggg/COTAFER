"""
Author: masakokh
Year: 2020
Version: 2.1.0
Package: Framework
"""
# import json
# import re
# from application.data.request.HeaderParam import HeaderParam
# from application.mvc.ModelBase import ModelBase
from application.mvc.ModelRequest import ModelRequest
from library.RequestAPI import RequestAPI
from application.mvc.ModelResponseAPIInternal import ModelResponseAPIInternal as ModelResponseInternal

from library.MyLogger import MyLogger


class Model():
    """

    """

    def __init__(self):
        """

        """
        # logger
        self.log                = MyLogger()
        # request
        self.request            = ModelRequest()
        #
        self.hParams            = dict()
        # request api
        self.requestAPI         = RequestAPI()

    def __initHeader(self) -> None:
        """

        :return:
        """
        # self.requestHeader.browser  = req
        pass

    @property
    def respond(self) -> ModelResponseInternal:
        """
        :return:
        """
        return self.request._responseMRI

    def setPrefixEndpoint(self, prefixEndpoint: str) -> None:
        """
        :return:
        """
        self.request._prefixEndPoint    = prefixEndpoint

    def setHeaderParams(self, data: dict) -> None:
        """
        :return:
        """
        self.requestAPI._h  = data
        self.request.setHeader(data)
