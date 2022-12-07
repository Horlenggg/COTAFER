"""
Author: masakokh
Year: 2020
Version: 1.1.1
Package: Framework
"""
from typing import Any



class Entity:
	"""

	"""
	def __init__(self):
		"""

		"""
		# core
		self.__elements = {}
		self.__keyName  = ''
	# private

	def addElement(self, key: str, value: Any) -> None:
		"""

		:param key:
		:param value:
		:return:
		"""
		try:
			self.__elements.update({key:value})

		except Exception as e:
			pass

	def getElements(self) -> dict:
		"""

		:return:
		"""
		return self.__elements

	def getKeyName(self) -> str:
		"""

		:return:
		"""
		return self.__keyName

	def setKeyName(self, keyName: str) -> None:
		"""

		:param keyName:
		:return:
		"""
		self.__keyName  = keyName
