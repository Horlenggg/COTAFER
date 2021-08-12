if(document.querySelector('#generalRolesView')){
    const generalRolesView = {
        data() {
            return {
                roleName                : 'Department'
                , availableUsers        : ['Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer', 'Web Developer', 'IOS Developer']
                , department            : 'Department'

                , dashboard             : true
                , dashboardSelectAll    : true
                , dashboardResetPw      : true

                , document              : false
                , documentAddVersion    : false
                , documentViewId        : true

                , isDaCollapse          : false
                , isDaHaveSelected      : false
                , isDoCollapse          : false
                , isDoHaveSelected      : false
            }
        },
        mounted() {
            this.onChecked()
            if(this.dashboardSelectAll == true || this.dashboardResetPw == true){
                this.isDaCollapse = true
            }

            if(this.documentAddVersion == true || this.documentViewId == true){
                this.isDoCollapse = true
            }
        },
        methods: {
            onSubmit(){
            }
            , onCollapse(e = ''){
                if(e == 'dashboard'){
                    this.isDaCollapse = !this.isDaCollapse
                } else if(e == 'document'){
                    this.isDoCollapse = !this.isDoCollapse
                }
            }
            , onChecked(e = ''){
                if(e == 'dashboard'){
                    if(this.dashboard == true){
                        this.dashboardSelectAll = true;
                        this.dashboardResetPw = true;
                    } else {
                        this.dashboardSelectAll = false;
                        this.dashboardResetPw = false;
                    }
                } else if(e == 'document'){
                    if(this.document == true){
                        this.documentAddVersion = true;
                        this.documentViewId = true;
                    } else {
                        this.documentAddVersion = false;
                        this.documentViewId = false;
                    }
                }

                if(this.dashboardSelectAll == true || this.dashboardResetPw == true){
                    this.isDaHaveSelected = true
                } else {
                    this.isDaHaveSelected = false
                }

                if(this.documentAddVersion == true || this.documentViewId == true){
                    this.isDoHaveSelected = true
                } else {
                    this.isDoHaveSelected = false
                }
                
                if(this.dashboardSelectAll == true && this.dashboardResetPw == true){
                    this.dashboard = true
                } else {
                    this.dashboard = false
                }

                if(this.documentAddVersion == true && this.documentViewId == true){
                    this.document = true
                } else {
                    this.document = false
                }
            }
        },
    }
    const generalRolesViewApp =  Vue.createApp(generalRolesView);
    generalRolesViewApp.mount('#generalRolesView');    
}
