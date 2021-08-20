"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from library.MyModel import MyModel


class RoadmapModel(MyModel):
    """

    """

    def __init__(self):
        """

        """
        super().__init__()

    def roadmapGet(self, token: str, lngCode) -> None:
        """

        :param token:
        :param lngCode:
        :return:
        """
        # self.request.json('/dashboard', {"login_token": token, "lng_code": lngCode})
        pass
