if(document.querySelector('#gonokaApi')){
    const gonokaApi = {
        data() {
            return {
                permission              : 'manager'
                , gonokaApi: [
                    {
                        id              : 1
                        , productName   : 'Gonoka API'
                        , category      : 'Gonoka'
                        , platform      : 'API'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
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
            flatpickr("#gonokaApiDate", {});
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
    const gonokaApiApp =  Vue.createApp(gonokaApi);
    gonokaApiApp.component('dropdown-table', DROPDOWN);
    gonokaApiApp.mount('#gonokaApi');
}