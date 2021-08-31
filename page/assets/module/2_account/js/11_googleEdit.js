if(document.querySelector('#googleEdit')){
    const googleEdit = {
        data() {
            return {
                title: ''
                , projectName: ''
                , link: ''
                , date: ''
                , assignBy: ''
                , department: 0
                , deOption: DEPARTMENT
                
                , isPrVal: false
                , isTiVal: false
                , isDeVal: false
                , isLiVal: false
                , isDaVal: false
                , isAsVal: false

                , errMessagePr: ''
                , errMessageTi: ''
                , errMessageLi: ''
                , errMessageDe: ''
                , errMessageDa: ''
                , errMessageAs: ''
            }
        },
        mounted() {
            flatpickr("#date", {
                enableTime: true,
                dateFormat: "Y-m-d H:i",
                static    : true
            });
        },
        methods: {
            onSubmit(){
                if (!this.title) {
                    this.isTiVal = true
                    this.errMessageTi = 'Require.'
                } else {
                    this.isTitleVal = false
                    this.errMessageTi = ''
                }

                if (!this.projectName) {
                    this.isPrVal = true;
                    this.errMessagePr = 'Require.'
                } else {
                    this.isPrVal = false
                    this.errMessagePr = ''
                }

                if (!this.link) {
                    this.isLiVal = true
                    this.errMessageLi = 'Require.'
                } else {
                    this.isLiVal = false
                    this.errMessageLi = ''
                }

                if (this.department == 0) {
                    this.isDeVal = true
                    this.errMessageDe = 'Require.'
                } else {
                    this.isDeVal = false
                    this.errMessageDe = ''
                }

                if (!this.date) {
                    this.isDaVal = true
                    this.errMessageDa = 'Require.'
                } else {
                    this.isDaVal = false
                    this.errMessageDa = ''
                }

                if (!this.assignBy) {
                    this.isAsVal = true
                    this.errMessageAs = 'Require.'
                } else {
                    this.isAsVal = false
                    this.errMessageAs = ''
                }
    
                if(!this.isTiVal && !this.isPrVal && !this.isLiVal && !this.isDaVal && !this.isAsVal){
                    let 
                        title       = document.createElement('input'),
                        category    = document.createElement('input'),
                        file        = document.createElement('input'),
                        filename    = document.createElement('input'),
                        department  = document.createElement('input'),
                        form        = document.createElement('form');
        
                    title.name      = 'title';
                    title.value     = this.title;
    
                    category.name   = 'category';
                    category.value  = parseInt(this.category);
        
                    // file.name       = 'file';
                    // file.value      = this.file;
    
                    filename.name   = 'fileName';
                    filename.value  = this.filename;
    
                    department.name     = 'department';
                    department.value    = parseInt(this.department);
        
                    form.className  = 'hidden';
                    form.method     = 'POST';
                    form.action     = '/document/add';
        
                    form.append(title);
                    form.append(category);
                    // form.append(file);
                    form.append(filename);
                    form.append(department);
        
                    document.body.append(form);
                    form.submit();
                }
            }
        }
    }
    
    const googleEditApp = Vue.createApp(googleEdit);
    googleEditApp.mount('#googleEdit');
};