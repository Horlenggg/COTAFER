from cerberus import Validator
from datetime import datetime
import re


class MyCustomValidation(Validator) :

    def mustBeLength6(field, value, error) :
        if len(str(value)) < 6 or len(str(value)) > 6 :
            error(field, "Must be 6 characters")

    def isValidDate(self) :
        return datetime.strptime(self, "%Y-%M-%d")

    def isValidUTCDate(self) :
        return datetime.strptime(self, "%Y-%m-%dT%H:%M:%S")

    def isValidYear(self) :
        return datetime.strptime(self, "%Y")

    def isValidYearMonth(self) :
        return datetime.strptime(self, "%Y-%M")

    def isStrNum(field, value, error) :
        if value != "" :
            if not str(value).isdigit() :
                error(field, "Must be number")
