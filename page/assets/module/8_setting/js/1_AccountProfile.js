if(document.querySelector('#accountProfile')){
    const accountProfile = {
        data() {
            return {
                firstName: ''
                , lastName: ''
                , email: ''
                , phoneNumber: ''
                , department: 0
                , password: ''

                , pfImage: 'https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    
                , deOption: DEPARTMENT
    
                , isFnVal: false
                , isLnVal: false
                , isEmVal: false
                , isPaVal: false
                , isPhVal: false
                , isDeVal: false

                , errMessageFn: ''
                , errMessageLn: ''
                , errMessageEm: ''
                , errMessagePa: ''
                , errMessagePh: ''
                , errMessageDe: ''
            }
        },
        mounted() {
    
        },
        methods: {
            onSubmit(){
                let
                    eRegex = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{8})+$/),
                    pRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
            
                if (!this.firstName) {
                    this.isFnVal = true
                    this.errMessageFn = 'Require.'
                } else {
                    this.isFnVal = false
                    this.errMessageFn = ''
                }

                if (!this.lastName) {
                    this.isLnVal = true
                    this.errMessageLn = 'Require.'
                } else {
                    this.isLnVal = false
                    this.errMessageLn = ''
                }
    
                if (!this.email) {
                    this.isEmVal = true
                    this.errMessageEm = 'Require.'
                } else if (!eRegex.test(this.email)) {
                    this.isEmVal = true
                    this.errMessageEm = 'Not valid email'
                } else {
                    this.isEmVal = false
                    this.errMessageEm = ''
                }
    
                if (!this.password) {
                    this.isPaVal = true
                    this.errMessagePa = 'Require.'
                } else if(!pRegex.test(this.password)) {
                    this.isPaVal = true
                    this.errMessagePa = 'Not valid password'
                } else {
                    this.isPaVal = false
                    this.errMessagePa = ''
                }
    
                if (!this.phoneNumber) {
                    this.isPhVal = true
                    this.errMessagePh = 'Require.'
                } else {
                    this.isPhVal = false
                    this.errMessagePh = ''
                }

                if (this.department == 0) {
                    this.isDeVal = true
                    this.errMessageDe = 'Require.'
                } else {
                    this.isDeVal = false
                    this.errMessageDe = ''
                }
    
                if(!this.isFnVal && !this.isLnVal && !this.isEmVal && !this.isPaVal && !this.isPhVal && !this.isDeVal){
                    let 
                        firstName   = document.createElement('input'),
                        lastName    = document.createElement('input'),
                        email       = document.createElement('input'),
                        password    = document.createElement('input'),
                        phoneNumber = document.createElement('input'),
                        department  = document.createElement('input'),
                        form        = document.createElement('form');
        
                    firstName.name   = 'firstName';
                    firstName.value  = this.firstName;

                    lastName.name   = 'lastName';
                    lastName.value  = this.lastName;
    
                    email.name      = 'email';
                    email.value     = this.email;
        
                    password.name   = 'password';
                    password.value  = Sha256.hash(this.password);
    
                    phoneNumber.name    = 'phoneNumber';
                    phoneNumber.value   = this.phoneNumber;
    
                    department.name    = 'department';
                    department.value   = this.department;
        
                    form.className  = 'hidden';
                    form.method     = 'POST';
                    form.action     = '/account/profile';
        
                    form.append(firstName);
                    form.append(lastName);
                    form.append(email);
                    form.append(password);
                    form.append(phoneNumber);
                    form.append(department);
        
                    document.body.append(form);
                    form.submit();
                }
            }

            , selectImage() {
                this.$refs.fileInput.click()
            }

            , onFileInput() {
                let input = this.$refs.fileInput
                let file = input.files
                if (file && file[0]) {
                    let reader = new FileReader
                    reader.onload = e => {
                        this.pfImage = e.target.result
                    }
                    reader.readAsDataURL(file[0])
                    this.$emit('input', file[0])

                    let formData = new FormData();
                    formData.append("file", file[0]);

                    let request = new XMLHttpRequest();
                    request.open("POST", "/account/profile/upload");
                    request.send(formData);
                }
            }
            , onBack() {
                window.history.back()
            }
        }
    }
    
    const accountProfileApp = Vue.createApp(accountProfile);
    accountProfileApp.mount('#accountProfile');
};