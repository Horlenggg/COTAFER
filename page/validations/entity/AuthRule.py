from entity.Body import Body
from library.validation.MyRule import MyRule

class AuthRule(Body):

	def __init__(self):

		self.__mRule = MyRule()
		pass

		self.__getLogin = {
			self.USERNAME    	: self.__mRule.getEmail()
			, self.PASSWORD    	: self.__mRule.getPassword()
		} 

	def getLogin(self) -> dict:
		return self.__getLogin
 