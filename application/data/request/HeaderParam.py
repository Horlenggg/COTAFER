
from application.data.Client import Client


class HeaderParam:


    def __init__(self):

        # object
        self._client        = Client()
        #
        self.browser        = self._client.browserName
        self.domainName     = self._client.domainName
        self.ipClient       = self._client.ipClient
        self.ipServer       = self._client.ipServer
        self.os             = self._client.osName
        # dynamic
        self.appToken       = ''
        self.clientId       = ''
        self.countryInfo    = ''
        self.languageCode   = ''
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
        return {
            'browser':          self.browser        or ''
            , 'domain_name':    self.domainName     or ''
            , 'ip_client':      self.ipClient       or ''
            , 'ip_server':      self.ipServer       or ''
            , 'os':             self.os             or ''
        }.update(
            self.getDynamic()
        )

    def getDynamic(self) -> dict:
        """

        :return:
        """
        temp    = {}

        if self.appToken is not None:
            temp.update({'app_token': self.appToken})
        if self.clientId is not None:
            temp.update({'client_id': self.clientId})
        if self.countryInfo is not None:
            temp.update({'country_info': self.countryInfo})
        if self.languageCode is not None:
            temp.update({'language_code': self.languageCode})
        if self.loginToken is not None:
            temp.update({'login_token': self.loginToken})
        if self.visitorUUID is not None:
            temp.update({'visitor_uuid': self.visitorUUID})

        return temp.update(
            self._other
        )
