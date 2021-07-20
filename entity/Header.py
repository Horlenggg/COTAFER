from application.data.Entity import Entity


class Header(Entity):
	"""

	"""
	# installation
	AUTHORIZATION	= 'Authorizations'
	# general
	BROWSER         = 'Browser'
	CLIENT_ID		= 'Client-Id'
	CONTENT_TYPE	= 'Content-Type'
	COUNTRY_INFO	= 'Country-Info'
	LANGUAGE_CODE	= 'Language-Code'
	OS 				= 'Os'
	REGION_NAME		= 'Region-Name'
	HOST_NAME		= 'Host'
	# append token and remove authorization for next api
	TOKEN			= 'Token'
	# other statement
	MOBILE			= 'mobile'
	WEB				= 'web'
