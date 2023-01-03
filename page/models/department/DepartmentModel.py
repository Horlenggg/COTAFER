"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from library.MyModel import MyModel


# class UsersModel(MyModel):
class DepartmentModel(MyModel):
    """

    """

    def __init__(self, initParams: dict):
        """
        """
        super().__init__()

        self.setHeaderParams(initParams)

    #
    def departmentGet(self, data: dict) -> None:
        self.request.json('/department/department/get', data)
        