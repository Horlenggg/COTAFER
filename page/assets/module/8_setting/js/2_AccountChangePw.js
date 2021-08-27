if(document.querySelector('#accountChangePw')){
    const accountChangePw = {
        data() {
            return {
                currentPassword: ''
                , newPassword: ''

                , isCpVal: false
                , isNpVal: false
                , errMessageCp: ''
                , errMessageNp: ''
            }
        },
        mounted() {
    
        },
        methods: {
            onSubmit(){
                let pRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

                if (!this.currentPassword) {
                    this.isCpVal = true
                    this.errMessageCp = 'Require.'
                } else if(!pRegex.test(this.currentPassword)) {
                    this.isCpVal = true
                    this.errMessageCp = 'Not valid password'
                } else {
                    this.isCpVal = false
                    this.errMessageCp = ''
                }

                if (!this.newPassword) {
                    this.isNpVal = true
                    this.errMessageNp = 'Require.'
                } else if(!pRegex.test(this.newPassword)) {
                    this.isNpVal = true
                    this.errMessageNp = 'Not valid password'
                } else {
                    this.isNpVal = false
                    this.errMessageNp = ''
                }

    
                if(!this.isCpVal && !this.isNpVal){
                    let 
                        currentPassword = document.createElement('input'),
                        newPassword     = document.createElement('input'),
                        form            = document.createElement('form');
        
                    currentPassword.name   = 'currentPassword';
                    currentPassword.value  = Sha256.hash(this.currentPassword);
    
                    newPassword.name   = 'newPassword';
                    newPassword.value  = Sha256.hash(this.newPassword);
        
                    form.className  = 'hidden';
                    form.method     = 'POST';
                    form.action     = '/account/password/change';
        
                    form.append(currentPassword);
                    form.append(newPassword);
        
                    document.body.append(form);
                    form.submit();
                }
            }

            , selectImage() {
                this.$refs.fileInput.click()
            }

            , onFileInput() {
                let input = this.$refs.fileInput
                let file = input.files
                if (file && file[0]) {
                    let reader = new FileReader
                    reader.onload = e => {
                        this.pfImage = e.target.result
                    }
                    reader.readAsDataURL(file[0])
                    this.$emit('input', file[0])
                }
            }
            , onBack() {
                window.history.back()
            }
        }
    }
    
    const accountChangePwApp = Vue.createApp(accountChangePw);
    accountChangePwApp.mount('#accountChangePw');
};