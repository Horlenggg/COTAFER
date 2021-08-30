if(document.querySelector('#gonokaWeb')){
    const gonokaWeb = {
        data() {
            return {
                permission              : 'manager'
                , gonokaWeb: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Web'
                        , category      : 'Gonoka'
                        , platform      : 'Web'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Start'
                        , type          : 'none'
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