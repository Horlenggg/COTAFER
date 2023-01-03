if(document.querySelector('#departmentView')){
    const departmentView = {
        data() {
            return {
                departmentName          : 'Department'
                , dashboard             : 'Dashboard'
                , dashboardData         : [
                    { id    : 1, text   : 'Search All', model: true }
                    , { id  : 2, text   : 'Reset Password', model: true }
                ]
                , document              : 'Document'
                , documentData          : [
                    { id    : 1, text   : 'Add Version', model: true }
                    , { id  : 2, text   : 'View Id', model: false }
                ]
                , setting               : 'Setting'
                , settingData           : [
                    { id    : 1, text   : 'Add Version', model: false }
                    , { id  : 2, text   : 'View Id', model: false }
                ]
                , users                 : 'Users'
                , usersData             : [
                    { id    : 1, text   : 'Add Version', model: false }
                    , { id  : 2, text   : 'View Id', model: false }
                ]
                , projectTesting        : 'Project Testing'
                , projectTestingData    : [
                    { id    : 1, text   : 'Add Version', model: false }
                    , { id  : 2, text   : 'View Id', model: false }
                ]
            }
        },
        methods: {
            onSubmit(){}
        },
    }
    const departmentViewApp =  Vue.createApp(departmentView);
    departmentViewApp.component('collapse-view-vue', COLLAPSE_VIEW_COMPONENT);
    departmentViewApp.mount('#departmentView');    
}
