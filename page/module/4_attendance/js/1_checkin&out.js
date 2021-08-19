if(document.querySelector('#checkinandout')){
    const checkinandout = {
        data() {
            return {
                checkinandouts: [
                    {
                        id              : 1
                        , date          : '04/01/2021'
                        , checkin       : '8:30'
                        , checkout      : '5:30'
                        , other         : ''
                    }
                    ,{
                        id              : 2
                        , date          : '05/01/2021'
                        , checkin       : '8:30'
                        , checkout      : '5:30'
                        , other         : ''
                    }
                    ,{
                        id              : 3
                        , date          : '06/01/2021'
                        , checkin       : '8:30'
                        , checkout      : '5:30'
                        , other         : ''
                    }
                ]
                , isModalDelete: false
            }
        },
    }
    const checkinandoutApp =  Vue.createApp(checkinandout);
    checkinandoutApp.mount('#checkinandout');
}