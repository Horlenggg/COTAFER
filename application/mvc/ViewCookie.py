"""
Author: masakokh
Year: 2020
Version: 1.0.0
"""
from typing import Any


class ViewCookie:
	"""

	"""
	def __init__(self):
		"""

		"""
		self.__itemAdd      = {}
		self.__itemDelete   = []

	def add(self, key: str, value: str, expiration: int= None, path: str= None) -> None:
		""""""
		self.__itemAdd[key]	= value

		if expiration:
			self.__cookie[key]			= value

		if path:
			self.__cookie[key]['path']	= path or '/'

	def delete(self, key: str) -> None:
		"""

		:return:
		"""
		self.__itemDelete.append(key)

	def getAdded(self, key: str) -> Any:
		"""

		:return:
		"""
		return self.__itemAdd.get(key)

	def getAddedList(self) -> dict:
		"""

		:return:
		"""
		return self.__itemAdd

	def getDeleted(self, key: str) -> Any:
		"""

		:return:
		"""
		return self.__itemDelete.get(key)

	def getDeletedList(self) -> list:
		"""

		:return:
		"""
		return self.__itemDelete
