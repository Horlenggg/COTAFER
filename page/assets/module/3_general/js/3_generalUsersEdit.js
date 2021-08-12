if(document.querySelector('#generalUsersEdit')){
    const generalUsersEdit = {
        data() {
            return {
                firstName       : ''
                , lastName      : ''
                , email         : ''
                , phoneNumber   : ''
                , department    : [1,2]
                , roles         : [1,2]
                , company       : [1,2]
                , project       : [1,2]
                , password      : ''
                , rePassword    : ''
    
                , isFnVal: false //check validation firstname
                , isLnVal: false //check validation lastname
                , isEmVal: false //check validation email
                , isPhVal: false //check validation phonenumber
                , isDeVal: false //check validation department
                , isRoVal: false //check validation roles
                , isCoVal: false //check validation company
                , isPrVal: false //check validation project
                , isPaVal: false //check validation password
                , isRpVal: false //check validation repassword
                , isValPa: true  //check validation match password and repassword
    
                , errMessageFn: '' //error message firstname
                , errMessageLn: '' //error message lastname
                , errMessageEm: '' //error message email
                , errMessagePh: '' //error message phonenumber
                , errMessageDe: '' //error message department
                , errMessageRo: '' //error message roles
                , errMessageCo: '' //error message company
                , errMessagePr: '' //error message project
                , errMessagePa: '' //error message password
                , errMessageRp: '' //error message repassword
    
                , deOption: [
                    { value: 1, label: 'Ios' }
                    , { value: 2, label: 'Android' }
                    , { value: 3, label: 'Web' }
                    , { value: 4, label: 'Api' }
                ]
                , roOption: [
                    { value: 1, label: 'Ios Developer' }
                    , { value: 2, label: 'Android Developer' }
                    , { value: 3, label: 'Web Developer' }
                    , { value: 4, label: 'Api Developer' }
                ]
                , coOption: [
                    { value: 1, label: 'Gonoka' }
                    , { value: 2, label: 'Cotafer' }
                ]
                , prOption: [
                    { value: 1, label: 'Gonoka PR' }
                    , { value: 2, label: 'Cotafer IM' }
                    , { value: 3, label: 'Cotafer News' }
                    , { value: 4, label: 'Gonoka Newsfeed' }
                ]
            }
        },
        methods: {
            onSubmit() {
    
                let emailRegex      = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{8})+$/),
                    passRegex      = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    
                if(this.firstName.length == 0){
                    this.errMessageFn = 'Require.'
                    this.isFnVal = true
                } else if(this.firstName.length > 75){
                    this.errMessageFn = 'Max character 75 length'
                    this.isFnVal = true
                } else {
                    this.errMessageFn = ''
                    this.isFnVal = false
                }
    
                if(this.lastName.length == 0){
                    this.errMessageLn = 'Require.'
                    this.isLnVal = true
                } else if(this.lastName.length > 75){
                    this.errMessageLn = 'Max character 75 length'
                    this.isLnVal = true
                } else {
                    this.errMessageLn = ''
                    this.isLnVal = false
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
    
                if(this.department.length == 0){
                    this.errMessageDe = 'Require.'
                    this.isDeVal = true
                } else if(this.department.length > 3){
                    this.errMessageDe = 'Max 3'
                    this.isDeVal = true
                } else {
                    this.errMessageDe = ''
                    this.isDeVal = false
                }
    
                if(this.roles.length == 0){
                    this.errMessageRo = 'Require.'
                    this.isRoVal = true
                } else if(this.roles.length > 3){
                    this.errMessageRo = 'Max 3'
                    this.isRoVal = true
                } else {
                    this.errMessageRo = ''
                    this.isRoVal = false
                }
    
                if(this.company.length == 0){
                    this.errMessageCo = 'Require.'
                    this.isCoVal = true
                } else if(this.company.length > 3){
                    this.errMessageCo = 'Max 3'
                    this.isCoVal = true
                } else {
                    this.errMessageCo = ''
                    this.isCoVal = false
                }
    
                if(this.project.length == 0){
                    this.errMessagePr = 'Require.'
                    this.isPrVal = true
                } else if(this.project.length > 3){
                    this.errMessagePr = 'Max 3'
                    this.isPrVal = true
                } else {
                    this.errMessagePr = ''
                    this.isPrVal = false
                }
    
                if(this.password.length == 0){
                    this.errMessagePa = 'Require.'
                    this.isPaVal = true
                } else if(this.password.length > 75){
                    this.errMessagePa = 'Max character 75 length'
                    this.isPaVal = true
                } else if(!passRegex.test(this.password)){
                    this.errMessagePa = 'Not valid password'
                    this.isPaVal = true
                } else {
                    this.errMessagePa = ''
                    this.isPaVal = false
                }
    
                if(this.rePassword.length == 0){
                    this.errMessageRp = 'Require.'
                    this.isRpVal = true
                }  else if(this.password !== this.rePassword){
                    this.errMessageRp = 'Password not match'
                } else {
                    this.errMessageRp = ''
                    this.isRpVal = false
                    this.isValPa = false
                }
                
    
                if(this.firstName || this.lastName || this.email || this.phoneNumber || this.phoneNumber || this.department.length !== 0 || this.roles.length !== 0 || this.company.length !== 0|| this.project.length !== 0 || this.password || this.rePassword){
                    if(!this.isFnVal && !this.isLnVal && !this.isEmVal && !this.isPhVal && !this.isDeVal && !this.isRoVal && !this.isCoVal && !this.isPrVal && !this.isValPa){
                        let 
                            form        = document.createElement('form'),
                            fName       = document.createElement('input'),
                            lName       = document.createElement('input'),
                            email       = document.createElement('input'),
                            pNumber     = document.createElement('input'),
                            department  = document.createElement('input'),
                            roles       = document.createElement('input'),
                            company     = document.createElement('input'),
                            project     = document.createElement('input'),
                            pass        = document.createElement('input'),
                            rePass      = document.createElement('input');
    
                            fName.name              = 'firstName';
                            fName.value             = this.firstName;
                            
                            lName.name              = 'lastName';
                            lName.value             = this.lastName;
    
                            email.name              = 'email';
                            email.value             = this.email;
    
                            pNumber.name            = 'phoneNumber';
                            pNumber.value           = this.phoneNumber;
    
                            department.name         = 'department';
                            department.value        = this.department;
    
                            roles.name              = 'roles';
                            roles.value             = this.roles;
    
                            company.name            = 'company';
                            company.value           = this.company;
    
                            project.name            = 'project';
                            project.value           = this.project;
    
                            pass.name               = 'password';
                            pass.value              = this.password;
    
                            rePass.name             = 'rePassword';
                            rePass.value            = this.rePassword;
    
                            form.append(fName, lName, email, pNumber, department, roles, company, project, pass, rePass);
    
                            form.method             = 'POST'
                            form.action             = '/general/users/add'
                            form.className          = 'hidden';
                            document.querySelector('body').append(form);
    
                            form.submit();
    
                            // console.log('fName : ' + fName.value, 'lName : ' + lName.value, 'email : ' + email.value, 'pNumber : ' + pNumber.value, 'department : ' + department.value, 'roles : ' + roles.value, 'company : ' + company.value, 'project : ' + project.value, 'pass : ' + pass.value, 'rePass : ' + rePass.value);
                    }
                }
            },
        },
    }
    const generalUsersEditApp =  Vue.createApp(generalUsersEdit);
    generalUsersEditApp.component('Multiselect', VueformMultiselect);
    generalUsersEditApp.mount('#generalUsersEdit');
}
