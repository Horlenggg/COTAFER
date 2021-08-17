if(document.querySelector('#companyRolesView')){
    const companyRolesView = {
        data() {
            return {
                roleName                : 'Department'
                , availableUsers        : ['Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer']
                , department            : 'Department'

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
            }
        },
        methods: {
            onSubmit(){
            }
        },
    }
    const companyRolesViewApp =  Vue.createApp(companyRolesView);
    companyRolesViewApp.component('collapse-view-vue', COLLAPSE_VIEW_COMPONENT);
    companyRolesViewApp.mount('#companyRolesView');    
}
