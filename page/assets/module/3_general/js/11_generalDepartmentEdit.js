if(document.querySelector('#generalDepartmentEdit')){
    const generalDepartmentEdit = {
        data() {
            return {
                departmentName          : 'Department'
                , dashboard             : false
                , dashboardSelectAll    : true
                , dashboardResetPw      : true

                , document              : false
                , documentAddVersion    : true
                , documentViewId        : false
    
                , isDeVal: false //check validation company name

                , errMessageDe: '' //error message icon

                , isDaCollapse: false
                , isDaHaveSelected: false
                , isDoCollapse: false
                , isDoHaveSelected: false
            }
        },
        mounted() {
            this.onChecked();
            if(this.dashboardSelectAll == true || this.dashboardResetPw == true){
                this.isDaCollapse = true
            }

            if(this.documentAddVersion == true || this.documentViewId == true){
                this.isDoCollapse = true
            }
        },
        methods: {
            onSubmit(){
    
                if(this.departmentName.length == 0){
                    this.errMessageDe = 'Require.'
                    this.isDeVal = true
                } else if(this.departmentName.length > 75){
                    this.errMessageDe = 'Max character 75 length'
                    this.isDeVal = true
                } else {
                    this.errMessageDe = ''
                    this.isDeVal = false
                }
    
                if(this.companyName ){
                    if(!this.isDeVal){
                        let 
                            form        = document.createElement('form'),
                            dName       = document.createElement('input');
    
                            dName.name              = 'departmentName';
                            dName.value             = this.departmentName;
    
                            form.append(dName);
    
                            form.method             = 'POST'
                            form.action             = '/general/department/add'
                            form.className          = 'hidden';
                            document.querySelector('body').append(form);
    
                            console.log(form);
                            form.submit();
                    }
                }
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
    const generalDepartmentEditApp =  Vue.createApp(generalDepartmentEdit);
    generalDepartmentEditApp.mount('#generalDepartmentEdit');    
}
