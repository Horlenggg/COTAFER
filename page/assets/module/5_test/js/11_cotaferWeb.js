if(document.querySelector('#cotaferWeb')){
    const cotaferWeb = {
        data() {
            return {
                permission              : 'manager'
                ,cotaferWeb: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'Web'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Start'
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
            flatpickr("#cotaferWebDate", {});
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
    const cotaferWebApp =  Vue.createApp(cotaferWeb);
    cotaferWebApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferWebApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferWebApp.mount('#cotaferWeb');
}