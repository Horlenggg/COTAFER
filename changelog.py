"""
# create venv
python3.8 -m venv myvenv

+ add new route
1.0 - 1.2
root/route/collect.py
now it is available only two methods: GET and POST
Note: but you can use any other method such as PUT, DELETE, ...so on
it will use GET method.

@wa.route('/')
def homeDefault():
    return HomeController().get(11), status.OK

@wa.route('/1', methods = ['POST'])
def test1():
    return HomeController().test1(), status.FORBIDDEN

@wa.route('/4/<username>', methods= ['GET'])
def test4(username):
    return username, status.ERROR



+ instance a Controller
1.0 - 1.2
- Controller has view and model as core objects
class HomeController(MyController):
    def test1(self):
        ########## model ##################



        ########## view ##################
        # set view file
        self.view.setViewFile('home')

        # add param to view file one by one
        self.view.addParam("id", id)
        # add params to view file
        self.view.addParams({'he':'is','not':'me'})

        # set title to page of view
        self.view.setTitle('Home Page')

        # set seo part
        self.view.setMetaDescription('hello Kun')
        self.view.setMetaKeyword('cambodia foundation')

        # static file is located in root/page/assets/js or root/page/assets/css
        # add css (file without extension)
        self.view.addCSS('style.min')
        # add external css with full file name
        self.view.addCSS('https://masakokh.com/bb.css')

        # add js (file without extension)
        self.view.addJS('script.min')
        # add external js with full file name
        self.view.addJS('https://masakokh.com/bb.js')


+ Log file
you can found in root/logs/<date.log> as a default setting
you can change to any via root/constant.py
it has 4 methods, you would enjoy for some condition
error, info, track, warning

ex:
self.log.error('title', 'string content')
self.log.error('title', dictionaryData)

in View, Model, Controller, you can use self.log as built-in property

+ Use terser instead of UglifyJs
Because UglifyJs does not support ES6 (https://github.com/mishoo/UglifyJS/issues/659#issuecomment-447820525)

"""