if(document.querySelector('#accountChangePw')){
    const accountChangePw = {
        data() {
            return {
                currentPassword: ''
                , newPassword: ''
                , isCurrentPasswordVal: false
                , isNewPasswordVal: false
            }
        },
        mounted() {
    
        },
        methods: {
            onSubmit(){
                let pRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

                if (!this.currentPassword) {
                    this.isCurrentPasswordVal = true;
                } else if(!pRegex.test(this.currentPassword)) {
                    this.isCurrentPasswordVal = true;
                } else {
                    this.isCurrentPasswordVal = false;
                }

                if (!this.newPassword) {
                    this.isNewPasswordVal = true;
                } else if(!pRegex.test(this.newPassword)) {
                    this.isNewPasswordVal = true;
                } else {
                    this.isNewPasswordVal = false;
                }

    
                if(!this.isCurrentPasswordVal && !this.isNewPasswordVal){
                    let 
                        currentPassword = document.createElement('input'),
                        newPassword     = document.createElement('input'),
                        form            = document.createElement('form');
        
                    currentPassword.name   = 'currentpassword';
                    currentPassword.value  = Sha256.hash(this.currentPassword);
    
                    newPassword.name   = 'newpassword';
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
        }
    }
    
    const accountChangePwApp = Vue.createApp(accountChangePw);
    accountChangePwApp.mount('#accountChangePw');
};