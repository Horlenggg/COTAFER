if(document.querySelector('#cotaferArchive')){
    const cotaferArchive = {
        data() {
            return {
                permission              : 'manager'
                , archives: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'cotafer IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Start'
                        , type          : 'Archive'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 2
                        , version       : '1.0.5'
                        , productName   : 'cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stop'
                        , type          : 'Archive'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 3
                        , version       : '1.0.5'
                        , productName   : 'cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Start'
                        , type          : 'Archive'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 4
                        , version       : '1.0.5'
                        , productName   : 'cotafer Api'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        , status        : 'Stop'
                        , type          : 'Archive'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                ]
                , status                : 0
                , stOption              : ROADMAP_STATUS
                , platform              : 0
                , plOption              : PLATFORM
                , isModalDelete         : false

                , cotaferView              : []
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