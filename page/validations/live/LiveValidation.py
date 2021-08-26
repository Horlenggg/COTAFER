
from library.MyValidation import MyValidation
from page.controllers.live.LiveController import LiveController as live


class LiveValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    def liveGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGet()

    def liveGonokaGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaGet()

    def liveCotaferGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferGet()

    def liveGonokaArchiveGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaArchiveGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveGonokaArchiveGet()

    def liveCotaferArchiveGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferArchiveGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveCotaferArchiveGet()

    def liveAddGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveAddGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveAddGet()

    def liveEditGet(self):
        try:
            return live(headerParam=self.__h, bodyParam=self.__b).liveEditGet()
        except Exception as e:
            return live(headerParam=self.__h, bodyParam=self.__b).liveEditGet()

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
