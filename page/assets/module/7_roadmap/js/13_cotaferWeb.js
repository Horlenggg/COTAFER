if(document.querySelector('#cotaferWeb')){
    const cotaferWeb = {
        data() {
            return {
                permission              : 'manager'
                , cotaferWeb: [
                    {
                        id              : 1
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Web'
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