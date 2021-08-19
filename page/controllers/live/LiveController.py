# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.live.LiveModel import LiveModel


class LiveController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=LiveModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def liveGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/live'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveGet Exception ', str(e))
            return self.render(
                viewFile='live/live'
            )

    def liveAddGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/liveAdd'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveAddGet Exception ', str(e))
            return self.render(
                viewFile='live/liveAdd'
            )

    def liveEditGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/liveEdit'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveEditGet Exception ', str(e))
            return self.render(
                viewFile='live/liveEdit'
            )

    def liveGonokaIosGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveGonokaIosGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'ios']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/gonokaIos'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveGonokaIosGet Exception ', str(e))
            return self.render(
                viewFile='live/gonokaIos'
            )

    def liveGonokaAndroidGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveGonokaAndroidGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'android']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/gonokaAndroid'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveGonokaAndroidGet Exception ', str(e))
            return self.render(
                viewFile='live/gonokaAndroid'
            )
    
    def liveGonokaWebGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveGonokaWebGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'web']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/gonokaWeb'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveGonokaWebGet Exception ', str(e))
            return self.render(
                viewFile='live/gonokaWeb'
            )

    def liveGonokaApiGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveGonokaApiGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'api']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/gonokaApi'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveGonokaApiGet Exception ', str(e))
            return self.render(
                viewFile='live/gonokaApi'
            )

    def liveCotaferIosGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveCotaferIosGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'ios']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/cotaferIos'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveCotaferIosGet Exception ', str(e))
            return self.render(
                viewFile='live/cotaferIos'
            )

    def liveCotaferAndroidGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveCotaferAndroidGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'android']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/cotaferAndroid'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveCotaferAndroidGet Exception ', str(e))
            return self.render(
                viewFile='live/cotaferAndroid'
            )

    def liveCotaferWebGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveCotaferWebGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'web']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/cotaferWeb'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveCotaferWebGet Exception ', str(e))
            return self.render(
                viewFile='live/cotaferWeb'
            )

    def liveCotaferApiGet(self) -> Any:
        
        try:
            self.log.info('LiveController.liveCotaferApiGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'api']
                    , 'client_module'   : '6_live'
                    , 'base_module'     : 'live'
                }
            )

            return self.render(
                viewFile='live/cotaferApi'
            )

        except Exception as e:
            self.log.error(f'LiveController.liveCotaferApiGet Exception ', str(e))
            return self.render(
                viewFile='live/cotaferApi'
            )