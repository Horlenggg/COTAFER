"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""


class Response:
    """

    """
    # data
    STATUS          = 'status'
    DATA            = 'data'
    # system record
    LOG_ID          = 'log_id'
    # error
    ERROR_NUMBER    = 'error_number'
    ERROR_MESSAGE   = 'error_message'
    TIMESTAMP       = 'timestamp'

    def __str__(self) -> str:
        """
        
        :return:
        """
        return self.__class__.__name__.lower()
