if(document.querySelector('#cotafer')){
    const cotafer = {
        data() {
            return {
                permission              : 'manager'
                , cotafers: [
                    {
                        id              : 1
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Progressing'
                        , note          : 'helllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 2
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Android'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Suspend'
                        , note          : 'helllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 3
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Web'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Stop'
                        , note          : 'helllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 4
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Ignore'
                        , note          : 'helllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 5
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Delete'
                        , note          : 'helllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 6
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Archive'
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
            flatpickr("#cotaferDate", {});
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
    const cotaferApp =  Vue.createApp(cotafer);
    cotaferApp.component('dropdown-table', DROPDOWN);
    cotaferApp.mount('#cotafer');
}