"""
Author: masakokh
Year: 2020
Version: 1.1.2
"""
from typing import Any
from werkzeug.utils import secure_filename
from flask import redirect, url_for, Response, make_response, redirect
from application.mvc.ControllerData import ControllerData
from application.mvc.Model import Model
from application.mvc.View import View
from application.data.HtmlStatusCode import HtmlStatusCode
from library.MyLogger import MyLogger


class Controller:
    """

    """

    def __init__(self, logColor=False):
        self.log        = MyLogger(logColor)

        self.model      = Model()
        self.view       = View()
        # status
        self.status     = HtmlStatusCode()
        # language
        self.language   = self.view.getLanguage()
        # request data
        self.data       = ControllerData()

        self.__request  = {}

    @property
    def getModelParam(self) -> dict:
        return self.__request

    def getModel(self) -> Model:
        """

        """
        return self.model

    def updateModelParam(self, obj: dict) -> None:
        self.__request.update(obj)
        # self.model.setParam(self.getModelParam)

    def redirect(self, endpoint: str, **kwargs) -> Response:
        """

        :param endpoint
        :return:
        """
        return redirect(
            url_for(
                endpoint
                , **kwargs
            )
        )

    def renderView(self) -> None:
        """

        :return:
        """
        self.view.render()

    def setModel(self, model: Model) -> Model:
        """

        :param model:
        :return:
        """
        self.model  = model

    def scanFile(self, filename: str) -> str:
        """

        :return:
        """
        return secure_filename(filename)

    def setView(self, fileName: str) -> None:
        """

        :param fileName:
        :return:
        """
        self.view.setViewFile(fileName)
