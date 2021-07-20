"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
import datetime
import time
import os.path
from typing import Any
from application.system.Env import Env as env
import application.constants as ac


class Log:
    """

    """
    class StyleModifier:
        BLUE            = '\033[94m'
        GREEN           = '\033[92m'
        RED             = '\033[91m'
        YELLOW          = '\033[93m'

        TEXT_BOLD       = '\033[1m'
        TEXT_UNDERLINE  = '\033[4m'

        ENDC            = '\033[0m'

    def __init__(self, prefix: str =  '', color: bool= True):
        """

        :param prefix:
        :param color:
        """
        self._prefix    = prefix
        self._filename  = self._getFileName()
        self._logId     = datetime.datetime.now().strftime('%H:%M:%S.%f')
        # set color
        self._color     = color
        # inner class
        self._style     = self.StyleModifier()

        # 
        if env.isProduction():
            self._filename  = str(os.environ.get(env._envLogPath)).lower()

    def _dataFormat(self, content: Any) -> Any:
        """

        :param _data:
        :return:
        """
        if isinstance(content, dict):
            return str(content)
        elif isinstance(content, str) or type(content) == str:
            return content
        else:
            return ''

    def _getFileName(self) -> str:
        """

        :return:
        """
        return ac.LOG_SYSTEM_PATH \
               + self._prefix \
               + time.strftime(ac.LOG_SYSTEM_FILE_FORMAT) \
               + ac.LOG_SYSTEM_EXTENSION

    def _write(self, typeName: str = '', title: str = '', content: dict = {}, color: str = '') -> None:
        """

        :param typeName:
        :param title:
        :param content:
        :return:
        """
        # write log
        if bool(self._lc.enable):
            try:
                # open log file, if not exist will create
                f = open(self._filename, 'a+', encoding='utf-8')

                if self._color:
                    # generate content format with color
                    f.write(
                        f"{self._logId} "
                        f"{color}>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>{self._style.ENDC}\n"
                        f"[{typeName}] {self._style.TEXT_BOLD}{title}{self._style.ENDC} \n{self._dataFormat(content)} \n"
                        f"{color}<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<{self._style.ENDC}\n\n\n"
                    )
                else:
                    # generate content format without color
                    f.write(
                        f"{self._logId} "
                        f">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"
                        f"[{typeName}] {self._style.TEXT_BOLD}{title}{self._style.ENDC} \n{self._dataFormat(content)} \n{self._logId} "
                        f"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<\n\n\n"
                    )

                # close file
                f.close()
            except IOError as e:
                print(f"IOError open file {e.errno} {e.strerror}({self._filename})")
            except FileNotFoundError as e:
                print(f"FileNotFoundError open file {e.errno} {e.strerror}({self._filename})")
            except Exception as e:
                print(f"Exception open file {e.errno} {e.strerror}({self._filename})")

    def error(self, title: str = '', content: dict = {}) -> None:
        """

        :param title:
        :param content:
        :return:
        """
        if self._color:
            self._write(
                f'{self._style.RED}ERROR{self._style.ENDC}'
                , f'{self._style.RED}{title}{self._style.ENDC}'
                , content
                , self._style.RED
            )
        else:
            self._write(
                'ERROR'
                , title
                , content
                , self._style.RED
            )

    def info(self, title: str = '', content: dict = {}) -> None:
        """
        :param title:
        :param content:
        :return:
        """
        if self._color:
            self._write(f'{self._style.BLUE}INFO{self._style.ENDC}'
                        , f'{self._style.BLUE}{title}{self._style.ENDC}'
                        , content
                        , self._style.BLUE
                        )
        else:
            self._write('INFO'
                        , title
                        , content
                        , self._style.BLUE
                        )

    def success(self, title: str = '', content: dict = {}) -> None:
        """
        :param title:
        :param content:
        :return:
        """
        if self._color:
            self._write(
                f'{self._style.GREEN}SUCCESS{self._style.ENDC}'
                , f'{self._style.GREEN}{title}{self._style.ENDC}'
                , content
                , self._style.GREEN
            )
        else:
            self._write(
                'INFO'
                , title
                , content
                , self._style.GREEN
            )

    def track(self, title: str = '', content: dict = {}) -> None:
        """
        :param title:
        :param content:
        :return:
        """
        if self._color:
            self._write('TRACK', title, content)
        else:
            self._write('TRACK', title, content)

    def warning(self, title: str = '', content: dict = {}) -> None:
        """
        :param title:
        :param content:
        :return:
        """
        if self._color:
            self._write(
                f'{self._style.YELLOW}WARNING{self._style.ENDC}'
                , f'{self._style.YELLOW}{title}{self._style.ENDC}'
                , content
                , self._style.YELLOW
            )
        else:
            self._write(
                'WARNING'
                , title
                , content
                , self._style.YELLOW
            )