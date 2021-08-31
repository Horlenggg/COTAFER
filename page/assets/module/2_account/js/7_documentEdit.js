if(document.querySelector('#documentEdit')){
    const documentEdit = {
        data() {
            return {
                title: ''
                , projectName: ''
                , category: 0
                , file: []
                , filename: ''

                , department: 0
                , caOption: CATEGORY
                , deOption: DEPARTMENT

                , note: ''
                
                , isPrVal: false
                , isTiVal: false
                , isCaVal: false
                , isDeVal: false
                , isFnVal: false
                , isFiVal: false
                , isNoVal: false

                , errMessagePr: ''
                , errMessageTi: ''
                , errMessageCa: ''
                , errMessageDe: ''
                , errMessageFn: ''
                , errMessageFi: ''
                , errMessageNo: ''
            }
        },
        mounted() {
    
        },
        methods: {
            onFileHandle(e){
                this.file = e.target.files;
                let ext = this.file[0].name.substring(this.file[0].name.lastIndexOf('.') + 1);
                if(ext === "pdf") {
                    let formData = new FormData();
                    formData.append("file", this.file[0]);
    
                    let request = new XMLHttpRequest();
                    request.open("POST", "/document/add/file");
                    request.send(formData);
                } else {
                    this.$refs.inputPdf.value = ''
                }
            }
            , onSubmit(){
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

                if(this.category == 0){
                    this.isCaVal = true;
                    this.errMessageCa = 'Require.'
                } else {
                    this.isCaVal = false
                    this.errMessageCa = ''
                }

                if(this.department == 0){
                    this.isDeVal = true;
                    this.errMessageDe = 'Require.'
                } else {
                    this.isDeVal = false
                    this.errMessageDe = ''
                }
    
                if (this.file.length == 0) {
                    this.isFiVal = true
                    this.errMessageFi = 'Require.'
                } else {
                    this.isFiVal = false
                    this.errMessageFi = ''
                }

                if (!this.filename) {
                    this.isFnVal = true
                    this.errMessageFn = 'Require.'
                } else {
                    this.isFnVal = false
                    this.errMessageFn = ''
                }

                if (!this.note) {
                    this.isNoVal = true
                    this.errMessageNo = 'Require.'
                } else {
                    this.isNoVal = false
                    this.errMessageNo = ''
                }
    
                if(!this.isTiVal && !this.isPrVal && !this.isFiVal && !this.isFnVal && !this.isNoVal){
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
    
    const documentEditApp = Vue.createApp(documentEdit);
    documentEditApp.mount('#documentEdit');
};