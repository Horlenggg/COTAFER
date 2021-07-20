"""
Author: masakokh
Year: 2020
Version: 1.0.1
"""
from typing import Any

from flask.helpers import send_file
from library.validation.Rule import Rule


class MyRule(Rule):
    """
    """
    def __init__(self):
        """

        """
        super().__init__()

        self.__integerStr = {
            'empty': False
            , 'regex': '^[0-9]{1,}$'
        }

        self.__integerAllowEmptyStr = {
            'empty': True
            , 'regex': '^[0-9]{0,}$'
        }

        self.__arrayInteger = {
            'type': 'list'
            , 'empty': False
            , 'schema': {
                'type': 'integer'
            }
        }

        # array string
        self.__arrayIntegerStr = {
            'type': 'list'
            , 'empty': False
            , 'schema': {
                'regex': '^[0-9]{1,}$'
            }
        }

        # array string
        self.__allowArrayIntEmpty = {
            'type': 'list'
            , 'empty': True
            , 'schema': {
                'type': 'integer'
            }
        }
        # array string
        self.__arrayString = {
            'type': 'list'
            , 'empty': False
            , 'schema': {
                'type': 'string'
            }
        }
        # array string
        self.__allowArrayStrEmpty = {
            'type': 'list'
            , 'empty': True
            , 'schema': {
                'type': 'string'
            }
        }
        # array object
        self.__arrayObject = {
            'type': 'list'
            , 'empty': False
            , 'schema': {
                'type': 'dict'
            }
        }
        #
        self.__firstName        = {
            'empty': False
            # , 'minlength': 12
            # , 'maxlength': 75
            # , 'regex': '^[a-zA-Z0-9_]$'
        }

        self.__countryCode      = {
            'integer': True
            , 'empty': False
            , 'min': 0
        }

        self.__verifyCode       = {
            'type': 'string'
            , 'empty': False
            #, 'regex': '^([a-f0-9]{6})$'
        }

        self.__isTermsPrivacy   = {
            'required': True
            , 'type': 'integer'
            , 'empty': False
            , 'min': 0
            , 'max': 1
        }
        self.__limit = {
            'type': 'integer'
            , 'empty': False
            , 'min': 1
            , 'max': 20
        }

        # leave a review
        self.__leaveareview     = {
            'type': 'string'
            , 'empty'       : True
            , 'maxlength'   : 500
        }
        #
        self.__number           = {
            'required': True
            , 'type': 'number'
            , 'min': 0.01
            , 'empty': False
        }
        self.__offset = {
            'type': 'integer'
            , 'empty': False
            , 'min': 0
            , 'max': 1000000000
        }

        self.__pincode = {
            'type': 'integer'
            , 'empty': False
            , 'minlength': 6
            , 'maxlength': 6
        }

        self.__PhotoName = {
            'type': 'string'
            , 'empty': False
            , 'regex': '^([a-zA-Z0-9\.\_]{0,75})$'
        }

        self.__string = {
            'type': 'string'
            , 'empty': False
            , 'regex': '^([a-zA-Z0-9\.\_]{0,75})$'
        }

        # comment text
        self.__comment = {
            'type': 'string'
            , 'empty': False
            , 'maxlength': 500
        }

        # string number
        self.__stringNumber = {
            'type': 'string'
            , 'empty': False
            , 'regex': '^([0-9]{1,75})$'
        }



    @property
    def getIntegerAllowEmptyStr(self) -> dict:
        return self.__integerAllowEmptyStr

    @property
    def getIntegerStr(self) -> dict:
        return self.__integerStr

    @property
    def getArrayIntegerStr(self) -> dict:
        return self.__arrayIntegerStr

    @property
    def getArrayInteger(self) -> dict:
        return self.__arrayInteger

    @property
    def getAllowArrayIntEmpty(self) -> dict:
        return self.__allowArrayIntEmpty

    @property
    def getArrayString(self) -> dict:
        return self.__arrayString

    @property
    def getAllowArrayStrEmpty(self) -> dict:
        return self.__allowArrayStrEmpty

    @property
    def getArrayObject(self) -> dict:
        return self.__arrayObject

    @property
    def getCountryCode(self) -> dict:
        return self.__countryCode

    @property
    def getIsAutoRenewal(self) -> dict:
        return self.__isTermsPrivacy

    @property
    def getIsTerms(self) -> dict:
        return self.__isTermsPrivacy

    @property
    def getVerifyCode(self) -> dict:
        return self.__verifyCode

    @property
    def getLimit(self) -> dict:
        return self.__limit

    @property
    def getLeaveAReview(self) -> dict:
        return self.__leaveareview

    @property
    def getNumber(self) -> dict:
        return self.__number

    @property
    def getOffset(self) -> dict:
        return self.__offset

    @property
    def getPhotoName(self) -> dict:
        return self.__PhotoName

    @property
    def getString(self) -> dict:
        return self.__string

    @property
    def getComment(self) -> dict:
        return self.__comment

    @property
    def getStringNumber(self) -> dict:
        return self.__stringNumber

    @property
    def getPincode(self) -> dict:
        return self.__pincode
