if(document.querySelector('#cotaferAndroid')){
    const cotaferAndroid = {
        data() {
            return {
                permission              : 'manager'
                ,cotaferAndroid: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'Android'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stop'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                ]
                , status                : 0
                , stOption              : NORMAL_STATUS 
                , platform              : 0
                , plOption              : PLATFORM
                , isModalDelete         : false

                , cotaferView           : []
                , isModalDetail         : false
            }
        },
        mounted() {
            flatpickr("#cotaferAndroidDate", {});
        },
        methods: {
            onView(id) {
                let cotafer = this.cotaferAndroid.filter(cotafer => cotafer.id == id);
                this.cotaferView = cotafer;
                this.isModalDetail = true
            },
            onDelete(id = 0) {
                console.log(id);
            },
            onStart(id = 0){
                console.log(id);
            },
            onStop(id = 0){
                console.log(id);
            },
            onSuspend(id = 0){
                console.log(id);
            },
            onArchive(id = 0) {
                console.log(id);
            }
        },
    }
    const cotaferAndroidApp =  Vue.createApp(cotaferAndroid);
    cotaferAndroidApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferAndroidApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferAndroidApp.mount('#cotaferAndroid');
}