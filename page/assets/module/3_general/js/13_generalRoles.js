if(document.querySelector('#generalRoles')){
    const generalRoles = {
        data() {
            return {
                roles: [
                    {
                        id              : 1
                        , roles         : 'UX/UI Designer'
                        , department    : 'Development'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 2
                        , roles         : 'Android Developer'
                        , department    : 'Finance'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 3
                        , roles         : 'Web Developer'
                        , department    : 'Research & Deleopment'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 4
                        , roles         : 'Network'
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
    const generalRolesApp =  Vue.createApp(generalRoles);
    generalRolesApp.component('Multiselect', VueformMultiselect);
    generalRolesApp.mount('#generalRoles');
}