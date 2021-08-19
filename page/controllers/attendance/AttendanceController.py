# -*- coding: utf-8 -*-
"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Project
"""
from typing import Any

from library.MyController import MyController, authenticated
from page.models.attendance.AttendanceModel import AttendanceModel


class AttendanceController(MyController):

    def __init__(self, headerParam: dict, bodyParam: dict):

        super().__init__(hParam=headerParam, bParam=bodyParam, modelClass=AttendanceModel())
        
        # view params
        # self._param = {
        #     'active_module'     : ['attendance', '']
        #     , 'client_module'   : '4_attendance'
        # }

    def checkInandOutGet(self) -> Any:
        
        try:
            self.log.info('AttendanceController.checkInandOutGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['checkinandout', '']
                    , 'client_module'   : '4_attendance'
                    , 'base_module'     : 'attendance'
                }
            )

            return self.render(
                viewFile='attendance/checkInAndOut'
            )

        except Exception as e:
            self.log.error(f'AttendanceController.checkInandOutGet Exception ', str(e))
            return self.render(
                viewFile='attendance/checkInAndOut'
            )

    def leaveRequestGet(self) -> Any:
        
        try:
            self.log.info('AttendanceController.leaveRequestGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['leaverequest', '']
                    , 'client_module'   : '4_attendance'
                    , 'base_module'     : 'attendance'
                }
            )

            return self.render(
                viewFile='attendance/leaveRequest'
            )

        except Exception as e:
            self.log.error(f'AttendanceController.leaveRequestGet Exception ', str(e))
            return self.render(
                viewFile='attendance/leaveRequest'
            )

    def publicHolidayGet(self) -> Any:
        
        try:
            self.log.info('AttendanceController.publicHolidayGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['publicholiday', '']
                    , 'client_module'   : '4_attendance'
                    , 'base_module'     : 'attendance'
                }
            )

            return self.render(
                viewFile='attendance/publicHoliday'
            )

        except Exception as e:
            self.log.error(f'AttendanceController.publicHolidayGet Exception ', str(e))
            return self.render(
                viewFile='attendance/publicHoliday'
            )

    def availableDayGet(self) -> Any:
        
        try:
            self.log.info('AttendanceController.availableDayGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['availableday', '']
                    , 'client_module'   : '4_attendance'
                    , 'base_module'     : 'attendance'
                }
            )

            return self.render(
                viewFile='attendance/availableDay'
            )

        except Exception as e:
            self.log.error(f'AttendanceController.availableDayGet Exception ', str(e))
            return self.render(
                viewFile='attendance/availableDay'
            )

    def overTimeDayGet(self) -> Any:
        
        try:
            self.log.info('AttendanceController.overTimeDayGet info')

            # active link
            self.view.addData(
                params={
                    'active_module'     : ['overtimeday', '']
                    , 'client_module'   : '4_attendance'
                    , 'base_module'     : 'attendance'
                }
            )

            return self.render(
                viewFile='attendance/overTimeDay'
            )

        except Exception as e:
            self.log.error(f'AttendanceController.overTimeDayGet Exception ', str(e))
            return self.render(
                viewFile='attendance/overTimeDay'
            )