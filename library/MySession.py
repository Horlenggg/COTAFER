"""
Author: masakokh
Year: 2020
Version: 1.0.3
Package: Framework
"""
import redis
import redis.exceptions
from application.data.page.Session import Session
from library.MyVisitor import MyVisitor
from flask import json
from json import loads

class MySession:
    """

    """
    def __init__(self, visitor: MyVisitor):
        """

        """
        self.TOKEN                      = 'token'
        self.PASSWORD                   = 'password'
        self.ACCOUNT_ID                 = 'acc_id'
        self.ACC_INFO                   = 'account_info'
        self.ERROR_MESSAGE              = 'error_message'
        self.SUCCESS_MESSAGE            = 'success_message'
        self.MESSAGE_SESSION_EXPIRE     = 'message_session_expire'
        self.SUBSCRIPION_PLAN_ID        = 'subscription_plan_id'
        self.CHANGE_PLAN                = 'change_plan'
        self.SUBSCRIPTION_PLAN          = 'subscription_plan'
        # concat key
        self.__concatKey= '-'
        # session object
        self.__visitor  = visitor
        # cookie id is cookie name
        self.__cookieID = self.__visitor.getTokenCookieName()
        # cookie value is session name
        self.__sessID   = self.__visitor.getTokenCookieValue()
        # session
        self.__sess     = Session()
        # create default session on the server
        self.__load()

    def __load(self) -> None:
        """

        :return:
        """
        # enable to generate the key
        if not self.__sessID:
            # get the key
            self.__sessID   = self.__visitor.getTokenCookieValue()

    def __key(self, key: str) -> str:
        """

        :param key:
        :return:
        """

        return str((self.__sessID or '') + self.__concatKey + key )

    def delete(self, key) -> None:
        """

        :param key:
        :return:
        """
        self.__sess.delete(
            self.__key(key)
        )

    def found(self, key: str) -> bool:
        """

        :param key:
        :return:
        """
        if key:
            return self.__sess.has(
                self.__key(key)
            )
        else:
            return False

    def get(self, key: str) -> str:
        """

        :param key:
        :return:
        """
        try:
            return \
                self.__sess.get(
                    self.__key(key)
                ).decode('utf-8')
        except Exception as e:
            return ''

    def getAndDelete(self, key: str) -> str:
        """

        """
        try:
            value = self.__sess.get(
                self.__key(key)
            ).decode('utf-8')

            # delete session
            if self.found(key):
                self.delete(key)

            return value
        except Exception as e:
            return ''

    def setDict(self, key: str, value: dict, expiration: int = None) -> None:
        """

        :param key
        :param value
        :param expiration
        :return:
        """
        self.__sess.setDict(
            key= self.__key(key)
            , value= json.dumps(value)
        )

        # expiration
        if expiration:
            self.__sess.setExpiration(
                self.__key(key)
            )

    def getDict(self, key: str) -> str:
        """

        :param key:
        :return:
        """
        try:
            jsonData = self.__sess.get(self.__key(key)).decode('utf-8')
            return loads(jsonData)
        except Exception as e:
            return ''

    def getDictAndDelete(self, key: str) -> str:
        """

        :param key:
        :return:
        """
        try:
            jsonData = self.__sess.get(self.__key(key)).decode('utf-8')

            if self.found(key):
                self.delete(key)
                
            return loads(jsonData)
        except Exception as e:
            return ''

    def set(self, key: str, value: str, expiration: int = None) -> None:
        """

        :param key
        :param value
        :param expiration
        :return:
        """
        self.__sess.set(
            key= self.__key(key)
            , value= value
        )
        
        # expiration
        if expiration:
            self.__sess.setExpiration(
                self.__key(key),
                expiration
            )
