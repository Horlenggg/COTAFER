
from library.MyValidation import MyValidation
from page.controllers.department.DepartmentController import DepartmentController as department


class DepartmentValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def departmentGet(self):
        try:
            return department(headerParam=self.__h, bodyParam=self.__b).departmentGet()
        except Exception as e:
            return department(headerParam=self.__h, bodyParam=self.__b).departmentGet()

    def departmentAddGet(self):
        try:
            return department(headerParam=self.__h, bodyParam=self.__b).departmentAddGet()
        except Exception as e:
            return department(headerParam=self.__h, bodyParam=self.__b).departmentAddGet()

    def departmentEditGet(self):
        try:
            return department(headerParam=self.__h, bodyParam=self.__b).departmentEditGet()
        except Exception as e:
            return department(headerParam=self.__h, bodyParam=self.__b).departmentEditGet()

    def departmentViewGet(self):
        try:
            return department(headerParam=self.__h, bodyParam=self.__b).departmentViewGet()
        except Exception as e:
            return department(headerParam=self.__h, bodyParam=self.__b).departmentViewGet()
