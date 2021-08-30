if(document.querySelector('#gonoka')){
    const gonoka = {
        data() {
            return {
                permission              : 'manager'
                , gonokas: [
                    {
                        id              : 1
                        , version       : '1.0.5'
                        , productName   : 'Gonoka IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Start'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 2
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stop'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 3
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Start'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 4
                        , version       : '1.0.5'
                        , productName   : 'Gonoka Api'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stop'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 5
                        , version       : '1.0.5'
                        , productName   : 'Cotafer IOS'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Start'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 6
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Android'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stop'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 7
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Web'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Start'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                    ,{
                        id              : 8
                        , version       : '1.0.5'
                        , productName   : 'Cotafer Api'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , formLink      : 'Google form link'
                        , byLink        : 'Google link'
                        , report        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend at aliquet posuere dignissim egestas.'
                        , status        : 'Stop'
                        , type          : 'none'
                        , improveTest   : ['Brainzy', 'Brainzy']
                        , improvePublic : ['Brainzy', 'Brainzy']
                        , startTestDate : '21.21.2021'
                        , finishTestDate: '21.21.2021'
                        , stagingDate   : '21.21.2021'
                        , productDate   : '21.21.2021'
                        , releaseDate   : '21.21.2021'
                    }
                ]
                , status                : 0
                , stOption              : NORMAL_STATUS 
                , platform              : 0
                , plOption              : PLATFORM
                , isModalDelete         : false

                , gonokaView            : []
                , isModalDetail         : false
            }
        },
        mounted() {
            flatpickr("#gonokaDate", {});
        },
        methods: {
            onView(id) {
                let gonoka = this.gonokas.filter(gonoka => gonoka.id == id);
                this.gonokaView = gonoka;
                this.isModalDetail = true
            },
            onDelete(id = 0){
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
            onArchive(id = 0){
                console.log(id);
            },
        },
    }
    const gonokaApp =  Vue.createApp(gonoka);
    gonokaApp.component('dropdown-status', DROPDOWN_STATUS);
    gonokaApp.component('dropdown-archive', DROPDOWN_ARCHIVE);
    gonokaApp.component('table-test', TABLE_TEST);
    gonokaApp.mount('#gonoka');
}