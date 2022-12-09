"""
Author: masakokh
Year: 2020
Version: 1.3.0
Package: Framework
"""
# built-in
# external
from smilelog.Logger import Logger
# internal
from library.MyConfig import MyConfig


class MyLogger(Logger):
	"""

	"""
	def __init__(self, color: bool= True):
		"""

		:param color:
		"""
		# load config
		self.__config   = MyConfig().getLogger()

		# call super class
		super().__init__(
			color			= color
			, enableLog		= self.__config.enable
			, enableConsole	= False
			, extension		= self.__config.extension
			# fix name
			, filename		= 'access'
			, path			= self.__config.path
			, line			= True
		)
