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
        self._param = {
            'active_module'     : ['dashboard', '']
            , 'client_module'   : '2_dashboard'
        }

    @authenticated
    def dashboardGet(self) -> Any:
        
        try:
            self.log.info('DashboardController.dashboardGet info')

            return self.render(
                viewFile='dashboard/dashboard'
            )

        except Exception as e:
            self.log.error(f'DashboardController.dashboardGet Exception ', str(e))
            return self.render(
                viewFile='dashboard/dashboard'
            )
