"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""
import sys
from application.system.Web import Web as WebApp, sfd
import application.constants as ac
from application.data.HtmlStatusCode import HtmlStatusCode as hsc

# instance a flask's object
# web application
wa                  = WebApp()

# update assets
wa.static_folder    = (ac.ASSET_PATH).rstrip('/')
wa.static_url_path  = ac.ASSET_NAME

# update template
wa.template_folder  = (ac.VIEW_PATH).rstrip('/')