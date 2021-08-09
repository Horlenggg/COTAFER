
from library.MyValidation import MyValidation
from page.controllers.general.GeneralController import GeneralController as general


class GeneralValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def generalUsersGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalUsersGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalUsersGet()

    def generalDepartmentGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentGet()

    def generalRolesGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalRolesGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalRolesGet()

    def generalCompanyGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalCompanyGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalCompanyGet()