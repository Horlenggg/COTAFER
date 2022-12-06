if(document.querySelector('#usersControl')){
    const usersControl = {
        data() {
            return {
                users: [
                    {
                        id              : 1
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 2
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 3
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 4
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 5
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 6
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 7
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 8
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 9
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                    ,{
                        id              : 10
                        , firstName     : 'OFF'
                        , lastName      : 'ON'
                        , userName      : 'Raksmey'
                        , email         : 'Raksmey@gamail.com'
                        , phoneNumber   : '012333333'
                        , company       : ['Gonoka','Cotafer']
                        , department    : ['Web','Mobile']
                        , roles         : ['IOS','Android']
                        , project       : ['Gonoka PR','Cotafer IM']
                    }
                ]
                , usersView: []
                , isModalDetail: false
                , isModalDelete: false
            }
        },
        methods: {
            onView(id) {
                let users = this.users.filter(user => user.id == id);
                this.usersView = users;
                this.isModalDetail = true
            },
            onDelete(id) {
                this.isModalDelete = true
            },
        },
    }
    const usersControlApp =  Vue.createApp(usersControl);
    usersControlApp.mount('#usersControl');
}
