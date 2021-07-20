"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
from application.crypto.CryptoC import CryptoC
from library.MyConfig import MyConfig as LC


class MyCrypto(CryptoC):
    """

    """
    def __init__(self):
        """

        """
        super().__init__()
        # config
        config      = LC()

        # set prefix
        self.setPrefixKey(
            config.getSecretKey()
        )
