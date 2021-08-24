if(document.querySelector('#cotaferAndroid')){
    const cotaferAndroid = {
        data() {
            return {
                permission              : 'manager'
                , cotaferAndroid: [
                    {
                        id              : 1
                        , productName   : 'Cotafer Android'
                        , category      : 'Cotafer'
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
            flatpickr("#cotaferAndroidDate", {});
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
    const cotaferAndroidApp =  Vue.createApp(cotaferAndroid);
    cotaferAndroidApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferAndroidApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferAndroidApp.mount('#cotaferAndroid');
}