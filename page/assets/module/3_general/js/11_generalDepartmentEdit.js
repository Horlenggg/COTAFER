if(document.querySelector('#generalDepartmentEdit')){
    const generalDepartmentEdit = {
        data() {
            return {
                departmentName          : 'Department'
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
    
                , isDeVal: false //check validation company name
                , errMessageDe: '' //error message icon
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
                            form.action             = '/general/department/add'
                            form.className          = 'hidden';
                            document.querySelector('body').append(form);
    
                            console.log(form);
                            form.submit();
                    }
                }
            }
        },
    }
    const generalDepartmentEditApp =  Vue.createApp(generalDepartmentEdit);
    generalDepartmentEditApp.component('collapse-vue', COLLAPSE_COMPONENT);
    generalDepartmentEditApp.mount('#generalDepartmentEdit');    
}
