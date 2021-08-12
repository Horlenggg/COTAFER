if(document.querySelector('#generalDepartment')){
    const generalDepartment = {
        data() {
            return {
                departments: [
                    {
                        id              : 1
                        , department    : 'Development'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 2
                        , department    : 'Finance'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 3
                        , department    : 'Research & Deleopment'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 4
                        , department    : 'Network'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                ]
                , isModalDelete: false
            }
        },
        methods: {
            onDelete(id) {
                this.isModalDelete = true
            },
        },
    }
    const generalDepartmentApp =  Vue.createApp(generalDepartment);
    generalDepartmentApp.component('Multiselect', VueformMultiselect);
    generalDepartmentApp.mount('#generalDepartment');
}