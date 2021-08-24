if(document.querySelector('#gonokaApi')){
    const gonokaApi = {
        data() {
            return {
                permission              : 'manager'
                ,gonokaApi: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Api'
                        , category      : 'Gonoka'
                        , platform      : 'API'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stop'
                        , type          : 'none'
                    }
                ]
                , status                : 0
                , stOption: [
                    { value: 1, label: 'Start' }
                    , { value: 2, label: 'Stop' }
                    , { value: 3, label: 'Suspend' }
                    , { value: 4, label: 'Delete' }
                ]
                , isModalDelete         : false
            }
        },
        mounted() {
            flatpickr("#gonokaApiDate", {});
        },
        methods: {
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
    const gonokaApiApp =  Vue.createApp(gonokaApi);
    gonokaApiApp.component('dropdown-status', DROPDOWN_STATUS);
    gonokaApiApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    gonokaApiApp.mount('#gonokaApi');
}