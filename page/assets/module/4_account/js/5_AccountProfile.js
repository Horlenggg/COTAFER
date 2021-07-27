if(document.querySelector('#accountProfile')){
    const accountProfile = {
        data() {
            return {
                firstName: ''
                , lastName: ''
                , email: ''
                , phoneNumber: ''
                , department: 1
                , password: ''

                , pfImage: 'https://images.unsplash.com/photo-1535704882196-765e5fc62a53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    
                , deOption: [
                    { id: 1, value: 'Web' }
                    , { id: 2, value: 'Mobile' }
                ]
    
                , isFirstNameVal: false
                , isLastNameVal: false
                , isEmailVal: false
                , isPasswordVal: false
                , isPhoneNumberVal: false
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
                    this.isFirstNameVal = true;
                } else {
                    this.isFirstNameVal = false;
                }

                if (!this.lastName) {
                    this.isLastNameVal = true;
                } else {
                    this.isLastNameVal = false;
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
    
                if (!this.phoneNumber) {
                    this.isPhoneNumberVal = true;
                } else {
                    this.isPhoneNumberVal = false;
                }
    
                if(!this.isFirstNameVal && !this.isLastNameVal && !this.isEmailVal && !this.isPasswordVal && !this.isPhoneNumberVal){
                    let 
                        firstName   = document.createElement('input'),
                        lastName    = document.createElement('input'),
                        email       = document.createElement('input'),
                        password    = document.createElement('input'),
                        phoneNumber = document.createElement('input'),
                        department  = document.createElement('input'),
                        form        = document.createElement('form');
        
                    firstName.name   = 'firstname';
                    firstName.value  = this.firstName;

                    lastName.name   = 'lastname';
                    lastName.value  = this.lastName;
    
                    email.name      = 'email';
                    email.value     = this.email;
        
                    password.name   = 'password';
                    password.value  = Sha256.hash(this.password);
    
                    phoneNumber.name    = 'phonenumber';
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
                }
            }
        }
    }
    
    const accountProfileApp = Vue.createApp(accountProfile);
    accountProfileApp.mount('#accountProfile');
};