
from library.MyValidation import MyValidation
from page.controllers.test.TestController import TestController as test


class TestValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def testGonokaGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaGet()

    def testCotaferGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferGet()

