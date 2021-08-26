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
                , caOption: [
                    { value: 1, label: 'Start' }
                    , { value: 2, label: 'Stop' }
                    , { value: 3, label: 'Suspend' }
                    , { value: 4, label: 'Delete' }
                ]
                , department            : 0
                , deOption: [
                    { value: 1, label: 'Start' }
                    , { value: 2, label: 'Stop' }
                    , { value: 3, label: 'Suspend' }
                    , { value: 4, label: 'Delete' }
                ]
            }
        },
    }
    const documentApp =  Vue.createApp(document);
    documentApp.mount('#document');
}