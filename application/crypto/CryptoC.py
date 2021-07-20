"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""
import time
from Crypto.Hash import SHA512, SHA256
# from Crypto.PublicKey import RSA


class CryptoC:
    """

    """
    def __init__(self):
        """

        """
        self._prefixKey     = ''
        self._suffixkey     = ''

    def _covertSHA256(self, key: str) -> str:
        """

        :param key:
        :return:
        """
        return (
            SHA256.new(
                data=key.encode('utf-8')
            )
        ).hexdigest()

    def _covertSHA512(self, key: str) -> str:
        """

        :param key:
        :return:
        """
        return (
            SHA512.new(
                data= key.encode('utf-8')
            )
        ).hexdigest()

    def getOneWayKey(self, key: str) -> str:
        """

        :param key:
        :return:
        """

        return self._covertSHA512(
                                str(
                                    self._prefixKey
                                    + ("%.20f" % time.time()).replace('.', '')
                                    + self._suffixkey
                                )
        )

    def setPrefixKey(self, key: str) -> None:
        """

        :param key:
        :return:
        """
        self._prefixKey     = key

    def setSuffixKey(self, key: str) -> None:
        """

        :param key:
        :return:
        """
        self._suffixkey     = key