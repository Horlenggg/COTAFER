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
                , stOption              : NORMAL_STATUS 
                , platform              : 0
                , plOption              : PLATFORM
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