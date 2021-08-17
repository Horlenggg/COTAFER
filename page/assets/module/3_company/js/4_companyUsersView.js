if(document.querySelector('#companyUsersView')){
    const companyUsersView = {
        data() {
            return {
                firstName       : 'First Name'
                , lastName      : 'Last Name'
                , email         : 'Email'
                , phoneNumber   : 'Phone Number'
                , department    : ['Development']
                , roles         : ['UX/UI Designer', 'Web Developer', 'UX/UI Designer', 'Web Developer', 'UX/UI Designer', 'Web Developer', 'UX/UI Designer', 'Web Developer', 'UX/UI Designer', 'Web Developer']
                , company       : ['Cotafer', 'Gonoka']
                , project       : ['IOS', 'Android']
            }
        },
        methods: {
            onSubmit() {
    
            },
        },
    }
    const companyUsersViewApp =  Vue.createApp(companyUsersView);
    companyUsersViewApp.mount('#companyUsersView');
}
