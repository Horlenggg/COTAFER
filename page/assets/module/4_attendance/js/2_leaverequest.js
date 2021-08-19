if(document.querySelector('#leaveRequest')){
    const leaveRequest = {
        data() {
            return {
                leaveRequests: [
                    {
                        id                  : 1
                        , date              : '04/01/2021-05/01/2021'
                        , count             : 'a day'
                        , leaveType         : 'Personal issues'
                        , personInCharge    : 'Brainzy'
                        , note              : 'I have personal issues.'
                        , status            : 'Pending'
                    }
                    ,{
                        id                  : 2
                        , date              : '04/01/2021-11/01/2021'
                        , count             : 'many day'
                        , leaveType         : 'Sick leave'
                        , personInCharge    : 'Brainzy'
                        , note              : 'I have headache.'
                        , status            : 'Approved'
                    }
                    ,{
                        id                  : 3
                        , date              : '04/01/2021-05/01/2021'
                        , count             : 'hour'
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
    const leaveRequestApp =  Vue.createApp(leaveRequest);
    leaveRequestApp.mount('#leaveRequest');
}