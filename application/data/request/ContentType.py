"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""


class ContentType:
    """

    """

    def __init__(self):
        """
        ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
        """
        self.html   = 'Content-Type: text/html; charset=UTF-8'
        self.json   = 'Content-Type: application/json'
        self.pdf    = 'Content-Type: application/pdf'
        self.text   = 'Content-Type: text/plain; charset=UTF-8'
