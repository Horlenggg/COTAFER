if(document.querySelector('#testAdd')){
    const testAdd = {
        data() {
            return {
                permission          : 'manager'
                , version           : ''

                , projectName       : ''
    
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

                , category          : 0
                , caOption          : CATEGORY

                , platform          : 0
                , plOption          : PLATFORM 

                , startTestDate     : ''
                , finishTestDate    : ''
                , stagingDate       : ''
                , productDate       : ''
                , report            : ''

                , isShow            : 0

                , isVeVal           : false
                , isPrVal           : false
                , isImTVal          : false
                , isImPVal          : false
                , isBlVal           : false
                , isFlVal           : false
                , isCaVal           : false
                , isReVal           : false
                , isPlVal           : false
                , isStVal           : false
                , isFiVal           : false
                , isStDVal          : false
                , isPrDVal          : false
                , isRePVal          : false

                , errMessageVe      : ''
                , errMessagePr      : ''
                , errMessageImT     : ''
                , errMessageImP     : ''
                , errMessageBl      : ''
                , errMessageFl      : ''
                , errMessageCa      : ''
                , errMessageRe      : ''
                , errMessagePl      : ''
                , errMessageSt      : ''
                , errMessageFi      : ''
                , errMessageStD     : ''
                , errMessagePrD     : ''  
                , errMessageReP     : ''  
            }
        },
        mounted() {
            flatpickr("#releaseDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                static    : true
            });
            flatpickr("#startTestDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                static    : true
            });
            flatpickr("#finishTestDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                static    : true
            });
            flatpickr("#stagingDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                static    : true
            });
            flatpickr("#productDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                static    : true
            });
        },
        methods: {
            onSubmit() {

                if(this.permission == 'member'){
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

                    if(this.category == 0){
                        this.errMessageCa = 'Require.'
                        this.isCaVal = true
                    } else {
                        this.errMessageCa = ''
                        this.isCaVal = false
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
    
                    if(this.report.length == 0){
                        this.isRePVal = true
                        this.errMessageReP = 'Require'
                    } else if(this.report.length > 100){
                        this.isRePVal = true
                        this.errMessageReP = 'Max length 100 character'
                    } else {
                        this.isRePVal = false
                        this.errMessageReP = ''
                    }

                    if(this.byLink || this.formLink || this.releaseDate || this.platform || this.startTestDate || this.finishTestDate || this.stagingDate || this.productDate){
                        if(!this.isBlVal && !this.isFlVal && !this.isReVal && !this.isPlVal && !this.isStVal && !this.isFiVal && !this.isStDVal && !this.isPrDVal){
                            
                            console.log('form submit');
                            
                            let 
                                form            = document.createElement('form'),
                                byLink          = document.createElement('input'),
                                formLink        = document.createElement('input'),
                                releaseDate     = document.createElement('input'),
                                platform        = document.createElement('input'),
                                startTestDate   = document.createElement('input'),
                                finishTestDate  = document.createElement('input'),
                                stagingDate     = document.createElement('input'),
                                productDate     = document.createElement('input');
        
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
        
                                form.append(byLink, formLink, releaseDate, platform, startTestDate, finishTestDate, stagingDate, productDate);
        
                                form.method             = 'POST'
                                form.action             = '/test/add'
                                form.className          = 'hidden';
                                document.querySelector('body').append(form);

                                form.submit();
                        }
                    }

                } else if(this.permission == 'supervisor' || 'manager') {
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
        
                    if(this.projectName.length == 0){
                        this.errMessagePr = 'Require.'
                        this.isPrVal = true
                    } else if(this.projectName.length > 30){
                        this.errMessagePr = 'Max character 30 length'
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
    
                    if(this.category == 0){
                        this.errMessageCa = 'Require.'
                        this.isCaVal = true
                    } else {
                        this.errMessageCa = ''
                        this.isCaVal = false
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
    
                    if(this.report.length == 0){
                        this.isRePVal = true
                        this.errMessageReP = 'Require'
                    } else if(this.report.length > 100){
                        this.isRePVal = true
                        this.errMessageReP = 'Max length 100 character'
                    } else {
                        this.isRePVal = false
                        this.errMessageReP = ''
                    }

                    if(this.version || this.projectName || this.improveTest || this.improvePublic || this.byLink || this.formLink || this.releaseDate || this.platform || this.startTestDate || this.finishTestDate || this.stagingDate || this.productDate){
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
                                form.action             = '/test/add'
                                form.className          = 'hidden';
                                document.querySelector('body').append(form);
    
                                form.submit();
                        }
                    }
                }
            },
            onBack() {
                window.history.back()
            }
        },
    }
    const testAddApp =  Vue.createApp(testAdd);
    testAddApp.component('Multiselect', VueformMultiselect);
    testAddApp.mount('#testAdd');    
}
