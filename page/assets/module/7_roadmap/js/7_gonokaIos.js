if(document.querySelector('#gonokaIos')){
    const gonokaIos = {
        data() {
            return {
                permission              : 'manager'
                , gonokaIos: [
                    {
                        id              : 1
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'IOS'
                        , version       : '1.0.5'
                        , devStartDate  : '12.12.2021'
                        , devDeadline   : '01.01.2022'
                        , releaseDate   : '02.02.2022'
                        , maintenanceTime   : '60d'
                        , feature       : 'live'
                        , status        : 'Start'
                        , note          : 'helllllllllllllllllllllllllll'
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