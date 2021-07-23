
from library.MyValidation import MyValidation
from page.controllers.setting.SettingController import SettingController as setting


class SettingValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def settingGet(self):
        try:
            return setting(headerParam=self.__h, bodyParam=self.__b).settingGet()
        except Exception as e:
            return setting(headerParam=self.__h, bodyParam=self.__b).settingGet()

