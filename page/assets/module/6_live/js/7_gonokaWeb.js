if(document.querySelector('#gonokaWeb')){
    const gonokaWeb = {
        data() {
            return {
                permission              : 'manager'
                , gonokaWeb: [
                    {
                        id              : 1
                        , productName   : 'Gonoka Web'
                        , category      : 'Gonoka'
                        , platform      : 'Web'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                        , type          : 'none'
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
                , stOption              : NORMAL_STATUS 
                , platform              : 0
                , plOption              : PLATFORM
                , isModalDelete         : false

                , gonokaView            : []
                , isModalDetail         : false
            }
        },
        mounted() {
            flatpickr("#gonokaWebDate", {});
        },
        methods: {
            onView(id) {
                let gonoka = this.gonokaWeb.filter(gonoka => gonoka.id == id);
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
    const gonokaWebApp =  Vue.createApp(gonokaWeb);
    gonokaWebApp.component('dropdown-status', DROPDOWN_STATUS);
    gonokaWebApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    gonokaWebApp.mount('#gonokaWeb');
}