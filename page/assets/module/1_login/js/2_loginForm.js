if(document.querySelector('#formLogIn')){

    //Validation and Submit formLogin
    const formLogIn = {
        data() {
            return {
                email          : ''
                , errorLabel   : ''
                , pass:
                    {
                        id             : 1
                        , password     : ''
                        , textLabel    : 'Password'
                        , errorLabel   : ''
                    }
                , countryCode : 31
                , options : [
                    { id: 31,   name: 'Cambodia (+855)', value: '+855' },
                    { id: 1,    name: '...', value: '...' },
                ]
                , isEnable : false
            }
        },
        mounted() {
            loading();
        },
        methods: {
            submit () {
                if(this.valForm() == true){
                    this.onSubmit()
                }
            }
            , valForm () {
                let isValid = true;
                let eRegex = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{8})+$/);
                let pSRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

                if (!this.countryCode) {
                    isValid = false;
                }
                
                if (!this.email) {
                    isValid = false;
                    this.errorLabel = 'Required.';
                } else if (!eRegex.test(this.email)) {
                    isValid = false;
                    this.errorLabel = 'Invalid email or phone.';
                } else {
                    this.errorLabel = '';
                }

                if (!this.pass.password) {
                    isValid = false;
                    this.pass.errorLabel = 'Password required.';
                } else if(!pSRegex.test(this.pass.password)) {
                    isValid = false;
                    this.pass.errorLabel = 'Invalid password.';
                } else {
                    this.pass.errorLabel = '';
                }

                return isValid
            }
            , onSubmit() {
                let
                    userName    = document.createElement('input'),
                    password    = document.createElement('input'),
                    country     = document.createElement('input'),
                    form        = document.createElement('form');

                    country.name    = "countryCode";
                    country.value   = this.countryCode

                    userName.name   = "username";
                    userName.value  = this.email;

                    let hashedPassword = Sha256.hash(this.pass.password);

                    password.name   = "password";
                    password.value  = hashedPassword;

                    // vitual form
                    form.classList.add('hidden');

                    form.method = 'POST';
                    form.action = '/login';

                    form.append(country);
                    form.append(userName);
                    form.append(password);

                    document.querySelector('body').append(form);
                    form.submit();
            }
            , onInput(k,v) {
                this.pass.password = v;

                if(this.countryCode && this.email && this.pass.password){
                    this.isEnable = true;
                } else {
                    this.isEnable = false;
                }
            }
        }
    }

    let fLogIN = Vue.createApp(formLogIn);
    fLogIN.component('cpn-input-password', CPN_INPUT_PASSWORD);
    fLogIN.mount('#formLogIn')
}