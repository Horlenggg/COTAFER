"""
Author: masakokh
Year: 2020
Version: 1.2.1
Package: Framework
"""
import sys
from application.system.Web import Web as WebApp, sfd
import application.constants as ac
from application.data.HtmlStatusCode import HtmlStatusCode as hsc

# instance a flask's object
# web application
wa                  = WebApp()