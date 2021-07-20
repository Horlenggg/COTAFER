"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""
from flask import request
# from application.data.Device import Device
from user_agents import parse

class Client:
    """
    user_agents: https://pypi.org/project/user-agents/
    """
    def __init__(self):
        """

        """
        # object
        # self._device        = Device()
        self._device        = parse(request.headers.get('User-Agent'))
        # browser
        self.browserName    = request.user_agent.browser        or ''
        self.browserVersion = (
                                  request.user_agent.version \
                                  and int(request.user_agent.version.split('.')[0])
                            )                                 or ''
        # domain
        self.domainName     = request.headers['Host']           or ''
        # ip
        self.ipClient       = request.remote_addr               or ''
        self.ipServer       = request.host.split(':')[0]        or ''
        # os
        self.osName         = self._device.os.family            or ''
        self.osType         = request.user_agent.platform       or ''
        self.osVersion      = self._device.os.version_string    or ''
        # url
        self.url            = request.base_url                  or ''
        self.regionName     = ''

        if not 'Region-Name' in request.headers:

            self.regionName     = 'Asia/Phnom_Penh'

        else:
            self.regionName     = request.headers['Region-Name']