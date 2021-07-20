"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""
import re
from application.data.request.ContentType import ContentType
from application.mvc.ModelParam import ModelParam
from library.MyLogger import MyLogger


class ModelBase:
    """

    """

    def __init__(self):
        """

        """
        self.contentType    = ContentType()
        self.params         = ModelParam()
