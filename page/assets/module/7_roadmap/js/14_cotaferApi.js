if(document.querySelector('#cotaferApi')){
    const cotaferApi = {
        data() {
            return {
                permission              : 'manager'
                , cotaferApi: [
                    {
                        id              : 1
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'none'
                    }
                ]
                , status                : 0
                , stOption              : ROADMAP_STATUS 
                , platform              : 0
                , plOption              : PLATFORM
                , isModalDelete         : false

                , cotaferView           : []
                , isModalDetail         : false
            }
        },
        mounted() {
            flatpickr("#cotaferApiDate", {});
        },
        methods: {
            onView(id) {
                let cotafer = this.cotaferApi.filter(cotafer => cotafer.id == id);
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
    const cotaferApiApp =  Vue.createApp(cotaferApi);
    cotaferApiApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferApiApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferApiApp.mount('#cotaferApi');
}