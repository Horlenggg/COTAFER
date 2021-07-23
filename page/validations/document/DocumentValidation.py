
from library.MyValidation import MyValidation
from page.controllers.document.DocumentController import DocumentController as document


class DocumentValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def documentGet(self):
        try:
            return document(headerParam=self.__h, bodyParam=self.__b).documentGet()
        except Exception as e:
            return document(headerParam=self.__h, bodyParam=self.__b).documentGet()

    def documentAddGet(self):
        try:
            return document(headerParam=self.__h, bodyParam=self.__b).documentAddGet()
        except Exception as e:
            return document(headerParam=self.__h, bodyParam=self.__b).documentAddGet()

    def documentReversionGet(self):
        try:
            return document(headerParam=self.__h, bodyParam=self.__b).documentReversionGet()
        except Exception as e:
            return document(headerParam=self.__h, bodyParam=self.__b).documentReversionGet()

