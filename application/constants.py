"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""
import os
####################################################
# system define
####################################################
# get project root directory by removing application string, that because of the current folder
ROOT_DIR                    = (os.path.dirname(os.path.abspath(__file__))).replace('/application', '')

# config
CONFIG_PATH                 = ROOT_DIR + '/config/'
CONFIG_FILE_EXT             = '.py'

# log
LOG_SYSTEM_EXTENSION        = '.log'
LOG_SYSTEM_FILE_FORMAT      = '%Y-%m-%d'
LOG_SYSTEM_PATH             = ROOT_DIR + '/logs/'

# address
IP                          = '127.0.0.1'
PORT                        = '7031'

# page or output structure folder
PAGE_PATH                   = ROOT_DIR + '/page/'
# mvc
VIEW_NAME                   = 'views/'
VIEW_PATH                   = PAGE_PATH + VIEW_NAME
VIEW_FILE_EXT               = '.py'
VIEW_FILE_TEMPLATE_EXT      = '.html'
# default template
VIEW_DEFAULT_FILE           = 'default' + VIEW_FILE_TEMPLATE_EXT
VIEW_DEFAULT_TEMPLATE_FILE  = VIEW_PATH + VIEW_DEFAULT_FILE

# assets
ASSET_NAME                  = 'assets'
# ASSET_NAME                  = 'static'
ASSET_PATH                  = PAGE_PATH + ASSET_NAME
ASSET_CSS_PATH              = '/' + ASSET_NAME + '/css/'
ASSET_JS_PATH               = '/' + ASSET_NAME + '/js/'
ASSET_UPLOAD_PATH           = '/' + ASSET_NAME + '/upload/'
# real path
ASSET_CSS_REAL_PATH         = PAGE_PATH.rstrip('/') + ASSET_CSS_PATH
ASSET_JS_REAL_PATH          = PAGE_PATH.rstrip('/') + ASSET_JS_PATH
ASSET_UPLOAD_REAL_PATH      = PAGE_PATH.rstrip('/') + ASSET_UPLOAD_PATH
