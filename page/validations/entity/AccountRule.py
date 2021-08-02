from entity.Body import Body
from library.validation.MyRule import MyRule

class AccountRule(Body):

	def __init__(self):

		self.__mRule = MyRule()
		pass

		self.__getAccountAdd = {
			self.USERNAME    	: self.__mRule.getName()
			, self.EMAIL    	: self.__mRule.getEmail()
			, self.PASSWORD		: self.__mRule.getPassword()
			, self.APPLICATION	: self.__mRule.getId()
			, self.LINK			: self.__mRule.getWebsite()
			, self.PERMISSION 	: self.__mRule.getId()
		}

		self.__getAccountEdit = {
			self.USERNAME    	: self.__mRule.getName()
			, self.EMAIL    	: self.__mRule.getEmail()
			, self.PASSWORD		: self.__mRule.getPassword()
			, self.APPLICATION	: self.__mRule.getId()
			, self.LINK			: self.__mRule.getWebsite()
			, self.PERMISSION 	: self.__mRule.getId()
		}

		self.__getAccountProfile = {
			self.FIRST_NAME    	: self.__mRule.getFirstName()
			, self.LAST_NAME   	: self.__mRule.getLastName()
			, self.EMAIL		: self.__mRule.getEmail()
			, self.PHONE_NUMBER	: self.__mRule.getPhoneNumber()
			, self.DEPARTMENT	: self.__mRule.getId()
			, self.PASSWORD 	: self.__mRule.getPassword()
		}

		self.__getAccountChangePw = {
			self.CURRENT_PASSWORD   : self.__mRule.getPassword()
			, self.NEW_PASSWORD   	: self.__mRule.getPassword()
		}

	def getAccountAdd(self) -> dict:
		return self.__getAccountAdd

	def getAccountEdit(self) -> dict:
		return self.__getAccountEdit

	def getAccountProfile(self) -> dict:
		return self.__getAccountProfile

	def getAccountChangePw(self) -> dict:
		return self.__getAccountChangePw