from application.constants import ROOT_DIR
from crontab import CronTab

def service():

    cron = CronTab(user=True)
    
    COMMAND = ROOT_DIR + '/venv/bin/python3.8 ' + ROOT_DIR + '/service.py'    
    COMMENT = 'clean upload folder'

    cron.remove_all(comment=COMMENT)
    job = cron.new(command=COMMAND, comment=COMMENT)

    # run every single hour
    job.setall('0 * * * *')
    cron.write()
    print('running cron service...')