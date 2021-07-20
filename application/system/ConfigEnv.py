"""
Author: masakokh
Year: 2020
Version: 1.0.1
Package: Framework
"""
from application.system.Env import Env


class ConfigEnv:
    """

    """
    def __init__(self):
        """

        """
        self.__env  = Env()
        # keep in memory
        self.__data = self.__env.getData()

    def environment(self) -> Env:
        """

        :return:
        """
        return self.__env

    def getData(self) -> dict:
        """

        :return:
        """
        return self.__data

    def getEnvName(self) -> str:
        """

        :return:
        """
        return self.__env.getValue()
