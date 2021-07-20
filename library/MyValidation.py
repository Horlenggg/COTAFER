
from entity.Body import Body
from entity.Header import Header as EH
from application.data.request.Front import Front
from library.validation.Element import Element
from library.validation.FailedResponse import FailedResponse
from library.validation.FailedType import FailedType
from library.validation.Rule import Rule as LVR
from library.MyLogger import MyLogger


class MyValidation:
    """"""
    def __init__(self, logColor = False) -> None:
        """"""
        # log file
        self.log                = MyLogger(logColor)
        # front request data
        self.__front            = Front()
        # element validation of request param
        self.__elementBody      = None
        self.__elementHeader    = None
        #
        self.__failedResponse   = ''
        # rule
        self.__rule             = LVR()
        # load
        self.__load()

    # load
    def __load(self) -> None:
        """"""
        try:
            self.__elementHeader    = Element(params= self.__front.header.param or {})

        except Exception as e:
            self.log.info('MyValidation.__load header:',str(e))

        try:
            self.__elementBody      = Element(params= self.__front.body.param or {})
        except Exception as e:
            self.log.info('MyValidation.__load body:',str(e))

        # add default header
        # self.header.add(
        #     EH.CLIENT_ID
        #     , self.__rule.getClientId()
        # )

        # self.header.add(
        #     EH.COUNTRY_INFO
        #     , self.__rule.getCountryInfo()
        # )

        # self.header.add(
        #     EH.LANGUAGE_CODE
        #     , self.__rule.getLanguageCode()
        # )

        self.header.add(
            EH.OS
            , self.__rule.getOS()
        )

        # self.header.add(
        #     EH.REGION_NAME
        #     , self.__rule.getRegionName()
        # )

        self.header.add(
            EH.HOST_NAME
            , self.__rule.getDefaultStr()
        )

        self.header.add(
            EH.BROWSER
            , self.__rule.getDefaultStr()
        )

    @property
    def header(self) -> Element:
        """
        """
        return self.__elementHeader

    @property
    def body(self) -> Element:
        """
        """
        return self.__elementBody

    def isValid(self) -> bool:
        """
        """
        # validate token
        if self.__validatedToken():
            if self.__validatedParam():
                return True
            else:                
                # set error token
                self.__setFailedResponse(FailedType.param)

                return False
        else:            
            # set error token
            self.__setFailedResponse(FailedType.token)

            # default is false
            return False

    # body params
    def __validatedParam(self) -> bool:
        """

        """
        # count front given vs. count developer given
        try:
            if len(self.__front.body.param) != len(self.body.getElement()):
                # set error
                self.log.info(' body params not match ', str('len'))
                # return fail
                return False

            else:
                # compare the keys of both front given and developer given
                for key in self.__front.body.param.keys():
                    # check not match key
                    if not key in self.body.getElement():
                        # set error
                        self.log.info(' body params key ', str(key))
                        # self.__setFailedResponse(FailedType.param)

                        # not match in the another
                        return False

        except Exception as e:
            self.log.info('MyValidation.__validatedParam Exception:',str(e))
            # another reason to return failed
            return False

        # param added by customizing validation class
        return self.body.isValid()

    #
    def __validTokenBearer(self) -> bool:
        """

        """
        from library.MyHttpRequest import MyHttpRequest
        _authorize  = self.header.getElement().get(EH.TOKEN)
        _str        = _authorize.split(' ')
        _mixToken   = MyHttpRequest().getMixToken()

        if len(_str) != 2 or str(_str[0]) != 'Bearer' or str(_str[1]) != str(_mixToken):
            return False

        return True

    # token
    def __validatedToken(self) -> bool:
        """

        """

        # self.header.add(
        #     EH.CONTENT_TYPE
        #     , self.__rule.getContentType()
        # )

        # self.header.add(
        #     EH.TOKEN
        #     , self.__rule.getTokeBearer()
        # )

        # if not self.header.isValid() or not self.__validTokenBearer():
        if not self.header.isValid():
            self.log.info('isvalid===========5')
            # set error installation
            self.__setFailedResponse(FailedType.token)

            return False

        else:
            return True
            # header is valid, then move to next step
            try:
                # get token key from header param
                _headerToken     = self.header.getElement().get(EH.TOKEN).split()[1].strip()
                _appAuthId      = self.__session.getRegisterId()

                # self.log.info('isvalid===========61:',_headerToken)
                # self.log.info('isvalid===========62:',_appAuthId)
                # self.log.info('isvalid===========63:',self.__session.foundKey(_appAuthId))
                # self.log.info('isvalid===========64:',self.__session.isTokenValid(_headerToken))
                # compare the token validation value to session server
                if self.__session.foundKey(_appAuthId) and self.__session.isTokenValid(_headerToken):
                    return True

                else:
                    # Token not found the session server
                    return False

            except Exception as e:
                self.log.info(f'MyValidation.__validatedToken Exception: {str(e)}')
                return False

    # set failed response
    def __setFailedResponse(self, typeNumber: int=1) -> None:
        """

        """
        # failed content
        failedResponse = FailedResponse()
        try:
            self.log.info('__setFailedResponse-typeNumber:', str(typeNumber))
            # check out the error type
            if typeNumber == FailedType.param:
                self.__failedResponse   = failedResponse.getParam()

            elif typeNumber == FailedType.token:
                self.__failedResponse   = failedResponse.getToken()

            elif typeNumber == FailedType.installation:
                self.__failedResponse   = failedResponse.getInstallation()

            else:
                self.__failedResponse   = failedResponse.getParam()

        except Exception as e:
            self.log.info('__setFailedResponse-ex:', str(e))
            self.__failedResponse   = failedResponse.getParam()

    # respond
    def respond(self) -> str:
        """
        """
        # self.__setFailedResponse(FailedType.param)
        return self.__failedResponse

    # respond header
    def respond401(self) -> str:
        """
        """
        self.__setFailedResponse(FailedType.installation)
        return self.__failedResponse

    @property
    def rule(self) -> LVR:
        """

        """
        return self.__rule
