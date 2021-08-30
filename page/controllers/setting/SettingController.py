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
from page.models.setting.SettingModel import SettingModel


class SettingController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=SettingModel())
        self.fileUpload = FileUpload()

    def settingProfileGet(self) -> Any:
        
        try:
            self.log.info('SettingController.settingProfileGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['profile', '']
                    , 'client_module'   : '8_setting'
                    , 'base_module'     : 'setting'
                }
            )

            return self.render(
                viewFile='setting/profile'
            )

        except Exception as e:
            self.log.error(f'SettingController.settingProfileGet Exception ', str(e))
            return self.render(
                viewFile='setting/profile'
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

            # self.log.info(f'SettingController.accountProfilePost, info: ', mParams)

        except Exception as e:
            self.log.error(f'SettingController.accountProfilePost Exception ', str(e))

    def settingProfileUpload(self) -> Any:
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
                self.log.error(f'SettingController api media request failed...')

        except Exception as e:
            self.log.error('SettingController.settingProfileUpload', str(e))
            return self.httpAjaxResponse(status="failed")

    def settingChangePasswordGet(self) -> Any:
        
        try:
            self.log.info('SettingController.settingChangePasswordGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['change-pass', '']
                    , 'client_module'   : '8_setting'
                    , 'base_module'     : 'setting'
                }
            )

            return self.render(
                viewFile='setting/changePassword'
            )

        except Exception as e:
            self.log.error(f'SettingController.settingChangePasswordGet Exception ', str(e))
            return self.render(
                viewFile='setting/changePassword'
            )

    def settingChangePasswordPost(self) -> Any:
        try:
            self.log.info(self.data.form)
            
            # set params
            # mParams = {
            #     "currentPassword"         : self.getClientBodyParam["currentPassword"]
            #     , "newPassword"           : self.getClientBodyParam["newPassword"]
            # }

            # self.log.info(f'SettingController.settingChangePasswordPost, info: ', mParams)

        except Exception as e:
            self.log.error(f'SettingController.settingChangePasswordPost Exception ', str(e))
