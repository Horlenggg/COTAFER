"""
Author: ing
Year: 2020
Version: 1.0.0
"""

from datetime import datetime


class MyValidationSchema:
    """

    """
    def __init__(self):

        """=========================
                GENERAL FIELD
        ============================"""
        self.__stringRule               = '^[ a-zA-Z0-9,.\\/?!@#$%^&*()\-=+]+$'
        self.__stringRuleAllowedNewLine = '^[ a-zA-Z0-9,.\\/?!@#$%^&*()\-=+\n\r]+$'
        self.__stringRuleKh             = '^[\u1780-\u17FF\u19E0-\u19FF0-9?!​  ]{1,100}$'
        self.__emailRule                = '^[a-zA-Z0-9\.\_]+@([a-zA-Z0-9\-]{1,35}(\.[a-zA-Z0-9\-]{1,35})?)\.([a-zA-Z0-9]{2,15}(\.[a-zA-Z]{2,15})?)$'

        self.__generalString            = None
        self.__generalStringKh          = None
        self.__generalStringWithNewLine = None
        self.__generalInteger           = None
        self.__generalFloat             = None
        self.__inputFloat               = None
        self.__inputInteger             = None
        self.__email                    = None
        self.__loginUserName            = None
        # level 4 password
        self.__password         = None
        self.__datetime         = None
        self.__fromDatetime     = None
        self.__toDatetime       = None
        self.__excludedDay      = None
        self.__title            = None
        self.__unit             = None
        self.__status           = None
        self.__yesNoQuestion    = None
        self.__keyword          = None
        self.__detail           = None
        self.__bookCategory     = None
        self.__newCategory      = None
        self.__bookPublication  = None
        self.__stUserType       = None
        """==========================
                SPECIFIC FIELD
        ============================="""


        # assignment
        self.__load()

    """============================
            GENERAL METHOD
    ==============================="""

    def __load(self) -> None:
        """

        @rtype: object
        @return:
        """
        self.__generalString = {
            'empty'         : False
            , 'maxlength'   : 30
            , 'regex'       : self.__stringRule
        }

        self.__generalStringKh = self.__generalString.copy()
        self.__generalStringKh.update({
            'maxlength' : 100
            , 'regex'   : self.__stringRuleKh
        })

        self.__generalStringWithNewLine = self.__generalString.copy()
        self.__generalStringWithNewLine.update({
            'maxlength'     : 150
            , 'regex'       : self.__stringRuleAllowedNewLine
        })

        self.__generalInteger = {
            'empty'         : False
            , 'integer'     : True
            , 'range_value' : [0, 100]
        }

        self.__generalFloat = {
            'empty': False
            , 'float': True
            , 'range_value': [0, 999999999999999]
        }

        self.__inputFloat = self.__generalFloat.copy()

        self.__inputInteger = self.__generalInteger.copy()
        self.__inputInteger.update({
            'range_value': [0, 999999999999999]
        })

        self.__email = {
            'empty'         : False
            , 'minlength'   : 7
            , 'maxlength'   : 75
            , 'regex'       : self.__emailRule
        }
        self.__loginUserName = {
            'required': True
            , 'length': 7
            , 'regex': '^ctf[0-9]{4}$'
        }
        # level 4 password
        self.__password = {
            'empty'         : False
            , 'length'      : 64
            , 'regex'       : '^[a-f0-9]{64}$'
            , 'not_equal_to': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
        }

        self.__datetime = {
            'empty'             : False
            , 'datetime_string' : True
        }

        self.__fromDatetime = {
            'empty'                 : False
            , 'datetime_string'     : True
        }

        self.__toDatetime = {
            'empty'                 : False
            , 'datetime_string'     : True
            , 'min_datetime_string' : 'fromDate'
        }

        self.__defaultString    = {
            'empty'                 : False,
            'maxlength'             : 30
        }

        self.__defaultStringOptional = self.__defaultString.copy()
        self.__defaultStringOptional.update({
            'empty' : True
        })

        """==========================
                SPECIFIC FIELD
        ============================="""

        # account - register
 

    def getEmail(self) -> dict:
        """

        @return:
        """
        return self.__email

    def getLoginUserName(self) -> dict:
        """

        @return:
        """
        return self.__loginUserName

    def getPassword(self) -> dict:
        """

        @return:
        """
        return self.__password

    def getDatetime(self) -> dict:
        """

        @return:
        """
        return self.__datetime

    def getFromDatetime(self) -> dict:
        """

        @return:
        """
        return self.__fromDatetime

    def getToDatetime(self) -> dict:
        """

        @return:
        """
        return self.__toDatetime


    def getGeneralStringKh(self) -> dict:
        """

        @return:
        """
        return self.__generalStringKh

    def getInputInteger(self) -> dict:
        """

        @return:
        """
        return self.__inputInteger

    def getInputFloat(self) -> dict:
        """

        @return:
        """
        return self.__inputFloat

    """==============================
            SPECIFIC METHOD
    ================================="""

    def getDefaultString(self) -> dict:
        """

        @return:
        """
        return self.__defaultString

    def getDefaultStringOptional(self) -> dict:
        """
        
        @returrn:
        """
        return self.__defaultStringOptional


