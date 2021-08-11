
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

    def generalUsersAddGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalUsersAddGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalUsersAddGet()

    def generalUsersEditGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalUsersEditGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalUsersEditGet()

    def generalUsersViewGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalUsersViewGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalUsersViewGet()

    def generalDepartmentGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentGet()

    def generalDepartmentAddGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentAddGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentAddGet()

    def generalDepartmentEditGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentEditGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentEditGet()

    def generalDepartmentViewGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentViewGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalDepartmentViewGet()

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

    def generalCompanyAddGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalCompanyAddGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalCompanyAddGet()

    def generalCompanyEditGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalCompanyEditGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalCompanyEditGet()

    def generalCompanyViewGet(self):
        try:
            return general(headerParam=self.__h, bodyParam=self.__b).generalCompanyViewGet()
        except Exception as e:
            return general(headerParam=self.__h, bodyParam=self.__b).generalCompanyViewGet()
