const MONTH_SORT = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * ### Modals ###
 */

function toggleModal(action, elem_trigger) {
    elem_trigger.addEventListener('click', function () {
        if (action == 'add') {
            let modal_id = this.dataset.modal;
            document.getElementById(`${modal_id}`).classList.add('modal-is-open');
        } else {
            // Automaticlly get the opned modal ID
            let modal_id = elem_trigger.closest('.modal-wrapper').getAttribute('id');
            document.getElementById(`${modal_id}`).classList.remove('modal-is-open');
        }
    })
};
// Check if there is modals on the page
if (document.querySelector('.modal-wrapper')) {
    // Open the modal
    document.querySelectorAll('.modal-trigger').forEach(btn => {
        toggleModal('add', btn);
    })

    // close the modal
    document.querySelectorAll('.close-modal').forEach(btn => {
        toggleModal('remove', btn);
    })
};

// method for alpine month picker use in all page except login
function monthPicker() {
    return {
        isOn                : false
        , selectedMonth     : (new Date()).getMonth() + 1
        , tempselectedYear  : 0
        , selectedYear      : (new Date()).getFullYear()
        , month             : [[1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']]
    }
};

// method for alpine month picker use in all page except login
function yearPicker() {
    return {
        isOn: false
        , selectedYear: (new Date()).getFullYear()
        , years: [
            (new Date()).getFullYear() - 9
            , (new Date()).getFullYear() - 8
            , (new Date()).getFullYear() - 7
            , (new Date()).getFullYear() - 6
            , (new Date()).getFullYear() - 5
            , (new Date()).getFullYear() - 4
            , (new Date()).getFullYear() - 3
            , (new Date()).getFullYear() - 2
            , (new Date()).getFullYear() - 1
            , (new Date()).getFullYear()
            , (new Date()).getFullYear() + 1
            , (new Date()).getFullYear() + 2
        ]
    }
};

// use in public holiday
let modalEventDetailToggler = document.querySelector('.modalEventDetail-toggler');
if (modalEventDetailToggler) {
    modalEventDetailToggler.addEventListener('click', () => {
        let modalEventDetail = document.querySelector('#modalEventDetail');
        if (modalEventDetail) {
            modalEventDetail.__x.$data.isOpen = true;
        }
    })
};

// use in public holiday
document.addEventListener('DOMContentLoaded', function () {

    // init fullCalendar
    let calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        let calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            // initialDate: '2021-04-07',
            headerToolbar: {
                left: 'title',
                right: 'prev,next'
            },
            events: [
                {
                    title: 'Khmer New\'s Year',
                    start: '2021-04-13',
                    end: '2021-04-16',
                    // url: 'http://google.com/',
                },
                {
                    title: 'Visak Bochea',
                    start: '2021-04-26',
                },
                {
                    title: 'Royal Ploughing Ceremony',
                    start: '2021-04-30'
                }
            ],
            eventContent: function (info) {
                let end = '';
                if (info.event.end != null) {
                    end = `- ${info.event.end.getDate() - 1} ${MONTH_SORT[info.event.end.getMonth()]}`;
                }
                return {
                    html: `<div class="text-xs font-semibold px-1">
            <span class="block">${info.event.start.getDate()} ${MONTH_SORT[info.event.start.getMonth()]} ${end}</span>
            <span>${info.event.title}</span>
            </div>`}
                // return info.event.title
            },
            eventBackgroundColor: '#e5e5e5',
            eventBorderColor: '#e5e5e5',
            eventTextColor: '#333'
        });
        calendar.render();
    }
});
