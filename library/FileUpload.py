import os, shutil
from application.constants import ASSET_UPLOAD_REAL_PATH
from library.MyLogger import MyLogger
from library.MyConfig import MyConfig

log         = MyLogger()
mConfig     = MyConfig()

class FileUpload:

    def __init__(self) -> None:
        super().__init__()

        # DIRECTORY SEPARATOR
        self._DS = '/'

    # image
    def cover(self, dataFile, target: int, module: str = '', filename: str = ''):

        try:
            _file   = filename
            _path   = ASSET_UPLOAD_REAL_PATH + module + self._DS + str(target)

            _ext        = mConfig.getSystem().get('cover_extension')
            _sizeMb     = int(mConfig.getSystem().get('cover_max_size_mb'))

            if not os.path.exists(_path):
                os.makedirs(_path)

            if _file and _file.rsplit('.', 1)[1].lower() in _ext:
                # save file
                dataFile.save(os.path.join(_path, _file))

                _fileSizeMb = int(os.path.getsize(_path + self._DS + _file)) / 1024 / 1024

                if _fileSizeMb > _sizeMb:
                    # delete file
                    os.remove(os.path.join(_path, _file))
                    #log
                    log.error(os.path.join(_path, _file), f'cover size is bigger than {_sizeMb } : { _fileSizeMb }')

                    # is not save - file size is big
                    return False

                # is save
                return True

            # is not save
            return False

        except Exception as e:
            log.error('FileUpload.upload - Exception', str(e))
            return False

    # file
    def upload(self, dataFile, target: int, module: str = '', filename: str = ''):

        try:
            _file   = filename
            _path   = ASSET_UPLOAD_REAL_PATH + module + self._DS + str(target)

            _ext        = mConfig.getSystem().get('file_extension')
            _sizeMb     = int(mConfig.getSystem().get('file_max_size_mb'))

            if not os.path.exists(_path):
                os.makedirs(_path)

            if _file and _file.rsplit('.', 1)[1].lower() in _ext:
                # save file
                dataFile.save(os.path.join(_path, _file))

                _fileSizeMb = int(os.path.getsize(_path + self._DS + _file)) / 1024 / 1024

                if _fileSizeMb > _sizeMb:
                    # delete file
                    os.remove(os.path.join(_path, _file))
                    #log
                    log.error(os.path.join(_path, _file), f'file size is bigger than {_sizeMb } : { _fileSizeMb }')

                    # is not save - file size is big
                    return False

                # is save
                return True

            # is not save
            return False

        except Exception as e:
            log.error('FileUpload.upload - Exception', str(e))
            return False

    # image
    def image(self, dataFile, target: int, extension, module: str = '', filename: str = ''):
        try:
            _file   = filename
            _path   = ASSET_UPLOAD_REAL_PATH + module + self._DS + str(target)

            if not os.path.exists(_path):
                os.makedirs(_path)

            if _file and _file.rsplit('.', 1)[1].lower() in extension:
                dataFile.save(os.path.join(_path, _file))

                # is save
                return True
            # is not save
            return False

        except Exception as e:
            log.error('image - Ex', str(e))
            return False

    # image
    def video(self, dataFile, target: int, extension, module: str = '', filename: str = ''):
        try:
            _file   = filename
            _path   = ASSET_UPLOAD_REAL_PATH + module + self._DS + str(target)

            if not os.path.exists(_path):
                os.makedirs(_path)

            if _file and _file.rsplit('.', 1)[1].lower() in extension:
                dataFile.save(os.path.join(_path, _file))

                # is save
                return True
            # is not save
            return False

        except Exception as e:
            log.error('image - Ex', str(e))
            return False