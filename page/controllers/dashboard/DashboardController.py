# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.dashboard.DashboardModel import DashboardModel


class DashboardController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=DashboardModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def dashboardGet(self) -> Any:
        
        try:
            self.log.info('DasboardController.dashboardGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['dashboard', '']
                    , 'client_module'   : '2_attendance'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='dashboard/dashboard'
            )

        except Exception as e:
            self.log.error(f'DasboardController.dashboardGet Exception ', str(e))
            return self.render(
                viewFile='dashboard/dashboard'
            )
