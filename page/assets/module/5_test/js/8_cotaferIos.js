if(document.querySelector('#cotaferIos')){
    const cotaferIos = {
        data() {
            return {
                permission              : 'manager'
                ,cotaferIos: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Cotafer IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
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
            flatpickr("#cotaferIosDate", {});
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
    const cotaferIosApp =  Vue.createApp(cotaferIos);
    cotaferIosApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferIosApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferIosApp.mount('#cotaferIos');
}