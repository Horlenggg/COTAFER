if(document.querySelector('#documentAdd')){
    const documentAdd = {
        data() {
            return {
                title: ''
                , category: 1
                , file: ''
                , filename: ''
                , department: 1
    
                , catOption: [
                    { id: 1, value: 'Web' }
                    , { id: 2, value: 'Mobile' }
                ]
                , deOption: [
                    { id: 1, value: 'Web' }
                    , { id: 2, value: 'Mobile' }
                ]
    
                , isTitleVal: false
                , isFilenameVal: false
                , isFileVal: false
            }
        },
        mounted() {
    
        },
        methods: {
            onFileHandle(e){
                this.file = e.target.files
            }
            , onSubmit(){
                if (!this.title) {
                    this.isTitleVal = true;
                } else {
                    this.isTitleVal = false;
                }
    
                if (this.file.length == 0) {
                    this.isFileVal = true;
                } else {
                    this.isFileVal = false;
                }

                if (!this.filename) {
                    this.isFilenameVal = true;
                } else {
                    this.isFilenameVal = false;
                }
    
    
                if(this.isTitleVal == false && this.isFileVal == false && this.isFilenameVal == false){
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
                    category.value  = this.category;
        
                    file.name       = 'file';
                    file.value      = this.file;
    
                    filename.name   = 'filename';
                    filename.value  = this.filename;
    
                    department.name     = 'department';
                    department.value    = this.department;
        
                    form.className  = 'hidden';
                    form.method     = 'POST';
                    form.action     = '/document/add';
        
                    form.append(title);
                    form.append(category);
                    form.append(file);
                    form.append(filename);
                    form.append(department);
        
                    document.body.append(form);
                    form.submit();
                }
            }
        }
    }
    
    const documentAddApp = Vue.createApp(documentAdd);
    documentAddApp.mount('#documentAdd');
};