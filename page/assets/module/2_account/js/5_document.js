if(document.querySelector('#document')){
    const document = {
        data() {
            return {
                documents: [
                    {
                        id              : 1
                        , title         : 'Brainzy'
                        , version       : '1.0.2'
                        , note          : 'Hellllllll'
                        , projectName   : 'News'
                        , category      : 'News'
                        , department    : 'News'
                        , date          : '12.12.2021'
                        , createdBy     : 'Brainzy'
                        , updatedBy     : 'Brainzy'
                    }
                    ,{
                        id              : 2
                        , title         : 'Brainzy'
                        , version       : '1.0.2'
                        , note          : 'Hellllllll'
                        , projectName   : 'News'
                        , category      : 'News'
                        , department    : 'News'
                        , date          : '12.12.2021'
                        , createdBy     : 'Brainzy'
                        , updatedBy     : 'Brainzy'
                    }
                ]
                , category              : 0
                , caOption              : CATEGORY 
                , department            : 0
                , deOption              : DEPARTMENT 
                , isModalDelete: false
            }
        },
        methods: {
            onDelete(id = 0) {
                this.isModalDelete = true
            },
        },
    }
    const documentApp =  Vue.createApp(document);
    documentApp.mount('#document');
}