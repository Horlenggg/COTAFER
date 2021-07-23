# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.document.DocumentModel import DocumentModel


class DocumentController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=DocumentModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '2_attendance'
        # }

    def documentGet(self) -> Any:
        
        try:
            self.log.info('DocumentController.documentGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['document', '']
                    , 'client_module'   : '2_attendance'
                    , 'base_module'     : ''
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
                    , 'client_module'   : '2_attendance'
                    , 'base_module'     : ''
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

    def documentReversionGet(self) -> Any:
        
        try:
            self.log.info('DocumentController.documentReversionGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['document', '']
                    , 'client_module'   : '2_attendance'
                    , 'base_module'     : ''
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
