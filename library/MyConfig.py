"""
Author: masakokh
Year: 2020
Version: 1.0.3
Package: Framework
"""
from application.system.ConfigEnv import ConfigEnv
from entity.Config import Config as EC
from entity.Logger import Logger as EL
from library.MyFrontConfig import MyFrontConfig as FrontConfig


class MyConfig(ConfigEnv):
    """

    """
    def __init__(self):
        """

        """
        super().__init__()

        # store in local class
        self.__data = self.getData()

    def getCotaferAPI(self) -> str:
        """

        :return:
        """
        return self.__data.get(
            EC.GONOKA_WEB_API
        )

    def getCotaferMediaAPI(self) -> str:
        """

        :return:
        """
        return self.__data.get(

        )

    def getFrontConfig(self) -> FrontConfig:
        """

        :return:
        """
        return FrontConfig(
            self.__data.get(
                EC.SYSTEM
            )
        )

    def getLogger(self) -> EL:
        """

        :return:
        """
        return EL(
            self.__data.get(EC.LOGGER)
        )

    def getSecretKey(self) -> str:
        """

        :return:
        """
        return self.__data.get(
            EC.SECRET_KEY
        )

    def getSession(self) -> str:
        return self.__data.get(
            EC.SESSION
        )

    def getClientVendor(self) -> dict:
        return self.__data.get(
            EC.CLIENT_VENDOR
        )
