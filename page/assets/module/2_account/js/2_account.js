if(document.querySelector('#account')){
    const account = {
        data() {
            return {
                accounts: [
                    {
                        id              : 1
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@cotafer.com'
                        , phoneNumber   : '012333333'
                        , password      : '12345678'
                        , application   : 'News'
                        , link          : 'news.com'
                        , date          : '12.12.2021'
                        , permission    : 'Admin'
                    }
                    ,{
                        id              : 2
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@cotafer.com'
                        , phoneNumber   : '012333333'
                        , password      : '12345678'
                        , application   : 'News'
                        , link          : 'news.com'
                        , date          : '12.12.2021'
                        , permission    : 'Editor'
                    }
                ]
                , isModalDelete: false
            }
        },
        methods: {
            onDelete(id = 0) {
                this.isModalDelete = true
            },
        },
    }
    const accountApp =  Vue.createApp(account);
    accountApp.mount('#account');
}