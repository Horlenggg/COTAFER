if(document.querySelector('#accountAdd')){
    const accountAdd = {
        data() {
            return {
                username: ''
                , email: ''
                , password: ''
                , application: 0
                , link: ''
                , permission: 0
                , phonenumber: ''
                , apOption: [
                    { value: 1, label: 'Cotafer News' }
                    , { value: 2, label: 'Gonoka PR' }
                    , { value: 3, label: 'Gonoka Newsfeed' }
                ]
                , perOption: PERMISSION
                , environment: 0
                , enOption: ENVIRONMENT
                , note: ''

                , isUsVal: false
                , isEmVal: false
                , isPaVal: false
                , isLiVal: false
                , isApVal: false
                , isPeVal: false
                , isPhVal: false
                , isEnVal: false
                , isNoVal: false

                , errMessageUs: ''
                , errMessageEm: ''
                , errMessagePa: ''
                , errMessageLi: ''
                , errMessageAp: ''
                , errMessagePe: ''
                , errMessagePh: ''
                , errMessageEn: ''
                , errMessageNo: ''
            }
        },
        mounted() {
    
        },
        methods: {
            onSubmit(){
                let
                    eRegex = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{8})+$/),
                    pRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
                    lRegex = new RegExp(/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            
                if (!this.username) {
                    this.isUsVal = true
                    this.errMessageUs = 'Require.'
                } else {
                    this.isUsVal = false
                    this.errMessageUs = ''
                }

                if (this.application == 0) {
                    this.isApVal = true
                    this.errMessageAp = 'Require.'
                } else {
                    this.isApVal = false
                    this.errMessageAp = ''
                }

                if (this.permission == 0) {
                    this.isPeVal = true
                    this.errMessagePe = 'Require.'
                } else {
                    this.isPeVal = false
                    this.errMessagePe = ''
                }

                if (!this.phonenumber) {
                    this.isPhVal = true
                    this.errMessagePh = 'Require.'
                } else {
                    this.isPhVal = false
                    this.errMessagePh = ''
                }

                if (this.invironment == 0) {
                    this.isEnVal = true
                    this.errMessageEn = 'Require.'
                } else {
                    this.isEnVal = false
                    this.errMessageEn = ''
                }

                if (!this.note) {
                    this.isNoVal = true
                    this.errMessageNo = 'Require.'
                } else {
                    this.isNoVal = false
                    this.errMessageNo = ''
                }
    
                if (!this.email) {
                    this.isEmVal = true
                    this.errMessageEm = 'Require.'
                } else if (!eRegex.test(this.email)) {
                    this.isEmVal = true
                    this.errMessageEm = 'Email not valid'
                } else {
                    this.isEmVal = false
                    this.errMessageEm = ''
                }
    
                if (!this.password) {
                    this.isPaVal = true
                    this.errMessagePa = 'Require.'
                } else if(!pRegex.test(this.password)) {
                    this.isPaVal = true
                    this.errMessagePa = 'Password not valid'
                } else {
                    this.isPaVal = false
                    this.errMessagePa = ''
                }
    
                if (!this.link) {
                    this.isLiVal = true
                    this.errMessageLi = 'Require.'
                } else if(!lRegex.test(this.link)) {
                    this.isLiVal = true
                    this.errMessageLi = 'Link not valid'
                } else {
                    this.isLiVal = false
                    this.errMessageLi = ''
                }
    
                if(this.isUsernameVal == false && this.isEmailVal == false && this.isPasswordVal == false && this.isLinkVal == false){
                    let 
                        username    = document.createElement('input'),
                        email       = document.createElement('input'),
                        password    = document.createElement('input'),
                        application = document.createElement('input'),
                        link        = document.createElement('input'),
                        permission  = document.createElement('input'),
                        form        = document.createElement('form');
        
                    username.name   = 'username';
                    username.value  = this.username;
    
                    email.name      = 'email';
                    email.value     = this.email;
        
                    password.name   = 'password';
                    password.value  = Sha256.hash(this.password);
    
                    application.name    = 'application';
                    application.value   = parseInt(this.application);
    
                    link.name       = 'link';
                    link.value      = this.link;
    
                    permission.name    = 'permission';
                    permission.value   = parseInt(this.permission);

                    console.log(this.username, this.email, this.password, this.application, this.link, this.permission);
        
                    form.className  = 'hidden';
                    form.method     = 'POST';
                    form.action     = '/account/add';
        
                    form.append(username);
                    form.append(email);
                    form.append(password);
                    form.append(application);
                    form.append(link);
                    form.append(permission);
        
                    document.body.append(form);
                    form.submit();
                }
            }
        }
    }
    
    const accountAddApp = Vue.createApp(accountAdd);
    accountAddApp.mount('#accountAdd');
};