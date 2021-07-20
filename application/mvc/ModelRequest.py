"""
Author: masakokh
Year: 2020
Version: 1.4.2
Package: Framework
Last Modify: 2021-07-07T02:03:44.387Z
"""
import json
import re
import requests
from application.data.request.Header import Header
from application.mvc.ModelBase import ModelBase
from application.mvc.ModelResponseAPIInternal import ModelResponseAPIInternal as ModelResponseInternal
from library.MyLogger import MyLogger


class ModelRequest:
    """

    """

    def __init__(self):
        """

        """
        # logger
        self.log                = MyLogger()
        # public
        self._prefixEndPoint    = ''
        # response
        self._responseMRI       = ModelResponseInternal()
        # header request
        self.__header           = ModelBase().params.header.getAll()

    def _jsonParseToGetParams(self, data: dict) -> str:
        """

        :param data:
        :return:
        """
        # json content
        jc      = json.loads(
                    json.dumps(data)
                )

        # string container
        content = ''

        # extract data
        for x in jc:
            content += x + '=' + jc[x]

        # return string
        return content.rstrip('&')

    def _isInternalEndpoint(self, endpoint: str) -> bool:
        """

        :param endpoint:
        :return:
        """
        # if re.match(r'https://', endpoint, re.M | re.I) or re.match(r'http://', endpoint, re.M | re.I):
        if len(re.findall(r"\w+://*", endpoint)) > 0:
            return False

        return True

    def _validateEndpoint(self, endpoint: str) -> bool:
        """

        :return:
        """
        # force to lowercase first
        # endpoint    = endpoint.lower()

        if re.match(r'https://', endpoint, re.M | re.I) \
                or re.match(r'http://', endpoint, re.M | re.I):
            return True

        return False

    def _requestJson(self, endpoint: str, data: dict = {}, method: str= 'POST') -> None:
        """

        :param endpoint:
        :param data:
        :return:
        """
        # add prefix if it is internal api
        if self._isInternalEndpoint(endpoint):
            endpoint        = self._prefixEndPoint + endpoint

        try:
            # POST method
            if method.lower() == 'post':

                # response requests
                response    = requests.post(
                                url         = endpoint
                                , json      = data
                                , headers   = self.__header
                            )
                # self.log.info('data response', response.json())
                # get and set response as json
                self._responseMRI.setResultJson(response.json())

                # get http status
                self._responseMRI.setHttpStatusCode(response.status_code)

            # PUT method
            elif method.lower() == 'put': 
                # response requests
                response = requests.put(
                    url         = endpoint
                    , data      = data
                    , headers   = self.__header
                )
                
                # get and set response as json
                self._responseMRI.setResultJson(response.json())

                # get http status
                self._responseMRI.setHttpStatusCode(response.status_code)

            # DELETE method
            elif method.lower() == 'put': 
                # response requests
                response = requests.delete(
                    url         = endpoint
                    , headers   = self.__header
                )
                # get and set response as json
                self._responseMRI.setResultJson(response.json())

                # get http status
                self._responseMRI.setHttpStatusCode(response.status_code)

            # GET method
            else:
                # response requests
                response    = requests.get(
                                url         = endpoint
                                , params    = self._jsonParseToGetParams(data)
                                , headers   = self.__header
                            )
                # get and set response as json
                self._responseMRI.setResultJson(response.json())

                # get http status
                self._responseMRI.setHttpStatusCode(response.status_code)

        except Exception as e:
            self.log.error(f'ModelRequest._requestJson', f'{str(e)}')

    def _requestText(self,  endpoint: str, data: dict = {}, method: str= 'POST') -> None:
        """

        :param endpoint:
        :param data:
        :param method:
        :return:
        """
        # add prefix if it is internal api
        if self._isInternalEndpoint(endpoint):
            endpoint            = self._prefixEndPoint + endpoint

        # escape request
        if not self._validateEndpoint(endpoint):
            self.log.info(f'ModelRequest.requestText:_validateEndpoint')
        else:
            try:
                # POST method
                if method.lower() == 'post':
                    # response requests
                    response = requests.post(
                        url         = endpoint
                        , json      = data
                        , headers   = self.__header
                    )

                    # get and set content
                    self._responseMRI.setResultText(response.text)

                    # get http status
                    self._responseMRI.setHttpStatusCode(response.status_code)

                # PUT method
                elif method.lower() == 'put':
                    # response requests
                    response = requests.put(
                        url         = endpoint
                        , data      = data
                        , headers   = self.__header
                    )

                    # get and set content
                    self._responseMRI.setResultText(response.text)

                    # get http status
                    self._responseMRI.setHttpStatusCode(response.status_code)

                # DELETE method
                elif method.lower() == 'delete':
                    # response requests
                    response = requests.delete(
                        url         = endpoint
                        , headers   = self.__header
                    )

                    # get and set content
                    self._responseMRI.setResultText(response.text)

                    # get http status
                    self._responseMRI.setHttpStatusCode(response.status_code)

                # GET method
                else:
                    # response requests
                    response    = requests.get(
                                    url         = endpoint
                                    , params    = self._jsonParseToGetParams(data)
                                    , headers   = self.__header
                                )

                    # get and set content
                    self._responseMRI.setResultText(response.text)

                    # get http status
                    self._responseMRI.setHttpStatusCode(response.status_code)
            except Exception as e:
                self.log.error(f'ModelRequest._requestText', f'{str(e)}')

    def json(self, endpoint: str, data: dict = {}, method: str= 'POST') -> None:
        """

        :return:
        """
        self._requestJson(
            endpoint
            , data
            , method
        )

    def setHeader(self, header: dict) -> None:
        """

        @param header:
        @return:
        """
        self.__header   = header

    def text(self, endpoint: str, data: dict = {}, method: str= 'POST') -> None:
        """

        :param endpoint:
        :param data:
        :param method:
        :return:
        """
        self._requestText(
            endpoint
            , data
            , method
        )
