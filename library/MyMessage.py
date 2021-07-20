class MyMessage:

    def __init__(self, lng: str = 'en'):

        self.__language             = lng
        self.__ERROR                = 'Sorry, your request failed. Please try again later.'
        self.__ERROR_VALIDATION     = 'Failed. Please try again later.'
        self.__FAIL_LOGIN           = 'Invalid email/ phone number or password. Please try again'
        self.__SUCCESS              = 'Your request has been submitted successfully.'
        self.__SUCCESS_DELETE_ACC   = 'Your account has been successfully deleted.'
        self.__SUCCESS_SUSSPEND_ACC = 'Your account has been suspended. Contact us at <a href="mailto:professional@gonoka.com">professional@gonoka.com</a> to reactivate your account.'

    def error(self) -> str:
        return str(self.__ERROR)

    def errorValidation(self) -> str:
        return str(self.__ERROR_VALIDATION)

    def loginFail(self) -> str:
        return str(self.__FAIL_LOGIN)

    def success(self) -> str:
        return str(self.__SUCCESS)

    def success_delete_account(self) -> str:
        return str(self.__SUCCESS_DELETE_ACC)

    def success_suspend_account(self) -> str:
        return str(self.__SUCCESS_SUSSPEND_ACC)
