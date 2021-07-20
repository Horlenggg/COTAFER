"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from application.data.Entity import Entity


class Logger(Entity):
    """

    """
    def __init__(self, data: dict):
        """

        """
        #
        super().__init__()

        # static variables
        self._enable            = 'enable'
        self._extension         = 'extension'
        self._formatFileName    = 'format_file_name'
        self._path              = 'path'
        self._prefix            = 'prefix'
        # dynamic variables
        self.enable             = False
        self.extension          = ''
        self.formatFileName     = ''
        self.path               = ''
        self.prefix             = ''

        # load data mapping
        self._assignData(data)

    def _assignData(self, data: dict) -> None:
        """

        :return:
        """
        try:
            self.enable         = data[self._enable]
            self.extension      = data[self._extension]
            self.formatFileName = data[self._formatFileName]
            self.path           = data[self._path]
            self.prefix         = data[self._prefix]

        except KeyError as e:
            print(str(e))

        except Exception as e:
            print(str(e))
