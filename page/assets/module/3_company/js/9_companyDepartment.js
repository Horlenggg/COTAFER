if(document.querySelector('#companyDepartment')){
    const companyDepartment = {
        data() {
            return {
                departments: [
                    {
                        id                  : 1
                        , department        : 'Development'
                        , createDate        : '23-Apr-21 09:12 AM'
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
                        , department    : 'Finance'
                        , createDate    : '23-Apr-21 09:12 AM'
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
                        , department    : 'Research & Deleopment'
                        , createDate    : '23-Apr-21 09:12 AM'
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
                        , department    : 'Network'
                        , createDate    : '23-Apr-21 09:12 AM'
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
                , departmentView: []
                , isModalDetail: false
                , isModalDelete: false
            }
        },
        methods: {
            onView(id) {
                let department = this.departments.filter(department => department.id == id);
                this.departmentView = department;
                this.isModalDetail = true
            },
            onDelete(id) {
                this.isModalDelete = true
            },
        },
    }
    const companyDepartmentApp =  Vue.createApp(companyDepartment);
    companyDepartmentApp.component('collapse-view-vue', COLLAPSE_VIEW_COMPONENT);
    companyDepartmentApp.mount('#companyDepartment');
}