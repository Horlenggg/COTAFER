
if(document.querySelector('#companyDepartmentAdd')){
    const companyDepartmentAdd = {
        data() {
            return {
                departmentName          : 'abc'
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

                , isDeVal               : false
                , errMessageDe          : ''
            }
        },
        methods: {
            onSubmit(){
    
                if(this.departmentName.length == 0){
                    this.errMessageDe = 'Require.'
                    this.isDeVal = true
                } else if(this.departmentName.length > 75){
                    this.errMessageDe = 'Max character 75 length'
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
    const companyDepartmentAddApp =  Vue.createApp(companyDepartmentAdd);
    companyDepartmentAddApp.component('collapse-vue', COLLAPSE_COMPONENT);
    companyDepartmentAddApp.mount('#companyDepartmentAdd');    
}
