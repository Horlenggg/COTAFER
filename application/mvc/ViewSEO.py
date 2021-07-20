"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""
from typing import Any
import re
from application.constants import ASSET_CSS_PATH as UPLOAD_PATH, ASSET_JS_PATH as JS_PATH, ASSET_NAME


class ViewSEO:
    """

    """
    def __init__(self):
        """

        """
        # meta header
        self._metaDescription   = ''
        self._metaKeywords      = ''
        self._others            = {}

    def addOther(self, param: dict):
        """

        :param param:
        :return:
        """
        self._others.update(param)

    def getMetaDescription(self) -> str:
        """

        :param meta:
        :return:
        """
        return self._metaDescription

    def getMetaKeyword(self) -> str:
        """

        :param meta:
        :return:
        """
        return self._metaKeywords

    def setMetaDescription(self, meta: str) -> None:
        """

        :param meta:
        :return:
        """
        self._metaDescription   = meta

    def setMetaKeyword(self, meta: str) -> None:
        """

        :param meta:
        :return:
        """
        self._metaKeywords     = meta
