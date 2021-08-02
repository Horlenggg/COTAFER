
from library.MyValidation import MyValidation
from page.controllers.document.DocumentController import DocumentController as document
from page.validations.entity.DocumentRule import DocumentRule


class DocumentValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()
        self.__EB = DocumentRule()

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

    def documentAddPost(self):
        try:
            self.body.adds(self.__EB.getDocumentAdd())

            if self.isValid():
                return document(headerParam=self.__h, bodyParam=self.__b).documentAddPost()

        except Exception as e:
            self.log.error('Validation error')

    def documentReversionGet(self):
        try:
            return document(headerParam=self.__h, bodyParam=self.__b).documentReversionGet()
        except Exception as e:
            return document(headerParam=self.__h, bodyParam=self.__b).documentReversionGet()

    def documentReversionPost(self):
        try:
            self.body.adds(self.__EB.getDocumentReversion())

            if self.isValid():
                return document(headerParam=self.__h, bodyParam=self.__b).documentReversionPost()

        except Exception as e:
            self.log.error('Validation error')

