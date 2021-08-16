if(document.querySelector('#testCotaferEdit')){
    const testCotaferEdit = {
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

                , isVeVal           : false
                , isPrVal           : false
                , isImTVal          : false
                , isImPVal          : false
                , isBlVal           : false
                , isFlVal           : false
                , isReVal           : false
                , isPlVal           : false
                , isStVal           : false
                , isFiVal           : false
                , isStDVal          : false
                , isPrDVal          : false

                , errMessageVe      : ''
                , errMessagePr      : ''
                , errMessageImT     : ''
                , errMessageImP     : ''
                , errMessageBl      : ''
                , errMessageFl      : ''
                , errMessageRe      : ''
                , errMessagePl      : ''
                , errMessageSt      : ''
                , errMessageFi      : ''
                , errMessageStD     : ''
                , errMessagePrD     : ''  
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
                    this.errMessageFl = 'Require.'
                    this.isFlVal = true
                } else if(this.formLink.length > 75){
                    this.errMessageFl = 'Max character 75 length'
                    this.isFlVal = true
                } else {
                    this.errMessageFl = ''
                    this.isFlVal = false
                }

                if(this.releaseDate.length == 0){
                    this.errMessageRe = 'Require.'
                    this.isReVal = true
                } else {
                    this.errMessageRe = ''
                    this.isReVal = false
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

    
                if(this.version || this.projectName !== 0 || this.improveTest || this.improvePublic || this.byLink || this.formLink || this.releaseDate || this.platform || this.startTestDate || this.finishTestDate || this.stagingDate || this.productDate){
                    if(!this.isVeVal && !this.isPrVal && !this.isImTVal && !this.isImPVal && !this.isBlVal && !this.isFlVal && !this.isReVal && !this.isPlVal && !this.isStVal && !this.isFiVal && !this.isStDVal && !this.isPrDVal){
                        
                        console.log('form submit');
                        
                        let 
                            form            = document.createElement('form'),
                            version         = document.createElement('input'),
                            projectName     = document.createElement('input'),
                            improveTest     = document.createElement('input'),
                            improvePublic   = document.createElement('input'),
                            byLink          = document.createElement('input'),
                            formLink        = document.createElement('input'),
                            releaseDate     = document.createElement('input'),
                            platform        = document.createElement('input'),
                            startTestDate   = document.createElement('input'),
                            finishTestDate  = document.createElement('input'),
                            stagingDate     = document.createElement('input'),
                            productDate     = document.createElement('input');
    
                            version.name                = 'version';
                            version.value               = this.version;
                            
                            projectName.name            = 'projectName';
                            projectName.value           = this.projectName;
    
                            improveTest.name            = 'improveTest';
                            improveTest.value           = this.improveTest;
    
                            improvePublic.name          = 'improvePublic';
                            improvePublic.value         = this.improvePublic;
    
                            byLink.name                 = 'byLink';
                            byLink.value                = this.byLink;
    
                            formLink.name               = 'formLink';
                            formLink.value              = this.formLink;
    
                            releaseDate.name            = 'releaseDate';
                            releaseDate.value           = this.releaseDate;
    
                            platform.name               = 'platform';
                            platform.value              = this.platform;
    
                            startTestDate.name          = 'startTestDate';
                            startTestDate.value         = this.startTestDate;
    
                            finishTestDate.name         = 'finishTestDate';
                            finishTestDate.value        = this.finishTestDate;

                            stagingDate.name            = 'stagingDate';
                            stagingDate.value           = this.stagingDate;

                            productDate.name            = 'productDate';
                            productDate.value           = this.productDate;
    
                            form.append(version, projectName, improveTest, improvePublic, byLink, formLink, releaseDate, platform, startTestDate, finishTestDate, stagingDate, productDate);
    
                            form.method             = 'POST'
                            form.action             = '/general/users/add'
                            form.className          = 'hidden';
                            document.querySelector('body').append(form);

                            form.submit();
                    }
                }
            },
        },
    }
    const testCotaferEditApp =  Vue.createApp(testCotaferEdit);
    testCotaferEditApp.component('Multiselect', VueformMultiselect);
    testCotaferEditApp.mount('#testCotaferEdit');    
}
