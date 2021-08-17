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
from page.validations.company       import CompanyValidation as company
from page.validations.test          import TestValidation as test
from page.validations.live          import LiveValidation as live
from page.validations.dashboard     import DashboardValidation as dashboard
from page.validations.account       import AccountValidation as account
from page.validations.document      import DocumentValidation as document
from page.validations.google        import GoogleValidation as google
 

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
@route.get('/acc')
def dashboardGet():
    return dashboard.DashboardValidation().dashboardGet()

@route.get('/acc/account')
def accountGet():
    return account.AccountValidation().accountGet()

@route.get('/acc/account/profile')
def accountProfileGet():
    return account.AccountValidation().accountProfileGet()

@route.post('/acc/account/profile')
def accountProfilePost():
    return account.AccountValidation().accountProfilePost()

@route.post('/acc/account/profile/upload')
def accountProfileUpload():
    return account.AccountValidation().accountProfileUpload()

@route.get('/acc/account/password/change')
def accountChangePasswordGet():
    return account.AccountValidation().accountChangePasswordGet()

@route.post('/acc/account/password/change')
def accountChangePasswordPost():
    return account.AccountValidation().accountChangePasswordPost()

@route.get('/acc/account/add')
def accountAddGet():
    return account.AccountValidation().accountAddGet()

@route.post('/acc/account/add')
def accountAddPost():
    return account.AccountValidation().accountAddPost()

@route.get('/acc/account/edit')
def accountEditGet():
    return account.AccountValidation().accountEditGet()

@route.post('/acc/account/edit')
def accountEditPost():
    return account.AccountValidation().accountEditPost()

@route.get('/acc/document')
def documentGet():
    return document.DocumentValidation().documentGet()

@route.get('/acc/document/add')
def documentAddGet():
    return document.DocumentValidation().documentAddGet()

@route.post('/acc/document/add')
def documentAddPost():
    return document.DocumentValidation().documentAddPost()

@route.post('/acc/document/add/file')
def documentAddFilePost():
    return document.DocumentValidation().documentAddFilePost()

@route.get('/acc/document/reversion')
def documentReversionGet():
    return document.DocumentValidation().documentReversionGet()

@route.post('/acc/document/reversion')
def documentReversionPost():
    return document.DocumentValidation().documentReversionPost()

@route.post('/acc/document/reversion/file')
def documentReversionFilePost():
    return document.DocumentValidation().documentReversionFilePost()

@route.get('/acc/google')
def googleGet():
    return google.GoogleValidation().googleGet()

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
#      company      #
# ================= #

@route.get('/company')
@route.get('/company/users')
def companyUsersGet():
    return company.CompanyValidation().companyUsersGet()

@route.get('/company/users/add')
def companyUsersAddGet():
    return company.CompanyValidation().companyUsersAddGet()

@route.get('/company/users/edit')
def companyUsersEditGet():
    return company.CompanyValidation().companyUsersEditGet()

@route.get('/company/users/view')
def companyUsersViewGet():
    return company.CompanyValidation().companyUsersViewGet()

@route.get('/company/department')
def companyDepartmentGet():
    return company.CompanyValidation().companyDepartmentGet()

@route.get('/company/department/add')
def companyDepartmentAddGet():
    return company.CompanyValidation().companyDepartmentAddGet()

@route.get('/company/department/edit')
def companyDepartmentEditGet():
    return company.CompanyValidation().companyDepartmentEditGet()

@route.get('/company/department/view')
def companyDepartmentViewGet():
    return company.CompanyValidation().companyDepartmentViewGet()

@route.get('/company/roles')
def companyRolesGet():
    return company.CompanyValidation().companyRolesGet()

@route.get('/company/roles/add')
def companyRolesAddGet():
    return company.CompanyValidation().companyRolesAddGet()

@route.get('/company/roles/edit')
def companyRolesEditGet():
    return company.CompanyValidation().companyRolesEditGet()

@route.get('/company/roles/view')
def companyRolesViewGet():
    return company.CompanyValidation().companyRolesViewGet()

@route.get('/company/company')
def companyCompanyGet():
    return company.CompanyValidation().companyCompanyGet()

@route.get('/company/company/add')
def companyCompanyAddGet():
    return company.CompanyValidation().companyCompanyAddGet()

@route.get('/company/company/edit')
def companyCompanyEditGet():
    return company.CompanyValidation().companyCompanyEditGet()

@route.get('/company/company/view')
def companyCompanyViewGet():
    return company.CompanyValidation().companyCompanyViewGet()

# ================= #
#       Test        #
# ================= #

@route.get('/test')
def testGet():
    return test.TestValidation().testGet()

@route.get('/test/add')
def testAddGet():
    return test.TestValidation().testAddGet()

@route.get('/test/edit')
def testEditGet():
    return test.TestValidation().testEditGet()


@route.get('/test/gonoka')
def testGonokaGet():
    return test.TestValidation().testGonokaGet()

@route.get('/test/cotafer')
def testCotaferGet():
    return test.TestValidation().testCotaferGet()

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


@route.get('/live/cotafer/ios')
def liveCotaferIosGet():
    return live.LiveValidation().liveCotaferIosGet()

