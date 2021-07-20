import requests, json

from werkzeug.datastructures import Headers
from library.MyConfig import MyConfig
from library.MyLogger import MyLogger

log = MyLogger()

class RequestAPI:
    """
    """

    def __init__(self) -> None:
        super().__init__()

        self._config    = MyConfig().getData()
        self._api       = self._config['gonoka_web_api']
        self._url       = self._api['url']
        self._h         = {}

    # post
    def post(self, uri: str = '', params: dict = {}):
        try:
            __resp      = requests.post(self._url + uri, json=params, headers=self._h).json()
            # log data response
            log.info('Request to            : ', self._url + uri)
            log.info('Request Params        : ', params)
            log.info('Response              : ', __resp)
            # return result
            return __resp

        except Exception as e:
            log.info('post - ex', str(e))