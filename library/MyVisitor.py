"""
Author: masakokh
Year: 2020
Version: 1.0.0
Package: Framework
"""
import os
import time
import uuid
import datetime
import hashlib
import pytz
from typing import Any
from flask import redirect, request
from application.data.Client import Client
from application.mvc.View import View

class MyVisitor:
	"""

	"""
	def __init__(self):
		"""

		"""
		# set token name
		self.__tokenName	= 'SESSID'

		# temporary value
		self.__registerValue= None
		# view object as reference
		self.__view			= None

	def foundTokenCookie(self) -> bool:
		"""

		:return:
		"""
		return bool(
			request.cookies.get(self.__tokenName)
		)

	def getNewTokenID(self) -> str:
		"""

		:return:
		"""
		# Base url without port: request.remote_addr
		# Base url with port: request.host_url
		# Base url: flask.request.host
		client = Client()

		# generate UUID 5
		return str(
			uuid.uuid5(
				uuid.NAMESPACE_DNS
				, (
					str(client.ipClient)
					+ str(client.ipServer)
					+ client.browserName
					+ str(client.browserVersion)
					+ str(time.time_ns())
				)
			)
		)

	def getRegisteredTokenCookie(self) -> str:
		"""

		:return:
		"""
		return self.__registerValue

	def getTokenCookieName(self) -> str:
		"""

		:return:
		"""
		return self.__tokenName

	def getTokenCookieValue(self) -> str:
		"""

		:return:
		"""
		return request.cookies.get(self.__tokenName)

	def loadCookieLibrary(self, view: View) -> None:
		"""

		:return:
		"""
		self.__view		= view

	def registerTokenCookie(self) -> None:
		"""

		:return:
		"""
		# get a new generate key
		self.__registerValue	= self.getNewTokenID()

		# instance
		self.__view.cookie.add(
			self.__tokenName
			, self.__registerValue
		)
	@staticmethod
	def getNewID() -> str:
		"""

		:return:
		"""
		# Base url without port: request.remote_addr
		# Base url with port: request.host_url
		# Base url: flask.request.host
		client  = Client()

		return str(
			uuid.uuid5(
				uuid.NAMESPACE_DNS
				, (
						str(client.ipClient)
						+ str(client.domainName)
						+ str(time.time_ns())
				)
			)
		)

	@staticmethod
	def getTimestamp(timezoneInfo: str= None) -> str:
		"""

		"""
		try:
			timezoneInfo            = Client().regionName
			# https://stackoverflow.com/questions/31977563/python-how-do-you-convert-a-datetime-timestamp-from-one-timezone-to-another-tim
			timeFormat              = '%Y-%m-%dT%I:%M:%SZ'
			timezone                = pytz.timezone(timezoneInfo)
			serverTime              = datetime.datetime.now(timezone)
			serverTimeInNewTimezone = serverTime.astimezone(timezone)

			# https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes
			return serverTimeInNewTimezone.strftime(timeFormat)

		except Exception as e:
			print(f'MyVisitor getTimestamp:{str(e)}')

			return None
