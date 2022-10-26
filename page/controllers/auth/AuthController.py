# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from logging import log
from typing import Any

from flask.globals import session

from page.models.auth.AuthModel import AuthModel
from library.MyController import MyController


class AuthController(MyController):
    """

    """

    def __init__(self, headerParam: dict, bodyParam: dict):
        """

        """
        super().__init__(hParam=headerParam, bParam=bodyParam, viewPath='auth/')
        self.model          = AuthModel(self.getModelParam)

    def __createSessions(self, data:dict):
        try:
            # check prev token
            if self.session.found(self.session.TOKEN) :
                self.__destroySessions()

            # set token
            self.session.set(self.session.TOKEN, data.get('login_token'))

        except Exception as e:
            self.log.error(f'AuthController Exception ', str(e))

    def __destroySessions(self) -> Any:
        try:
            if self.session.found(self.session.TOKEN):
                self.session.delete(self.session.TOKEN)

        except Exception as e:
            self.log.error(f'AuthController Exception ', str(e))

    def __index(self) -> Any:
        try:
            if self.session.found(self.session.TOKEN):
                return self.redirect('dashboardGet')
            
            return self.logout()

        except Exception as e:
            self.log.error(f'AuthContoller Exception ', str(e))
            return self.logout()
 
    def loginGet(self, data: dict={}) -> Any:
        try:

            # check if token is exist
            if self.session.found(self.session.TOKEN):
                return self.redirect('dashboardGet')

            # active link
            self.view.addData(
                params = 
                    {   'client_module'     : '1_login' }
            )

            if data.get('errorMessage'):
                self.view.addParam('errorMessage', data.get('errorMessage'))

            # view
            return self.view.render('auth/login'), self.status.OK

        except Exception as e:
            self.log.error(f'AuthController Exception ', str(e))
            return self.view.render('auth/login')

    def login(self) -> Any:
        try:
            # set params
            mParams = {
                "username"          : self.getClientBodyParam["username"]
                , "password"        : self.getClientBodyParam["password"]
            }
            self.log.info(f'AuthController.login, mParams: ', mParams)

            # call api
            self.model.login(mParams)
            
            if self.model.respond.hsc == self.status.OK and self.model.respond.isAccepted():
            # if True:
                # response
                res = {'login_token': self.model.respond.data.get('login_token')}

                # set token
                self.__createSessions(res)

                # index
                return self.__index()

            # else:
            return self.loginGet(data={'errorMessage': 'this is error message'})

        except Exception as e:
            self.log.error(f'AuthController Exception ', str(e))
            return self.redirect('loginGet')

    def logout(self) -> Any:
        try:
            if self.session.found(self.session.TOKEN):
                # set params
                mParams = {"login_token": self.session.get(self.session.TOKEN)}
                # call api
                self.model.logout(mParams)

                print(f'AuthController.logout login_token: ', mParams)

            # remove sessions
            self.__destroySessions()

            return self.redirect('loginGet')

        except Exception as e:
            self.log.error(f'AuthController Exception ', str(e))
            return self.redirect('loginGet')

    def forgetPasswordGet(self) -> Any:
        try:

            # active link
            self.view.addData(
                params={'client_module'   : '1_login'}
            )

            # add params

            # view
            return self.view.render('auth/forgetPassword'), self.status.OK

        except Exception as e:
            self.log.error(f'AuthController Exception ', str(e)) 
            return self.view.render('auth/forgetPassword')

    def newPasswordGet(self) -> Any:
        try:

            # active link
            self.view.addData(
                params={'client_module'   : '1_login'}
            )

            # add params

            # view
            return self.view.render('auth/newPassword'), self.status.OK

        except Exception as e:
            self.log.error(f'AuthController Exception ', str(e)) 
            return self.view.render('auth/newPassword')
