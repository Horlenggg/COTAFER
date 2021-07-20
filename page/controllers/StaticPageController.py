from library.MyController import MyController
import traceback


class StaticPageController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):
        super().__init__(hParam=headerParam, bParam=bodyParam, viewPath='staticPage/')

    def privacyPolicyGet(self):

        try:
            return self.render('privacyPolicy')
        except:
            self.log.error('StaticPageController -> privacyPolicyGet -> Exception', traceback.format_exc())
            return self.render('privacyPolicy', status=self.status.BAD_REQUEST)


    def termConditionGet(self):

        try:
            return self.render('termCondition')
        except:
            self.log.error('StaticPageController -> termConditionGet -> Exception', traceback.format_exc())
            return self.render('termCondition', self.status.BAD_REQUEST)