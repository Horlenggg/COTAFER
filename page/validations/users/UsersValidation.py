
from library.MyValidation import MyValidation
from page.controllers.users.UsersController import UsersController as users


class UsersValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def usersControlGet(self):
        try:
            return users(headerParam=self.__h, bodyParam=self.__b).usersControlGet()
        except Exception as e:
            return users(headerParam=self.__h, bodyParam=self.__b).usersControlGet()

    # 
    # def controlUsersAddGet(self):
    #     try:
    #         return users(headerParam=self.__h, bodyParam=self.__b).controlUsersAddGet()
    #     except Exception as e:
    #         return users(headerParam=self.__h, bodyParam=self.__b).controlUsersAddGet()

    # # 
    # def controlUsersViewGet(self):
    #     try:
    #         return users(headerParam=self.__h, bodyParam=self.__b).controlUsersViewGet()
    #     except Exception as e:
    #         return users(headerParam=self.__h, bodyParam=self.__b).controlUsersViewGet()
