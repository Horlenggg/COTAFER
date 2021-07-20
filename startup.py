"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""

# need to init project
from application import *
from application.crontab import cron

# need to import route and collect
from route.system import *
from route.collect import *

if __name__ == '__main__':
    """
    
    """
    cron.service()
    # start project
    wa.start()
