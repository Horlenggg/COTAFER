if(document.querySelector('#gonokaArchive')){
    const gonokaArchive = {
        data() {
            return {
                permission              : 'manager'
                , archives: [
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
                        , type          : 'Archive'
                        , relativeProject : 'Cotafer IM'
                        , expiration    : '21.12.2021'
                        , server        : 'development'
                        , startDate     : '21.12.2021'
                        , stopDate      : '21.12.2021'
                        , startApproveBy : ['Brainzy', 'Brainzy']
                        , stopApproveBy : ['Brainzy', 'Brainzy']
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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'Archive'
                        , relativeProject : 'Cotafer IM'
                        , expiration    : '21.12.2021'
                        , server        : 'development'
                        , startDate     : '21.12.2021'
                        , stopDate      : '21.12.2021'
                        , startApproveBy : ['Brainzy', 'Brainzy']
                        , stopApproveBy : ['Brainzy', 'Brainzy']
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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'Archive'
                        , relativeProject : 'Cotafer IM'
                        , expiration    : '21.12.2021'
                        , server        : 'development'
                        , startDate     : '21.12.2021'
                        , stopDate      : '21.12.2021'
                        , startApproveBy : ['Brainzy', 'Brainzy']
                        , stopApproveBy : ['Brainzy', 'Brainzy']
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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
                        , type          : 'Archive'
                        , relativeProject : 'Cotafer IM'
                        , expiration    : '21.12.2021'
                        , server        : 'development'
                        , startDate     : '21.12.2021'
                        , stopDate      : '21.12.2021'
                        , startApproveBy : ['Brainzy', 'Brainzy']
                        , stopApproveBy : ['Brainzy', 'Brainzy']
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
            flatpickr("#archiveDate", {});
        },
        methods: {
            onView(id) {
                let gonoka = this.archives.filter(gonoka => gonoka.id == id);
                this.gonokaView = gonoka;
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
    const gonokaArchiveApp =  Vue.createApp(gonokaArchive);
    gonokaArchiveApp.component('dropdown-status', DROPDOWN_STATUS);
    gonokaArchiveApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    gonokaArchiveApp.mount('#gonokaArchive');
}