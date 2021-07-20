from flask import redirect, url_for, Response, json
from typing import Any
from application.data.HtmlStatusCode import HtmlStatusCode
from application.data.request.Front import Front
from entity.Header import Header
from library.MyVisitor import MyVisitor
from library.MyLogger import MyLogger

# logger
log = MyLogger()


class FailedResponse:
    """

    """

    def __init__(self):
        """

        """
        # body json string
        self.__request = ''

        # setting
        self.__load()

    def __load(self) -> None:
        """

        """
        pass

    def __render(self, errorNumber: int, errorMessage: str, status: str = 'failed', logId: int = None):
        """

        """
        # verify region name
        clientTimestamp = MyVisitor.getTimestamp()

        # render the template for error response
        return f'"status": "{status}","log_id": "{logId or MyVisitor.getNewID()}","timestamp":"{clientTimestamp}","error_number":{errorNumber},"error_message":"{errorMessage}"'

    def __respond(self, response: str) -> Response:
        """

        """

        try:
            # render this print statement
            # note: keep this statement to render out the correct json string of request

            log.error('failedResponse :: ', '{' + response + '}')
            # full content of json string
            return Response('{' + response + '}', content_type="application/json; charset=utf-8", status=401)

        except Exception as e:
            log.error(f'FailedResponse.__respond Ex :: {str(e)}')

            # full of return content
            return Response('{' + response + '}', content_type="application/json; charset=utf-8", status=401)

    def getDb(self, errorNumber: int, errorMessage: str, logId: int = None) -> Any:
        """

        """
        # error param content
        errorContent = self.__render(
            errorNumber=errorNumber
            , errorMessage=errorMessage
            , logId=logId
        )

        # error data from database
        return \
            self.__respond(errorContent) \
                , HtmlStatusCode.BAD_REQUEST

    def getInstallation(self) -> Any:
        """

        """
        # error param content
        errorContent = self.__render(
            errorNumber=HtmlStatusCode.NOT_AUTHORIZED
            , errorMessage="Unauthorized."
        )

        # entire error
        return \
            self.__respond(errorContent) \
                , HtmlStatusCode.NOT_AUTHORIZED

    def getParam(self) -> Any:
        """

        """
        # error param content
        errorContent = self.__render(
            errorNumber=HtmlStatusCode.BAD_REQUEST
            , errorMessage="Process failed. Please try again later."
        )

        # entire error
        return \
            self.__respond(errorContent) \
                , HtmlStatusCode.BAD_REQUEST

    def getToken(self) -> Any:
        """

        """
        # error token content
        errorContent = self.__render(
            errorNumber=HtmlStatusCode.NOT_AUTHORIZED
            , errorMessage="Unauthorized."
        )

        # entire error
        return \
            self.__respond(errorContent)\
                , HtmlStatusCode.NOT_AUTHORIZED
