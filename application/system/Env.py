"""
Author: masakokh
Year: 2020
Version: 1.0.4
Package: Framework
"""
import os
import json
import application.constants


class Env:
    """

    """

    def __init__(self):
        """

        """
        # environment name
        self.__envName      = 'ENV_NAME'
        self.__envXPath     = 'ENV_X_PATH'
        self.__envLogPath   = 'LOG_SYSTEM_PATH'
        # environment stat
        self.__dev          = 'development'
        self.__loc          = 'local'
        self.__pro          = 'production'
        self.__sta          = 'staging'

    def __getConfigPath(self, envName: str) -> str:
        """

        :param envName:
        :return:
        """
        return application.constants.CONFIG_PATH \
               + envName \
               + application.constants.CONFIG_FILE_EXT

    def __getConfigXPath(self) -> str:
        """

        :return:
        """
        # select a local data
        return (
            self.__getConfigPath(self.__loc)
            , os.environ.get(self.__envXPath)
        )[
            os.path.exists(
                os.environ.get(self.__envXPath) \
                or ''
            )
        ]

    def __isDefault(self) -> bool:
        """

        :return:
        """
        if os.environ.get(self.__envName):
            return False

        else:
            return True

    def __readFile(self) -> dict:
        """
        not yet test
        :return:
        """
        data        = {}
        separator   = '='

        # open file config by following an environment
        with open(
                (
                        self.__getConfigPath(
                            self.getValue()
                        )
                        , self.__getConfigXPath()
                )[
                    self.isProduction()
                ]
        ) as plainFile:
            for line in plainFile:
                try:
                    # trim value before add to dict
                    data[line.split(separator)[0].strip()] = line.split(separator)[1].strip()

                except KeyError as e:
                    print(f'ENV.__readFile: {str(e)}')
                except OSError:
                    print(f'ENV.__readFile: {str(e)}')

        return data

    def __readJsonFile(self) -> dict:
        """

        :return:
        """
        try:
            # read file
            with open(
                    (
                            self.__getConfigPath(
                                self.getValue()
                            )
                            , self.__getConfigXPath()
                    )[
                        self.isProduction()
                    ]
            ) as jsonFile:
                return json.load(jsonFile)

        except json.decoder.JSONDecodeError as e:
            print(f'ENV.__readJsonFile: {str(e)}')
            return {}

        except Exception as e:
            print(f'ENV.__readJsonFile: {str(e)}')
            return {}

    def getData(self) -> dict:
        """

        :return:
        """
        return self.__readJsonFile()

    def getRaw(self) -> str:
        """

        :return:
        """
        try:
            with open(
                    (
                            self.__getConfigPath(
                                self.getValue()
                            )
                            , self.__getConfigXPath()
                    )[
                        self.isProduction()
                    ]
                    , 'r'
            ) as plainFile:
                return plainFile.read()

        except Exception as e:
            print(f'ENV.getRaw: {str(e)}')
            return ''

    def getValue(self) -> str:
        """

        :return:
        """

        if self.isDevelopment():
            return self.__dev

        elif self.isLocal():
            return self.__loc

        elif self.isProduction():
            return self.__pro

        elif self.isStaging():
            return self.__sta

        else:
            return self.__loc

    def isDevelopment(self) -> bool:
        """

        :return:
        """
        if self.__isDefault():
            return False

        elif str(os.environ.get(self.__envName)).lower() == self.__dev.lower():
            return True

        else:
            return False

    def isLocal(self) -> bool:
        """

        :return:
        """
        if self.__isDefault():
            return False

        elif str(os.environ.get(self.__envName)).lower() == self.__loc.lower():
            return True

        else:
            return False

    def isProduction(self) -> bool:
        """

        :return:
        """
        if self.__isDefault():
            return False

        elif str(os.environ.get(self.__envName)).lower() == self.__pro.lower():
            return True

        else:
            return False

    def isStaging(self) -> bool:
        """

        :return:
        """
        if self.__isDefault():
            return False

        elif str(os.environ.get(self.__envName)).lower() == self.__sta.lower():
            return True

        else:
            return False
