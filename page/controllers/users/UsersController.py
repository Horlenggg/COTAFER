# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.users.UsersModel import UsersModel

class UsersController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):
        """

        """
        super().__init__(hParam=headerParam, bParam=bodyParam, viewPath='users/')
        self.model          = UsersModel(self.getModelParam)
        # className
        self.__className    = self.__class__.__name__

    def usersControlGet(self, data: dict={}) -> Any:
        try:
            self.__className = f'{self.__className}.usersControlGet'
            
            # check if token is exist
            # if self.session.found(self.session.TOKEN):
            #     return self.redirect('dashboardGet')

            # active link
            self.view.addData(
                params = {
                    'active_module'     : ['users', '']
                    , 'client_module'   : '9_users'
                    , 'base_module'     : 'users'
                }
            )

            if data.get('errorMessage'):
                self.view.addParam('errorMessage', data.get('errorMessage'))

            # view
            return self.view.render('/users/users'), self.status.OK

        except Exception as e:
            self.log.error(title=f'{self.__className} Ex', content=f'{e=}')
            return self.view.render('/users/users')

    #
    # def controlUsersAddGet(self) -> Any:
        
    #     try:
    #         self.log.info('UsersController.controlUsersAddGet info')

    #         # active link
    #         self.view.addData(
    #             params={
    #                 'active_module'     : ['users', '']
    #                 , 'client_module'   : '9_users'
    #                 , 'base_module'     : 'users'
    #             }
    #         )

    #         return self.render(
    #             viewFile='users/usersAdd'
    #         )

    #     except Exception as e:
    #         self.log.error(f'UsersController.controlUsersAddGet Exception ', str(e))
    #         return self.render(
    #             viewFile='users/usersAdd'
    #         )

    # 
    # def controlUsersViewGet(self) -> Any:
        
    #     try:
    #         self.log.info('UsersController.controlUsersViewGet info')

    #         # active link
    #         self.view.addData(
    #             params={
    #                 'active_module'     : ['users', '']
    #                 , 'client_module'   : '9_users'
    #                 , 'base_module'     : 'users'
    #             }
    #         )

    #         return self.render(
    #             viewFile='/users/users'
    #         )

    #     except Exception as e:
    #         self.log.error(f'UsersController.controlUsersViewGet Exception ', str(e))
    #         return self.render(
    #             viewFile='/users/users'
    #         )
