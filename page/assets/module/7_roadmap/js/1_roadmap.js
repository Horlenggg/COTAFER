if(document.querySelector('#roadmap')){
    const roadmap = {
        data() {
            return {

            }
        },
    }
    const roadmapApp =  Vue.createApp(roadmap);
    roadmapApp.mount('#roadmap');
}