if(document.querySelector('#gonokaAndroid')){
    const gonokaAndroid = {
        data() {
            return {
                permission              : 'manager'
                ,gonokaAndroid: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Android'
                        , category      : 'Gonoka'
                        , platform      : 'Android'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stop'
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