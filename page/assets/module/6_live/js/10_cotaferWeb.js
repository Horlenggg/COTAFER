if(document.querySelector('#cotaferWeb')){
    const cotaferWeb = {
        data() {
            return {
                permission              : 'manager'
                , cotaferWeb: [
                    {
                        id              : 1
                        , productName   : 'Cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'Web'
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
            flatpickr("#cotaferWebDate", {});
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
    const cotaferWebApp =  Vue.createApp(cotaferWeb);
    cotaferWebApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferWebApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferWebApp.mount('#cotaferWeb');
}