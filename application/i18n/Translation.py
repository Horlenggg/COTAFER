"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
import json
import os
import re
from typing import Any
from application.i18n.Language import languageIOS2 as languageISO2AvailableList, languageIOS2Default
import application.i18n.Language as Ail


class Translation:
    """

    """
    def __init__(self, languageItem: str):
        """

        """
        # list of languages
        self._list      = Ail.languageIOS2
        # current language got by the page
        self._language  = languageItem
        # entire content of the language file
        self._content   = {}
        # delimiter string
        # such as page.title <=> ['page']['title']
        self._delimiter = '.'
        # retrieve content from file
        self._loadContent()

    def _(self, key: str) -> str:
        """

        """
        #
        count   = key.count(self._delimiter)

        try:
            if count > 0:
                # key split
                keySplit = key.split(self._delimiter)

                # detail
                if count    == 1:
                    return self._content[keySplit[0]][keySplit[1]]
                elif count  == 2:
                    return self._content[keySplit[0]][keySplit[1]][keySplit[2]]
                elif count  == 3:
                    return self._content[keySplit[0]][keySplit[1]][keySplit[2]][keySplit[3]]
                elif count  == 4:
                    return self._content[keySplit[0]][keySplit[1]][keySplit[2]][keySplit[3]][keySplit[4]]
                elif count  == 5:
                    return self._content[keySplit[0]][keySplit[1]][keySplit[2]][keySplit[3]][keySplit[4]][keySplit[5]]
                elif count  == 6:
                    return self._content[keySplit[0]][keySplit[1]][keySplit[2]][keySplit[3]][keySplit[4]][keySplit[5]][keySplit[6]]
                elif count  == 7:
                    return self._content[keySplit[0]][keySplit[1]][keySplit[2]][keySplit[3]][keySplit[4]][keySplit[5]][keySplit[6]][keySplit[7]]
                else:
                    return ''
            else:
                return self._content.get(key) \
                       or ''
        except KeyError as e:
            return ''
        except Exception as e:
            return ''

    def _loadContent(self) -> dict:
        """

        :return:
        """
        try:
            # load file into variable
            with open(
                Ail.languagePath \
                + self.getCurrentLanguage() \
                + Ail.languageFileExt
            ) as jsonFile:
                self._content   = json.load(jsonFile)

        except IOError as e:
            print(f'Translation._loadContent : IOError {str(e)}')
        except Exception as e:
            print(f'Translation._loadContent : Exception {str(e)}')

    def getContent(self) -> Any:
        """

        """
        return self._content

    def getCurrentLanguage(self) -> str:
        """

        :param string:
        :return:
        """
        return self.getMappedLanguageFilename(
            self._language
        )

    def getMappedLanguageFilename(self, languageIOS2: str) -> str:
        """

        :param languageIOS2:
        :return:
        """
        try:
            return Ail.languageIOS2[languageIOS2]
        except KeyError as e:
            return Ail.languageIOS2[Ail.languageIOS2Default]
        except Exception as e:
            return Ail.languageIOS2[Ail.languageIOS2Default]

    def isFound(self, languageIOS2: str) -> bool:
        """

        :param languageIOS2:
        :return:
        """
        return bool(
            self._list[languageIOS2]
        )