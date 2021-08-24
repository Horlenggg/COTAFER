if(document.querySelector('#cotaferApi')){
    const cotaferApi = {
        data() {
            return {
                permission              : 'manager'
                ,cotaferApi: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Api'
                        , category      : 'Cotafer'
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
            flatpickr("#cotaferApiDate", {});
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
    const cotaferApiApp =  Vue.createApp(cotaferApi);
    cotaferApiApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferApiApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferApiApp.mount('#cotaferApi');
}