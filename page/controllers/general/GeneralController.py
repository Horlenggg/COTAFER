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

    def generalUsersAddGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalUsersAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/usersAdd'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalUsersAddGet Exception ', str(e))
            return self.render(
                viewFile='general/usersAdd'
            )

    def generalUsersEditGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalUsersEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/usersEdit'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalUsersEditGet Exception ', str(e))
            return self.render(
                viewFile='general/usersEdit'
            )

    def generalUsersViewGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalUsersViewGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/usersView'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalUsersViewGet Exception ', str(e))
            return self.render(
                viewFile='general/usersView'
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

    def generalDepartmentAddGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalDepartmentAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/departmentAdd'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalDepartmentAddGet Exception ', str(e))
            return self.render(
                viewFile='general/departmentAdd'
            )

    def generalDepartmentEditGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalDepartmentEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/departmentEdit'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalDepartmentEditGet Exception ', str(e))
            return self.render(
                viewFile='general/departmentEdit'
            )

    def generalDepartmentViewGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalDepartmentViewGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/departmentView'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalDepartmentViewGet Exception ', str(e))
            return self.render(
                viewFile='general/departmentView'
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

    def generalCompanyAddGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalCompanyAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/companyAdd'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalCompanyAddGet Exception ', str(e))
            return self.render(
                viewFile='general/companyAdd'
            )

    def generalCompanyEditGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalCompanyEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/companyEdit'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalCompanyEditGet Exception ', str(e))
            return self.render(
                viewFile='general/companyEdit'
            )

    def generalCompanyViewGet(self) -> Any:
        
        try:
            self.log.info('GeneralController.generalCompanyViewGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_general'
                    , 'base_module'     : 'general'
                }
            )

            return self.render(
                viewFile='general/companyView'
            )

        except Exception as e:
            self.log.error(f'GeneralController.generalCompanyViewGet Exception ', str(e))
            return self.render(
                viewFile='general/companyView'
            )