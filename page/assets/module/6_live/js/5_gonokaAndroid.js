if(document.querySelector('#gonokaAndroid')){
    const gonokaAndroid = {
        data() {
            return {
                permission              : 'manager'
                , gonokaAndroid: [
                    {
                        id              : 1
                        , productName   : 'Gonoka Android'
                        , category      : 'Gonoka'
                        , platform      : 'Android'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                        , type          : 'none'
                    }
                ]
                , status                : 0
                , stOption: [
                    { value: 1, label: 'Start' }
                    , { value: 2, label: 'Stop' }
                    , { value: 3, label: 'Suspend' }
                    , { value: 4, label: 'Delete' }
                ]
                , isModalDelete         : false
            }
        },
        mounted() {
            flatpickr("#gonokaAndroidDate", {});
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
    const gonokaAndroidApp =  Vue.createApp(gonokaAndroid);
    gonokaAndroidApp.component('dropdown-status', DROPDOWN_STATUS);
    gonokaAndroidApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    gonokaAndroidApp.mount('#gonokaAndroid');
}