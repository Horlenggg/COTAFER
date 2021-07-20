
from library.MyValidation import MyValidation
from page.controllers.dashboard.DashboardController import DashboardController as dashboard


class DashboardValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def dashboardGet(self):
        try:
            return dashboard(headerParam=self.__h, bodyParam=self.__b).dashboardGet()
        except Exception as e:
            return dashboard(headerParam=self.__h, bodyParam=self.__b).dashboardGet()
