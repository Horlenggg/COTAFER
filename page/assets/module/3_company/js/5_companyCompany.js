if(document.querySelector('#companyCompany')){
    const companyCompany = {
        data() {
            return {
                companys: [
                    {
                        id              : 1
                        , companyName   : 'Gonoka'
                        , title         : 'Gonoka'
                        , website       : 'https://gonoka.com.kh/home'
                        , email         : 'tyler.matthews@mail.com'
                        , phoneNumber   : '012333333'
                        , icon          : 'gonoka.png'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 2
                        , companyName   : 'Cotafer'
                        , title         : 'Gonoka'
                        , website       : 'https://cotafer.com.kh'
                        , email         : 'randy.alvarado@mail.com'
                        , phoneNumber   : '012333333'
                        , icon          : 'gonoka.png'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 3
                        , companyName   : 'Cotafer'
                        , title         : 'Gonoka'
                        , website       : 'https://cotafer.com.kh'
                        , email         : 'randy.alvarado@mail.com'
                        , phoneNumber   : '012333333'
                        , icon          : 'gonoka.png'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 4
                        , companyName   : 'Cotafer'
                        , title         : 'Gonoka'
                        , website       : 'https://cotafer.com.kh'
                        , email         : 'randy.alvarado@mail.com'
                        , phoneNumber   : '08178965412'
                        , icon          : 'gonoka.png'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                    ,{
                        id              : 5
                        , companyName   : 'Cotafer'
                        , title         : 'Gonoka'
                        , website       : 'https://cotafer.com.kh'
                        , email         : 'randy.alvarado@mail.com'
                        , phoneNumber   : '0123456789'
                        , icon          : 'gonoka.png'
                        , createDate    : '23-Apr-21 09:12 AM'
                    }
                ]
                , companyView: [
                    {
                        Id              : ''
                        , companyName   : ''
                        , title         : ''
                        , website       : ''
                        , email         : ''
                        , phoneNumber   : ''
                        , icon          : ''
                        , createDate    : ''
                    }
                ]
                , isModalDetail: false
                , isModalDelete: false
            }
        },
        methods: {
            onView(id) {
                let company = this.companys.filter(com => com.id == id);
                this.companyView = company;
                this.isModalDetail = true
            },
            onDelete(id) {
                this.isModalDelete = true
            },
        },
    }
    const companyCompanyApp =  Vue.createApp(companyCompany);
    companyCompanyApp.mount('#companyCompany');
}