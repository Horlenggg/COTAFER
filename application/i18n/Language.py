"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
from typing import Any

# fix data
# extension
languageFileExt     = '.py'

# path
languagePath        = 'language/'

# It's source of /language/en.py or /language/kh.py
# Value can be /language/en-US.py
languageIOS2        = {
    'en': 'en'
    , 'kh': 'kh'
}

# default language uri by using first element
languageIOS2Default = next(iter(languageIOS2))

# global language
languageIOS2Current = languageIOS2Default