# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.google.GoogleModel import GoogleModel


class GoogleController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=GoogleModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def googleGet(self) -> Any:
        
        try:
            self.log.info('GoogleController.googleGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['google', '']
                    , 'client_module'   : '4_account'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='google/google'
            )

        except Exception as e:
            self.log.error(f'GoogleController.googleGet Exception ', str(e))
            return self.render(
                viewFile='google/google'
            )
