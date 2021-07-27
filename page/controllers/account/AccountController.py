# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.account.AccountModel import AccountModel


class AccountController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=AccountModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def accountGet(self) -> Any:
        
        try:
            self.log.info('AccountController.accountGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['account', '']
                    , 'client_module'   : '4_account'
                    , 'base_module'     : ''
                }
            )

            return self.render(
                viewFile='account/account'
            )

        except Exception as e:
            self.log.error(f'AccountController.accountGet Exception ', str(e))
            return self.render(
                viewFile='account/account'
            )

    def accountProfileGet(self) -> Any:
        
        try:
            self.log.info('AccountController.accountProfileGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['account', '']
                    , 'client_module'   : '4_account'
                    , 'base_module'     : ''
                }
            )

            return self.render(
                viewFile='account/accountProfile'
            )

        except Exception as e:
            self.log.error(f'AccountController.accountProfileGet Exception ', str(e))
            return self.render(
                viewFile='account/accountProfile'
            )

    def accountChangePasswordGet(self) -> Any:
        
        try:
            self.log.info('AccountController.accountChangePasswordGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['account', '']
                    , 'client_module'   : '4_account'
                    , 'base_module'     : ''
                }
            )

            return self.render(
                viewFile='account/accountChangePassword'
            )

        except Exception as e:
            self.log.error(f'AccountController.accountChangePasswordGet Exception ', str(e))
            return self.render(
                viewFile='account/accountChangePassword'
            )

    def accountAddGet(self) -> Any:
        
        try:
            self.log.info('AccountController.accountAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['account', '']
                    , 'client_module'   : '4_account'
                    , 'base_module'     : ''
                }
            )

            return self.render(
                viewFile='account/accountAdd'
            )

        except Exception as e:
            self.log.error(f'AccountController.accountAddGet Exception ', str(e))
            return self.render(
                viewFile='account/accountAdd'
            )

    def accountEditGet(self) -> Any:
        
        try:
            self.log.info('AccountController.accountEditGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['account', '']
                    , 'client_module'   : '4_account'
                    , 'base_module'     : ''
                }
            )

            return self.render(
                viewFile='account/accountEdit'
            )

        except Exception as e:
            self.log.error(f'AccountController.accountEditGet Exception ', str(e))
            return self.render(
                viewFile='account/accountEdit'
            )