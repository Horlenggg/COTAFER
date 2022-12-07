"""
Author: masakokh
Year: 2020
Version: 1.0.1
Package: project
"""
from application.data.Entity import Entity


class Logger(Entity):
    """

    """
    def __init__(self, data: dict):
        """

        :param data:
        """
        #
        super(Logger, self).__init__()
        self.setKeyName('log')

        # static variables
        self.__enable           = 'enable'
        self.__extension        = 'extension'
        self.__path             = 'path'
        # dynamic variables
        self.enable             = False
        self.extension          = ''
        self.path               = ''

        # load data mapping
        self.__assignData(data)

    def __assignData(self, data: dict) -> None:
        """

        :return:
        """
        try:
            self.enable         = data[self.__enable]
            self.extension      = data[self.__extension]
            self.path           = data[self.__path]

        except KeyError as e:
            print(f'entity.Logger.__assignData KeyError: {str(e)}')

        except Exception as e:
            print(f'entity.Logger.__assignData Exception: {str(e)}')
