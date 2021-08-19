if(document.querySelector('#dashboard')){
    const dashboard = {
        data() {
            return {
                dashboards: [
                    {
                        id              : 1
                        , readed        : 'Not'
                        , title         : 'Role'
                        , date          : '12.12.2021'
                        , projectName   : 'Web Developer'
                        , category      : 'News'
                        , createdBy     : 'Brainzy'
                        , status        : 'Low'
                    }
                    ,{
                        id              : 2
                        , readed        : 'Not'
                        , title         : 'Role'
                        , date          : '12.12.2021'
                        , projectName   : 'Web Developer'
                        , category      : 'News'
                        , createdBy     : 'Brainzy'
                        , status        : 'Medium'
                    }
                    ,{
                        id              : 3
                        , readed        : 'Not'
                        , title         : 'Role'
                        , date          : '12.12.2021'
                        , projectName   : 'Web Developer'
                        , category      : 'News'
                        , createdBy     : 'Brainzy'
                        , status        : 'High'
                    }
                ]
            }
        },
    }
    const dashboardApp =  Vue.createApp(dashboard);
    dashboardApp.mount('#dashboard');
}