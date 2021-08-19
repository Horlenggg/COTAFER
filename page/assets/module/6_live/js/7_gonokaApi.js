if(document.querySelector('#gonokaApi')){
    const gonokaApi = {
        data() {
            return {
                gonokaApi: [
                    {
                        id              : 1
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'API'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 2
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , platform      : 'API'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stopped'
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
            flatpickr("#gonokaApiDate", {});
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
    const gonokaApiApp =  Vue.createApp(gonokaApi);
    gonokaApiApp.mount('#gonokaApi');
}