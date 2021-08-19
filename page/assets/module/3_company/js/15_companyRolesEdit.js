if(document.querySelector('#companyRolesEdit')){
    const companyRolesEdit = {
        data() {
            return {
                roleName                : 'Department'
                , availableUsers        : [1,2,3]
                , avOption: [
                    { value: 1, label: 'Ios' }
                    , { value: 2, label: 'Android' }
                    , { value: 3, label: 'Web' }
                    , { value: 4, label: 'Api' }
                ]

                , department            : 1
                , deOption: [
                    { value: 1, label: 'Ios' }
                    , { value: 2, label: 'Android' }
                    , { value: 3, label: 'Web' }
                    , { value: 4, label: 'Api' }
                ]

                , dashboard             : 'Dashboard'
                , dashboardData         : [
                    { id: 1, text: 'Search All', model: true }
                    , { id: 2, text: 'Reset Password', model: true }
                ]
                , document              : 'Document'
                , documentData          : [
                    { id: 1, text: 'Add Version', model: true }
                    , { id: 2, text: 'View Id', model: false }
                ]
                , setting              : 'Setting'
                , settingData          : [
                    { id: 1, text: 'Add Version', model: false }
                    , { id: 2, text: 'View Id', model: false }
                ]
                , users              : 'Users'
                , usersData          : [
                    { id: 1, text: 'Add Version', model: false }
                    , { id: 2, text: 'View Id', model: false }
                ]
                , projectTesting              : 'Project Testing'
                , projectTestingData          : [
                    { id: 1, text: 'Add Version', model: false }
                    , { id: 2, text: 'View Id', model: false }
                ]
                
                , isRoVal               : false //check validation role name
                , isDeVal               : false //check validation department
                , isAvVal               : false //check validation available user
                , errMessageRo          : ''    //error message role name
                , errMessageDe          : ''    //error message department
                , errMessageAv          : ''    //error message available user
            }
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
                            form.action             = '/company/department/add'
                            form.className          = 'hidden';
                            document.querySelector('body').append(form);
    
                            console.log(form);
                            form.submit();
                    }
                }
            }
        },
    }
    const companyRolesEditApp =  Vue.createApp(companyRolesEdit);
    companyRolesEditApp.component('Multiselect', VueformMultiselect);
    companyRolesEditApp.component('collapse-vue', COLLAPSE_COMPONENT);
    companyRolesEditApp.mount('#companyRolesEdit');    
}
