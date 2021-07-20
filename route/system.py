"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""
from startup import wa as route, sfd
from page.controllers.DefaultController import DefaultController


# error
@route.errorhandler(404)
def pageNotFound(error):
    """

    """
    return 'This page does not exist', 404


# error
@route.errorhandler(405)
def pageNotFound(error):
    """

    """
    return 'This page does not allow the method', 405


@route.get('/assets/translation.js')
def translation():
    """

    """
    return DefaultController(headerParam={}, bodyParam={}).getJsTranslation()


@route.get('/assets/<path:filename>')
def assetsURL(filename):
    """

    """
    return sfd(route.static_folder, filename), 200


@route.get('/static/<path:filename>')
def staticURL(filename):
    """

    """
    return sfd(route.static_folder, filename), 200


@route.get('/robots.txt')
def robotsTxt():
    """

    """

    # return content
    return      """
                    User-agent: *
                    Disallow: /
                """
