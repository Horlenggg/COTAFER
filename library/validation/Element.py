
from library.MyValidator import MyValidator
from cerberus import Validator
from typing import Any
from library.MyLogger import MyLogger

log = MyLogger()


class Element:
    def __init__(self, params: dict, allowUnknow: bool = True, requireAll: bool = True) -> None:

        # data
        self.__data             = params
        # document
        self.__document         = {}
        # document error
        self.__documentError    = {}
        # rule of document
        self.__schema           = {}
        # validator
        self.__validator        = MyValidator()
        # found customized error
        self.__found            = {}
        # setting
        self.__load(allowUnknow, requireAll)

    # load
    def __load(self, allowUnkown: bool, requireAll: bool) -> None:
        self.__validator.allow_unkown   = allowUnkown
        self.__validator.require_all    = requireAll

    # adds
    def adds(self, elem: dict) -> None:
        """

        """
        for key, value in elem.items(): # less memory intensive
            self.add(key, value)

    def add(self, elementName: str, rule: dict) -> None:
        """

        """
        element = self.__data.get(elementName)

        try:
            # string
            if isinstance(element, str):
                # update document
                self.__document.update({
                    elementName: element.strip()
                })

                # update document error
                self.__documentError.update({
                    elementName: element.strip()
                })

                # update schema
                self.__schema.update({
                    elementName: rule
                })

            # integer and float
            elif isinstance(element, int) or isinstance(element, float):
                # update document
                self.__document.update({
                    elementName: element
                })

                # update document error
                self.__documentError.update({
                    elementName: element
                })

                # update schema
                self.__schema.update({
                    elementName: rule
                })

            # other data types
            else:
                # update document
                self.__document.update({
                    elementName: element
                })

                # update document error
                self.__documentError.update({
                    elementName: element
                })

                # update schema
                self.__schema.update({
                    elementName: rule
                })

        except Exception as e:
            log.info(f'Element.add ex :: {str(e)}')
            pass

    def matchElement(self, elementName1: str, elementName2: str, keyOutput: str) -> None:
        """

        """
        element1 = self.__data.get(elementName1)
        element2 = self.__data.get(elementName2)

        # need result True
        if element1 != element2:
            # update document error
            self.__found.update({
                elementName2: keyOutput
            })

    def matchNotElement(self, elementName1: str, elementName2: str, keyOutput: str) -> None:
        """

        """
        element1 = self.__data.get(elementName1)
        element2 = self.__data.get(elementName2)

        # need result True
        if element1 == element2:
            # update document error
            self.__found.update({
                elementName2: keyOutput
            })

    def getElement(self) -> dict:
        """

        """
        return self.__document

    def getError(self) -> str:
        """

        """
        return self.__validator.errors

    def getElementError(self) -> dict:
        """

        """
        return self.__documentError

    # is valid
    def isValid(self) -> bool:
        """

        """
        try:

            # everything is okay
            if self.__validator.validate(
                self.__document
                , self.__schema
            ):
                # not found
                if not self.__found:

                    return True

                else:
                    # reset dictionary
                    self.__documentError    = {}
                    self.__documentError.update(self.__found)
                    return False
            else:
                for key in self.__validator.errors.keys():
                    log.info(f'isValid-key :: {key}')
                    self.__documentError.update({
                        key: self.__validator.document_error_tree[key].errors[0].rule
                    })
                log.info(f'Element.isValid document error :: {str(self.__documentError)}')
                return False

        except Exception as e:
            log.info(f'Element.isValid ex :: {str(e)}')
            return False
