if(document.querySelector('#companyRoles')){
    const companyRoles = {
        data() {
            return {
                roles: [
                    {
                        id              : 1
                        , roles         : 'UX/UI Designer'
                        , department    : 'Development'
                        , createDate    : '23-Apr-21 09:12 AM'
                        , availableUsers        : ['Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer']
                        , dashboard             : 'Dashboard'
                        , dashboardData         : 
                            [
                                { id: 1, text: 'Search All', model: true }
                                , { id: 2, text: 'Reset Password', model: true }
                            ]
                        , document              : 'Document'
                        , documentData          : 
                            [
                                { id: 1, text: 'Add Version', model: true }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , setting              : 'Setting'
                        , settingData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , users              : 'Users'
                        , usersData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , projectTesting              : 'Project Testing'
                        , projectTestingData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                    }
                    ,{
                        id              : 2
                        , roles         : 'Android Developer'
                        , department    : 'Finance'
                        , createDate    : '23-Apr-21 09:12 AM'
                        , availableUsers        : ['Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer']
                        , dashboard             : 'Dashboard'
                        , dashboardData         : 
                            [
                                { id: 1, text: 'Search All', model: true }
                                , { id: 2, text: 'Reset Password', model: true }
                            ]
                        , document              : 'Document'
                        , documentData          : 
                            [
                                { id: 1, text: 'Add Version', model: true }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , setting              : 'Setting'
                        , settingData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , users              : 'Users'
                        , usersData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , projectTesting              : 'Project Testing'
                        , projectTestingData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                    }
                    ,{
                        id              : 3
                        , roles         : 'Web Developer'
                        , department    : 'Research & Deleopment'
                        , createDate    : '23-Apr-21 09:12 AM'
                        , availableUsers        : ['Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer']
                        , dashboard             : 'Dashboard'
                        , dashboardData         : 
                            [
                                { id: 1, text: 'Search All', model: true }
                                , { id: 2, text: 'Reset Password', model: true }
                            ]
                        , document              : 'Document'
                        , documentData          : 
                            [
                                { id: 1, text: 'Add Version', model: true }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , setting              : 'Setting'
                        , settingData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , users              : 'Users'
                        , usersData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , projectTesting              : 'Project Testing'
                        , projectTestingData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                    }
                    ,{
                        id              : 4
                        , roles         : 'Network'
                        , department    : 'Network'
                        , createDate    : '23-Apr-21 09:12 AM'
                        , availableUsers        : ['Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer']
                        , dashboard             : 'Dashboard'
                        , dashboardData         : 
                            [
                                { id: 1, text: 'Search All', model: true }
                                , { id: 2, text: 'Reset Password', model: true }
                            ]
                        , document              : 'Document'
                        , documentData          : 
                            [
                                { id: 1, text: 'Add Version', model: true }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , setting              : 'Setting'
                        , settingData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , users              : 'Users'
                        , usersData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                        , projectTesting              : 'Project Testing'
                        , projectTestingData          : 
                            [
                                { id: 1, text: 'Add Version', model: false }
                                , { id: 2, text: 'View Id', model: false }
                            ]
                    }
                ]
                , roleView: []
                , isModalDetail: false
                , isModalDelete: false
            }
        },
        methods: {
            onView(id) {
                let role = this.roles.filter(role => role.id == id);
                this.roleView = role;
                this.isModalDetail = true
            },
            onDelete(id) {
                this.isModalDelete = true
            },
        },
    }
    const companyRolesApp =  Vue.createApp(companyRoles);
    companyRolesApp.component('collapse-view-vue', COLLAPSE_VIEW_COMPONENT);
    companyRolesApp.mount('#companyRoles');
}