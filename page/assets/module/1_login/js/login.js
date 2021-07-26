const
    MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
    MONTH_SORT  = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    DAYS        = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const realtimeClock = () => {
    let
        rtclock = new Date(),
        hours   = rtclock.getHours(),
        minutes = rtclock.getMinutes(),
        seconds = rtclock.getSeconds();

    // Add AM and PM
    let amPm = hours < 12 ? 'AM': 'PM';

    // convert the hours component to 12-hour format
    hours = hours > 12 ? hours - 12 : hours;

    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    let dateStr = `${hours}:${minutes}:${seconds} ${amPm} | ${rtclock.getDate()}-${MONTH_SORT[rtclock.getMonth()]}-${rtclock.getFullYear()}`;
    let el = document.querySelectorAll('.real-dt-display');
    if (el.length == 1) {
        el[0].innerText = dateStr;
    } else if (el.length > 1) {
        el.forEach(e => {
            e.innerText = dateStr;
        })
    }
    if (el.length != 0) {
        setTimeout(realtimeClock, 1000);
    }
};

const inputInvalidMarker = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.classList.remove('border-red-500');
        let presenter = input.getAttribute('data-presenter');
        if (presenter != null) {
            document.querySelector(presenter).classList.remove('border-red-500');    
        }
    })
};

document.addEventListener('DOMContentLoaded', (event) => {
    // init real date time display
    realtimeClock();

    // init date picker
    flatpickr("#startDate", {});
    flatpickr("#endDate", {});

    // leaveRequestFrm submit
    const leaveRequestFrm = document.querySelector('#leaveRequestFrm');
    if (leaveRequestFrm) {
        leaveRequestFrm.addEventListener('submit', e => {
            e.preventDefault();
            inputInvalidMarker();
            let 
                isFormValid = !0,
                email       = document.querySelector('#email'),
                password    = document.querySelector('#password');

            // validate
            if (email.value != '') {
                email.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                email.classList.add('border-red-500');
            }
            // password
            if (password.value != '') {
                password.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                password.classList.add('border-red-500');
            }
            // count
            if (countId.value != '0') {
                document.querySelector(countId.getAttribute('data-presenter')).classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                document.querySelector(countId.getAttribute('data-presenter')).classList.add('border-red-500');
            }
            // start date
            if (startDate.value != '') {
                startDate.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                startDate.classList.add('border-red-500');
            }
            // end date
            if (endDate.value != '') {
                endDate.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                endDate.classList.add('border-red-500');
            }

            // end date
            if (note.value != '') {
                note.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                note.classList.add('border-red-500');
            }
            
            // count
            if (leaveTypeId.value != '0') {
                document.querySelector(leaveTypeId.getAttribute('data-presenter')).classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                document.querySelector(leaveTypeId.getAttribute('data-presenter')).classList.add('border-red-500');
            }

            if (isFormValid) {
                let 
                    em = document.createElement('input'),
                    pa = document.createElement('input');

                em.id       = 'email';
                em.name     = 'email';
                em.type     = 'hidden';
                em.value    = email.value;

                pa.id       = 'password';
                pa.name     = 'password';
                pa.type     = 'hidden';
                pa.value    = password.value;

                checkInFrm.append(pa);
                checkInFrm.append(em);
                checkInFrm.submit();
            }
        })
    }
    // checkInFrm submit
    const checkInFrm = document.querySelector('#checkInFrm');
    if (checkInFrm) {
        checkInFrm.addEventListener('submit', e => {
            e.preventDefault();
            inputInvalidMarker();
            let 
                isFormValid = !0,
                email = document.querySelector('#email'),
                password = document.querySelector('#password');

            // validate
            if (email.value != '') {
                email.classList.remove('border-red-500');
            } else {
                isFormValid = !!0
                email.classList.add('border-red-500');
            }
            // validate
            if (password.value != '') {
                password.classList.remove('border-red-500');
            } else {
                isFormValid = !!0
                password.classList.add('border-red-500');
            }
            if (isFormValid) {
                let 
                    em = document.createElement('input'),
                    pa = document.createElement('input'),
                    ot = document.createElement('input');

                em.id       = 'email';
                em.name     = 'email';
                em.type     = 'hidden';
                em.value    = email.value;

                pa.id       = 'password';
                pa.name     = 'password';
                pa.type     = 'hidden';
                pa.value    = password.value;

                ot.id       = 'ot';
                ot.name     = 'ot';
                ot.type     = 'hidden';
                ot.value    = document.querySelector('#overtime').checked ? 1 : 0;

                checkInFrm.append(pa);
                checkInFrm.append(em);
                checkInFrm.append(ot);
                checkInFrm.submit();
            }
        })
    }
    // leaveRequestFrm submit
    const checkOutFrm = document.querySelector('#checkOutFrm');
    if (checkOutFrm) {
        checkOutFrm.addEventListener('submit', e => {
            e.preventDefault();
            inputInvalidMarker();
            let 
                isFormValid = !0,
                email       = document.querySelector('#email'),
                password    = document.querySelector('#password');

            // validate
            if (email.value != '') {
                email.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                email.classList.add('border-red-500');
            }
            // validate
            if (password.value != '') {
                password.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                password.classList.add('border-red-500');
            }
            if (isFormValid) {
                let 
                    em = document.createElement('input'),
                    pa = document.createElement('input'),
                    ot = document.createElement('input');

                em.id       = 'email';
                em.name     = 'email';
                em.type     = 'hidden';
                em.value    = email.value;

                pa.id       = 'password';
                pa.name     = 'password';
                pa.type     = 'hidden';
                pa.value    = password.value;

                ot.id       = 'ot';
                ot.name     = 'ot';
                ot.type     = 'hidden';
                ot.value    = document.querySelector('#overtime').checked ? 1 : 0;

                checkInFrm.append(pa);
                checkInFrm.append(em);
                checkInFrm.append(ot);
                checkInFrm.submit();
            }
        })
    }
    // loginFrm
    const loginFrm = document.querySelector('#loginFrm');
    if (loginFrm) {
        loginFrm.addEventListener('submit', e => {
            e.preventDefault();
            inputInvalidMarker();
            let 
                isFormValid = !0,
                email       = document.querySelector('#loginEmail'),
                password    = document.querySelector('#loginPass');

            // validate
            if (email.value != '') {
                email.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                email.classList.add('border-red-500');
            }
            // validate
            if (password.value != '') {
                password.classList.remove('border-red-500');
            } else {
                isFormValid = !!0;
                password.classList.add('border-red-500');
            }
            if (isFormValid) {
                checkInFrm.submit();
            }
        });
    }

    // Teb Check in and Check out
    const checkInOutContainner = document.querySelector('#checkInOutContainner');
    if (checkInOutContainner) {
        window.addEventListener('resize', () => {
            checkInOutContainner.__x.$data.currentBreakPoint = window.innerWidth;
        });
    } 
});

// default show modal
const alertFullTogglers = document.querySelectorAll('.alert-full-toggler');
if (alertFullTogglers) {
    alertFullTogglers.forEach( toggler => {
        toggler.addEventListener('click', () => {
            let body = document.querySelector('body');
            if (body.classList.contains('alert-full-active')) {
                // hide
                body.classList.remove('alert-full-active');

                let alertFulls = document.querySelectorAll('.alert-full');
                alertFulls.forEach( alertFull => {
                    alertFull.classList.add('hidden');
                })
            }
            //  else {
            //     // show
            // }
        });
    });
}
