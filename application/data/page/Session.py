"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
import redis
from library.MyConfig import MyConfig as LMC


class Session:
    """

    """
    def __init__(self):
        """

        """
        self.__config       = LMC().getSession()
        self.__expiration   = self.__config.get('expiration')
        self.__pool         = redis.ConnectionPool(
            host        = self.__config.get('host')
            , port      = self.__config.get('port')
            , db        = self.__config.get('db')
            , password  = self.__config.get('password')
        )

        self.__session      = redis.Redis(
            connection_pool= self.__pool
        )

    def delete(self, key: str) -> None:
        """

        :param key:
        :return:
        """
        try:
            self.__session.delete(key)
        except Exception as e:
            print(f'application.data.page.Session.delete Exception: {str(e)}')

    def get(self, key: str) -> str:
        """

        :param key:
        :return:
        """
        try:
            return self.__session.get(key)
        except IOError as e:
            print(f'application.data.page.Session.get IOError: {str(e)}')
            return None
        except IndexError as e:
            print(f'application.data.page.Session.get IndexError: {str(e)}')
            return None
        except Exception as e:
            print(f'application.data.page.Session.get Exception: {str(e)}')
            return None

    def getHashSubkey(self, key: str, subKey: str) -> dict:
        """

        :param key:
        :param subKey:
        :return:
        """
        try:
            return self.__session.hget(key, subKey)
        except IOError as e:
            print(f'application.data.page.Session.getHashSubkey IOError: {str(e)}')
            return None
        except IndexError as e:
            print(f'application.data.page.Session.getHashSubkey IndexError: {str(e)}')
            return None
        except Exception as e:
            print(f'application.data.page.Session.getHashSubkey Exception: {str(e)}')

    def getHashValue(self, key: str) -> dict:
        """

        :param key:
        :return:
        """
        try:
            return self.__session.hvals(key)
        except IOError as e:
            print(f'application.data.page.Session.getHashValue IOError: {str(e)}')
            return None
        except IndexError as e:
            print(f'application.data.page.Session.getHashValue IndexError: {str(e)}')
            return None
        except Exception as e:
            print(f'application.data.page.Session.getHashValue Exception: {str(e)}')

    def has(self, key: str) -> bool:
        """

        :param key:
        :return:
        """
        return bool(
            self.__session.exists(key)
        )

    def list(self) -> list:
        """

        :return:
        """
        return self.__session.keys('*')

    def set(self, key: str, value: str) -> None:
        """

        :param key:
        :param value:
        :return:
        """
        try:
            self.__session.set(key, value)
        except IOError as e:
            print(f'application.data.page.Session.set IOError: {str(e)}')
        except IndexError as e:
            print(f'application.data.page.Session.set IndexError: {str(e)}')
        except Exception as e:
            print(f'application.data.page.Session.set Exception: {str(e)}')

    def setDict(self, key: str, value: dict) -> None:
        """

        :param key:
        :param value:
        :return:
        """
        try:
            self.__session.set(key, value)
        except IOError as e:
            print(f'application.data.page.Session.setDict IOError: {str(e)}')
        except IndexError as e:
            print(f'application.data.page.Session.setDict IndexError: {str(e)}')
        except Exception as e:
            print(f'application.data.page.Session.setDict Exception: {str(e)}')

    def setExpiration(self, key: str, expiration: int = 0) -> None:
        """

        """
        self.__session.expire(
            key
            , expiration or self.__expiration
        )

    def setHash(self, key: str, subKey: str, value: str) -> None:
        """

        :param key:
        :param subKey:
        :param value:
        :return:
        """
        try:
            # add a new key
            self.__session.hset(
                key
                , key= subKey
                , value= value
            )

            # set expiration to this key
            self.__session.expire(
                key
                , int(self.__expiration)
            )

        except redis.exceptions.DataError as e:
            print(f'application.data.page.Session.setHash redis.exceptions.DataError: {str(e)}')
        except IOError as e:
            print(f'application.data.page.Session.setHash IOError: {str(e)}')
        except IndexError as e:
            print(f'application.data.page.Session.setHash IndexError: {str(e)}')
        except Exception as e:
            print(f'application.data.page.Session.setHash Exception: {str(e)}')

    def unexpired(self, key: str) -> None:
        """

        :param key:
        :return:
        """
        try:
            self.__session.persist(key)
        except Exception as e:
            self.__session.pexpire(key)
            print(f'application.data.page.Session.unexpired Exception: {str(e)}')
