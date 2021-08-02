from entity.Body import Body
from library.validation.MyRule import MyRule

class DocumentRule(Body):

	def __init__(self):

		self.__mRule = MyRule()
		pass

		self.__getDocumentAdd = {
			self.TITLE    		: self.__mRule.getName()
			, self.FILE_NAME    : self.__mRule.getName()
			, self.CATEGORY		: self.__mRule.getId()
			, self.DEPARTMENT	: self.__mRule.getId()
		}

		self.__getDocumentReversion = {
			self.TITLE    		: self.__mRule.getName()
			, self.FILE_NAME    : self.__mRule.getName()
			, self.CATEGORY		: self.__mRule.getId()
			, self.DEPARTMENT	: self.__mRule.getId()
			, self.VERSION		: self.__mRule.getString
		}

	def getDocumentAdd(self) -> dict:
		return self.__getDocumentAdd

	def getDocumentReversion(self) -> dict:
		return self.__getDocumentReversion
 