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
from page.validations.general       import GeneralValidation as general
from page.validations.test          import TestValidation as test
from page.validations.live          import LiveValidation as live
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

@route.post('/account/profile/upload')
def accountProfileUpload():
    return account.AccountValidation().accountProfileUpload()

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

@route.post('/document/add/file')
def documentAddFilePost():
    return document.DocumentValidation().documentAddFilePost()

@route.get('/document/reversion')
def documentReversionGet():
    return document.DocumentValidation().documentReversionGet()

@route.post('/document/reversion')
def documentReversionPost():
    return document.DocumentValidation().documentReversionPost()

@route.post('/document/reversion/file')
def documentReversionFilePost():
    return document.DocumentValidation().documentReversionFilePost()

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
@route.get('/attendance/checkinandout')
def checkInandOutGet():
    return attendance.AttendanceValidation().checkInandOutGet()

@route.get('/attendance/leaverequest')
def leaveRequestGet():
    return attendance.AttendanceValidation().leaveRequestGet()

@route.get('/attendance/publicholiday')
def publicHolidayGet():
    return attendance.AttendanceValidation().publicHolidayGet()

@route.get('/attendance/availableday')
def availableDayGet():
    return attendance.AttendanceValidation().availableDayGet()

@route.get('/attendance/overtimeday')
def overTimeDayGet():
    return attendance.AttendanceValidation().overTimeDayGet()

# ================= #
#      General      #
# ================= #

@route.get('/general')
@route.get('/general/users')
def generalUsersGet():
    return general.GeneralValidation().generalUsersGet()

@route.get('/general/users/add')
def generalUsersAddGet():
    return general.GeneralValidation().generalUsersAddGet()

@route.get('/general/users/edit')
def generalUsersEditGet():
    return general.GeneralValidation().generalUsersEditGet()

@route.get('/general/users/view')
def generalUsersViewGet():
    return general.GeneralValidation().generalUsersViewGet()

@route.get('/general/department')
def generalDepartmentGet():
    return general.GeneralValidation().generalDepartmentGet()

@route.get('/general/department/add')
def generalDepartmentAddGet():
    return general.GeneralValidation().generalDepartmentAddGet()

@route.get('/general/department/edit')
def generalDepartmentEditGet():
    return general.GeneralValidation().generalDepartmentEditGet()

@route.get('/general/department/view')
def generalDepartmentViewGet():
    return general.GeneralValidation().generalDepartmentViewGet()

@route.get('/general/roles')
def generalRolesGet():
    return general.GeneralValidation().generalRolesGet()

@route.get('/general/roles/add')
def generalRolesAddGet():
    return general.GeneralValidation().generalRolesAddGet()

@route.get('/general/roles/edit')
def generalRolesEditGet():
    return general.GeneralValidation().generalRolesEditGet()

@route.get('/general/roles/view')
def generalRolesViewGet():
    return general.GeneralValidation().generalRolesViewGet()

@route.get('/general/company')
def generalCompanyGet():
    return general.GeneralValidation().generalCompanyGet()

@route.get('/general/company/add')
def generalCompanyAddGet():
    return general.GeneralValidation().generalCompanyAddGet()

@route.get('/general/company/edit')
def generalCompanyEditGet():
    return general.GeneralValidation().generalCompanyEditGet()

@route.get('/general/company/view')
def generalCompanyViewGet():
    return general.GeneralValidation().generalCompanyViewGet()

# ================= #
#       Test        #
# ================= #

@route.get('/test')
@route.get('/test/gonoka')
def testGonokaGet():
    return test.TestValidation().testGonokaGet()

@route.get('/test/gonoka/add')
def testGonokaAddGet():
    return test.TestValidation().testGonokaAddGet()

@route.get('/test/gonoka/edit')
def testGonokaEditGet():
    return test.TestValidation().testGonokaEditGet()

@route.get('/test/cotafer')
def testCotaferGet():
    return test.TestValidation().testCotaferGet()

@route.get('/test/cotafer/add')
def testCotaferAddGet():
    return test.TestValidation().testCotaferAddGet()

@route.get('/test/cotafer/edit')
def testCotaferEditGet():
    return test.TestValidation().testCotaferEditGet()

# ================= #
#       Live        #
# ================= #

@route.get('/live')
def liveGet():
    return live.LiveValidation().liveGet()

@route.get('/live/add')
def liveAddGet():
    return live.LiveValidation().liveAddGet()

@route.get('/live/edit')
def liveEditGet():
    return live.LiveValidation().liveEditGet()

@route.get('/live/gonoka/ios')
def liveGonokaIosGet():
    return live.LiveValidation().liveGonokaIosGet()

@route.get('/live/gonoka/android')
def liveGonokaAndroidGet():
    return live.LiveValidation().liveGonokaAndroidGet()

@route.get('/live/gonoka/web')
def liveGonokaWebGet():
    return live.LiveValidation().liveGonokaWebGet()

@route.get('/live/gonoka/api')
def liveGonokaApiGet():
    return live.LiveValidation().liveGonokaApiGet()

@route.get('/live/cotafer/ios')
def liveCotaferIosGet():
    return live.LiveValidation().liveCotaferIosGet()

@route.get('/live/cotafer/android')
def liveCotaferAndroidGet():
    return live.LiveValidation().liveCotaferAndroidGet()

@route.get('/live/cotafer/web')
def liveCotaferWebGet():
    return live.LiveValidation().liveCotaferWebGet()

@route.get('/live/cotafer/api')
def liveCotaferApiGet():
    return live.LiveValidation().liveCotaferApiGet()
