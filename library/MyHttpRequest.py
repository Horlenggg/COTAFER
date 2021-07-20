import datetime
from flask import Flask, request, Response,json
from random import randint
from library.MyConfig import MyConfig
from library.MyCrypto import MyCrypto
from library.MyVisitor import MyVisitor


class MyHttpRequest:

    def __init__(self):
        super().__init__()

        self.config = MyConfig().getData()
        self.crypto = MyCrypto()
        self.logId  = MyVisitor().getNewID()

    ''' http_request '''
    def getMixToken(self):
        _tokenMix = ''
        try:
            _tokenMix = self.crypto._covertSHA256("%s:%s" % (self.config['app_id'], self.config['app_security_key']))
        except Exception as e:
            return ''

        return _tokenMix

    def genSecretKey(self, Browser: str = '', Os:str = ''):
        _tokenMix = ''
        try:
            _time = datetime.datetime.utcnow()

            _tokenMix = self.crypto._covertSHA256(
                "%s:%s:%s:%s:%s" % (_time, Browser, Os, self.config['app_id'], self.config['app_security_key']))

        except Exception as e:
            print(e)

        return _tokenMix

    def responseError(self, code: int = 400, message={'message': 'Bad request!'}) -> list:
        # prepare jsondata to client
        dataResponse = dict(
            status          = 'failed'
            , log_id        = self.logId # todo: implement for app logId
            , timestamp     = datetime.datetime.now().isoformat()
            , error_number  = code
            , error_message = message
        )

        json_response = json.dumps(dataResponse, sort_keys=True, indent=4, separators=(',', ': '))

        # response to client
        return Response(json_response, content_type="application/json; charset=utf-8", status=code)

    def validationResponseError(self, message={}) -> list:
        # prepare jsondata to client
        dataResponse = dict(
            status          = 'failed'
            , log_id        = self.logId # todo: implement for app logId
            , timestamp     = datetime.datetime.now().isoformat()
            , error_number  = 400
            , error_message = 'Rquest Failed!'
        )

        json_response = json.dumps(dataResponse, sort_keys=True, indent=4, separators=(',', ': '))

        # response to client
        return Response(json_response, content_type="application/json; charset=utf-8", status=400)

    # generate unigueID for every requests
    # use as decorator
    @staticmethod
    def logID(length=6):
        range_start = 10**(length-1)
        range_end = (10**length)-1
        return randint(range_start, range_end)

    # get domain ip address
    def getClientIP(self):
        return request.environ.get('HTTP_X_REAL_IP', request.remote_addr)

    # get user os
    def getServerIP(self):
        from netifaces import interfaces, ifaddresses, AF_INET
        _ip = ''
        for ifaceName in interfaces():
            addresses = [i['addr'] for i in ifaddresses(ifaceName).setdefault(AF_INET, [{'addr': 'No IP addr'}])]

            if ifaceName == 'lo':
                _ip = (', '.join(addresses))

        return _ip

    # get server domain
    def getServerDomain(self):

        return 'localhost'
