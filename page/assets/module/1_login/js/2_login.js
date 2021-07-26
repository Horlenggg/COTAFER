// const
//     MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
//     MONTH_SORT  = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     DAYS        = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// const logIn = {
//     data() {
//         return {
//             active: 0
//             , sm: 640
//             , currentBreakPoint: window.innerWidth
//             , isOn: false
//             , selectedCount: 'count*'
//             , selectedCountId: 0
//             , selectedLeaveType: 'Leave Type*'
//             , selectedLeaveTypeId: 0
//             , selectedPersonCharge: 'Person Charge*'
//             , selectedPersonChargeId: 0
//             , isCount: false
//             , isLeaveType: false
//             , isPersonCharge: false
//             , realTime: ''

//             , username: ''
//             , password: ''

//             , usernameVal: false
//             , passwordVal: false
//         }
//     },
//     mounted() {
//         this.realtimeClock();
//     },
//     methods: {
//         realtimeClock(){
//                 let
//                 rtclock = new Date(),
//                 hours   = rtclock.getHours(),
//                 minutes = rtclock.getMinutes(),
//                 seconds = rtclock.getSeconds();
        
//             // Add AM and PM
//             let amPm = hours < 12 ? 'AM': 'PM';
        
//             // convert the hours component to 12-hour format
//             hours = hours > 12 ? hours - 12 : hours;
        
//             hours = ('0' + hours).slice(-2);
//             minutes = ('0' + minutes).slice(-2);
//             seconds = ('0' + seconds).slice(-2);
        
//             let dateStr = `${hours}:${minutes}:${seconds} ${amPm} | ${rtclock.getDate()}-${MONTH_SORT[rtclock.getMonth()]}-${rtclock.getFullYear()}`;
//             this.realTime = dateStr
//             setTimeout(this.realtimeClock, 1000);
//         }
//         , onLoginVal(){
//             let isValid = true;
//             let eRegex = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{8})+$/);
//             let pSRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
            
//             if (!this.username) {
//                 isValid = false;
//                 this.usernameVal = true

//             } else if (!eRegex.test(this.username)) {
//                 isValid = false;
//                 this.usernameVal = true
//             } else {
//                 this.usernameVal = false
//             }

//             if (!this.password) {
//                 isValid = false;
//                 this.passwordVal = true
//             } else if(!pSRegex.test(this.password)) {
//                 isValid = false;
//                 this.passwordVal = true
//             } else {
//                 this.passwordVal = false
//             }

//             return isValid
//         }
//         , onLoginSubmit(){
//             if(this.onLoginVal()){
//                 let 
//                 username = document.createElement('input'),
//                 password = document.createElement('input'),
//                 form     = document.createElement('form');
    
//                 username.name   = 'username';
//                 username.value  = this.username;
    
//                 password.name   = 'password';
//                 password.value  = Sha256.hash(this.password);
    
//                 form.className  = 'hidden';
//                 form.method     = 'POST';
//                 form.action     = '/login';
    
//                 form.append(username);
//                 form.append(password);
    
//                 document.body.append(form);
//                 form.submit();
//             }
//         }
//     }
// }

// const logInApp = Vue.createApp(logIn);
// logInApp.mount('#login');