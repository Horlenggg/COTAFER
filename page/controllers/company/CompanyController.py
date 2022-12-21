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
        """

        """
        super().__init__(hParam=headerParam, bParam=bodyParam, viewPath='company/')
        self.model          = CompanyModel(self.getModelParam)
        # className
        self.__className    = self.__class__.__name__

    def companyUsersGet(self, data: dict={}) -> Any:
        try:
            self.__className = f'{self.__className}.companyUsersGet'
            
            # check if token is exist
            # if self.session.found(self.session.TOKEN):
            #     return self.redirect('dashboardGet')

            # active link
            self.view.addData(
                params = {
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            if data.get('errorMessage'):
                self.view.addParam('errorMessage', data.get('errorMessage'))

            # view
            return self.view.render('company/users'), self.status.OK

        except Exception as e:
            self.log.error(title=f'{self.__className} Ex', content=f'{e=}')
            return self.view.render('company/users')

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

    def companyCompanyGet(self, data: dict={}) -> Any:
        
        try:
            self.__className = f'{self.__className}.companyCompanyGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            if data.get('errorMessage'):
                self.view.addParam('errorMessage', data.get('errorMessage'))

            # view
            return self.view.render('/company/company')

        except Exception as e:
            self.log.error(title=f'{self.__className} Ex', content=f'{e=}')
            # view
            return self.view.render('/company/company')

    def companyCompanyAddGet(self, data: dict={}) -> Any:
        
        try:
            self.__className = f'{self.__className}.companyCompanyAddGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            if data.get('errorMessage'):
                self.view.addParam('errorMessage', data.get('errorMessage'))

            # view
            return self.view.render('/company/companyAdd')

        except Exception as e:
            self.log.error(title=f'{self.__className} Ex', content=f'{e=}')
            # view
            return self.view.render('/company/companyAdd')

    def companyCompanyEditGet(self, data: dict={}) -> Any:
        
        try:
            self.__className = f'{self.__className}.companyCompanyEditGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            if data.get('errorMessage'):
                self.view.addParam('errorMessage', data.get('errorMessage'))

            # view
            return self.view.render('/company/companyEdit')

        except Exception as e:
            self.log.error(title=f'{self.__className} Ex', content=f'{e=}')
            # view
            return self.view.render('/company/companyEdit')

    def companyCompanyViewGet(self, data: dict={}) -> Any:
        
        try:
            self.__className = f'{self.__className}.companyCompanyViewGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['company', '']
                    , 'client_module'   : '3_company'
                    , 'base_module'     : 'company'
                }
            )

            if data.get('errorMessage'):
                self.view.addParam('errorMessage', data.get('errorMessage'))

            # view
            return self.view.render('/company/companyView')

        except Exception as e:
            self.log.error(title=f'{self.__className} Ex', content=f'{e=}')
            # view
            return self.view.render('/company/companyView')
