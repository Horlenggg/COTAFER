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
                        , status        : 'Stopped'
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
            flatpickr("#gonokaAndroidDate", {});
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
    const gonokaAndroidApp =  Vue.createApp(gonokaAndroid);
    gonokaAndroidApp.component('dropdown-table', DROPDOWN);
    gonokaAndroidApp.mount('#gonokaAndroid');
}