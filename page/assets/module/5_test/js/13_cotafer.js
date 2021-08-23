if(document.querySelector('#cotafer')){
    const cotafer = {
        data() {
            return {
                permission              : 'manager'
                , cotafers: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'cotafer IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 2
                        , version       : '1.0.5'
                        , productName   : 'cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 3
                        , version       : '1.0.5'
                        , productName   : 'cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 4
                        , version       : '1.0.5'
                        , productName   : 'cotafer Api'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 5
                        , version       : '1.0.5'
                        , productName   : 'Cotafer IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 6
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 7
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 8
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Api'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 9
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 10
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    },
                    {
                        id              : 11
                        , version       : '1.0.5'
                        , productName   : 'cotafer IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 12
                        , version       : '1.0.5'
                        , productName   : 'cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 13
                        , version       : '1.0.5'
                        , productName   : 'cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 14
                        , version       : '1.0.5'
                        , productName   : 'cotafer Api'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 15
                        , version       : '1.0.5'
                        , productName   : 'Cotafer IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 16
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 17
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 18
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Api'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 19
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 20
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Running'
                    }
                ]
                , status                : 0
                , stOption: [
                    { value: 1, label: 'Running' }
                    , { value: 2, label: 'Stopped' }
                ]
                , isModalDelete         : false
                , isModalStop           : false

            }
        },
        mounted() {
            flatpickr("#cotaferDate", {});
        },
        methods: {
            onDelete(id = 0){
                this.isModalDelete = true;
                console.log(id);
            },
            onStart(id = 0){
                console.log(id);
            },
            onStop(id = 0){
                this.isModalStop = true;
                console.log(id);
            },
            onSuspend(id = 0){
                console.log(id);
            },
            onArchive(id = 0){
                console.log(id);
            },
        },
    }
    const cotaferApp =  Vue.createApp(cotafer);
    cotaferApp.component('dropdown-table', DROPDOWN);
    cotaferApp.mount('#cotafer');
}