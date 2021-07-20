"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""


class BodyParam:
    """

    """

    def __init__(self):
        """

        """
        self._body      = {}

    def add(self, data: dict) -> None:
        """

        :param data:
        :return:
        """
        self._body.update(data)

    def delete(self, key: str) -> None:
        """

        :param key:
        :return:
        """
        try:
            del self._body[key]
        except Exception as e:
            pass
        else:
            pass

    def getAll(self) -> dict:
        """

        :return:
        """
        return self._body
