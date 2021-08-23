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
                        , status        : 'Stopped'
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
            flatpickr("#cotaferApiDate", {});
        },
        methods: {
            onDelete(id = 0) {
                console.log(id);
                this.isModalDelete = true
            },
            onStart(id = 0){
                console.log(id);
            },
            onStop(id = 0){
                console.log(id);
                this.isModalStop = true
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
    cotaferApiApp.component('dropdown-table', DROPDOWN);
    cotaferApiApp.mount('#cotaferApi');
}