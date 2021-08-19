if(document.querySelector('#companyUsers')){
    const companyUsers = {
        data() {
            return {
                users: [
                    {
                        id              : 1
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 2
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 3
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 4
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 5
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 6
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 7
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 8
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 9
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
                    }
                    ,{
                        id              : 10
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@gamail.com'
                        , phoneNumber   : '012333333'
                        , department    : 'Web Developer'
                        , roles         : 'Development'
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
    const companyUsersApp =  Vue.createApp(companyUsers);
    companyUsersApp.component('Multiselect', VueformMultiselect);
    companyUsersApp.mount('#companyUsers');
}