# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any
import shutil
from time import time
from application.constants import ASSET_UPLOAD_REAL_PATH
from library.FileUpload import FileUpload
from library.MyController import MyController, authenticated
from page.models.document.DocumentModel import DocumentModel


class DocumentController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=DocumentModel())
        self.fileUpload = FileUpload()

    def documentGet(self) -> Any:
        
        try:
            self.log.info('DocumentController.documentGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['document', '']
                    , 'client_module'   : '5_document'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='document/document'
            )

        except Exception as e:
            self.log.error(f'DocumentController.documentGet Exception ', str(e))
            return self.render(
                viewFile='document/document'
            )

    def documentAddGet(self) -> Any:
        
        try:
            self.log.info('DocumentController.documentAddGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['document', '']
                    , 'client_module'   : '5_document'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='document/documentAdd'
            )

        except Exception as e:
            self.log.error(f'DocumentController.documentAddGet Exception ', str(e))
            return self.render(
                viewFile='document/documentAdd'
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
            self.log.error(f'DocumentController.documentAddPost Exception ', str(e))

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
                self.log.error(f'DocumentController api media request failed...')

        except Exception as e:
            self.log.error('DocumentController.documentAddFilePost', str(e))
            return self.httpAjaxResponse(status="failed")

    def documentReversionGet(self) -> Any:
        
        try:
            self.log.info('DocumentController.documentReversionGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['document', '']
                    , 'client_module'   : '5_document'
                    , 'base_module'     : 'home'
                }
            )

            return self.render(
                viewFile='document/documentReversion'
            )

        except Exception as e:
            self.log.error(f'DocumentController.documentReversionGet Exception ', str(e))
            return self.render(
                viewFile='document/documentReversion'
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
            self.log.error(f'DocumentController.documentReversionPost Exception ', str(e))

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
                self.log.error(f'DocumentController api media request failed...')

        except Exception as e:
            self.log.error('DocumentController.documentAddFilePost', str(e))
            return self.httpAjaxResponse(status="failed")
