if(document.querySelector('#generalUsers')){
    const generalUsers = {
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
    const generalUsersApp =  Vue.createApp(generalUsers);
    generalUsersApp.component('Multiselect', VueformMultiselect);
    generalUsersApp.mount('#generalUsers');
}