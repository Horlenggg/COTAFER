
from library.MyValidation import MyValidation
from page.controllers.attendance.AttendanceController import AttendanceController as attendance


class AttendanceValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def checkInandOutGet(self):
        try:
            return attendance(headerParam=self.__h, bodyParam=self.__b).checkInandOutGet()
        except Exception as e:
            return attendance(headerParam=self.__h, bodyParam=self.__b).checkInandOutGet()

    def leaveRequestGet(self):
        try:
            return attendance(headerParam=self.__h, bodyParam=self.__b).leaveRequestGet()
        except Exception as e:
            return attendance(headerParam=self.__h, bodyParam=self.__b).leaveRequestGet()

    def publicHolidayGet(self):
        try:
            return attendance(headerParam=self.__h, bodyParam=self.__b).publicHolidayGet()
        except Exception as e:
            return attendance(headerParam=self.__h, bodyParam=self.__b).publicHolidayGet()

    def availableDayGet(self):
        try:
            return attendance(headerParam=self.__h, bodyParam=self.__b).availableDayGet()
        except Exception as e:
            return attendance(headerParam=self.__h, bodyParam=self.__b).availableDayGet()

    def overTimeDayGet(self):
        try:
            return attendance(headerParam=self.__h, bodyParam=self.__b).overTimeDayGet()
        except Exception as e:
            return attendance(headerParam=self.__h, bodyParam=self.__b).overTimeDayGet()
