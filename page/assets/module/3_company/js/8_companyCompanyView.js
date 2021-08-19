if(document.querySelector('#companyCompanyView')){
    const companyCompanyView = {
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
    const companyCompanyViewApp =  Vue.createApp(companyCompanyView);
    companyCompanyViewApp.mount('#companyCompanyView');
}
