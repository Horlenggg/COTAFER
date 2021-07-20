# check cronTab running service
from crontab import CronTab

cron = CronTab(user=True)

for job in cron:
	print(job)
