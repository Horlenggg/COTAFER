# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from logging import log
from typing import Any

from library.MyController import MyController, authenticated
from page.models.account.AccountModel import AccountModel


class AccountController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=AccountModel())

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

    def accountProfilePost(self) -> Any:
        try:
            self.log.info(self.data.form)
            
            # set params
            # mParams = {
            #     "firstName"       : self.getClientBodyParam["firstName"]
            #     , "lastName"      : self.getClientBodyParam["lastName"]
            #     , "email"         : self.getClientBodyParam["email"]
            #     , "phoneNumber"   : self.getClientBodyParam["phoneNumber"]
            #     , "department"    : self.getClientBodyParam["department"]
            #     , "password"      : self.getClientBodyParam["password"]
            # }

            # self.log.info(f'AccountController.accountProfilePost, info: ', mParams)

        except Exception as e:
            self.log.error(f'AccountController.accountProfilePost Exception ', str(e))

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

    def accountChangePasswordPost(self) -> Any:
        try:
            self.log.info(self.data.form)
            
            # set params
            # mParams = {
            #     "currentPassword"         : self.getClientBodyParam["currentPassword"]
            #     , "newPassword"           : self.getClientBodyParam["newPassword"]
            # }

            # self.log.info(f'AccountController.accountChangePasswordPost, info: ', mParams)

        except Exception as e:
            self.log.error(f'AccountController.accountChangePasswordPost Exception ', str(e))

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

    def accountAddPost(self) -> Any:
        try:
            self.log.info(self.data.form)
            
            # set params
            # mParams = {
            #     "userName"          : self.getClientBodyParam["userName"]
            #     , "email"           : self.getClientBodyParam["email"]
            #     , "password"        : self.getClientBodyParam["password"]
            #     , "application"     : self.getClientBodyParam["application"]
            #     , "link"            : self.getClientBodyParam["link"]
            #     , "permission"      : self.getClientBodyParam["permission"]
            # }

            # self.log.info(f'AccountController.accountAddPost, info: ', mParams)

        except Exception as e:
            self.log.error(f'AccountController.accountAddPost Exception ', str(e))

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

    def accountEditPost(self) -> Any:
        try:
            self.log.info(self.data.form)
            
            # set params
            # mParams = {
            #     "username"          : self.getClientBodyParam["username"]
            #     , "email"           : self.getClientBodyParam["email"]
            #     , "password"        : self.getClientBodyParam["password"]
            #     , "application"     : self.getClientBodyParam["application"]
            #     , "link"            : self.getClientBodyParam["link"]
            #     , "permission"      : self.getClientBodyParam["permission"]
            # }

            # self.log.info(f'AccountController.accountEditPost, info: ', mParams)

        except Exception as e:
            self.log.error(f'AccountController.accountEditPost Exception ', str(e))