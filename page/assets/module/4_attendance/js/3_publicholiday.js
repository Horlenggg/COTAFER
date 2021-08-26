if(document.querySelector('#publicholiday')){
    const publicholiday = {
        data() {
            return {
                isModalSeeMore: false
            }
        },
    }
    const publicholidayApp =  Vue.createApp(publicholiday);
    publicholidayApp.mount('#publicholiday');
}