if(document.querySelector('#gonokaIos')){
    const gonokaIos = {
        data() {
            return {
                gonokaIos: [
                    {
                        id              : 1
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , relativeProject   : 'Api 1.12.0'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 2
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , relativeProject   : 'Api 1.12.0'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Stopped'
                    }
                    ,{
                        id              : 3
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , relativeProject   : 'Api 1.12.0'
                        , version       : '1.0.5'
                        , git           : 'easd23459560sd34g'
                        , status        : 'Running'
                    }
                    ,{
                        id              : 4
                        , productName   : 'Gonoka'
                        , category      : 'Gonoka'
                        , relativeProject   : 'Api 1.12.0'
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
                , isShow                : false
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
            flatpickr("#gonokaIosDate", {});
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
            onStop(id = 0) {
                this.isModalStop = true
            }
        },
    }
    const gonokaIosApp =  Vue.createApp(gonokaIos);
    gonokaIosApp.mount('#gonokaIos');
}