"""
Author: masakokh
Year: 2020
Version: 1.3.1
Package: Framework
"""
import redis
import redis.exceptions
from application.data.page.Session import Session
from entity.Session import Session as ES
from library.MyVisitor import MyVisitor


class MySessionVisitor:
    """

    """
    def __init__(self, visitor: MyVisitor):
        """

        """
        # session object
        self.__visitor  = MyVisitor()
        # cookie id is cookie name
        self.__cookieID = self.__visitor.getTokenCookieName()
        # cookie value is session name
        self.__sessID   = self.__visitor.getTokenCookieValue()
        # init Entity Session
        self.__es       = ES()
        # session
        self.__sess     = Session()
        # create default session on the server
        self.__load()

    def __load(self) -> None:
        """

        :return:
        """
        try:
            # check the exist key
            if self.__sessID and self.__sess.has(self.__sessID):
                # feed the id
                self.feed(
                    self.__sessID
                )

        except redis.exceptions.DataError as e:
            print(f'application.data.page.Session.__load redis.exceptions.DataError: {str(e)}')

        except Exception as e:
            print(f'application.data.page.Session.__load Exception: {str(e)} {self.__sessID}')

    def delete(self, key) -> None:
        """

        :param key:
        :return:
        """
        self.__sess.delete(
            key
        )

    def feed(self, key: str) -> None:
        """

        :param key:
        :return:
        """
        try:
            if key:
                self.__sess.setExpiration(
                    key
                )
            else:
                self.__sess.setExpiration(
                    self.__sessID
                )

        except redis.exceptions.DataError as e:
            print(f'application.data.page.Session.feed redis.exceptions.DataError: {str(e)}')

        except Exception as e:
            print(f'application.data.page.Session.feed Exception: {str(e)} {self.__sessID}')


    def found(self, key: str) -> bool:
        """

        :param key:
        :return:
        """
        if key:
            return self.__sess.has(key)
        else:
            return False

    def register(self, key: str) -> None:
        """

        :description: this is for system only
        :return:
        """
        # validate
        if key:
            self.__sess.setHash(
                key= key
                , subKey= self.__es.CREATE_DATETIME_VAR
                , value= str(self.__es.getCreatedDateTime())
            )
