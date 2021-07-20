from typing import Any
from library.MyValidation import MyValidation
from page.controllers.auth.AuthController import AuthController as controller
from page.validations.entity.AuthRule import AuthRule

class AuthValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__(logColor=True)

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()
        self.__EB = AuthRule()

    def loginFormGet(self, data={}):
        return controller(headerParam=self.__h, bodyParam=self.__b).loginFormGet(data)

    def login(self):
        try:
            self.body.adds(self.__EB.getLogin())

            if str.isnumeric(self.__b.get(self.__EB.USERNAME)):
                # phone
                self.body.add(self.__EB.USERNAME, self.rule.getPhoneNumber())
            else:
                # email
                self.body.add(self.__EB.USERNAME, self.rule.getEmail())

            if self.isValid():
                return controller(headerParam=self.__h, bodyParam=self.__b).login()

            error = {"errorMessage", "validation error"}
            return self.loginFormGet(error)

        except Exception as e:
            error = {"errorMessage", "validation error"}
            return self.loginFormGet(error)

    def logout(self):
        try:
            return controller(headerParam=self.__h, bodyParam=self.__b).logout()
        except Exception as e:
            return controller(headerParam=self.__h, bodyParam=self.__b).logout()
 