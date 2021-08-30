if(document.querySelector('#gonokaArchive')){
    const gonokaArchive = {
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
                        , git           : 'easd23459560sd34g'
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
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
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Android'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stop'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
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
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Web'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
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
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stop'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
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