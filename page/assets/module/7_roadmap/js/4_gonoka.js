if(document.querySelector('#gonoka')){
    const gonoka = {
        data() {
            return {
                gonokas: [
                
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
                        , status        : 'Progressing'
                        , note          : 'helllllllllllllllllllllllllll'
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
                    }
                    ,{
                        id              : 6
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
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
                , isShow                : 0
                , isModalDelete         : false
                , isModalStop           : false
            }
        },
        watch: {
            isShow(o, n){
                console.log(o,n);
            }
        },
        mounted() {
            flatpickr("#gonokaDate", {});
        },
        methods: {
            onModal(id = 0) {
                if(this.isShow == 0){
                    this.isShow = id
                } else {
                    this.isShow = 0
                }
            },
            onDelete(id = 0) {
                this.isModalDelete = true
            },
            onStart(id = 0){
                console.log(id);
            },
            onStop(id = 0){
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
    const gonokaApp =  Vue.createApp(gonoka);
    gonokaApp.mount('#gonoka');
}