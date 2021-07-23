"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from library.MyModel import MyModel


class AttendanceModel(MyModel):
    """

    """

    def __init__(self):
        """

        """
        super().__init__()

    def checkInandOutGet(self, token: str, lngCode) -> None:
        """

        :param token:
        :param lngCode:
        :return:
        """
        # self.request.json('/dashboard', {"login_token": token, "lng_code": lngCode})
        pass

    def leaveRequestGet(self, token: str, lngCode) -> None:
        """

        :param token:
        :param lngCode:
        :return:
        """
        # self.request.json('/dashboard', {"login_token": token, "lng_code": lngCode})
        pass

    def publicHolidayGet(self, token: str, lngCode) -> None:
        """

        :param token:
        :param lngCode:
        :return:
        """
        # self.request.json('/dashboard', {"login_token": token, "lng_code": lngCode})
        pass

    def availableDayGet(self, token: str, lngCode) -> None:
        """

        :param token:
        :param lngCode:
        :return:
        """
        # self.request.json('/dashboard', {"login_token": token, "lng_code": lngCode})
        pass

    def overTimeDayGet(self, token: str, lngCode) -> None:
        """

        :param token:
        :param lngCode:
        :return:
        """
        # self.request.json('/dashboard', {"login_token": token, "lng_code": lngCode})
        pass
