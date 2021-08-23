if(document.querySelector('#cotaferIos')){
    const cotaferIos = {
        data() {
            return {
                permission              : 'manager'
                , cotaferIos: [
                    {
                        id              : 1
                        , productName   : 'Cotafer IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
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
            flatpickr("#cotaferIosDate", {});
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
    const cotaferIosApp =  Vue.createApp(cotaferIos);
    cotaferIosApp.component('dropdown-table', DROPDOWN);
    cotaferIosApp.mount('#cotaferIos');
}