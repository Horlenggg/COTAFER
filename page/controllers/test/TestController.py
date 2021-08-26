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

    def testGet(self) -> Any:
        
        try:
            self.log.info('TestController.testGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/test'
            )

        except Exception as e:
            self.log.error(f'TestController.testGet Exception ', str(e))
            return self.render(
                viewFile='test/test'
            )

    def testGonokaGet(self) -> Any:
        
        try:
            self.log.info('TestController.testGonokaGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', '']
                    , 'client_module'   : '5_test'
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
                    , 'client_module'   : '5_test'
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

    def testGonokaArchiveGet(self) -> Any:
        
        try:
            self.log.info('TestController.testGonokaArchiveGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', '']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/gonokaArchive'
            )

        except Exception as e:
            self.log.error(f'TestController.testGonokaArchiveGet Exception ', str(e))
            return self.render(
                viewFile='test/gonokaArchive'
            )

    def testCotaferArchiveGet(self) -> Any:
        
        try:
            self.log.info('TestController.testCotaferArchiveGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', '']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/cotaferArchive'
            )

        except Exception as e:
            self.log.error(f'TestController.testCotaferArchiveGet Exception ', str(e))
            return self.render(
                viewFile='test/cotaferArchive'
            )

    def testAddGet(self) -> Any:
        
        try:
            self.log.info('TestController.testAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/testAdd'
            )

        except Exception as e:
            self.log.error(f'TestController.testAddGet Exception ', str(e))
            return self.render(
                viewFile='test/testAdd'
            )

    def testEditGet(self) -> Any:
        
        try:
            self.log.info('TestController.testEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/testEdit'
            )

        except Exception as e:
            self.log.error(f'TestController.testEditGet Exception ', str(e))
            return self.render(
                viewFile='test/testEdit'
            )

    def testGonokaIosGet(self) -> Any:
        
        try:
            self.log.info('TestController.testGonokaIosGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'ios']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/gonokaIos'
            )

        except Exception as e:
            self.log.error(f'TestController.testGonokaIosGet Exception ', str(e))
            return self.render(
                viewFile='test/gonokaIos'
            )

    def testGonokaAndroidGet(self) -> Any:
        
        try:
            self.log.info('TestController.testGonokaAndroidGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'android']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/gonokaAndroid'
            )

        except Exception as e:
            self.log.error(f'TestController.testGonokaAndroidGet Exception ', str(e))
            return self.render(
                viewFile='test/gonokaAndroid'
            )

    def testGonokaWebGet(self) -> Any:
        
        try:
            self.log.info('TestController.testGonokaWebGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'web']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/gonokaWeb'
            )

        except Exception as e:
            self.log.error(f'TestController.testGonokaWebGet Exception ', str(e))
            return self.render(
                viewFile='test/gonokaWeb'
            )

    def testGonokaApiGet(self) -> Any:
        
        try:
            self.log.info('TestController.testGonokaApiGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'api']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/gonokaApi'
            )

        except Exception as e:
            self.log.error(f'TestController.testGonokaApiGet Exception ', str(e))
            return self.render(
                viewFile='test/gonokaApi'
            )

    def testCotaferIosGet(self) -> Any:
        
        try:
            self.log.info('TestController.testCotaferIosGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'ios']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/cotaferIos'
            )

        except Exception as e:
            self.log.error(f'TestController.testCotaferIosGet Exception ', str(e))
            return self.render(
                viewFile='test/cotaferIos'
            )

    def testCotaferAndroidGet(self) -> Any:
        
        try:
            self.log.info('TestController.testCotaferAndroidGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'android']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/cotaferAndroid'
            )

        except Exception as e:
            self.log.error(f'TestController.testCotaferAndroidGet Exception ', str(e))
            return self.render(
                viewFile='test/cotaferAndroid'
            )

    def testCotaferWebGet(self) -> Any:
        
        try:
            self.log.info('TestController.testCotaferWebGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'web']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/cotaferWeb'
            )

        except Exception as e:
            self.log.error(f'TestController.testCotaferWebGet Exception ', str(e))
            return self.render(
                viewFile='test/cotaferWeb'
            )

    def testCotaferApiGet(self) -> Any:
        
        try:
            self.log.info('TestController.testCotaferApiGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'api']
                    , 'client_module'   : '5_test'
                    , 'base_module'     : 'test'
                }
            )

            return self.render(
                viewFile='test/cotaferApi'
            )

        except Exception as e:
            self.log.error(f'TestController.testCotaferApiGet Exception ', str(e))
            return self.render(
                viewFile='test/cotaferApi'
            )