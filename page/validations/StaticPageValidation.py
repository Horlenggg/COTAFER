from library.MyValidation import MyValidation
from page.controllers.StaticPageController import StaticPageController as staticPage

class StaticPageValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__(logColor=True)

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    def privacyPolicyGet(self):
        try:
            return staticPage(headerParam=self.__h, bodyParam=self.__b).privacyPolicyGet()
        except Exception as e:
            return staticPage(headerParam=self.__h, bodyParam=self.__b).privacyPolicyGet()

    def termConditionGet(self):
        try:
            return staticPage(headerParam=self.__h, bodyParam=self.__b).termConditionGet()
        except Exception as e:
            return staticPage(headerParam=self.__h, bodyParam=self.__b).termConditionGet()
