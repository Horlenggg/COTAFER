"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
from application.data.SystemConfig import SystemConfig as DSC
from application.constants import ASSET_UPLOAD_REAL_PATH


class MyFrontConfig(DSC):
    """

    """
    def __init__(self, data):
        """

        :param data:
        """
        # doc
        self.docMaxSizeMb       = data.get(super().DOC_MAX_SIZE_MB)
        # image
        self.imageExtension     = data.get(super().IMAGE_EXTENSION)
        self.imageMaxSizeMb     = data.get(super().IMAGE_MAX_SIZE_MB)
        # folder
        self.uploadFolder       = ASSET_UPLOAD_REAL_PATH
