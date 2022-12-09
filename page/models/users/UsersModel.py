"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from library.MyModel import MyModel


class UsersModel(MyModel):
    """

    """

    def __init__(self, initParams: dict):
        """
        """
        super().__init__()

        self.setHeaderParams(initParams)

    #
    def usersControlGet(self, data: dict) -> None:
        self.request.json('/users/control/get', data)
        