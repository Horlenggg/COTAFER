
from library.MyValidation import MyValidation
from page.controllers.google.GoogleController import GoogleController as google


class GoogleValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def googleGet(self):
        try:
            return google(headerParam=self.__h, bodyParam=self.__b).googleGet()
        except Exception as e:
            return google(headerParam=self.__h, bodyParam=self.__b).googleGet()
