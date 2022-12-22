if(document.querySelector('#companyCompanyAdd')){
    const companyCompanyAdd = {
        data() {
            return {
                companyName     : ''
                , title         : ''
                , website       : ''
                , email         : ''
                , phoneNumber   : ''
                , icon          : ''
                , project       : ''
    
                , isCnVal: false //check validation company name
                , isTtVal: false //check validation title
                , isWsVal: false //check validation website
                , isEmVal: false //check validation email
                , isPhVal: false //check validation phone number
                , isIcVal: false //check validation icon
                , isPrVal: false //check validation project
    
                , errMessageCn: '' //error message company name
                , errMessageTt: '' //error message title
                , errMessageWs: '' //error message website
                , errMessageEm: '' //error message email
                , errMessagePh: '' //error message phone number
                , errMessageIc: '' //error message icon
                , errMessagePr: '' //check validation project
            }
        },
        methods: {
            onSubmit(){
    
                let emailRegex      = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{8})+$/),
                    webRegex        = new RegExp(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/);
    
                if(this.companyName.length == 0){
                    this.errMessageCn = 'Require.'
                    this.isCnVal = true
                } else if(this.companyName.length > 75){
                    this.errMessageCn = 'Max character 75 length'
                    this.isCnVal = true
                } else {
                    this.errMessageCn = ''
                    this.isCnVal = false
                }
    
                if(this.title.length == 0){
                    this.errMessageTt = 'Require.'
                    this.isTtVal = true
                } else if(this.title.length > 75){
                    this.errMessageTt = 'Max character 75 length'
                    this.isTtVal = true
                } else {
                    this.errMessageTt = ''
                    this.isTtVal = false
                }

                if(this.website.length == 0){
                    this.errMessageWs = 'Require.'
                    this.isWsVal = true
                } else if(this.website.length > 75){
                    this.errMessageWs = 'Max character 75 length'
                    this.isWsVal = true
                } else if(!webRegex.test(this.website)){
                    this.errMessageWs = 'Not valid Website'
                    this.isWsVal = true
                } else {
                    this.errMessageWs = ''
                    this.isWsVal = false
                }
    
                if(this.email.length == 0){
                    this.errMessageEm = 'Require.'
                    this.isEmVal = true
                } else if(this.email.length > 75){
                    this.errMessageEm = 'Max character 75 length'
                    this.isEmVal = true
                } else if(!emailRegex.test(this.email)){
                    this.errMessageEm = 'Not valid email'
                    this.isEmVal = true
                } else {
                    this.errMessageEm = ''
                    this.isEmVal = false
                }
    
                if(this.phoneNumber.length == 0){
                    this.errMessagePh = 'Require.'
                    this.isPhVal = true
                } else if(this.phoneNumber.length > 10){
                    this.errMessagePh = 'Max character 10 length'
                    this.isPhVal = true
                } else {
                    this.errMessagePh = ''
                    this.isPhVal = false
                }
    
                if(this.icon.length == 0){
                    this.errMessageIc = 'Require.'
                    this.isIcVal = true
                } else if(this.icon.length > 3){
                    this.errMessageIc = 'Max 3'
                    this.isIcVal = true
                } else {
                    this.errMessageIc = ''
                    this.isIcVal = false
                }

                if(this.project.length == 0){
                    this.errMessageIc = 'Require.'
                    this.isIcVal = true
                } else if(this.icon.length > 3){
                    this.errMessageIc = 'Max 3'
                    this.isIcVal = true
                } else {
                    this.errMessageIc = ''
                    this.isIcVal = false
                }
    
                if(this.companyName || this.title || this.website || this.email || this.phoneNumber || this.icon.length !== 0 ){
                    if(!this.isCnVal && !this.isTtVal && !this.isWsVal && !this.isEmVal && !this.isPhVal && !this.isIcVal){
                        let 
                            form        = document.createElement('form'),
                            cName       = document.createElement('input'),
                            title       = document.createElement('input'),
                            website     = document.createElement('input'),
                            email       = document.createElement('input'),
                            pNumber     = document.createElement('input'),
                            icon        = document.createElement('input'),
                            project     = document.createElement('input');
    
                            cName.name              = 'companyName';
                            cName.value             = this.companyName;
                            
                            title.name              = 'title';
                            title.value             = this.title;

                            website.name            = 'website';
                            website.value           = this.website;
    
                            email.name              = 'email';
                            email.value             = this.email;
    
                            pNumber.name            = 'phoneNumber';
                            pNumber.value           = this.phoneNumber;
    
                            icon.name               = 'icon';
                            icon.value              = this.icon;
    
                            project.name            = 'project';
                            project.value           = this.project;
    
                            form.append(cName, title, website, email, pNumber, icon, project);
    
                            form.method             = 'POST'
                            form.action             = '/company/company/add'
                            form.className          = 'hidden';
                            document.querySelector('body').append(form);
    
                            console.log(form);
                            // form.submit();
                    }
                }
            },
            onHandleFile(e){
                let file    = e.target.files;
                this.icon   = file;
            }
        },
    }
    const companyCompanyAddApp =  Vue.createApp(companyCompanyAdd);
    companyCompanyAddApp.mount('#companyCompanyAdd');    
}
