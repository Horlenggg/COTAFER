if(document.querySelector('#gonoka')){
    const gonoka = {
        data() {
            return {
                gonokas: [
                    {
                        id              : 1
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'IOS'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Running'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 2
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Android'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stopped'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 3
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Web'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Running'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 4
                        , productName   : 'Cotafer'
                        , category      : 'Cotafer'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stopped'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 5
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'IOS'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Running'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 6
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Android'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stopped'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 7
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Web'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Running'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 8
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stopped'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 9
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Web'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Running'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                    ,{
                        id              : 10
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'Api'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stopped'
                        , note          : 'helllllllllllllllllllllllllllllllllllllllllllllllll'
                    }
                ]
                , status                : 0
                , stOption: [
                    { value: 1, label: 'Running' }
                    , { value: 2, label: 'Stopped' }
                ]
                , isShow                : 0
                , isModalDelete         : false
                , isModalStop           : false
            }
        },
        watch: {
            isShow(o, n){
                console.log(o,n);
            }
        },
        mounted() {
            flatpickr("#gonokaDate", {});
        },
        methods: {
            onModal(id = 0) {
                if(this.isShow == 0){
                    this.isShow = id
                } else {
                    this.isShow = 0
                }
            },
            onDelete(id = 0) {
                this.isModalDelete = true
            },
            onStart(id = 0){
                console.log(id);
            },
            onStop(id = 0){
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
    const gonokaApp =  Vue.createApp(gonoka);
    gonokaApp.mount('#gonoka');
}