if(document.querySelector('#gonokaIos')){
    const gonokaIos = {
        data() {
            return {
                permission              : 'manager'
                , gonokaIos: [
                    {
                        id              : 1
                        , productName   : 'Gonoka IOS'
                        , category      : 'Gonoka'
                        , platform      : 'IOS'
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
            flatpickr("#gonokaIosDate", {});
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
    const gonokaIosApp =  Vue.createApp(gonokaIos);
    gonokaIosApp.component('dropdown-status', DROPDOWN_STATUS);
    gonokaIosApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    gonokaIosApp.mount('#gonokaIos');
}