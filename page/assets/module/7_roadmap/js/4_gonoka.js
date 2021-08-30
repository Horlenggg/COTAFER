if(document.querySelector('#gonoka')){
    const gonoka = {
        data() {
            return {
                permission              : 'manager'
                , gonokas: [
                    {
                        id              : 1
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'IOS'
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
                    ,{
                        id              : 2
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Android'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Suspend'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'none'
                    }
                    ,{
                        id              : 3
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Web'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Stop'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'none'
                    }
                    ,{
                        id              : 4
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Ignore'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'none'
                    }
                    ,{
                        id              : 5
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Delete'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'none'
                    }
                ]
                , status                : 0
                , stOption              : ROADMAP_STATUS
                , platform              : 0
                , plOption              : PLATFORM
                , isModalDelete         : false

                , gonokaView            : []
                , isModalDetail         : false
            }
        },
        mounted() {
            flatpickr("#gonokaDate", {});
        },
        methods: {
            onView(id) {
                let gonoka = this.gonokas.filter(gonoka => gonoka.id == id);
                this.gonokaView = gonoka;
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
    const gonokaApp =  Vue.createApp(gonoka);
    gonokaApp.component('dropdown-status', DROPDOWN_STATUS);
    gonokaApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    gonokaApp.mount('#gonoka');
}