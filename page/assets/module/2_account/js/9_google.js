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
    const googleApp =  Vue.createApp(google);
    googleApp.mount('#google');
}