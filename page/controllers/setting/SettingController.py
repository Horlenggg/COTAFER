# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.setting.SettingModel import SettingModel


class SettingController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=SettingModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def settingGet(self) -> Any:
        
        try:
            self.log.info('SettingController.settingGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['setting', '']
                    , 'client_module'   : '2_attendance'
                    , 'base_module'     : ''
                }
            )

            return self.render(
                viewFile='setting/setting'
            )

        except Exception as e:
            self.log.error(f'SettingController.settingGet Exception ', str(e))
            return self.render(
                viewFile='setting/setting'
            )
