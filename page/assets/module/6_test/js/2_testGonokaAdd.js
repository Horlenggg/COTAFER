if(document.querySelector('#testGonokaAdd')){
    const testGonokaAdd = {
        data() {
            return {
                version             : ''

                , projectName       : 0
                , prOption          : [
                    { value: 1, label: 'Ios' }
                    , { value: 2, label: 'Android' }
                    , { value: 3, label: 'Web' }
                    , { value: 4, label: 'Api' }
                ]
    
                , improveTest       : []
                , imTOption         : [
                    { value: 1, label: 'Gonoka PR' }
                    , { value: 2, label: 'Cotafer IM' }
                    , { value: 3, label: 'Cotafer News' }
                    , { value: 4, label: 'Gonoka Newsfeed' }
                ]

                , improvePublic     : []
                , imPOption         : [
                    { value: 1, label: 'Gonoka PR' }
                    , { value: 2, label: 'Cotafer IM' }
                    , { value: 3, label: 'Cotafer News' }
                    , { value: 4, label: 'Gonoka Newsfeed' }
                ]

                , byLink            : ''
                , formLink          : ''
                , releaseDate       : ''

                , platform          : 0
                , plOption: [
                    { value: 1, label: 'Gonoka PR' }
                    , { value: 2, label: 'Cotafer IM' }
                    , { value: 3, label: 'Cotafer News' }
                    , { value: 4, label: 'Gonoka Newsfeed' }
                ]

                , startTestDate     : ''
                , finishTestDate    : ''
                , stagingDate       : ''
                , productDate       : ''
                , report            : ''
            }
        },
        mounted() {
            flatpickr("#releaseDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
            flatpickr("#startTestDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
            flatpickr("#finishTestDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
            flatpickr("#stagingDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
            flatpickr("#productDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
        },
        methods: {
            onSubmit() {
    
                if(this.version.length == 0){
                    this.errMessageVe = 'Require.'
                    this.isVeVal = true
                } else if(this.version.length > 30){
                    this.errMessageVe = 'Max character 30 length'
                    this.isVeVal = true
                } else {
                    this.errMessageVe = ''
                    this.isVeVal = false
                }
    
                if(this.projectName == 0){
                    this.errMessagePr = 'Require.'
                    this.isPrVal = true
                } else {
                    this.errMessagePr = ''
                    this.isPrVal = false
                }
    
                if(this.improveTest.length == 0){
                    this.errMessageImT = 'Require.'
                    this.isImTVal = true
                } else {
                    this.errMessageImT = ''
                    this.isImTVal = false
                }

                if(this.improvePublic.length == 0){
                    this.errMessageImP = 'Require.'
                    this.isImPVal = true
                } else {
                    this.errMessageImP = ''
                    this.isImPVal = false
                }

                if(this.byLink.length == 0){
                    this.errMessageBl = 'Require.'
                    this.isBlVal = true
                } else if(this.byLink.length > 75){
                    this.errMessageBl = 'Max character 75 length'
                    this.isBlVal = true
                } else {
                    this.errMessageBl = ''
                    this.isBlVal = false
                }

                if(this.formLink.length == 0){
                    this.errMessageBl = 'Require.'
                    this.isFlVal = true
                } else if(this.formLink.length > 75){
                    this.errMessageBl = 'Max character 75 length'
                    this.isFlVal = true
                } else {
                    this.errMessageBl = ''
                    this.isFlVal = false
                }

                if(this.releaseDate.length == 0){
                    this.errMessageRe = 'Require.'
                    this.isBlVal = true
                } else {
                    this.errMessageRe = ''
                    this.isBlVal = false
                }
                
                if(this.platform == 0){
                    this.errMessagePl = 'Require.'
                    this.isPlVal = true
                } else {
                    this.errMessagePl = ''
                    this.isPlVal = false
                }

                if(this.startTestDate.length == 0){
                    this.errMessageSt = 'Require.'
                    this.isStVal = true
                } else {
                    this.errMessageSt = ''
                    this.isStVal = false
                }

                if(this.finishTestDate.length == 0){
                    this.errMessageFi = 'Require.'
                    this.isFiVal = true
                } else {
                    this.errMessageFi = ''
                    this.isFiVal = false
                }

                if(this.stagingDate.length == 0){
                    this.errMessageStD = 'Require.'
                    this.isStDVal = true
                } else {
                    this.errMessageStD = ''
                    this.isStDVal = false
                }

                if(this.productDate.length == 0){
                    this.errMessagePrD = 'Require.'
                    this.isPrDVal = true
                } else {
                    this.errMessagePrD = ''
                    this.isPrDVal = false
                }

    
                if(this.firstName || this.lastName || this.email || this.phoneNumber || this.department.length !== 0 || this.roles.length !== 0 || this.company.length !== 0|| this.project.length !== 0 || this.password || this.rePassword){
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
    const testGonokaAddApp =  Vue.createApp(testGonokaAdd);
    testGonokaAddApp.component('Multiselect', VueformMultiselect);
    testGonokaAddApp.mount('#testGonokaAdd');    
}
