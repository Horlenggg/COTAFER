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
            # view
            return self.view.render('/users/users')

    def usersControlAddGet(self) -> Any:

        try:
            self.__className = f'{self.__className}.usersControlAddGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '9_users'
                    , 'base_module'     : 'users'
                }
            )

            # view
            return self.view.render('/users/usersAdd')

        except Exception as e:
            self.log.error(f'UsersController.usersControlAddGet Exception ', str(e))
            # view
            return self.view.render('/users/usersAdd')


    def usersControlEditGet(self) -> Any:
        try:
            self.__className = f'{self.__className}.usersControlEditGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '9_users'
                    , 'base_module'     : 'users'
                }
            )

            # view
            return self.view.render('/users/usersEdit')

        except Exception as e:
            self.log.error(f'UsersController.usersControlEditGet Exception ', str(e))
            # view
            return self.view.render('/users/usersEdit')


    def usersControlViewGet(self) -> Any:
        
        try:
            self.__className = f'{self.__className}.usersControlViewGet'

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['users', '']
                    , 'client_module'   : '3_users'
                    , 'base_module'     : 'users'
                }
            )

            # view
            return self.view.render('/users/usersView')

        except Exception as e:
            self.log.error(f'UsersController.usersControlViewGet Exception ', str(e))
            # view
            return self.view.render('/users/usersView')
