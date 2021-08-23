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
            flatpickr("#cotaferAndroidDate", {});
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
    const cotaferAndroidApp =  Vue.createApp(cotaferAndroid);
    cotaferAndroidApp.component('dropdown-table', DROPDOWN);
    cotaferAndroidApp.mount('#cotaferAndroid');
}