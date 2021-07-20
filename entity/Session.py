"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from datetime import datetime
from application.data.Entity import Entity


class Session(Entity):
    """

    """
    CREATE_DATETIME_FORMAT      = "%Y-%m-%d %H:%M:%S"
    CREATE_DATETIME_VAR         = 'dt'

    def getCreatedDateTime(self) -> str:
        """

        :return:
        """
        return str(
            datetime.now().strftime(Session.CREATE_DATETIME_FORMAT)
        )
