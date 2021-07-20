"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from library.MyModel import MyModel


class AuthModel(MyModel):

    def __init__(self):
        super().__init__()

    #
    def login(self, data: dict) -> None:
        self.request.json('/login', data)
 
    #
    def logout(self, data: str) -> None:
        self.request.json('/logout', data)
