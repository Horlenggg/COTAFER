if(document.querySelector('#testGonoka')){
    const testGonoka = {
        data() {
            return {
                gonoka: [
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
                , isShow: 0
            }
        },
        mounted() {
            flatpickr("#testGonokaDate", {});
        },
        methods: {
            onModal(id = 0) {
                if(this.isShow == 0){
                    this.isShow = id
                } else {
                    this.isShow = 0
                }
            },
        },
    }
    const testGonokaApp =  Vue.createApp(testGonoka);
    testGonokaApp.mount('#testGonoka');
}