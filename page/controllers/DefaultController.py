# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from typing import Any
import json
from library.MyController import MyController


class DefaultController(MyController):
    """

    """

    def __init__(self, headerParam:dict, bodyParam:dict):
        """

        """
        #
        super().__init__(hParam=headerParam, bParam=bodyParam)

    def getJsTranslation(self) -> Any:
        """

        :return:
        """
        js      = self.view.getTranslation().get('js')
        both    = self.view.getTranslation().get('both')

        # validate both, but, never test js object
        if both:
            # update
            both.update(js)

        return 'const trans = JSON.parse(`' + json.dumps(both) + '`);' \
            , self.status.OK
