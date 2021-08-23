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
                        , status        : 'Progressing'
                        , note          : 'helllllllllllllllllllllllllll'
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
            flatpickr("#cotaferWebDate", {});
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
    const cotaferWebApp =  Vue.createApp(cotaferWeb);
    cotaferWebApp.component('dropdown-table', DROPDOWN);
    cotaferWebApp.mount('#cotaferWeb');
}