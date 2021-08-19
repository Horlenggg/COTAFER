if(document.querySelector('#accountAdd')){
    const accountAdd = {
        data() {
            return {
                username: ''
                , email: ''
                , password: ''
                , application: 1
                , link: ''
                , permission: 1
    
                , appOption: [
                    { id: 1, value: 'Cotafer News' }
                    , { id: 2, value: 'Gonoka PR' }
                    , { id: 3, value: 'Gonoka Newsfeed' }
                ]
                , perOption: [
                    { id: 1, value: 'Admin' }
                    , { id: 2, value: 'User' }
                ]
    
                , isUsernameVal: false
                , isEmailVal: false
                , isPasswordVal: false
                , isLinkVal: false
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
                    this.isUsernameVal = true;
                } else {
                    this.isUsernameVal = false;
                }
    
                if (!this.email) {
                    this.isEmailVal = true;
                } else if (!eRegex.test(this.email)) {
                    this.isEmailVal = true;
                } else {
                    this.isEmailVal = false;
                }
    
                if (!this.password) {
                    this.isPasswordVal = true;
                } else if(!pRegex.test(this.password)) {
                    this.isPasswordVal = true;
                } else {
                    this.isPasswordVal = false;
                }
    
                if (!this.link) {
                    this.isLinkVal = true;
                } else if(!lRegex.test(this.link)) {
                    this.isLinkVal = true;
                } else {
                    this.isLinkVal = false;
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