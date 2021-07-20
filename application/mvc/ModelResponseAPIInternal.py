"""
Author: masakokh
Year: 2020
Version: 1.5.0
Package: Framework
"""
import json
from application.data.HtmlStatusCode import HtmlStatusCode
from application.data.request.Request import Request
from application.data.request.Response import Response
from library.MyLogger import MyLogger


class ModelResponseAPIInternal:
    """

    """
    def __init__(self):
        """

        :param status:
        :param errNum:
        :param errMsg:
        :param logId:
        :param data:
        """
        # logger
        self.log            = MyLogger()
        # error if json result is invalid
        self.__isError      = False
        self.__isAccepted   = False
        self.__acceptedValue= 'accepted'

        # status: int = 200, errNum: int = 0, errMsg: str = '', logId: str = '0', data: dict = {}
        self.status         = ''
        self.error          = 0
        self.message        = ''
        self.logId          = 0
        self.data           = {}
        self.timestamp      = ''

        # http status code
        self.hsc            = HtmlStatusCode.OK

        #
        self.request        = None
        self.response       = None

    def __setRespondStatus(self, value: str= None) -> None:
        """

        @param value:
        @return:
        """
        if value and value == self.__acceptedValue:
            self.__isAccepted   = True
        else:
            self.__isAccepted   = False

    def isAccepted(self) -> bool:
        """

        @return:
        """
        return self.__isAccepted

    def isError(self) -> bool:
        """

        :return:
        """
        return self.__isError

    def setHttpStatusCode(self, code: int) -> None:
        """

        """
        self.hsc        = code

    def setRequest(self, jsonRequest: dict) -> None:
        """

        :return:
        """
        self.request    = jsonRequest

    def setResultJson(self, result: dict) -> None:
        """

        :return:
        """
        # reset response
        self.response   = None

        try:
            # response block
            self.status         = result[Response.STATUS]
            self.error          = result[Response.ERROR_NUMBER]
            self.message        = result[Response.ERROR_MESSAGE]
            self.logId          = result[Response.LOG_ID]
            self.data           = result[Response.DATA] if Response.DATA in result else {}
            self.timestamp      = result[Response.TIMESTAMP] if Response.TIMESTAMP in result else ''

            # response
            self.response       = {
                                    Response.DATA         : self.data
                                    , Response.LOG_ID       : self.logId
                                    , Response.ERROR_MESSAGE: self.message
                                    , Response.ERROR_NUMBER : self.error
                                    , Response.STATUS       : self.status
                                    , Response.TIMESTAMP    : self.timestamp
            }

            # request block, request got by result
            # self.setRequest(result[requestKey])

            # check respond status
            self.__setRespondStatus(self.status)

            # no error
            self.__isError       = False

        except KeyError as e:
            self.__isError       = True
            self.log.error(f'ModelResponseAPIInternal.setResultJson KeyError', f'{str(e)}')

        except Exception as e:
            self.__isError       = True
            self.log.error(f'ModelResponseAPIInternal.setResultJson Exception', f'{str(e)}')

    def setResultText(self, result: str) -> None:
        """

        :param result:
        :return:
        """
        self.response   = result

    @property
    def text(self) -> str:
        """

        :return:
        """
        return self.response
