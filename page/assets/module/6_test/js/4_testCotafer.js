if(document.querySelector('#testCotafer')){
    const testCotafer = {
        data() {
            return {
                cotafer: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , projectName   : 'Gonoka IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 2
                        , version       : '1.0.5'
                        , projectName   : 'Gonoka IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 3
                        , version       : '1.0.5'
                        , projectName   : 'Gonoka IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 4
                        , version       : '1.0.5'
                        , projectName   : 'Gonoka IOS'
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
                , isShow                : false
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
            flatpickr("#testCotaferDate", {});
        },
        methods: {
            onModal(id = 0) {
                if(this.isShow == 0){
                    this.isShow = id
                } else {
                    this.isShow = 0
                }
            },
            onDelete(id = 0) {
                this.isModalDelete = true
            },
            onStop(id = 0) {
                this.isModalStop = true
            }
        },
    }
    const testCotaferApp =  Vue.createApp(testCotafer);
    testCotaferApp.mount('#testCotafer');
}