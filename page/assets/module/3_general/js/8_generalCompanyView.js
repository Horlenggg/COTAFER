if(document.querySelector('#generalCompanyView')){
    const generalCompanyView = {
        data() {
            return {
                companyName     : 'Gonoka'
                , title         : 'Gonoka'
                , website       : 'https://gonoka.com.kh/home'
                , email         : 'jasmine.estrada@mail.com'
                , phoneNumber   : '012333333'
                , icon          : 'Cotafer-icon.png'
            }
        },
        methods: {
            onSubmit() {
    
            },
        },
    }
    const generalCompanyViewApp =  Vue.createApp(generalCompanyView);
    generalCompanyViewApp.mount('#generalCompanyView');
}
