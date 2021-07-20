import os
import shutil
import time

from application.constants import ASSET_UPLOAD_REAL_PATH as au
from library.MyLogger import MyLogger

log = MyLogger(True)

def clean():

    # initializing the count
    __deletedFoldersCount   = 0
    __deletedFilesCount     = 0

    seconds = time.time() - (60 * 60) #60 minute

    if os.path.exists(au):

        for r, fo, fi in os.walk(au):

            # checking folder from the root_folder
            for folder in fo:

                # folder path
                __folderPath = os.path.join(r, folder)
                
                # comparing with the days
                if seconds >= getFileOrFolderAge(__folderPath) and len(os.listdir(__folderPath)) == 0:
                    # invoking the removeFolder function
                    removeFolder(__folderPath)
                    __deletedFoldersCount += 1 # incrementing count

            for file in fi:
                # file path
                __filePath = os.path.join(r, file)
                
                # comparing the day
                if seconds >= getFileOrFolderAge(__filePath):
                    removeFile(__filePath)
                    __deletedFilesCount += 1

        log.info('cronService service.clean', f'Total folders deleted: {__deletedFoldersCount}')
        log.info('cronService service.clean', f'Total files deleted: {__deletedFilesCount}')

    else:
        log.error('cronService service.clean folder not exist', au)


def removeFolder(path):

    # removing the folder
    if not shutil.rmtree(path):

        # success message
        log.info('cronService service.removeFolder', f"{path} is removed successfully")

    else:

        # failure message
        log.info('cronService service.removeFolder', f"Unable to delete the {path}")


def removeFile(path):

    # removing the file
    if not os.remove(path):

        # success message
        log.info('cronService service.removeFile', f"{path} is removed successfully")

    else:

        # failure message
        log.info('cronService service.removeFile', f"Unable to delete the {path}")


def getFileOrFolderAge(path):

    # getting ctime of the file/folder
    # time will be in seconds
    ctime = os.stat(path).st_ctime

    # returning the time
    return ctime

clean()