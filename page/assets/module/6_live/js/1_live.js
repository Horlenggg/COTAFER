if(document.querySelector('#live')){
    const live = {
        data() {
            return {
                permission              : 'manager'
            }
        },
    }
    const liveApp =  Vue.createApp(live);
    liveApp.mount('#live');
}