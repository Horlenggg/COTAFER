"""
Author: masakokh
Year: 2020
Version: 1.0.3
"""
from typing import Any
from library.MyValidator import MyValidator


class MyValidationForm:
    """

    """

    def __init__(self, data: dict, allowUnknow: bool = True, requireAll: bool = True):
        """

        @param data:
        @param allowUnknow:
        @param requireAll:
        """
        # html form
        self.__data = data
        # document collection
        self.__document = {}
        self.__documentError = {}
        # rule of document
        self.__schema = {}
        # instant validator
        self.__validator = MyValidator()

        # setting
        self.__load(allowUnknow, requireAll)

    def __load(self, allowUnknow: bool, requireAll: bool) -> None:
        """

        @param allowUnknow:
        @param requireAll:
        @return:
        """
        self.__validator.allow_unknown = allowUnknow
        self.__validator.require_all = requireAll

    def add(self, elementName: str, rule: dict, elementData: str = '') -> None:
        """

        @param elementName:
        @param rule:
        @param elementData:
        @return:
        """
        if elementData == '':
            element = self.__data.get(elementName) or ''
        else:
            element = elementData

        # update document
        self.__document.update({
            elementName: element.strip()
        })

        # update schema
        self.__schema.update({
            elementName: rule
        })

    def addList(self, elementName: str, rule: dict) -> None:
        """

        @param elementName:
        @param rule:
        @return:
        """
        element = self.__data.getlist(elementName) or []

        # update document
        self.__document.update({
            elementName: element
        })

        # update schema
        self.__schema.update({
            elementName: rule
        })

    # to be delete in next commit
    # def matchInList(self, elementName1: str, valueList: list, rule: dict):
    #     """
    #
    #     """
    #     pass

    def addElement(self, elementName: str, value) -> Any:
        """

        @param elementName:
        @param value:
        @return:
        """
        self.__document.update({elementName: value})

    def addElementError(self, elementName: str, error: str) -> Any:
        """

        @param elementName:
        @param error:
        @return:
        """
        self.__documentError.update({elementName: error})

    def getError(self) -> str:
        """

        @return:
        """
        return self.__validator.errors

    def getElement(self) -> dict:
        """

        @return:
        """
        return self.__document

    def getElementError(self) -> dict:
        """

        @return:
        """
        return self.__documentError

    def isValid(self) -> bool:
        """

        @return:
        """

        # everything is okay
        if self.__validator.validate(
                self.__document
                , self.__schema
        ):
            return True

        else:
            for key in self.__validator.errors.keys():
                # check if error made by customized rule
                if \
                        len(str(self.__validator.errors.get(key)[0])) >= 19 and \
                        str(self.__validator.errors.get(key)[0])[0:15:] == 'customized_rule':

                    self.__documentError.update({key: str(self.__validator.errors.get(key)[0])[16::]})
                else:
                    self.__documentError.update({key: self.__validator.document_error_tree[key].errors[0].rule})
            return False
