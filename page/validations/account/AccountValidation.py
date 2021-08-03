
from library.MyValidation import MyValidation
from page.controllers.account.AccountController import AccountController as account
from page.validations.entity.AccountRule import AccountRule


class AccountValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()
        self.__EB = AccountRule()

    # Auth 2_login form
    def accountGet(self):
        try:
            return account(headerParam=self.__h, bodyParam=self.__b).accountGet()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountGet()

    def accountProfileGet(self):
        try:
            return account(headerParam=self.__h, bodyParam=self.__b).accountProfileGet()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountProfileGet()

    def accountProfilePost(self):
        try:
            self.body.adds(self.__EB.getAccountProfile())

            if self.isValid():
                return account(headerParam=self.__h, bodyParam=self.__b).accountProfilePost()

        except Exception as e:
            self.log.error('Validation error')

    def accountProfileUpload(self):
        try:
            return account(headerParam=self.__h, bodyParam=self.__b).accountProfileUpload()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountProfileUpload()

    def accountChangePasswordGet(self):
        try:
            return account(headerParam=self.__h, bodyParam=self.__b).accountChangePasswordGet()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountChangePasswordGet()   

    def accountChangePasswordPost(self):
        try:
            self.body.adds(self.__EB.getAccountChangePw())

            if self.isValid():
                return account(headerParam=self.__h, bodyParam=self.__b).accountChangePasswordPost()
        except Exception as e:
            self.log.error('Validation error')  

    def accountAddGet(self):
        try:

            return account(headerParam=self.__h, bodyParam=self.__b).accountAddGet()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountAddGet()

    def accountAddPost(self):
        try:
            self.body.adds(self.__EB.getAccountAdd())

            if self.isValid():
                return account(headerParam=self.__h, bodyParam=self.__b).accountAddPost()

        except Exception as e:
            self.log.error('Validation error')

    def accountEditGet(self):
        try:
            return account(headerParam=self.__h, bodyParam=self.__b).accountEditGet()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountEditGet()

    def accountEditPost(self):
        try:
            self.body.adds(self.__EB.getAccountEdit())

            if self.isValid():
                return account(headerParam=self.__h, bodyParam=self.__b).accountEditPost()

        except Exception as e:
            self.log.error('Validation error')


