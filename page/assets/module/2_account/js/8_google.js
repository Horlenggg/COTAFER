if(document.querySelector('#google')){
    const google = {
        data() {
            return {
                googles: [
                    {
                        id              : 1
                        , title         : 'Brainzy'
                        , link          : 'abc.com'
                        , projectName   : 'News'
                        , department    : 'News'
                        , date          : '12.12.2021'
                        , assignedBy    : 'Brainzy'
                    }
                    ,{
                        id              : 1
                        , title         : 'Brainzy'
                        , link          : 'abc.com'
                        , projectName   : 'News'
                        , department    : 'News'
                        , date          : '12.12.2021'
                        , assignedBy    : 'Brainzy'
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
    const googleApp =  Vue.createApp(google);
    googleApp.mount('#google');
}