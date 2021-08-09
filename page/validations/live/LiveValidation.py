
from library.MyValidation import MyValidation
from page.controllers.live.LiveController import LiveController as live


class LiveValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    # Auth 2_login form
    def liveGonokaIosGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaIosGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaIosGet()

    def liveGonokaAndroidGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaAndroidGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaAndroidGet()

    def liveGonokaWebGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaWebGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaWebGet()

    def liveGonokaApiGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaApiGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaApiGet()

    def liveCotaferIosGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferIosGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferIosGet()

    def liveCotaferAndroidGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferAndroidGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferAndroidGet()

    def liveCotaferWebGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferWebGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferWebGet()

    def liveCotaferApiGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferApiGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferApiGet()
