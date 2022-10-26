from flask import request
from application.data.request.HeaderParam import HeaderParam

class Header:

    def __init__(self):

        self.param          = {}
        self.headerParam    = HeaderParam()
        if request is not None:
            self.param = {
                'Os'        : request.user_agent.platform   or self.headerParam.os or ''
                , 'Browser' : request.user_agent.browser    or str(self.headerParam._client._device.browser.family) or ''
                , 'Host'    : request.headers['Host']       or ''
            }
