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
            }
        },
    }
    const googleApp =  Vue.createApp(google);
    googleApp.mount('#google');
}