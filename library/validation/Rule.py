from typing import Any
from library.MyCustomValidation import MyCustomValidation


class Rule:
    """

    """

    def __init__(self):
        """

        """
        super().__init__()

        v = MyCustomValidation

        self.__email = {
            'empty': False
            , 'minlength': 7
            , 'maxlength': 75
            , 'regex': '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
        }

        self.__allowEmptyemail = {
            'empty': True
            , 'minlength': 7
            , 'maxlength': 75
            , 'regex': '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
        }

        self.__id = {
            'required': True
            , 'type': 'integer'
            , 'empty': False
            , 'min': 1
        }

        self.__allowIdEmpty = {
            'required': True
            , 'type': 'integer'
            , 'empty': True
            , 'min': 1
        }

        self.__score = {
            'required': True
            , 'type': 'integer'
            , 'empty': False
            , 'min': 0
            , 'max': 5
        }

        # level 4 password
        self.__password = {
            'type': 'string',
            'empty': False
            , 'minlength': 64
            , 'maxlength': 64
            , 'regex': '^([a-f0-9]{64})$'
        }

        self.__city = {
            'empty': False
            , 'maxlength': 85
        }

        self.__country = {
            'empty': False
            , 'maxlength': 85
        }

        self.__phoneDialUp = {
            'empty': False
            , 'maxlength': 5
        }

        self.__otpCode = {
            'empty': False
            , 'maxlength': 6
        }

        self.__phoneNumber = {
            'empty': False
            , 'minlength': 8
            , 'maxlength': 14
            , 'regex': '^[0-9]{7,13}$'
        }

        self.__optionalPhoneNumber = {
            'empty': True
            , 'minlength': 7
            , 'maxlength': 12
            , 'regex': '^[0-9]{7,12}$'
        }

        # header block
        self.__authorization = {
            'empty': False
            # , 'minlength': 64
            # , 'maxlength': 72
            # , 'regex': '^[0-9a-zA-Z]$'
        }

        self.__clientId = {
            'empty': False
            # , 'minlength': 25
            # , 'maxlength': 64
            # , 'regex': '[a-zA-Z0-9\#]$'
        }

        self.__contentType = {
            'empty': False
            # , 'minlength': 8
            # , 'maxlength': 22
            , 'type': 'string'
            # , 'allowed': ['application/json','multipart/form-data','text']
        }

        self.__countryInfo = {
            'empty': False
            # , 'minlength': 6
            # , 'maxlength': 12
            # , 'regex': '^[a-zA-Z]$'
        }

        self.__deviceId = {
            'empty': False
            # , 'minlength': 6
            # , 'maxlength': 35
            # , 'regex': '[a-zA-Z0-9\-\s\(\)]$'
        }

        self.__installedId = {
            'empty': True
            # , 'minlength': 6
            # , 'maxlength': 12
            # , 'regex': '^[0-9]$'
        }

        self.__keyword = {
            'empty': False
            , 'minlength': 1
            , 'maxlength': 75
            , 'regex': '^[a-z0-9_]*$'
        }

        self.__languageCode = {
            'empty': False
            # , 'minlength': 2
            # , 'maxlength': 2
            # , 'regex': '^[a-z]{2}$'
        }

        self.__loginToken = {
            'empty': False
            # , 'minlength': 32
            # , 'maxlength': 32
            # , 'regex': '^([a-f\d]{32})_(android|ios)$'
        }

        self.__os = {
            'empty': False
            # , 'minlength': 3
            # , 'maxlength': 7
            # , 'regex': '^(android|ios)$'
        }

        self.__regionName = {
            'empty': False
            # , 'minlength': 15
            # , 'maxlength': 25
            # , 'regex': '^[0-9]$'
        }

        self.__hostname = {
            'empty': True
            # , 'minlength': 15
            # , 'maxlength': 25
            # , 'regex': '^[0-9]$'
        }

        self.__token = {
            'type': 'string',
            'empty': False
            , 'minlength': 32
            , 'maxlength': 64
            , 'regex': '^([a-f0-9]{32,64})$'
        }

        self.__tokenBearer = {
            'empty': False
            # , 'minlength': 32
            # , 'maxlength': 64
            # , 'regex': '^Bearer\s([a-f0-9]{64})$'
        }

        self.__tokenMobile = {
            'empty': False
            # , 'minlength': 32
            # , 'maxlength': 64
            # , 'regex': '^([a-f0-9]{64})_(android|ios)$'
        }
        # header block

        #
        self.__username = {
            'empty': False
            , 'is_phone_or_email': True
        }

        # name
        self.__name = {
            'empty': False
            , 'type': 'string'
            , 'minlength': 1
            , 'maxlength': 15
        }

        # first name
        self.__firstName = {
            'type': 'string'
            , 'empty': False
            , 'minlength': 1
            , 'maxlength': 50
            , 'regex': '^[a-zA-Z .-]*$'
        }

        # last name
        self.__lastName = {
            'type': 'string'
            , 'empty': False
            , 'minlength': 1
            , 'maxlength': 30
            , 'regex': '^[a-zA-Z .-]*$'
        }

        # date
        self.__date = {
            'empty': False
            , 'type': 'string'
        }

        # date empty
        self.__dateEmpty = {
            'empty': True
            , 'type': 'string'
        }

        self.__strUTCDateTime = {
            'empty': False
            , 'type': 'date'
            , 'coerce': v.isValidUTCDate
        }

        # default string
        #
        self.__defaultStr = {
            'empty': True
            # , 'minlength': 12
            # , 'maxlength': 75
            # , 'regex': '^[a-zA-Z0-9_]$'
        }

        #
        self.__description = {
            'type': 'string'
            , 'empty': True
            , 'minlength': 1
            , 'maxlength': 100
        }

        self.__AllowStrEmpty = {
            'type': 'string'
            , 'empty': True
            , 'regex': '^([a-zA-Z0-9\ \.\_]{0,100})$'
        }

        # account privacy type
        self.__accPrivacyType = {
            'empty': False
            , 'minlength': 3
            , 'maxlength': 75
            , 'regex': '^([a-zA-Z0-9_])$'
        }

        # terms and privacy policy
        self.__termAndPolicy = {
            'empty': False
            , 'minlength': 3
            , 'maxlength': 75
            , 'regex': '^([terms_conditions,terms_policy,plagiarism_policy]{5,})$'
        }

        self.__website = {
            'type': 'string'
            , 'empty': True
            , 'minlength': 3
            , 'maxlength': 75
        }

        self.__aboutProfile = {
            'type': 'string'
            , 'empty': True
            , 'minlength': 1
            , 'maxlength': 150
        }

        self.__idNumber = {
            'type': 'string'
            , 'empty': True
            , 'minlength': 3
            , 'maxlength': 75
        }

        self.__phContryCode      = {
            'integer': True
            , 'empty': False
            , 'min': 0
        }

        self.__altPHContryCode      = {
            'integer': True
            , 'empty': False
            , 'min': 0
        }

        #
    def getPHContryCode(self) -> dict:
        """
        """
        return self.__phContryCode

    def getAltPHContryCode(self) -> dict:
        """
        """
        return self.__altPHContryCode

    #
    def getWebsite(self) -> dict:
        """
        """
        return self.__website

    #
    def getAboutProfile(self) -> dict:
        """
        """
        return self.__aboutProfile

    #
    def getIdNumber(self) -> dict:
        """
        """
        return self.__idNumber

    #
    def getAllowEmptyemail(self) -> dict:
        """
        """
        return self.__allowEmptyemail

    #
    def getAccPrivacyType(self) -> dict:
        """
        """
        return self.__accPrivacyType

    #
    def getDate(self) -> dict:
        """

        """
        return self.__date

    #
    def getDateEmpty(self) -> dict:
        """

        """
        return self.__dateEmpty

    #
    def getDefaultStr(self) -> dict:
        """
        """
        return self.__defaultStr

    #
    def getDescription(self) -> dict:
        """
        """
        return self.__description

    #
    def getAllowStrEmpty(self) -> dict:
        """
        """
        return self.__AllowStrEmpty

    #
    def getStrUTCDateTime(self) -> dict:
        return self.__strUTCDateTime

    #
    def getEmail(self) -> dict:
        """
        """
        return self.__email

    #
    def getFirstName(self) -> dict:
        """
        """
        return self.__firstName

    #
    def getLastName(self) -> dict:
        """
        """
        return self.__lastName

    #
    def getId(self) -> dict:
        """
        """
        return self.__id

    #
    def getAllowIdEmpty(self) -> dict:
        """
        """
        return self.__allowIdEmpty

    #
    def getScore(self) -> dict:
        """
        """
        return self.__score

    #
    def getPassword(self) -> dict:
        """
        """
        return self.__password

    #
    def getCity(self) -> dict:
        """
        """
        return self.__city

    #
    def getCountry(self) -> dict:
        """
        """
        return self.__country

    #
    def getPhoneDialUp(self) -> dict:
        """
        """
        return self.__phoneDialUp

    #
    def getOTPCode(self) -> dict:
        """
        """
        return self.__otpCode

    #
    def getPhoneNumber(self) -> dict:
        """
        """
        return self.__phoneNumber

    #
    def getOptionalPhoneNumber(self) -> dict:
        """
        """
        return self.__optionalPhoneNumber

    #
    def getAuthorization(self) -> dict:
        """
        """
        return self.__authorization

    #
    def getClientId(self) -> dict:
        """
        """
        return self.__clientId

    #
    def getContentType(self) -> dict:
        """
        """
        return self.__contentType

    #
    def getCountryInfo(self) -> dict:
        """
        """
        return self.__countryInfo

    #
    def getDeviceId(self) -> dict:
        """
        """
        return self.__deviceId

    #
    def getInstalledId(self) -> dict:
        """
        """
        return self.__installedId

    #
    def getLanguageCode(self) -> dict:
        """
        """
        return self.__languageCode

    #
    def getKeyword(self) -> dict:
        """
        """
        return self.__keyword

    #
    def getLoginToken(self) -> dict:
        """
        """
        return self.__loginToken

    #
    def getOS(self) -> dict:
        """
        """
        return self.__os

    #
    def getRegionName(self) -> dict:
        """
        """
        return self.__regionName

    #
    def getToken(self) -> dict:
        """
        """
        return self.__token

    #
    def getTokeBearer(self) -> dict:
        """
        """
        return self.__tokenBearer

    #
    def getTokeMobile(self) -> dict:
        """
        """
        return self.__tokenMobile

    #
    def getUsername(self) -> dict:
        """
        """
        return self.__username

    #
    def getName(self) -> dict:
        """
        """
        return self.__name

    #
    def getHostname(self) -> dict:
        """
        """
        return self.__hostname

    #
    def getTermsAndPrivacy(self) -> dict:
        """
        """
        return self.__termAndPolicy
