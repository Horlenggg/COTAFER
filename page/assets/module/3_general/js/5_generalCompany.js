if(document.querySelector('#generalCompany')){
    const generalCompany = {
        data() {
            return {
                companys: [
                    {
                        id              : 1
                        , companyName   : 'Gonoka'
                        , website       : 'https://gonoka.com.kh/home'
                        , email         : 'tyler.matthews@mail.com'
                        , phoneNumber   : '012333333'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 2
                        , companyName   : 'Cotafer'
                        , website       : 'https://cotafer.com.kh'
                        , email         : 'randy.alvarado@mail.com'
                        , phoneNumber   : '012333333'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                ]
                , isModalDelete: false
            }
        },
        methods: {
            onDelete(id) {
                this.isModalDelete = true
            },
        },
    }
    const generalCompanyApp =  Vue.createApp(generalCompany);
    generalCompanyApp.component('Multiselect', VueformMultiselect);
    generalCompanyApp.mount('#generalCompany');
}