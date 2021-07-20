"""
Author: masakokh
Year: 2020
Version: 1.3.2
Package: Framework
"""
from application.data.request.BodyParam import BodyParam
from application.data.request.HeaderParam import HeaderParam


class ModelParam:
    """

    """

    def __init__(self):
        """

        """
        self.body           = BodyParam()
        self.header         = HeaderParam()