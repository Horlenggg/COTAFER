
from library.MyValidation import MyValidation
from page.controllers.roadmap.RoadmapController import RoadmapController as roadmap


class RoadmapValidation(MyValidation):

    def __init__(self) -> None:
        super().__init__()

        self.__b = self.body.getElement()
        self.__h = self.header.getElement()

    def roadmapGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGet()

    def roadmapAddGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapAddGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapAddGet()

    def roadmapEditGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapEditGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapEditGet()

    def roadmapArchiveGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapArchiveGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapArchiveGet()

    def roadmapGonokaGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaGet()

    def roadmapGonokaIosGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaIosGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaIosGet()

    def roadmapGonokaAndroidGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaAndroidGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaAndroidGet()

    def roadmapGonokaWebGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaWebGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaWebGet()

    def roadmapGonokaApiGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaApiGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapGonokaApiGet()

    def roadmapCotaferGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferGet()

    def roadmapCotaferIosGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferIosGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferIosGet()

    def roadmapCotaferAndroidGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferAndroidGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferAndroidGet()

    def roadmapCotaferWebGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferWebGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferWebGet()

    def roadmapCotaferApiGet(self):
        try:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferApiGet()
        except Exception as e:
            return roadmap(headerParam=self.__h, bodyParam=self.__b).roadmapCotaferApiGet()