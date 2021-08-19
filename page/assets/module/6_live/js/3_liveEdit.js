if(document.querySelector('#liveEdit')){
    const liveEdit = {
        data() {
            return {
                productName         : ''
                , version           : ''
                , git               : ''
                , relativeProject   : ''

                , category          : 0
                , cateOption          : [
                    { value: 1, label: 'Ios' }
                    , { value: 2, label: 'Android' }
                    , { value: 3, label: 'Web' }
                    , { value: 4, label: 'Api' }
                ]
    
                , platform         : 0
                , plOption         : [
                    { value: 1, label: 'Gonoka PR' }
                    , { value: 2, label: 'Cotafer IM' }
                    , { value: 3, label: 'Cotafer News' }
                    , { value: 4, label: 'Gonoka Newsfeed' }
                ]

                , expiration        : ''
                , server            : 0
                , seOption         : [
                    { value: 1, label: 'Gonoka PR' }
                    , { value: 2, label: 'Cotafer IM' }
                    , { value: 3, label: 'Cotafer News' }
                    , { value: 4, label: 'Gonoka Newsfeed' }
                ]

                , startDate         : ''
                , stopDate          : ''
                , startApproveBy    : []
                , sttAOption         : [
                    { value: 1, label: 'Gonoka PR' }
                    , { value: 2, label: 'Cotafer IM' }
                    , { value: 3, label: 'Cotafer News' }
                    , { value: 4, label: 'Gonoka Newsfeed' }
                ]
                , stopApproveBy     : []
                , stpAOption         : [
                    { value: 1, label: 'Gonoka PR' }
                    , { value: 2, label: 'Cotafer IM' }
                    , { value: 3, label: 'Cotafer News' }
                    , { value: 4, label: 'Gonoka Newsfeed' }
                ]
                , note              : ''

                , isShow            : 0

                , isPrVal           : false
                , isVeVal           : false
                , isGiVal           : false
                , isReVal           : false
                , isCaVal           : false
                , isPlVal           : false
                , isExVal           : false
                , isSeVal           : false
                , isSttDVal         : false
                , isSttAVal         : false
                , isStpDVal         : false
                , isStpAVal         : false
                , isNoVal           : false

                , errMessagePr      : ''
                , errMessageVe      : ''
                , errMessageGi      : ''
                , errMessageRe      : ''
                , errMessageCa      : ''
                , errMessagePl      : ''
                , errMessageEx      : ''
                , errMessageSe      : ''
                , errMessageSttD    : ''
                , errMessageSttA    : ''
                , errMessageStpD    : ''
                , errMessageStpA    : ''
                , errMessageNo      : ''
            }
        },
        mounted() {
            flatpickr("#expiration", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
            flatpickr("#startDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
            flatpickr("#stopDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
        },
        methods: {
            onSubmit() {
    
                if(this.productName.length == 0){
                    this.errMessagePr = 'Require.'
                    this.isPrVal = true
                } else if(this.productName.length > 30){
                    this.errMessagePr = 'Max character 30 length'
                    this.isPrVal = true
                } else {
                    this.errMessagePr = ''
                    this.isPrVal = false
                }

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
    
                if(this.git.length == 0){
                    this.errMessageGi = 'Require.'
                    this.isGiVal = true
                } else if(this.git.length > 30){
                    this.errMessageGi = 'Max character 30 length'
                    this.isGiVal = true
                } else {
                    this.errMessageGi = ''
                    this.isGiVal = false
                }

                if(this.relativeProject.length == 0){
                    this.errMessageRe = 'Require.'
                    this.isReVal = true
                } else if(this.relativeProject.length > 30){
                    this.errMessageRe = 'Max character 30 length'
                    this.isReVal = true
                } else {
                    this.errMessageRe = ''
                    this.isReVal = false
                }

                if(this.category == 0){
                    this.errMessageCa = 'Require.'
                    this.isCaVal = true
                } else {
                    this.errMessageCa = ''
                    this.isCaVal = false
                }

                if(this.platform == 0){
                    this.errMessagePl = 'Require.'
                    this.isPlVal = true
                } else {
                    this.errMessagePl = ''
                    this.isPlVal = false
                }

                if(this.expiration.length == 0){
                    this.errMessageEx = 'Require.'
                    this.isExVal = true
                } else if(this.expiration.length > 30){
                    this.errMessageEx = 'Max character 30 length'
                    this.isExVal = true
                } else {
                    this.errMessageEx = ''
                    this.isExVal = false
                }

                if(this.server == 0){
                    this.errMessageSe = 'Require.'
                    this.isSeVal = true
                } else {
                    this.errMessageSe = ''
                    this.isSeVal = false
                }

                if(this.startDate.length == 0){
                    this.errMessageSttD = 'Require.'
                    this.isSttDVal = true
                } else if(this.startDate.length > 30){
                    this.errMessageSttD = 'Max character 30 length'
                    this.isSttDVal = true
                } else {
                    this.errMessageSttD = ''
                    this.isSttDVal = false
                }

                if(this.startApproveBy.length == 0){
                    this.errMessageSttA = 'Require.'
                    this.isSttAVal = true
                } else {
                    this.errMessageSttA = ''
                    this.isSttAVal = false
                }

                if(this.stopDate.length == 0){
                    this.errMessageStpD = 'Require.'
                    this.isStpDVal = true
                } else if(this.stopDate.length > 30){
                    this.errMessageStpD = 'Max character 30 length'
                    this.isStpDVal = true
                } else {
                    this.errMessageStpD = ''
                    this.isStpDVal = false
                }

                if(this.stopApproveBy.length == 0){
                    this.errMessageStpA = 'Require.'
                    this.isStpAVal = true
                } else {
                    this.errMessageStpA = ''
                    this.isStpAVal = false
                }

                if(this.note.length == 0){
                    this.errMessageNo = 'Require.'
                    this.isNoVal = true
                } else if(this.note.length > 100){
                    this.errMessageNo = 'Max character 100 length'
                    this.isNoVal = true
                } else {
                    this.errMessageNo = ''
                    this.isNoVal = false
                }
    
                if(this.productName || this.version || this.git || this.relativeProject || this.category !== 0 || this.platform !== 0 || this.expiration || this.server !== 0 || this.startDate || this.stopDate || this.startApproveBy.length !== 0 || this.stopApproveBy.length !== 0){
                    if(!this.isPrVal && !this.isVeVal && !this.isGiVal && !this.isRePVal && !this.isCaVal && !this.isPlVal && !this.isExVal && !this.isSeVal && !this.isSttDVal && !this.isSttAVal && !this.isStpDVal && !this.isStpAVal){
                        
                        console.log('form submit');
                        
                        let 
                            form            = document.createElement('form'),
                            version         = document.createElement('input');
    
                            version.name                = 'version';
                            version.value               = this.version;
                            
                            form.append(version);
    
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
    const liveEditApp =  Vue.createApp(liveEdit);
    liveEditApp.component('Multiselect', VueformMultiselect);
    liveEditApp.mount('#liveEdit');    
}
