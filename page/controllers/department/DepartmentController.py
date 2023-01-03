# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.department.DepartmentModel import DepartmentModel


class DepartmentController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):
        """

        """
        super().__init__(hParam=headerParam, bParam=bodyParam, viewPath='department/')
        self.model          = DepartmentModel(self.getModelParam)
        
        # className
        self.__className    = self.__class__.__name__

    def departmentGet(self, data: dict={}) -> Any:
        try:
            self.__className = f'{self.__className}.departmentGet'

            # active link
            self.view.addData(
                params = {
                    'active_module'     : ['department', '']
                    , 'client_module'   : '10_department'
                    , 'base_module'     : 'department'
                }
            )

            if data.get('errorMessage'):
                self.view.addParam('errorMessage', data.get('errorMessage'))

            # view
            return self.view.render('/department/department'), self.status.OK

        except Exception as e:
            self.log.error(title=f'{self.__className} Ex', content=f'{e=}')
            # view
            return self.view.render('/department/department')

    def departmentAddGet(self) -> Any:

        try:
            self.__className = f'{self.__className}.departmentAddGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '10_department'
                    , 'base_module'     : 'department'
                }
            )

            # view
            return self.view.render('/department/departmentAdd')

        except Exception as e:
            self.log.error(f'DepartmentController.departmentAddGet Exception ', str(e))
            # view
            return self.view.render('/department/departmentAdd')

    def departmentEditGet(self) -> Any:
        try:
            self.__className = f'{self.__className}.departmentEditGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '10_department'
                    , 'base_module'     : 'department'
                }
            )

            # view
            return self.view.render('/department/departmentEdit')

        except Exception as e:
            self.log.error(f'DepartmentController.departmentEditGet Exception ', str(e))
            # view
            return self.view.render('/department/departmentEdit')

    def departmentViewGet(self) -> Any:
        
        try:
            self.__className = f'{self.__className}.departmentViewGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['department', '']
                    , 'client_module'   : '10_department'
                    , 'base_module'     : 'department'
                }
            )

            # view
            return self.view.render('/department/departmentView')

        except Exception as e:
            self.log.error(f'DepartmentController.departmentViewGet Exception ', str(e))
            # view
            return self.view.render('/department/departmentView')
