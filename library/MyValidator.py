"""
Author: ing
Year: 2020
Version: 1.0.0
"""
from typing import Any
from cerberus import Validator
from datetime import datetime
from re import match

class MyValidator(Validator):
    """
    Most of customized rule great to use if the value is a string.
    """
    def _validate_match_list_length_field(self, other, field, value) -> Any:
        """ Test length of list.

        The rule's arguments are validated against this schema:
        {'type': ''}
        """

        if other not in self.document:
            return False
        if len(value) != len(self.document[other]):
            self._error(field,
                        "customized_rule match_length")

    def _validate_maxlength(self, other, field, value) -> Any:
        """ Test maximum length of a string.

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if len(value) > other:
            self._error(field,
                        "customized_rule maxlength")

    def _validate_length(self, other, field, value) -> Any:
        """ Test length of a string.

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if len(value) != other:
            self._error(field,
                        "customized_rule length")

    def _validate_equal_to_field(self, other, field, value) -> Any:
        """ Test if string equal to other field.

        Ex: password should equal to confirm password
        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if other not in self.document:
            return False
        if str(value) != str(self.document[other]):
            self._error(
                field
                , "customized_rule equal_to_field")

    def _validate_not_equal_to_field(self, other, field, value) -> Any:
        """ Test if string not equal to other field.

        Ex: new password should not equal to current password
        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if other not in self.document:
            return False
        if str(value) == str(self.document[other]):
            self._error(
                field
                , "customized_rule not_equal_to_field")

    def _validate_equal_to(self, other, field, value) -> Any:
        """ Test tow string if equal.

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if value != other:
            self._error(
                field
                , "customized_rule not_equal_to")

    def _validate_not_equal_to(self, other, field, value) -> Any:
        """ Test tow string if not equal.

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if value == other:
            self._error(
                field
                , "customized_rule not_equal_to")

    def _validate_date_string(self, other, field, value) -> Any:
        """ Test if date string in format 15-09-2020

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if not other:
                return False

            if value == '':
                self._error(
                    field
                    , "customized_rule empty")
                return
            v = datetime.strptime(value, '%d-%m-%Y')
        except:
            self._error(
                field
                , "customized_rule date_string")

    def _validate_max_date_string(self, other, field, value) -> Any:
        """ Test if max date string in format 15-09-2020

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if other == 'today':
                other = datetime.today()

            v = datetime.strptime(value, '%d-%m-%Y')

            if v > other:
                self._error(
                    field
                    , "customized_rule max_date_string")
        except:
            pass

    def _validate_min_date_string(self, other, field, value) -> Any:
        """ Test if min date string in format 15-09-2020

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if other == 'today':
                other = datetime.today()

            o = datetime(other.year, other.month, other.day)
            v = datetime.strptime(value, '%d-%m-%Y')
            if v < o:
                self._error(
                    field
                    , "customized_rule min_date_string")
        except:
            pass

    def _validate_min_datetime_string(self, other, field, value) -> Any:
        """ Test if min datetime string in format '15-09-2020 19:59'

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if other not in self.document:
                self._error(
                    field
                    , "customized_rule min_datetime_string")
                return False

            o = datetime.strptime(self.document[other], '%d-%m-%Y %H:%M')
            v = datetime.strptime(value, '%d-%m-%Y %H:%M')

            if v < o:
                self._error(
                    field
                    , "customized_rule min_datetime_string")
        except:
            pass

    def _validate_datetime_string(self, other, field, value) -> Any:
        """ Test if datetime string in format 15-09-2020 19:59

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if not other or value == '':
            return False
        try:
            v = datetime.strptime(value, '%d-%m-%Y %H:%M')
        except:
            self._error(
                field
                , "customized_rule datetime_string"
            )

    def _validate_integer(self, other, field, value) -> Any:
        """ Test the oddity of a value.

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if not other or value == '':
            return False
        try:
            v = int(value)
        except:
            self._error(
                field
                , "customized_rule integer")

    def _validate_float(self, other, field, value) -> Any:
        """ Test float from string

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        if not other or value == '':
            return False

        try:
            v = float(value)
        except:
            self._error(
                field
                , "customized_rule float")

    def _validate_min_value(self, other, field, value) -> Any:
        """ Test minimum value from string

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if value == '':
                return False

            v = int(value)
            if v < other:
                self._error(
                    field
                    , "customized_rule min_value")
        except:
            try:
                v = float(value)
                if v < other:
                    self._error(
                        field
                        , "customized_rule min_value")
            except:
                pass

    def _validate_max_value(self, other, field, value) -> Any:
        """ Test maximum value of string

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if value == '':
                return False
            v = int(value)
            if v > other:
                self._error(
                    field
                    , "customized_rule max_value")
        except:
            try:
                v = float(value)
                if v > other:
                    self._error(
                        field
                        , "customized_rule min_value")
            except:
                pass

    def _validate_range_value(self, other, field, value) -> Any:
        """ Test the oddity of a value.

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if value == '':
                return False

            v = int(value)
            if other[0] > v or v > other[1]:
                self._error(
                    field
                    , "customized_rule range_value")
        except:
            try:
                v = float(value)
                if other[0] > v or v > other[1]:
                    self._error(
                        field
                        , "customized_rule range_value")
            except:
                pass

    def _validate_greater_than_equal_field(self, other, field, value) -> Any:
        """ Test minimum value compare to other field value

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if value == '':
                return False

            o = int(self.document[other])
            v = int(value)

            if v < o:
                self._error(
                    field
                    , "customized_rule greater_than_equal_field")
        except:
            try:
                v = float(value)
                o = float(self.document[other])
                if v < o:
                    self._error(
                        field
                        , "customized_rule greater_than_equal_field")
            except:
                pass

    def _validate_is_phone_or_email(self, other, field, value) -> Any:
        """ Test if given value is email or phone

        The rule's arguments are validated against this schema:
        {'type': ''}
        """
        try:
            if value:

                phoneNumberPattern  = '^( *?[0-9] *?){8,14}$'
                emailPattern        = '^[a-zA-Z0-9\.\_]+@([a-zA-Z0-9\-]{1,35}(\.[a-zA-Z0-9\-]{1,35})?)\.([a-zA-Z0-9]{2,15}(\.[a-zA-Z]{2,15})?)$'
                
                if not (match(phoneNumberPattern, value) or match(emailPattern, value)):
                    self._error(
                        field
                        , "customized_rule is_phone_or_email"
                    )
        except:
            self._error(
                field
                , "customized_rule is_phone_or_email"
            )
