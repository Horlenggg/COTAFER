
from library.MyValidation import MyValidation
from page.controllers.company.CompanyController import CompanyController as company


class CompanyValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def companyUsersGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyUsersGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyUsersGet()

    def companyUsersAddGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyUsersAddGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyUsersAddGet()

    def companyUsersEditGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyUsersEditGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyUsersEditGet()

    def companyUsersViewGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyUsersViewGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyUsersViewGet()

    def companyDepartmentGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyDepartmentGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyDepartmentGet()

    def companyDepartmentAddGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyDepartmentAddGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyDepartmentAddGet()

    def companyDepartmentEditGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyDepartmentEditGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyDepartmentEditGet()

    def companyDepartmentViewGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyDepartmentViewGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyDepartmentViewGet()

    def companyRolesGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyRolesGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyRolesGet()

    def companyRolesAddGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyRolesAddGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyRolesAddGet()

    def companyRolesEditGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyRolesEditGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyRolesEditGet()

    def companyRolesViewGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyRolesViewGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyRolesViewGet()

    def companyCompanyGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyCompanyGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyCompanyGet()

    def companyCompanyAddGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyCompanyAddGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyCompanyAddGet()

    def companyCompanyEditGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyCompanyEditGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyCompanyEditGet()

    def companyCompanyViewGet(self):
        try:
            return company(headerParam=self.__h, bodyParam=self.__b).companyCompanyViewGet()
        except Exception as e:
            return company(headerParam=self.__h, bodyParam=self.__b).companyCompanyViewGet()
