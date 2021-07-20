"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
from typing import Any
from application.mvc.ModelResponseAPIInternal import ModelResponseAPIInternal


class ViewModel:
    """

    """
    def __init__(self, response: ModelResponseAPIInternal):
        """

        """
        self.data   = ModelResponseAPIInternal.data
        self.status = ModelResponseAPIInternal.status
        self.errNum = ModelResponseAPIInternal.error
