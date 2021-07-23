
from library.MyValidation import MyValidation
from page.controllers.account.AccountController import AccountController as account


class AccountValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

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

    def accountChangePasswordGet(self):
        try:
            return account(headerParam=self.__h, bodyParam=self.__b).accountChangePasswordGet()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountChangePasswordGet()   

    def accountAddGet(self):
        try:
            return account(headerParam=self.__h, bodyParam=self.__b).accountAddGet()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountAddGet()

    def accountEditGet(self):
        try:
            return account(headerParam=self.__h, bodyParam=self.__b).accountEditGet()
        except Exception as e:
            return account(headerParam=self.__h, bodyParam=self.__b).accountEditGet()

