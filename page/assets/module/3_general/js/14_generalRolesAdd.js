if(document.querySelector('#generalRolesAdd')){
    const generalRolesAdd = {
        data() {
            return {
                roleName                : ''
                , availableUsers        : []
                , avOption: [
                    { value: 1, label: 'Ios' }
                    , { value: 2, label: 'Android' }
                    , { value: 3, label: 'Web' }
                    , { value: 4, label: 'Api' }
                    , { value: 5, label: 'Android' }
                    , { value: 6, label: 'Web' }
                    , { value: 7, label: 'Api' }
                    , { value: 8, label: 'Android' }
                    , { value: 9, label: 'Web' }
                    , { value: 10, label: 'Api' }
                    , { value: 11, label: 'Api' }
                    , { value: 12, label: 'Android' }
                    , { value: 13, label: 'Web' }
                    , { value: 14, label: 'Api' }
                ]
                , department            : 0
                , deOption: [
                    { value: 1, label: 'Ios' }
                    , { value: 2, label: 'Android' }
                    , { value: 3, label: 'Web' }
                    , { value: 4, label: 'Api' }
                ]

                , dashboard             : false
                , dashboardSelectAll    : false
                , dashboardResetPw      : false

                , document              : false
                , documentAddVersion    : false
                , documentViewId        : false
                
                , isRoVal               : false //check validation role name
                , isDeVal               : false //check validation department
                , isAvVal               : false //check validation available user
                , errMessageRo          : ''    //error message role name
                , errMessageDe          : ''    //error message department
                , errMessageAv          : ''    //error message available user

                , isDaCollapse: false
                , isDaHaveSelected: false
                , isDoCollapse: false
                , isDoHaveSelected: false
            }
        },
        mounted() {
            this.onChecked()
        },
        methods: {
            onSubmit(){
                if(this.roleName.length == 0){
                    this.errMessageRo = 'Require.'
                    this.isRoVal = true
                } else if(this.roleName.length > 75){
                    this.errMessageRo = 'Max character 75 length'
                    this.isRoVal = true
                } else {
                    this.errMessageRo = ''
                    this.isRoVal = false
                }

                if(this.availableUsers.length == 0){
                    this.errMessageAv = 'Require.'
                    this.isAvVal = true
                } else if(this.availableUsers.length > 75){
                    this.errMessageAv = 'Max character 75 length'
                    this.isAvVal = true
                } else {
                    this.errMessageAv = ''
                    this.isAvVal = false
                }

                if(this.department == 0){
                    this.errMessageDe = 'Require.'
                    this.isDeVal = true
                } else {
                    this.errMessageDe = ''
                    this.isDeVal = false
                }
    
                if(this.companyName ){
                    if(!this.isDeVal){
                        let 
                            form        = document.createElement('form'),
                            dName       = document.createElement('input');
    
                            dName.name              = 'departmentName';
                            dName.value             = this.departmentName;
    
                            form.append(dName);
    
                            form.method             = 'POST'
                            form.action             = '/general/department/add'
                            form.className          = 'hidden';
                            document.querySelector('body').append(form);
    
                            console.log(form);
                            form.submit();
                    }
                }
            }
            , onCollapse(e = ''){
                if(e == 'dashboard'){
                    this.isDaCollapse = !this.isDaCollapse
                } else if(e == 'document'){
                    this.isDoCollapse = !this.isDoCollapse
                }
            }
            , onChecked(e = ''){
                if(e == 'dashboard'){
                    if(this.dashboard == true){
                        this.dashboardSelectAll = true;
                        this.dashboardResetPw = true;
                    } else {
                        this.dashboardSelectAll = false;
                        this.dashboardResetPw = false;
                    }
                } else if(e == 'document'){
                    if(this.document == true){
                        this.documentAddVersion = true;
                        this.documentViewId = true;
                    } else {
                        this.documentAddVersion = false;
                        this.documentViewId = false;
                    }
                }

                if(this.dashboardSelectAll == true || this.dashboardResetPw == true){
                    this.isDaHaveSelected = true
                } else {
                    this.isDaHaveSelected = false
                }

                if(this.documentAddVersion == true || this.documentViewId == true){
                    this.isDoHaveSelected = true
                } else {
                    this.isDoHaveSelected = false
                }
                
                if(this.dashboardSelectAll == true && this.dashboardResetPw == true){
                    this.dashboard = true
                } else {
                    this.dashboard = false
                }

                if(this.documentAddVersion == true && this.documentViewId == true){
                    this.document = true
                } else {
                    this.document = false
                }
            }
        },
    }
    const generalRolesAddApp =  Vue.createApp(generalRolesAdd);
    generalRolesAddApp.component('Multiselect', VueformMultiselect);
    generalRolesAddApp.mount('#generalRolesAdd');    
}
