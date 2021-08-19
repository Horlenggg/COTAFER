if(document.querySelector('#availableDay')){
    const availableDay = {
        data() {
            return {
                availableDays: [
                    {
                        id                  : 1
                        , date              : '04/01/2021'
                        , leaveType         : 'Personal issues'
                        , personInCharge    : 'Brainzy'
                        , note              : 'I have personal issues.'
                        , status            : 'Pending'
                    }
                    ,{
                        id                  : 2
                        , date              : '04/01/2021'
                        , leaveType         : 'Sick leave'
                        , personInCharge    : 'Brainzy'
                        , note              : 'I have headache.'
                        , status            : 'Approved'
                    }
                    ,{
                        id                  : 3
                        , date              : '04/01/2021'
                        , leaveType         : 'Personal issues'
                        , personInCharge    : 'Brainzy'
                        , note              : 'I have personal issues.'
                        , status            : 'Declined'
                    }
                ]
                , isModalDelete: false
            }
        },
    }
    const availableDayApp =  Vue.createApp(availableDay);
    availableDayApp.mount('#availableDay');
}