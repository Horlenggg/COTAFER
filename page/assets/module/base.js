
document.addEventListener('DOMContentLoaded', function (event) {
    // ================ //
    //      SideBar     //
    // ================ //
    let sidebarBg = document.querySelector('#sidebarBg');
    if (sidebarBg) {

        let 
            sidebarStatus   = false,
            sidebarEl       = document.querySelector('#sidebarEl'),
            sidebarToggler  = document.querySelector('#sidebarToggler');

        function bgHide() {
            if (sidebarBg.classList.contains('block')) {
                sidebarBg.classList.remove('block')
            }
            if (!(sidebarBg.classList.contains('hidden'))) {
                sidebarBg.classList.add('hidden')
            }
        }
        function bgShow() {

            if (sidebarBg.classList.contains('hidden')) {
                sidebarBg.classList.remove('hidden')
            }
            if (!(sidebarBg.classList.contains('block'))) {
                sidebarBg.classList.add('block')
            }
        }
        function hide() {
            if (sidebarEl.classList.contains('tranlate-x-0')) {
                sidebarEl.classList.remove('tranlate-x-0')
            }
            if (sidebarEl.classList.contains('ease-out')) {
                sidebarEl.classList.remove('ease-out')
            }

            if (!(sidebarEl.classList.contains('-translate-x-full'))) {
                sidebarEl.classList.add('-translate-x-full')
            }
            if (!(sidebarEl.classList.contains('ease-in'))) {
                sidebarEl.classList.add('ease-in')
            }
        }
        function show() {
            if (sidebarEl.classList.contains('-translate-x-full')) {
                sidebarEl.classList.remove('-translate-x-full')
            }
            if (sidebarEl.classList.contains('ease-in')) {
                sidebarEl.classList.remove('ease-in')
            }

            if (!(sidebarEl.classList.contains('tranlate-x-0'))) {
                sidebarEl.classList.add('tranlate-x-0')
            }
            if (!(sidebarEl.classList.contains('ease-out'))) {
                sidebarEl.classList.add('ease-out')
            }
        }

        window.onresize = function () {
            hide();
            bgHide();
            sidebarStatus = false
        }
        if (sidebarToggler != null) {
            sidebarToggler.addEventListener('click', function () {
                if (sidebarStatus) {
                    bgHide();
                    hide()
                } else {
                    bgShow();
                    show()
                }
                sidebarStatus = !sidebarStatus
            })
        }
        sidebarBg.addEventListener('click', function () {
            bgHide();
            hide();
            sidebarStatus = false
        })

        sidebarEl.classList.add('transition');
        sidebarEl.classList.add('duration-300')

        document.querySelector('nav').__x.$data.loaded = true;

        let subSidebars = document.querySelectorAll('.sidebar-submodule');

        if (subSidebars) {
            subSidebars.forEach(subSidebar => {
                if (!subSidebar.classList.contains('max-h-0')) {
                    subSidebar.classList += ' max-h-0 transition-all';
                    subSidebar.classList.remove('max-h-full');
                }
            });
        }
    }

    // ==================== //
    //      End SideBar     //
    // ==================== //
});

class Response {
    constructor(res) {
        if (typeof res.data.error_number !== 'undefined') {
            if (res.data.error_number === 4003) {
                // token expired
                alert('Session Expired\nPlease log in again.');
                window.location.href = '/logout';
            }
        }
        if (typeof res.data !== 'undefined') {

            // full response
            this.response = res.data;
            // Assign data
            if (typeof res.data.data !== 'undefined') {
                this.data = res.data.data
            } else {
                this.data = {}
            }
            // Assign errorMessage
            if (typeof res.data.error_message !== 'undefined') {
                this.errorMessage = res.data.error_message
            } else {
                this.errorMessage = ""
            }
            // Assign errorNumber
            if (typeof res.data.error_number !== 'undefined') {
                this.errorNumber = res.data.error_number
            } else {
                this.errorNumber = 0
            }
            // Assign status
            if (typeof res.data.status !== 'undefined') {
                this.status = res.data.status
            } else {
                this.status = ""
            }
        }
    }
    isAccepted() {
        return this.errorMessage === '';
    }
}

/**
 *
 * @param {*} endpoint
 * @param {*} form
 * @returns
 * REQUIRED ALPINE JS TO USE THIS METHOD
 */
const makeReqestFiles = async (endpoint, form) => {
    let result = await axios({
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url: endpoint,
        data: form,
    }).then(res => {
        let response = new Response(res);
        if (response.isAccepted()) {
            return response.response;
        } else {
            return '';
        }
    }).catch(err => {
        console.error(err);
        return '';
    });

    return result;
};

const makeReqestAsync = async (endpoint, params) => {
    let result = await axios.post(
        endpoint
        , params
    ).then(function (res) {
        let response = new Response(res);
        // console.log(response.response);
        if (response.isAccepted()) {
            return response.response;
        } else {
            return '';
        }
    }).catch(function (error) {
        console.error(error);
        return '';
    });

    return result;
};

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

// Return if element is currently visible in view port
const isInViewport = element => {
    let rect = element.getBoundingClientRect();
    let html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    )
};