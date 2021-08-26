# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.roadmap.RoadmapModel import RoadmapModel


class RoadmapController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=RoadmapModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def roadmapGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/roadmap'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/roadmap'
            )

    def roadmapAddGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/roadmapAdd'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapAddGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/roadmapAdd'
            )

    def roadmapEditGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/roadmapEdit'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapEditGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/roadmapEdit'
            )

    def roadmapGonokaArchiveGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapGonokaArchiveGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/gonokaArchive'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapGonokaArchiveGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/gonokaArchive'
            )

    def roadmapCotaferArchiveGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapCotaferArchiveGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['', '']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/cotaferArchive'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapCotaferArchiveGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/cotaferArchive'
            )


    def roadmapGonokaGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapGonokaGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', '']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/gonoka'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapGonokaGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/gonoka'
            )

    def roadmapGonokaIosGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapGonokaIosGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'ios']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/gonokaIos'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapGonokaIosGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/gonokaIos'
            )

    def roadmapGonokaAndroidGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapGonokaAndroidGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'android']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/gonokaAndroid'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapGonokaAndroidGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/gonokaAndroid'
            )

    def roadmapGonokaWebGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapGonokaWebGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'web']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/gonokaWeb'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapGonokaWebGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/gonokaWeb'
            )

    def roadmapGonokaApiGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapGonokaApiGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['gonoka', 'api']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/gonokaApi'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapGonokaApiGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/gonokaApi'
            )

    def roadmapCotaferGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapCotaferGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', '']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/cotafer'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapCotaferGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/cotafer'
            )

    def roadmapCotaferIosGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapCotaferIosGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'ios']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/cotaferIos'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapCotaferIosGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/cotaferIos'
            )

    def roadmapCotaferAndroidGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapCotaferAndroidGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'android']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/cotaferAndroid'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapCotaferAndroidGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/cotaferAndroid'
            )

    def roadmapCotaferWebGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapCotaferWebGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'web']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/cotaferWeb'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapCotaferWebGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/cotaferWeb'
            )

    def roadmapCotaferApiGet(self) -> Any:
        
        try:
            self.log.info('RoadmapController.roadmapCotaferApiGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['cotafer', 'api']
                    , 'client_module'   : '7_roadmap'
                    , 'base_module'     : 'roadmap'
                }
            )

            return self.render(
                viewFile='roadmap/cotaferApi'
            )

        except Exception as e:
            self.log.error(f'RoadmapController.roadmapCotaferApiGet Exception ', str(e))
            return self.render(
                viewFile='roadmap/cotaferApi'
            )
