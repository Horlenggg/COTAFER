
from library.MyValidation import MyValidation
from page.controllers.setting.SettingController import SettingController as setting


class SettingValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def settingProfileGet(self):
        try:
            return setting(headerParam=self.__h, bodyParam=self.__b).settingProfileGet()
        except Exception as e:
            return setting(headerParam=self.__h, bodyParam=self.__b).settingProfileGet()

    def settingProfilePost(self):
        try:
            self.body.adds(self.__EB.getAccountProfile())

            if self.isValid():
                return setting(headerParam=self.__h, bodyParam=self.__b).settingProfilePost()

        except Exception as e:
            self.log.error('Validation error')

    def settingProfileUpload(self):
        try:
            return setting(headerParam=self.__h, bodyParam=self.__b).settingProfileUpload()
        except Exception as e:
            return setting(headerParam=self.__h, bodyParam=self.__b).settingProfileUpload()

    def settingChangePasswordGet(self):
        try:
            return setting(headerParam=self.__h, bodyParam=self.__b).settingChangePasswordGet()
        except Exception as e:
            return setting(headerParam=self.__h, bodyParam=self.__b).settingChangePasswordGet()   

    def settingChangePasswordPost(self):
        try:
            self.body.adds(self.__EB.getAccountChangePw())

            if self.isValid():
                return setting(headerParam=self.__h, bodyParam=self.__b).settingChangePasswordPost()
        except Exception as e:
            self.log.error('Validation error')  