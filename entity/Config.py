"""
Author: masakokh
Year: 2021
Version: 1.0.0
"""
from application.data.Entity import Entity


class Config(Entity):
    """

    """
    CLIENT_VENDOR       = 'client_vendor'
    GONOKA_WEB_API      = 'api'
    GONOKA_MEDIA_API    = 'gonoka_media_api'
    LOGGER              = 'log'
    SECRET_KEY          = 'secret_key'
    SYSTEM              = 'system'
    SESSION             = 'session'

    def __init__(self):
        """

        """
        super().__init__()
