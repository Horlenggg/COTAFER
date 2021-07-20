"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""

from functools import wraps
from library.MyVisitor import MyVisitor


def authen(func):
	"""

	:param func:
	:return:
	"""

	@wraps(func)
	def decorated(*args, **kwargs):
		"""

		:param args:
		:param kwargs:
		:return:
		"""
		visitor		= MyVisitor()
		# not token cookie
		if not visitor.foundTokenCookie():
			print('No token')
		else:
			print('Token is here')
		return func(*args, **kwargs)

	return decorated


def authrise(func):
	"""

	:param func:
	:return:
	"""

	@wraps(func)
	def decorated(*args, **kwargs):
		"""

		:param args:
		:param kwargs:
		:return:
		"""
		visitor		= MyVisitor()
		# not token cookie
		if not visitor.foundTokenCookie():
			print("No permission")
		return func(*args, **kwargs)

	return decorated