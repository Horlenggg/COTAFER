if(document.querySelector('#gonokaApi')){
    const gonokaApi = {
        data() {
            return {
                permission              : 'manager'
                , gonokaApi: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Api'
                        , category      : 'Gonoka'
                        , platform      : 'API'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stop'
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
            flatpickr("#gonokaApiDate", {});
        },
        methods: {
            onView(id) {
                let gonoka = this.gonokaApi.filter(gonoka => gonoka.id == id);
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
    const gonokaApiApp =  Vue.createApp(gonokaApi);
    gonokaApiApp.component('dropdown-status', DROPDOWN_STATUS);
    gonokaApiApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    gonokaApiApp.mount('#gonokaApi');
}