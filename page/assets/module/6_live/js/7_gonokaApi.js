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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                        , type          : 'none'
                    }
                ]
                , status                : 0
                , stOption              : NORMAL_STATUS 
                , platform              : 0
                , plOption              : PLATFORM
                , isModalDelete         : false
            }
        },
        mounted() {
            flatpickr("#gonokaApiDate", {});
        },
        methods: {
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