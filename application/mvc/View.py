"""
Author: masakokh
Year: 2020
Version: 1.2.4
Package: Framework
"""
from typing import Any
import re
from application.constants import ASSET_CSS_PATH, ASSET_JS_PATH, ASSET_NAME
from application.mvc.ViewBase import ViewBase
from application.mvc.ViewCookie import ViewCookie
from application.mvc.ViewSEO import ViewSEO

class View:
    """

    """
    def __init__(self):
        """

        """
        # cookie
        self.__cookie   = ViewCookie()
        # basic view
        self.__view     = ViewBase(self.__cookie)

        self.viewTheme = 'views/'

    def __isInternalLink(self, link: str) -> bool:
        """

        :param endpoint:
        :return:
        """
        # https or http or ftp or ... ://
        # if re.match(r'https://', link, re.M | re.I) or re.match(r'http://', link, re.M | re.I):
        if len(re.findall(r"\w+://*", link)) > 0:
            return False
        else:
            return True

    def addData(self, params: dict) -> None:
        """
        Alias method of addParams
        :param params:
        :return:
        """
        self.addParams(params)

    def addParam(self, key: str, value: str) -> None:
        """

        :param key:
        :param value:
        :return:
        """
        self.__view.addParam(key, value)

    def addParams(self, params: dict) -> None:
        """

        :param params:
        :return:
        """
        self.__view.params.update(params)

    @property
    def cookie(self) -> ViewCookie:
        """

        :return:
        """
        return self.__cookie

    def getLanguage(self) -> str:
        """

        :return:
        """
        return self.__view.language

    def getTranslation(self) -> dict:
        """

        :return:
        """
        return self.__view.translate().getContent()

    def render(self, fileName: str= None, data: dict= None, status: int= None) -> Any:
        """

        :return:
        """
        # set data
        if data:
            self.addParams(data)

        # set view file
        if fileName:
            self.setViewFile(fileName)

        # seo
        self.__view.metaDescription = self.seo.getMetaDescription()
        self.__view.metaKeywords    = self.seo.getMetaKeyword()

        # return
        return self.__view.renderTemplate()

    @property
    def seo(self) -> ViewSEO:
        """

        :return:
        """
        return self.__view.seo

    def setTitle(self, title: str) -> None:
        """

        :param title:
        :return:
        """
        self.__view.title   = title

    def setViewFile(self, fileName: str) -> None:
        """

        :param fileName:
        :return:
        """
        if fileName:
            self.__view.fileName    = self.viewTheme + fileName
