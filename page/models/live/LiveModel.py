"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from library.MyModel import MyModel


class LiveModel(MyModel):
    """

    """

    def __init__(self):
        """

        """
        super().__init__()

    def testGonokaGet(self, token: str, lngCode) -> None:
        """

        :param token:
        :param lngCode:
        :return:
        """
        # self.request.json('/dashboard', {"login_token": token, "lng_code": lngCode})
        pass
