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
                        , note          : 'account for admin'
                        , environment   : 'Dev'
                    }
                    ,{
                        id              : 2
                        , userName      : 'Brainzy'
                        , email         : 'brainzy@cotafer.com'
                        , phoneNumber   : '012333333'
                        , password      : '12345678sSs'
                        , application   : 'News'
                        , link          : 'news.com'
                        , date          : '12.12.2021'
                        , permission    : 'Editor'
                        , note          : 'account for admin'
                        , environment   : 'Dev'
                    }
                ]
                , isModalDelete: false
                , environment: 0
                , enOption: ENVIRONMENT
            }
        },
        methods: {
            onDelete(id = 0) {
                this.isModalDelete = true
            },
        },
    }
    const accountApp =  Vue.createApp(account);
    accountApp.component('table-password', TABLE_PASSWORD);
    accountApp.mount('#account');
}