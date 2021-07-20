"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
import re
import json


class Validator:
    """

    """
    def _domainPattern(self) -> re:
        """
        :ref https://gist.github.com/staugur/f09e6d8cde56ef2036ff84a302e5ac24
        :param endpoint:
        :return:
        """
        ipMiddleOctet   = u"(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5]))"
        ipLastOctet     = u"(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))"

        regex           = re.compile(
                            u"^"
                            # protocol identifier
                            u"(?:(?:https?|ftp)://)"
                            # user:pass authentication
                            u"(?:\S+(?::\S*)?@)?"
                            u"(?:"
                            u"(?P<private_ip>"
                            # IP address exclusion
                            # private & local networks
                            u"(?:(?:10|127)" + ipMiddleOctet + u"{2}" + ipLastOctet + u")|"
                            u"(?:(?:169\.254|192\.168)" + ipMiddleOctet + ipLastOctet + u")|"
                            u"(?:172\.(?:1[6-9]|2\d|3[0-1])" + ipMiddleOctet + ipLastOctet + u"))"
                            u"|"
                            # IP address dotted notation octets
                            # excludes loopback network 0.0.0.0
                            # excludes reserved space >= 224.0.0.0
                            # excludes network & broadcast addresses
                            # (first & last IP address of each class)
                            u"(?P<public_ip>"
                            u"(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])"
                            u"" + ipMiddleOctet + u"{2}"
                            u"" + ipLastOctet + u")"
                            u"|"
                            # host name
                            u"(?:(?:[a-z\u00a1-\uffff0-9]-?)*[a-z\u00a1-\uffff0-9]+)"
                            # domain name
                            u"(?:\.(?:[a-z\u00a1-\uffff0-9]-?)*[a-z\u00a1-\uffff0-9]+)*"
                            # TLD identifier
                            u"(?:\.(?:[a-z\u00a1-\uffff]{2,}))"
                            u")"
                            # port number
                            u"(?::\d{2,5})?"
                            # resource path
                            u"(?:/\S*)?"
                            # query string
                            u"(?:\?\S*)?"
                            u"$",
                            re.UNICODE | re.IGNORECASE
                        )

        return re.compile(regex)

    def isDomain(self, endpoint: str) -> bool:
        """

            url('http://foobar.dk')
            True

            url('http://10.0.0.1')
            True

            url('http://foobar.d')
            ValidationFailure(func=url, ...)

            url('http://10.0.0.1', public=True)
            ValidationFailure(func=url, ...)

        :param value: URL address string to validate
        :param public: (default=False) Set True to only allow a public IP address
        """

        if self._domainPattern().match(endpoint):
            return True
        return False

    def isJson(self, data: str) -> bool:
        """

        :param data:
        :return:
        """
        try:
            test    = json.loads(data)
            test    = None
            return True
        except json.decoder.JSONDecodeError:
            return False
        else:
            return False

    def isNumeric(self, data: str) -> bool:
        """

        """
        return data.isnumeric()

    def isURL(self, endpoint: str) -> bool:
        """

        :param endpoint:
        :return:
        """
        if self._domainPattern().match(endpoint):
            return True
        return False
