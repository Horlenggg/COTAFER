"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
""" 
from startup import wa as route

# route page
"""======================================
    Source Controller Page Validation
======================================"""
from page.validations.auth          import AuthValidation as auth 
from page.validations.attendance    import AttendanceValidation as attendance
from page.validations.dashboard     import DashboardValidation as dashboard
from page.validations.account       import AccountValidation as account
from page.validations.document      import DocumentValidation as document
from page.validations.google        import GoogleValidation as google
from page.validations.setting       import SettingValidation as setting
 

# ================= #
#       Auth        #
# ================= #

@route.get('/login')
def loginGet():
    return auth.AuthValidation().loginGet()

@route.post('/login')
def login():
    return auth.AuthValidation().login()

@route.get('/logout')
def authLogout():
    return auth.AuthValidation().logout()

@route.get('/password/forget')
def forgetPasswordGet():
    return auth.AuthValidation().forgetPasswordGet()

@route.get('/password/new')
def newPasswordGet():
    return auth.AuthValidation().newPasswordGet()

# ================= #
#     Dashboard     #
# ================= #

@route.get('/')
@route.get('/dashboard')
def dashboardGet():
    return dashboard.DashboardValidation().dashboardGet()

@route.get('/account')
def accountGet():
    return account.AccountValidation().accountGet()

@route.get('/account/profile')
def accountProfileGet():
    return account.AccountValidation().accountProfileGet()

@route.post('/account/profile')
def accountProfilePost():
    return account.AccountValidation().accountProfilePost()

@route.get('/account/password/change')
def accountChangePasswordGet():
    return account.AccountValidation().accountChangePasswordGet()

@route.post('/account/password/change')
def accountChangePasswordPost():
    return account.AccountValidation().accountChangePasswordPost()

@route.get('/account/add')
def accountAddGet():
    return account.AccountValidation().accountAddGet()

@route.post('/account/add')
def accountAddPost():
    return account.AccountValidation().accountAddPost()

@route.get('/account/edit')
def accountEditGet():
    return account.AccountValidation().accountEditGet()

@route.post('/account/edit')
def accountEditPost():
    return account.AccountValidation().accountEditPost()

@route.get('/document')
def documentGet():
    return document.DocumentValidation().documentGet()

@route.get('/document/add')
def documentAddGet():
    return document.DocumentValidation().documentAddGet()

@route.post('/document/add')
def documentAddPost():
    return document.DocumentValidation().documentAddPost()

@route.get('/document/reversion')
def documentReversionGet():
    return document.DocumentValidation().documentReversionGet()

@route.post('/document/reversion')
def documentReversionPost():
    return document.DocumentValidation().documentReversionPost()

@route.get('/google')
def googleGet():
    return google.GoogleValidation().googleGet()

@route.get('/setting')
def settingGet():
    return setting.SettingValidation().settingGet()

# ================= #
#    Attendance     #
# ================= #

@route.get('/attendance')
@route.get('/checkinandout')
def checkInandOutGet():
    return attendance.AttendanceValidation().checkInandOutGet()

@route.get('/leaverequest')
def leaveRequestGet():
    return attendance.AttendanceValidation().leaveRequestGet()

@route.get('/publicholiday')
def publicHolidayGet():
    return attendance.AttendanceValidation().publicHolidayGet()

@route.get('/availableday')
def availableDayGet():
    return attendance.AttendanceValidation().availableDayGet()

@route.get('/overtimeday')
def overTimeDayGet():
    return attendance.AttendanceValidation().overTimeDayGet()
 