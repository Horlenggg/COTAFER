# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.company.CompanyModel import CompanyModel


class CompanyController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=CompanyModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def companyUsersGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyUsersGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/users'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyUsersGet Exception ', str(e))
            return self.render(
                viewFile='company/users'
            )

    def companyUsersAddGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyUsersAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/usersAdd'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyUsersAddGet Exception ', str(e))
            return self.render(
                viewFile='company/usersAdd'
            )

    def companyUsersEditGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyUsersEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/usersEdit'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyUsersEditGet Exception ', str(e))
            return self.render(
                viewFile='company/usersEdit'
            )

    def companyUsersViewGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyUsersViewGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/usersView'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyUsersViewGet Exception ', str(e))
            return self.render(
                viewFile='company/usersView'
            )

    def companyDepartmentGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyDepartmentGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/department'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyDepartmentGet Exception ', str(e))
            return self.render(
                viewFile='company/department'
            )

    def companyDepartmentAddGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyDepartmentAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/departmentAdd'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyDepartmentAddGet Exception ', str(e))
            return self.render(
                viewFile='company/departmentAdd'
            )

    def companyDepartmentEditGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyDepartmentEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/departmentEdit'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyDepartmentEditGet Exception ', str(e))
            return self.render(
                viewFile='company/departmentEdit'
            )

    def companyDepartmentViewGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyDepartmentViewGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/departmentView'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyDepartmentViewGet Exception ', str(e))
            return self.render(
                viewFile='company/departmentView'
            )

    def companyRolesGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyRolesGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['roles', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/roles'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyRolesGet Exception ', str(e))
            return self.render(
                viewFile='company/roles'
            )

    def companyRolesAddGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyRolesAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['roles', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/rolesAdd'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyRolesAddGet Exception ', str(e))
            return self.render(
                viewFile='company/rolesAdd'
            )

    def companyRolesEditGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyRolesEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['roles', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/rolesEdit'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyRolesEditGet Exception ', str(e))
            return self.render(
                viewFile='company/rolesEdit'
            )

    def companyRolesViewGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyRolesViewGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['roles', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/rolesView'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyRolesViewGet Exception ', str(e))
            return self.render(
                viewFile='company/rolesView'
            )

    def companyCompanyGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyCompanyGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/company'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyCompanyGet Exception ', str(e))
            return self.render(
                viewFile='company/company'
            )

    def companyCompanyAddGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyCompanyAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/companyAdd'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyCompanyAddGet Exception ', str(e))
            return self.render(
                viewFile='company/companyAdd'
            )

    def companyCompanyEditGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyCompanyEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/companyEdit'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyCompanyEditGet Exception ', str(e))
            return self.render(
                viewFile='company/companyEdit'
            )

    def companyCompanyViewGet(self) -> Any:
        
        try:
            self.log.info('CompanyController.companyCompanyViewGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            return self.render(
                viewFile='company/companyView'
            )

        except Exception as e:
            self.log.error(f'CompanyController.companyCompanyViewGet Exception ', str(e))
            return self.render(
                viewFile='company/companyView'
            )