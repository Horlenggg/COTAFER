"""
Author: masakokh
Year: 2020
Version: 1.2.2
Package: Framework
"""
import os
from application.mvc.Controller import Controller
from application.constants import ASSET_CSS_PATH, ASSET_JS_PATH, ASSET_UPLOAD_REAL_PATH, ASSET_UPLOAD_PATH, ASSET_NAME
from application.data.HtmlStatusCode import HtmlStatusCode
from library.MyMessage import MyMessage
from library.MySession import MySession
from library.MySessionVisitor import MySessionVisitor
from library.MyValidationForm import MyValidationForm
from library.MyValidationSchema import MyValidationSchema
from library.MyVisitor import MyVisitor
from page.controllers.decorator import authenticated
from entity.Body import Body as EB
from entity.Header import Header as EH
from library.MyHttpRequest import MyHttpRequest
from library.MyLogger import MyLogger


class MyController(Controller):
    """

    """

    def __init__(self, hParam: dict, bParam: dict, modelClass=object,viewPath:str='/'):
        """

        """
        super().__init__(logColor=True)

        self.http                   = MyHttpRequest()
        self.__clientBodyParam      = bParam
        self.__clientHeaderParam    = hParam
        self.__viewPath             = viewPath

        self.setModel(modelClass)
        self.initModelParam()

        self.__logger               = MyLogger()

        # init visitor object
        self.__visitor  = MyVisitor()
        # init session object for system
        self.__session  = MySessionVisitor(self.__visitor)
        # init session for
        self.session    = MySession(self.__visitor)
        # instant validation form
        self.validationForm = MyValidationForm(
            data            = self.data.form
            , allowUnknow   = True
            , requireAll    = True
        )
        # instant validation schema
        self.validationRule = MyValidationSchema()
        # upload file name
        self.__uploadFiles = {}
        # for method render
        self._param = {}
        # set session to template view
        self.view.addParams({'session': self.session})
        # loading functionality
        self.__load()
        # embed session id into view data
        self.view.addParams({'sesid': self.__visitor.getTokenCookieValue()})

        self.processFailedMsg       = "Process failed. Please try again later."
        self.inputSuccess           = "Input successfully."
        self.failedValidationMsg    = "Failed Validation!"

    # func to set request params
    def initModelParam(self) -> None:
        _uuID = self.http.genSecretKey(
            str(self.getClientHeaderParam.get(EH.BROWSER))
            , str(self.getClientHeaderParam.get(EH.OS))
        )

        _appToken = self.http.getMixToken()

        self.updateModelParam({
            'Os'                    : self.getClientHeaderParam.get(EH.OS)
            , 'Domain-Name'         : self.getClientHeaderParam.get(EH.HOST_NAME)
            , 'Ip_Server'           : self.http.getServerIP()
            , 'Ip_Client'           : self.http.getClientIP()
            , 'Browser'             : self.getClientHeaderParam.get(EH.BROWSER)
            , 'Client-Id'           : self.http.config['app_id']
            , 'Country-Info'        : '{}'
            , 'Language-Code'       : 'en'
            , 'Region-Name'         : 'Asia/Phnom_Penh'
            , 'Visitor-Uuid'        : _uuID
            , 'App-Token'           : _appToken
        })

    @property
    def getClientBodyParam(self):
        return self.__clientBodyParam

    @property
    def getClientHeaderParam(self):
        return self.__clientHeaderParam

    def __load(self) -> None:
        """

        :return:
        """
        # pass controller reference
        self.__visitor.loadCookieLibrary(self.view)

        # first visit
        if not self.__visitor.foundTokenCookie():
            # create new token
            self.__visitor.registerTokenCookie()

            # create session
            if self.__visitor.getRegisteredTokenCookie():
                # register to session
                self.__session.register(self.__visitor.getRegisteredTokenCookie())
        # second
        else:
            # has cookie but no session because 1. expire, 2. removed
            if not self.__session.found(self.__visitor.getTokenCookieValue()):
                # create a new session
                self.__session.register(self.__visitor.getTokenCookieValue())

    def getUploadFiles(self, inputFilenames) -> list:
        """

        """
        return self.__uploadFiles.get(inputFilenames)

    def removeUploadFile(self, filenames: list) -> bool:
        """

        @param filenames:
        @return:
        """
        isSuccessful = False
        try:
            for filename in filenames:
                filename = os.path.join(
                    ASSET_UPLOAD_REAL_PATH
                    , filename
                )
                if os.path.exists(filename):
                    os.remove(filename)

            # done
            isSuccessful = True

        except IOError as e:
            print(f'MyController.removeUploadFile: IOError: {str(e)}')
        except Exception as e:
            print(f'MyController.removeUploadFile: Exception: {str(e)}')

        return isSuccessful

    def uploadFile(self, inputFilename: str) -> bool:
        """

        :return:
        """
        isSuccessful = False

        try:
            self.__uploadFiles.update({
                inputFilename: []}
            )

            # get item form file list
            uploadFile = self.data.file[inputFilename]

            # upload with full path
            uploadFile.save(
                os.path.join(
                    ASSET_UPLOAD_REAL_PATH
                    , self.scanFile(uploadFile.filename)
                )
            )

            # add upload file to temp to verify later on
            self.__uploadFiles[inputFilename].append(
                self.scanFile(uploadFile.filename)
            )

            isSuccessful = True

        except KeyError as e:
            print(f'MyController.uploadFile: KeyError: {str(e)}')
        except IOError as e:
            print(f'MyController.uploadFile: IOError: {str(e)}')
        except Exception as e:
            print(f'MyController.uploadFile: Exception: {str(e)}')

        # success
        return isSuccessful

    def uploadFiles(self, inputFilenames: str) -> bool:
        """

        :return:
        """
        isSuccessful = False

        try:
            self.__uploadFiles.update({
                inputFilenames: []}
            )
            for uploadFile in self.data.file.getlist(inputFilenames):
                uploadFile.save(
                    os.path.join(
                        ASSET_UPLOAD_REAL_PATH
                        , self.scanFile(uploadFile.filename)
                    )
                )

                # add upload file to temp to verify later on
                self.__uploadFiles[inputFilenames].append(
                    self.scanFile(uploadFile.filename)
                )

            # done
            isSuccessful = True

        except KeyError as e:
            print(f'MyController.uploadFile: KeyError: {str(e)}')
        except IOError as e:
            print(f'MyController.uploadFile: IOError: {str(e)}')
        except Exception as e:
            print(f'MyController.uploadFile: Exception: {str(e)}')

        return isSuccessful

    def redirectLogin(self):
        """
        This method will be remove session token and redirect to 2_login form
        Redirect to 2_login form should not have oldData.

        @return:
        """

        # Remove Token
        self.session.delete(self.session.TOKEN)
        # Redirect
        return self.redirect('authLoginForm')

    def render(self, viewFile: str, status: int = HtmlStatusCode.OK, param: dict = None):
        """

        @type status: object
        @param viewFile:
        @type param: object
        @return:
        """

        if param:
            self._param.update(param)

        self.__viewPath = self.__viewPath + viewFile

        self.view.setViewFile(self.__viewPath)
        self.view.addParams(self._param)

        return self.view.render(), status

    def responseError(self):
        """

        """
        self.view.setViewFile('serverError')
        return self.view.render(), self.status.ERROR

    def setErrorMessage(self, errorMessage: str=''):
        """

        """
        self.session.set(self.session.ERROR_MESSAGE, errorMessage)

    def setSuccessMessage(self, successMessage: str=''):
        """

        """
        self.session.set(self.session.SUCCESS_MESSAGE, successMessage)

    def isPasswordValid(self, password: str):
        """
        Check if the given password match with current user password
        """

        # compare password with the password that saved in session during 2_login.
        if password and password == self.session.get(self.session.PASSWORD):
            return True

        return False

    def httpAjaxResponseTokenExpired(self, errorMessage="Login token expired."):
        responseToClient = {
            "status"            : "failed"
            , "error_message"   : errorMessage
            , "error_number"    : 4003
            , "data"            : {}
        }
        return  responseToClient

    def httpAjaxResponse(self, respond={}, isReturnData: bool=True, status="accepted"):
        try :
            if respond != {} and respond.isAccepted() and status == "accepted":
                if isReturnData :
                    responseToClient = {
                        "status"            : respond.status,
                        "error_message"     : "",
                        "error_number"      : 0,
                        "data"              : respond.data
                    }

                else :
                    responseToClient = {
                        "status"            : respond.status,
                        "error_message"     : "",
                        "error_number"      : 0
                    }
            else :
                if status == "accepted" :
                    responseToClient = {
                        "status"            : "accepted",
                        "error_message"     : "",
                        "error_number"      : 0
                    }
                else :
                    responseToClient = {
                        "status"            : "failed",
                        "error_message"     : respond.message,
                        "error_number"      : HtmlStatusCode.BAD_REQUEST
                    }

            return responseToClient

        except Exception as ex:

            return {
                "status"            : "failed" ,
                "error_message"     : self.processFailedMsg ,
                "error_number"      : HtmlStatusCode.BAD_REQUEST
            }