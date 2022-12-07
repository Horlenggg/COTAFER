"""
Author: masakokh
Year: 2020
Version: 1.2.2
Package: Framework
"""
import sys
from application.system.Web import Web as WebApp, sfd
import application.constants as ac
from application.data.HtmlStatusCode import HtmlStatusCode as hsc

# instance a flask's object
# web application
webApp                  = WebApp()

# update assets
webApp.static_folder    = (ac.ASSET_PATH).rstrip('/')
webApp.static_url_path  = ac.ASSET_NAME

# update template
webApp.template_folder  = (ac.PAGE_PATH).rstrip('/')