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
from page.validations.account       import AccountValidation as account
from page.validations.roadmap       import RoadmapValidation as roadmap
 
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
    return account.AccountValidation().dashboardGet()

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
    return account.AccountValidation().documentGet()

@route.get('/acc/document/add')
def documentAddGet():
    return account.AccountValidation().documentAddGet()

@route.post('/acc/document/add')
def documentAddPost():
    return account.AccountValidation().documentAddPost()

@route.post('/acc/document/add/file')
def documentAddFilePost():
    return account.AccountValidation().documentAddFilePost()

@route.get('/acc/document/reversion')
def documentReversionGet():
    return account.AccountValidation().documentReversionGet()

@route.post('/acc/document/reversion')
def documentReversionPost():
    return account.AccountValidation().documentReversionPost()

@route.post('/acc/document/reversion/file')
def documentReversionFilePost():
    return account.AccountValidation().documentReversionFilePost()

@route.get('/acc/google')
def googleGet():
    return account.AccountValidation().googleGet()

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

@route.get('/test/gonoka/archive')
def testGonokaArchiveGet():
    return test.TestValidation().testGonokaArchiveGet()

@route.get('/test/gonoka/ios')
def testGonokaIosGet():
    return test.TestValidation().testGonokaIosGet()

@route.get('/test/gonoka/android')
def testGonokaAndroidGet():
    return test.TestValidation().testGonokaAndroidGet()

@route.get('/test/gonoka/web')
def testGonokaWebGet():
    return test.TestValidation().testGonokaWebGet()

@route.get('/test/gonoka/api')
def testGonokaApiGet():
    return test.TestValidation().testGonokaApiGet()

@route.get('/test/cotafer')
def testCotaferGet():
    return test.TestValidation().testCotaferGet()

@route.get('/test/cotafer/archive')
def testCotaferArchiveGet():
    return test.TestValidation().testCotaferArchiveGet()

@route.get('/test/cotafer/ios')
def testCotaferIosGet():
    return test.TestValidation().testCotaferIosGet()

@route.get('/test/cotafer/android')
def testCotaferAndroidGet():
    return test.TestValidation().testCotaferAndroidGet()

@route.get('/test/cotafer/web')
def testCotaferWebGet():
    return test.TestValidation().testCotaferWebGet()

@route.get('/test/cotafer/api')
def testCotaferApiGet():
    return test.TestValidation().testCotaferApiGet()

# ================= #
#       Live        #
# ================= #

@route.get('/live')
def liveGet():
    return live.LiveValidation().liveGet()

@route.get('/live/gonoka')
def liveGonokaGet():
    return live.LiveValidation().liveGonokaGet()

@route.get('/live/cotafer')
def liveCotaferGet():
    return live.LiveValidation().liveCotaferGet()

@route.get('/live/add')
def liveAddGet():
    return live.LiveValidation().liveAddGet()

@route.get('/live/edit')
def liveEditGet():
    return live.LiveValidation().liveEditGet()

@route.get('/live/gonoka/archive')
def liveGonokaArchiveGet():
    return live.LiveValidation().liveGonokaArchiveGet()

@route.get('/live/cotafer/archive')
def liveCotaferArchiveGet():
    return live.LiveValidation().liveCotaferArchiveGet()

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

# ================= #
#      roadmap      #
# ================= #

@route.get('/roadmap')
def roadmapGet():
    return roadmap.RoadmapValidation().roadmapGet()

@route.get('/roadmap/add')
def roadmapAddGet():
    return roadmap.RoadmapValidation().roadmapAddGet()

@route.get('/roadmap/edit')
def roadmapEditGet():
    return roadmap.RoadmapValidation().roadmapEditGet()

@route.get('/roadmap/gonoka/archive')
def roadmapGonokaArchiveGet():
    return roadmap.RoadmapValidation().roadmapGonokaArchiveGet()

@route.get('/roadmap/cotafer/archive')
def roadmapCotaferArchiveGet():
    return roadmap.RoadmapValidation().roadmapCotaferArchiveGet()

@route.get('/roadmap/gonoka')
def roadmapGonokaGet():
    return roadmap.RoadmapValidation().roadmapGonokaGet()

@route.get('/roadmap/gonoka/ios')
def roadmapGonokaIosGet():
    return roadmap.RoadmapValidation().roadmapGonokaIosGet()

@route.get('/roadmap/gonoka/android')
def roadmapGonokaAndroidGet():
    return roadmap.RoadmapValidation().roadmapGonokaAndroidGet()

@route.get('/roadmap/gonoka/web')
def roadmapGonokaWebGet():
    return roadmap.RoadmapValidation().roadmapGonokaWebGet()

@route.get('/roadmap/gonoka/api')
def roadmapGonokaApiGet():
    return roadmap.RoadmapValidation().roadmapGonokaApiGet()

@route.get('/roadmap/cotafer')
def roadmapCotaferGet():
    return roadmap.RoadmapValidation().roadmapCotaferGet()

@route.get('/roadmap/cotafer/ios')
def roadmapCotaferIosGet():
    return roadmap.RoadmapValidation().roadmapCotaferIosGet()

@route.get('/roadmap/cotafer/android')
def roadmapCotaferAndroidGet():
    return roadmap.RoadmapValidation().roadmapCotaferAndroidGet()

@route.get('/roadmap/cotafer/web')
def roadmapCotaferWebGet():
    return roadmap.RoadmapValidation().roadmapCotaferWebGet()

@route.get('/roadmap/cotafer/api')
def roadmapCotaferApiGet():
    return roadmap.RoadmapValidation().roadmapCotaferApiGet()