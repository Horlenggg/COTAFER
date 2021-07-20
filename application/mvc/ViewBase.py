"""
Author: masakokh
Year: 2020
Version: 1.3.0
Package: Framework
"""
import os
import datetime
import pathlib
import string
import random
from typing import Any
from flask import render_template, Response, request, make_response
from application.i18n.Language import languageIOS2 as languageISO2AvailableList, languageIOS2Default
from application.i18n.Translation import Translation as Ait
import application.constants
from application.mvc.ViewCookie import ViewCookie
from application.mvc.ViewSEO import ViewSEO
from library.MyLogger import MyLogger


class ViewBase:
    """

    """
    def __init__(self, cookie: ViewCookie):
        """

        :param cookie:
        """
        # private
        self.cookieItem     = cookie
        # logger
        self.log            = MyLogger()
        # filename without extension: ("home")
        self.fileName       = ''
        # variables or data
        self.params         = {}
        # external
        self.css            = []
        self.js             = []
        # seo
        self.seo            = ViewSEO()
        # page title
        self.title          = ''
        # language detection
        self.language       = self.__getLanguage()

    def __foundTemplateFile(self, fileName: str) -> bool:
        """

        """
        if os.path.isfile(fileName):
            return True
        else:
            return False

    def __getFileTimestamp(self, filename) -> str:
        """

        """
        #
        filename    = str(pathlib.Path().absolute()) + '/page' + filename

        #
        if os.path.exists(filename):
            modTimesinceEpoc    = os.path.getmtime(filename)

            return datetime.datetime.fromtimestamp(modTimesinceEpoc).strftime('%d%m%Y%S')

        return self.__randomStringDigits()

    def __getLanguage(self) -> str:
        """

        :return:
        """
        currentLanguageURL = str(request.url_rule).split('/')

        for iso2 in languageISO2AvailableList:
            if str(iso2) == currentLanguageURL[1]:
                return iso2
        return languageIOS2Default

    def __randomStringDigits(self, stringLength: int= 6) -> str:
        """
        :ref: https://pynative.com/python-generate-random-string/
        """

        return str(
            '' . join(
                random.choice(
                    string.ascii_letters + string.digits
                ) for i in range(stringLength)
            )
        )

    # def addCSS(self, fileName: str) -> None:
    #     """
    #
    #     :param fileName:
    #     :return:
    #     """
    #     self.css.append(fileName)
    #
    # def addJS(self, fileName: str) -> None:
    #     """
    #
    #     :param fileName:
    #     :return:
    #     """
    #     self.js.append(fileName)

    def addParam(self, key: str, value: str) -> None:
        """

        :param key:
        :param value:
        :return:
        """
        # if key not in self.params:
        #     self.params = {key: value}
        self.params[key]    = value

    def renderTemplate(self) -> Any:
        """

        :return:
        """
        # full filename
        # self.fileName   = application.constants.VIEW_PATH \
        #                   + self.fileName \
        #                   + application.constants.VIEW_FILE_TEMPLATE_EXT
        self.fileName = self.fileName \
                        + application.constants.VIEW_FILE_TEMPLATE_EXT
        # check existing file
        # add full path
        if os.path.exists(
                application.constants.VIEW_PATH \
                + self.fileName
        ):
            # return string of template
            pageResponse    = make_response(
                                 render_template(
                                    self.fileName
                                    , _         = self.translate()._
                                    , vdate     = self.__getFileTimestamp
                                    , vrand     = self.__randomStringDigits
                                    , params    = self.params
                                    , page      = {
                                        'title'     : self.title
                                        , 'css'     : self.css
                                        , 'js'      : self.js
                                        , 'lang'    : self.language
                                    }
                                    , seo       = {
                                        'keyword'   : self.seo.getMetaKeyword()
                                        , 'desc'    : self.seo.getMetaDescription()
                                    }
                                )
                            )

        # rend the default page
        else:
            # return string of default template
            pageResponse    = make_response(
                                render_template(
                                    application.constants.VIEW_DEFAULT_FILE
                                )
                            )

        # loop to get cookie item to add
        for kca, vca in self.cookieItem.getAddedList().items():
            pageResponse.set_cookie(kca, vca)

        # loop to get cookie item to delete
        for kcd in self.cookieItem.getDeletedList():
            pageResponse.set_cookie(kcd, '', max_age= 0)

        # return source as page response
        return pageResponse

    def translate(self) -> Ait:
        """

        """
        # translate function
        return Ait(
                    self.language
                )
