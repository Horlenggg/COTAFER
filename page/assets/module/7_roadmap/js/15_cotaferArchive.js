if(document.querySelector('#cotaferArchive')){
    const cotaferArchive = {
        data() {
            return {
                permission              : 'manager'
                , archives: [
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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'Archive'
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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'Archive'
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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'Archive'
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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'Archive'
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
            flatpickr("#archiveDate", {});
        },
        methods: {
            onView(id) {
                let cotafer = this.archives.filter(cotafer => cotafer.id == id);
                this.cotaferView = cotafer;
                this.isModalDetail = true
            },
            onRestore(id = 0) {
                console.log(id);
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
        },
    }
    const cotaferArchiveApp =  Vue.createApp(cotaferArchive);
    cotaferArchiveApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferArchiveApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferArchiveApp.mount('#cotaferArchive');
}