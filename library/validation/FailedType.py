from typing import Any
from enum import Enum, unique


# @unique
# class FailedType(Enum):
class FailedType:
    """
    """
    # error param of body request
    param: int          = 1
    # token data of header request
    token: int          = 2
    # installation information of fresh request
    installation: int   = 3
