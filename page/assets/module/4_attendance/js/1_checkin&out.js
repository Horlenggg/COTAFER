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
                        , total         : '00:30'
                        , note          : 'sdfdsfdsf'
                    }
                    ,{
                        id              : 2
                        , date          : '05/01/2021'
                        , checkin       : '8:30'
                        , checkout      : '5:30'
                        , total         : '00:30'
                        , note          : 'sdfdsfdsf'
                    }
                    ,{
                        id              : 3
                        , date          : '06/01/2021'
                        , checkin       : '8:30'
                        , checkout      : '5:30'
                        , total         : '00:30'
                        , note          : 'sdfdsfdsf'
                    }
                ]
                , isModalDelete: false
            }
        },
    }
    const checkinandoutApp =  Vue.createApp(checkinandout);
    checkinandoutApp.mount('#checkinandout');
}