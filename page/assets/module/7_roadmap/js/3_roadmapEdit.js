if(document.querySelector('#roadmapEdit')){
    const roadmapEdit = {
        data() {
            return {
                productName         : ''
                , version           : ''

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

                , devStartDate      : ''
                , devDeadline       : ''
                , releaseDate       : ''
                , maintenanceTime   : ''
                , feature           : ''
                , note              : ''

                , isShow            : 0

                , isPrVal           : false
                , isVeVal           : false
                , isCaVal           : false
                , isPlVal           : false
                , isDeSVal          : false
                , isDeDVal          : false
                , isReVal           : false
                , isMaVal           : false
                , isFeVal           : false
                , isNoVal           : false

                , errMessagePr      : ''
                , errMessageVe      : ''
                , errMessageCa      : ''
                , errMessagePl      : ''
                , errMessageDeS     : ''
                , errMessageDeD     : ''
                , errMessageRe      : ''
                , errMessageMa      : ''
                , errMessageFe      : ''
                , errMessageNo      : ''
            }
        },
        mounted() {
            flatpickr("#releaseDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
            flatpickr("#devStartDate", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
            });
            flatpickr("#devDeadline", {
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

                if(this.devStartDate.length == 0){
                    this.errMessageDeS = 'Require.'
                    this.isDeSVal = true
                } else if(this.devStartDate.length > 30){
                    this.errMessageDeS = 'Max character 30 length'
                    this.isDeSVal = true
                } else {
                    this.errMessageDeS = ''
                    this.isDeSVal = false
                }

                if(this.devDeadline.length == 0){
                    this.errMessageDeD = 'Require.'
                    this.isDeDVal = true
                } else if(this.devDeadline.length > 30){
                    this.errMessageDeD = 'Max character 30 length'
                    this.isDeDVal = true
                } else {
                    this.errMessageDeD = ''
                    this.isDeDVal = false
                }

                if(this.releaseDate.length == 0){
                    this.errMessageRe = 'Require.'
                    this.isReVal = true
                } else if(this.releaseDate.length > 30){
                    this.errMessageRe = 'Max character 30 length'
                    this.isReVal = true
                } else {
                    this.errMessageRe = ''
                    this.isReVal = false
                }

                if(this.maintenanceTime.length == 0){
                    this.errMessageMa = 'Require.'
                    this.isMaVal = true
                } else if(this.maintenanceTime.length > 30){
                    this.errMessageMa = 'Max character 30 length'
                    this.isMaVal = true
                } else {
                    this.errMessageMa = ''
                    this.isMaVal = false
                }

                if(this.feature.length == 0){
                    this.errMessageFe = 'Require.'
                    this.isFeVal = true
                } else if(this.feature.length > 100){
                    this.errMessageFe = 'Max character 100 length'
                    this.isFeVal = true
                } else {
                    this.errMessageFe = ''
                    this.isFeVal = false
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
    
                if( this.productName || this.version || this.category !== 0 || this.platform !== 0 || this.devStartDate || this.devDeadline || this.releaseDate || this.maintenanceTime || this.feature || this.note ){
                    if( !this.isPrVal && !this.isVeVal && !this.isCaVal && !this.isPlVal && !this.isDeSDVal && !this.isDeDVal && !this.isReVal && !this.isMaVal && !this.isMaVal && !this.isFeVal && !this.isNoVal ){
                        
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
    const roadmapEditApp =  Vue.createApp(roadmapEdit);
    roadmapEditApp.component('Multiselect', VueformMultiselect);
    roadmapEditApp.mount('#roadmapEdit');    
}
