# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from logging import log
from typing import Any
import shutil
from time import time
from application.constants import ASSET_UPLOAD_REAL_PATH
from library.FileUpload import FileUpload
from library.MyController import MyController, authenticated
from page.models.account.AccountModel import AccountModel


class AccountController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=AccountModel())
        self.fileUpload = FileUpload()

    def dashboardGet(self) -> Any:
        
        try:
            self.log.info('AccountController.dashboardGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['dashboard', '']
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='account/dashboard'
            )

        except Exception as e:
            self.log.error(f'AccountController.dashboardGet Exception ', str(e))
            return self.render(
                viewFile='account/dashboard'
            )

    def accountGet(self) -> Any:
        
        try:
            self.log.info('AccountController.accountGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['account', '']
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
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
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
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

    def accountProfileUpload(self) -> Any:
        try:
            # data file
            files = self.data.file.getlist('file')
            if len(files) <= 0:
                return self.httpAjaxResponse(status="failed")

            __fileName = []
            __allowExtensions = ['png', 'jpg', 'jpeg']
            __targetPath = int(self.session.get(self.session.ACCOUNT_ID))

            for file in files:
                if file and ('.' in file.filename and file.filename.rsplit('.', 1)[1].lower() in __allowExtensions):
                    # change filename before saving
                    # unique number for photo
                    _uuid = str(int(time() * 10000000))
                    moduleName = '/'
                    _filename = 'pf_' + _uuid + '_.' + file.filename.split('.')[-1]

                    # save file
                    _isUpload = self.fileUpload.image(file, __targetPath, __allowExtensions, moduleName, _filename)

                    if _isUpload:
                        __fileName.append(_filename)
                        self.log.info(str(__fileName))

                else:
                    return self.httpAjaxResponse(status="failed")
            
            self.session.delete('pf_photos')
            self.session.setDict('pf_photos', {'info': __fileName})

            # request params
            _requestParams = {
                'file'          : self.session.getDict('pf_photos')['info']
                , 'path'        : int(self.session.get(self.session.ACCOUNT_ID)) or 0
                , 'module_id'   : int(self.session.get(self.session.ACCOUNT_ID))
                , 'platform'    : 'web'
            }

            self.log.info(_requestParams)

            __mediaAPIRes = self.mediaAPI.postJson('/profile/upload', _requestParams).status_code
            moduleName = '/'

            if __mediaAPIRes == 200:
                shutil.rmtree(ASSET_UPLOAD_REAL_PATH + '/' + str(self.session.get(self.session.ACCOUNT_ID)))
            else:
                self.log.error(f'AccountController api media request failed...')

        except Exception as e:
            self.log.error('AccountController.accountProfileUpload', str(e))
            return self.httpAjaxResponse(status="failed")

    def accountChangePasswordGet(self) -> Any:
        
        try:
            self.log.info('AccountController.accountChangePasswordGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['account', '']
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
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
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
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
            #     "username"          : self.getClientBodyParam["username"]
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
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
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

    def documentGet(self) -> Any:
        
        try:
            self.log.info('AccountController.documentGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['document', '']
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='account/document'
            )

        except Exception as e:
            self.log.error(f'AccountController.documentGet Exception ', str(e))
            return self.render(
                viewFile='account/document'
            )

    def documentAddGet(self) -> Any:
        
        try:
            self.log.info('AccountController.documentAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['document', '']
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='account/documentAdd'
            )

        except Exception as e:
            self.log.error(f'AccountController.documentAddGet Exception ', str(e))
            return self.render(
                viewFile='account/documentAdd'
            )

    def documentAddPost(self) -> Any:
        try:

            # set params
            mParams = {
                "title"          : self.getClientBodyParam["title"]
                , "fileName"     : self.getClientBodyParam["fileName"]
                , "category"     : self.getClientBodyParam["category"]
                , "department"   : self.getClientBodyParam["department"]
                , "file"         : self.session.getDict('pdf_document')['info'][0]
            }

            self.log.info(f'AccountController.accountAddPost, info: ', mParams)

        except Exception as e:
            self.log.error(f'AccountController.documentAddPost Exception ', str(e))

    def documentAddFilePost(self) -> Any:
        try:
            # data file
            files = self.data.file.getlist('file')
            if len(files) <= 0:
                return self.httpAjaxResponse(status="failed")

            __fileName = []
            __allowExtensions = ['pdf']
            __targetPath = int(self.session.get(self.session.ACCOUNT_ID))

            for file in files:
                if file and ('.' in file.filename and file.filename.rsplit('.', 1)[1].lower() in __allowExtensions):
                    # change filename before saving
                    # unique number for photo
                    _uuid = str(int(time() * 10000000))
                    moduleName = '/document'
                    _filename = 'pdf_' + _uuid + '_.' + file.filename.split('.')[-1]

                    # save file
                    _isUpload = self.fileUpload.image(file, __targetPath, __allowExtensions, moduleName, _filename)

                    if _isUpload:
                        __fileName.append(_filename)

                else:
                    return self.httpAjaxResponse(status="failed")
            
            self.session.delete('pdf_document')
            self.session.setDict('pdf_document', {'info': __fileName})

            # request params
            _requestParams = {
                'file'          : self.session.getDict('pdf_document')['info']
                , 'path'        : int(self.session.get(self.session.ACCOUNT_ID)) or 0
                , 'module_id'   : int(self.session.get(self.session.ACCOUNT_ID))
                , 'platform'    : 'web'
            }

            __mediaAPIRes = self.mediaAPI.postJson('/profile/upload', _requestParams).status_code
            moduleName = '/document'

            if __mediaAPIRes == 200:
                shutil.rmtree(ASSET_UPLOAD_REAL_PATH + moduleName + '/' + str(self.session.get(self.session.ACCOUNT_ID)))
            else:
                self.log.error(f'AccountController api media request failed...')

        except Exception as e:
            self.log.error('AccountController.documentAddFilePost', str(e))
            return self.httpAjaxResponse(status="failed")

    def documentReversionGet(self) -> Any:
        
        try:
            self.log.info('AccountController.documentReversionGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['document', '']
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='account/documentReversion'
            )

        except Exception as e:
            self.log.error(f'AccountController.documentReversionGet Exception ', str(e))
            return self.render(
                viewFile='account/documentReversion'
            )

    def documentReversionPost(self) -> Any:
        try:
            
            # set params
            mParams = {
                "title"          : self.getClientBodyParam["title"]
                , "fileName"     : self.getClientBodyParam["fileName"]
                , "category"     : self.getClientBodyParam["category"]
                , "department"   : self.getClientBodyParam["department"]
                , "version"      : self.getClientBodyParam["version"]
                , "file"         : self.session.getDict('pdf_document')['info'][0]
            }

            self.log.info(f'AccountController.documentReversionPost, info: ', mParams)

        except Exception as e:
            self.log.error(f'AccountController.documentReversionPost Exception ', str(e))

    def documentReversionFilePost(self) -> Any:
        try:
            # data file
            files = self.data.file.getlist('file')
            if len(files) <= 0:
                return self.httpAjaxResponse(status="failed")

            __fileName = []
            __allowExtensions = ['pdf']
            __targetPath = int(self.session.get(self.session.ACCOUNT_ID))

            for file in files:
                if file and ('.' in file.filename and file.filename.rsplit('.', 1)[1].lower() in __allowExtensions):
                    # change filename before saving
                    # unique number for photo
                    _uuid = str(int(time() * 10000000))
                    moduleName = '/document'
                    _filename = 'pdf_' + _uuid + '_.' + file.filename.split('.')[-1]

                    # save file
                    _isUpload = self.fileUpload.image(file, __targetPath, __allowExtensions, moduleName, _filename)

                    if _isUpload:
                        __fileName.append(_filename)

                else:
                    return self.httpAjaxResponse(status="failed")
            
            self.session.delete('pdf_document')
            self.session.setDict('pdf_document', {'info': __fileName})

            # request params
            _requestParams = {
                'file'          : self.session.getDict('pdf_document')['info']
                , 'path'        : int(self.session.get(self.session.ACCOUNT_ID)) or 0
                , 'module_id'   : int(self.session.get(self.session.ACCOUNT_ID))
                , 'platform'    : 'web'
            }

            __mediaAPIRes = self.mediaAPI.postJson('/profile/upload', _requestParams).status_code
            moduleName = '/document'

            if __mediaAPIRes == 200:
                shutil.rmtree(ASSET_UPLOAD_REAL_PATH + moduleName + '/' + str(self.session.get(self.session.ACCOUNT_ID)))
            else:
                self.log.error(f'AccountController api media request failed...')

        except Exception as e:
            self.log.error('AccountController.documentAddFilePost', str(e))
            return self.httpAjaxResponse(status="failed")

    def googleGet(self) -> Any:
        
        try:
            self.log.info('AccountController.googleGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['google', '']
                    , 'client_module'   : '2_account'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='account/google'
            )

        except Exception as e:
            self.log.error(f'AccountController.googleGet Exception ', str(e))
            return self.render(
                viewFile='account/google'
            )
