if(document.querySelector('#gonoka')){
    const gonoka = {
        data() {
            return {
                permission              : 'manager'

                ,gonokas: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Gonoka IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 2
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 3
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 4
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Api'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
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
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
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
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
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
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
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
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stopped'
                    }
                ]
                , status                : 0
                , stOption: [
                    { value: 1, label: 'Running' }
                    , { value: 2, label: 'Stopped' }
                ]
                , isShow                : 0
                , isModalDelete         : false
                , isModalStop           : false
            }
        },
        watch: {
            isShow(o, n){
                console.log(o,n);
            }
        },
        mounted() {
            flatpickr("#gonokaDate", {});
        },
        methods: {
            onModal(id = 0){
                if(this.isShow == 0){
                    this.isShow = id
                } else {
                    this.isShow = 0
                }
            },
            onDelete(id = 0){
                this.isModalDelete = true
            },
            onStart(id = 0){
                console.log(id);
            },
            onStop(id = 0){
                this.isModalStop = true
            },
            onSuspend(id = 0){
                console.log(id);
            },
            onArchive(id = 0){
                console.log(id);
            },
            away(){
                console.log('away');
            }
        },
    }
    const gonokaApp =  Vue.createApp(gonoka);
    gonokaApp.mount('#gonoka');
}