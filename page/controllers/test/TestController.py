# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.test.TestModel import TestModel


class TestController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=TestModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def testGonokaGet(self) -> Any:
        
        try:
            self.log.info('TestController.testGonokaGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', '']
                    , 'client_module'   : '6_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/gonoka'
            )

        except Exception as e:
            self.log.error(f'TestController.testGonokaGet Exception ', str(e))
            return self.render(
                viewFile='test/gonoka'
            )

    def testCotaferGet(self) -> Any:
        
        try:
            self.log.info('TestController.testCotaferGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', '']
                    , 'client_module'   : '6_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/cotafer'
            )

        except Exception as e:
            self.log.error(f'TestController.testCotaferGet Exception ', str(e))
            return self.render(
                viewFile='test/cotafer'
            )
