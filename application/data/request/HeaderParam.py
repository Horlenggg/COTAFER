"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
Last Modify: 2021-07-07T02:03:44.387Z
"""
from application.data.Client import Client
from library.MyConfig import MyConfig as LMC

class HeaderParam:
    """

    """

    def __init__(self):
        """

        """
        # object
        self._client        = Client()
        self._myConfig      = LMC()
        #
        self.browser        = self._client.browserName
        self.domainName     = self._client.domainName
        self.ipClient       = self._client.ipClient
        self.ipServer       = self._client.ipServer
        self.os             = self._client.osName
        self.regionName     = 'Asia/Phnom_Penh'        
        # dynamic
        self.appToken       = self._myConfig.getCotaferAPI().get('token')
        self.clientId       = self._myConfig.getCotaferAPI().get('merchant_id')
        # self.countryInfo    = ''
        # set fix 
        self.countryInfo    = 'kh'
        self.languageCode   = 'en'
        self.loginToken     = ''
        self.visitorUUID    = ''
        # other dynamic
        self._other         = {}        

    def add(self, data: dict) -> None:
        """

        :param data:
        :return:
        """
        self._other.update(data)

    def delete(self, key: str) -> None:
        """

        :param key:
        :return:
        """
        try:
            del self._other[key]
        except Exception as e:
            print(str(e))

    def getAll(self) -> dict:
        """

        :return:
        """
        data = {
            'browser':          self.browser        or ''
            , 'domain_name':    self.domainName     or ''
            , 'ip_client':      self.ipClient       or ''
            , 'ip_server':      self.ipServer       or ''
            , 'os':             self.os             or ''
            , 'region-name':    self.regionName     or ''
        }
        data.update(
            self.getDynamic()
        )
        return data

    def getDynamic(self) -> dict:
        """

        :return:
        """
        temp    = {}

        if self.appToken is not None:
            temp.update({'app-token': self.appToken})
        if self.clientId is not None:
            temp.update({'client-id': self.clientId})
        if self.countryInfo is not None:
            temp.update({'country-info': self.countryInfo})
        if self.languageCode is not None:
            temp.update({'language-code': self.languageCode})
        if self.loginToken is not None:
            temp.update({'login-token': self.loginToken})
        if self.visitorUUID is not None:
            temp.update({'visitor_uuid': self.visitorUUID})
        if self.clientId is not None:
            temp.update({'client-id': self.clientId})

        temp.update(
            self._other
        )
        return temp
