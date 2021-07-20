"""
Author: masakokh
Year: 2021
Version: 1.0.0
Package: Framework
"""
from application.mvc.Model import Model
from library.MyConfig import MyConfig as LMC
from library.MySession import MySession
from library.MyVisitor import MyVisitor

class MyModel(Model):
    """
    """
    def __init__(self):
        """

        """
        super().__init__()

        # load configuration
        self._load()

    def _body(self) -> None:
        """

        :return:
        """
        pass

    def _contentType(self) -> None:
        """

        :return:
        """
        pass

    def _header(self) -> None:
        """

        :return:
        """
        pass

    def _load(self) -> None:
        """

        """
        try:
            self.setPrefixEndpoint(
                LMC().getCotaferAPI().get('url')
            )
        except KeyError as e:
            print(f'MyModel.load: KeyError: {str(e)}')
        except IOError as e:
            print(f'MyModel.load: IOError: {str(e)}')
        except Exception as e:
            print(f'MyModel.load: Exception: {str(e)}')

    def isTokenExpired(self) -> bool:
        """
        check if api token is expired
        """

        session = MySession(MyVisitor())

        isExpired = self.respond.error == 4003

        # is expired, clear exiting token from session
        if isExpired:
            if session.found(session.TOKEN):
                session.delete(session.TOKEN)

        return isExpired

    def isAccept(self, response):
        """

        """

        return response and response['status'] == 'accepted'
