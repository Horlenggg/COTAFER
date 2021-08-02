if(document.querySelector('#documentReversion')){
    const documentReversion = {
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
                , vMajor: 0
                , vMinor: 0
                , vPatch: 1
            }
        },
        mounted() {
    
        },
        methods: {
            onFileHandle(e){
                this.file = e.target.files
            }

            , onSubmit(){

                console.log(this.vMajor + '.' + this.vMinor + '.' + this.vPatch);

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
                        version     = document.createElement('input'),
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

                    version.name    = 'version'
                    version.value   = this.vMajor + '.' + this.vMinor + '.' + this.vPatch
        
                    form.className  = 'hidden';
                    form.method     = 'POST';
                    form.action     = '/document/reversion';
        
                    form.append(title);
                    form.append(category);
                    // form.append(file);
                    form.append(filename);
                    form.append(department);
                    form.append(version);
        
                    document.body.append(form);
                    form.submit();
                }
            }

            , onIncrease(e){
                if(e == 'major'){
                    this.vMajor++
                } else if(e == 'minor'){
                    this.vMinor++
                } else if(e == 'patch'){
                    this.vPatch++
                }
            }

            , onDecrease(e){
                if(e == 'major'){
                    if(this.vMajor !== 0){
                        this.vMajor--
                    }
                } else if(e == 'minor'){
                    if(this.vMinor !== 0){
                        this.vMinor--
                    }
                } else if(e == 'patch'){
                    if(this.vPatch !== 0){
                        this.vPatch--
                    }
                }
            }
        }
    }
    
    const documentReversionApp = Vue.createApp(documentReversion);
    documentReversionApp.mount('#documentReversion');
};