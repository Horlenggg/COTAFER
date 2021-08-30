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
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                        , type          : 'none'
                        , relativeProject : 'Cotafer IM'
                        , expiration    : '21.12.2021'
                        , server        : 'development'
                        , startDate     : '21.12.2021'
                        , stopDate      : '21.12.2021'
                        , startApproveBy : ['Brainzy', 'Brainzy']
                        , stopApproveBy : ['Brainzy', 'Brainzy']
                    }
                ]
                , status                : 0
                , stOption              : NORMAL_STATUS 
                , platform              : 0
                , plOption              : PLATFORM
                , isModalDelete         : false

                , cotaferView           : []
                , isModalDetail         : false
            }
        },
        mounted() {
            flatpickr("#cotaferIosDate", {});
        },
        methods: {
            onView(id) {
                let cotafer = this.cotaferIos.filter(cotafer => cotafer.id == id);
                this.cotaferView = cotafer;
                this.isModalDetail = true
            },
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
    const cotaferIosApp =  Vue.createApp(cotaferIos);
    cotaferIosApp.component('dropdown-status', DROPDOWN_STATUS);
    cotaferIosApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    cotaferIosApp.mount('#cotaferIos');
}