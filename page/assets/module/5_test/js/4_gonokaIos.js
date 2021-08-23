if(document.querySelector('#gonokaIos')){
    const gonokaIos = {
        data() {
            return {
                permission              : 'manager'
                ,gonokaIos: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Gonoka IOS'
                        , category      : 'Gonoka'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Running'
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
            flatpickr("#gonokaIosDate", {});
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
    const gonokaIosApp =  Vue.createApp(gonokaIos);
    gonokaIosApp.component('dropdown-table', DROPDOWN);
    gonokaIosApp.mount('#gonokaIos');
}