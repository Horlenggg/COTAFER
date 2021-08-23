if(document.querySelector('#test')){
    const test = {
        data() {
            return {
                permission              : 'manager'
            }
        },
    }
    const testApp =  Vue.createApp(test);
    testApp.mount('#test');
}