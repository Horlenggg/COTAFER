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
from page.validations.auth import AuthValidation as auth 
from page.validations.dashboard import DashboardValidation as dashboard
 

@route.get('/')
@route.get('/dashboard')
def dashboardGet():
    return dashboard.DashboardValidation().dashboardGet()
 
# ================= #
#       Auth        #
# ================= #

@route.get('/login')
def loginFormGet():
    return auth.AuthValidation().loginFormGet()

@route.post('/login')
def login():
    return auth.AuthValidation().login()

@route.get('/logout')
def authLogout():
    return auth.AuthValidation().logout()
 