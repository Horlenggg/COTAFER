
from library.MyValidation import MyValidation
from page.controllers.test.TestController import TestController as test


class TestValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def testGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testGet()

    def testAddGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testAddGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testAddGet()

    def testEditGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testEditGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testEditGet()


    def testGonokaGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaGet()

    def testGonokaArchiveGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaArchiveGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaArchiveGet()

    def testGonokaIosGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaIosGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaIosGet()

    def testGonokaAndroidGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaAndroidGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaAndroidGet()

    def testGonokaWebGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaWebGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaWebGet()

    def testGonokaApiGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaApiGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testGonokaApiGet()

    def testCotaferGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferGet()

    def testCotaferArchiveGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferArchiveGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferArchiveGet()

    def testCotaferIosGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferIosGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferIosGet()

    def testCotaferAndroidGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferAndroidGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferAndroidGet()

    def testCotaferWebGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferWebGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferWebGet()

    def testCotaferApiGet(self):
        try:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferApiGet()
        except Exception as e:
            return test(headerParam=self.__h, bodyParam=self.__b).testCotaferApiGet()