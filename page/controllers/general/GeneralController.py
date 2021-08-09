# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.general.GeneralModel import GeneralModel


class GeneralController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=GeneralModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def generalUsersGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalUsersGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/users'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalUsersGet Exception ', str(e))
            return self.render(
                viewFile='general/users'
            )

    def generalDepartmentGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalDepartmentGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/department'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalDepartmentGet Exception ', str(e))
            return self.render(
                viewFile='general/department'
            )

    def generalRolesGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalRolesGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['roles', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/roles'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalRolesGet Exception ', str(e))
            return self.render(
                viewFile='general/roles'
            )

    def generalCompanyGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalCompanyGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/company'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalCompanyGet Exception ', str(e))
            return self.render(
                viewFile='general/company'
            )