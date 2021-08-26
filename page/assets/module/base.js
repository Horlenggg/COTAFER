var thisIsBase = 1;

let sidebar = document.getElementById('sidebar');
if(typeof sidebar !== 'undefined'){
    function sidebarToggle() {
        if (sidebar.style.display === "none") {
            sidebar.classList.add('animate-sidebarOn');
            sidebar.style.display = "block";
            setTimeout(()=> {
                sidebar.classList.remove('animate-sidebarOn');
            }, 300)
        } else {
            sidebar.classList.add('animate-sidebarOff');
            setTimeout(()=> {
                sidebar.style.display = "none";
                sidebar.classList.remove('animate-sidebarOff');
            }, 300)
        }
    };
};

const DROPDOWN_STATUS = {
    data() {
        return {
            isShow      : false,
            isDown      : false,
            permission  : this.isPermission
        }
    },
    directives:{
        'click-away' : {
            beforeMount(el, binding, vnode) {
                el.clickOutsideEvent = function(event) {
                if (!(el === event.target || el.contains(event.target))) {
                    binding.value(event, el);
                }
                };
                document.body.addEventListener('click', el.clickOutsideEvent);
            },
            unmounted(el) {
                document.body.removeEventListener('click', el.clickOutsideEvent);
            }
        }
    },
    props:{ 
        isPermission        : String,
        isStatus            : String,
    },

    methods: {
        onModal(){
            this.isShow = !this.isShow
        },
        onClickAway(){
            this.isShow = false
        },
        onCheckDropdown(){
            let ul = this.$refs.dropdown
            let button = this.$refs.btnDropdown
            if(ul.parentElement.parentElement.parentElement.clientHeight > 320){
                let spaceUp = (ul.offsetTop - button.clientHeight - ul.clientHeight) - ul.parentElement.parentElement.parentElement.scrollTop;
                let spaceDown = (ul.parentElement.parentElement.parentElement.scrollTop + ul.parentElement.parentElement.parentElement.clientHeight - (ul.offsetTop + ul.clientHeight)) - 160;
                if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown)){
                    this.isDown = true
                }
            }
        }
    },
    template: 
    /*html*/
    `
    <div class="relative" ref="dropdown">
        <button @click="onModal(), onCheckDropdown()" v-click-away="onClickAway" ref="btnDropdown" class="focus:outline-none">
            <span v-text="isStatus" class="font-bold px-2 py-1 rounded-full" :class="{ 'text-red-500 bg-red-100' : isStatus == 'Stop', 'text-gray-700 bg-gray-300' : isStatus == 'Suspend', 'text-gray-700 bg-gray-200' : isStatus == 'Delete', 'text-green-500 bg-green-100' : isStatus == 'Start' }"></span>
        </button>
        <div v-show="isShow" 
            class="absolute bg-white border shadow-md z-10"
            :class="isDown ? 'bottom-6 left-0' : 'top-6 left-0'"
            >
            <div v-if="permission === 'manager'">
                <button @click="$emit('onStart', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-green-500">Start</span>
                </button>
                <button @click="$emit('onStop', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-red-500">Stop</span>
                </button>
                <button @click="$emit('onSuspend', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Suspend</span>
                </button>
                <button @click="$emit('onDelete', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Delete</span>
                </button>
            </div>
        </div>
    </div>
    `
};

const DROPDOWN_ARCHIVE = {
    data() {
        return {
            isShow      : false,
            isDown      : false,
        }
    },
    directives:{
        'click-away' : {
            beforeMount(el, binding, vnode) {
                el.clickOutsideEvent = function(event) {
                if (!(el === event.target || el.contains(event.target))) {
                    binding.value(event, el);
                }
                };
                document.body.addEventListener('click', el.clickOutsideEvent);
            },
            unmounted(el) {
                document.body.removeEventListener('click', el.clickOutsideEvent);
            }
        }
    },
    props:{ 
        isType              : String
    },

    methods: {
        onModal(){
            this.isShow = !this.isShow
        },
        onClickAway(){
            this.isShow = false
        },
        onCheckDropdown(){
            let ul = this.$refs.dropdown
            let button = this.$refs.btnDropdown
            if(ul.parentElement.parentElement.parentElement.clientHeight > 320){
                let spaceUp = (ul.offsetTop - button.clientHeight - ul.clientHeight) - ul.parentElement.parentElement.parentElement.scrollTop;
                let spaceDown = (ul.parentElement.parentElement.parentElement.scrollTop + ul.parentElement.parentElement.parentElement.clientHeight - (ul.offsetTop + ul.clientHeight)) - 160;
                if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown)){
                    this.isDown = true
                }
            }
        }
    },
    template: 
    /*html*/
    `
    <div class="relative" ref="dropdown">
        <button @click="onModal(), onCheckDropdown()" v-click-away="onClickAway" ref="btnDropdown" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </button>
        <div v-show="isShow" 
            class="absolute bg-white border shadow-md z-10"
            :class="isDown ? 'bottom-6 left-0' : 'top-6 left-0'"
            >
            <div v-if="isType === 'Archive'">
                <button @click="$emit('onRestore', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span class="text-sm">Restore</span>
                </button>
            </div>
            <div v-else>
                <button @click="$emit('onArchive', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                        <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Archive</span>
                </button>
            </div>
        </div>
    </div>
    `
};

const COLLAPSE_COMPONENT = {
    data() {
        return {
            isCollapse      : false,
            isHaveSelected  : false,
            main            : false,
            subCollapse     : this.data,
            isID            : this.makeid()
            
        }
    },
    mounted() {
        this.onChecked()
    },
    methods: {
        onCollapse() {
            this.isCollapse = !this.isCollapse
        },
        onChecked() {
            let isChecked       = this.subCollapse.some(sub => sub.model == true );
            let isCheckedAll    = this.subCollapse.every(sub => sub.model == true);

            if( isCheckedAll == true ) {
                this.main = true
                this.isCollapse = true
            } else { 
                if(isChecked == true){
                    this.isHaveSelected = true
                    this.isCollapse = true
                } else {
                    this.isHaveSelected = false
                }
                this.main = false
            }
        },
        onCheckedAll() {
            let checked = this.subCollapse.every(sub => sub.model == true);
            checked ? this.subCollapse.forEach(sub => { sub.model = false }) : this.subCollapse.forEach(sub => { sub.model = true });
            this.onChecked();
        },
        makeid() {
            let result           = '';
            let length           = 5
            let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
           return result;
        }
    },
    props: {
        title   : String,
        data    : Array
    },
    template: /*html*/`
    <div>
        <div class="w-full flex flex-row justify-between items-center">
            <div @click="onCollapse" class="flex-1 flex flex-row items-center cursor-pointer select-none space-x-3">
                <svg v-if="!isCollapse" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
                <p  
                    class="font-Roboto font-medium" 
                    :class="{ 'w-3/12 pb-3 border-b' : !isCollapse }"
                    v-text="title">
                    </p>
            </div>
            <input 
                v-model="main"
                @change="onCheckedAll"
                class="focus:outline-none"
                :class="{ 'is-checked' : isHaveSelected }"
                type="checkbox"
            >
        </div>
        <div 
            v-show="isCollapse"
            v-for="(sub, index) in subCollapse" 
            :key="sub.id"
            class="pl-7"
            >
            <div v-if="index == 0" class="flex flex-row justify-between items-center select-none mt-3">
                <label :for="isID + index" v-text="sub.text" class="font-Roboto text-sm py-3 border-t border-b w-4/6 pl-4"></label>
                <input 
                    :id="isID + index"
                    v-model="sub.model"
                    @change="onChecked" 
                    class="focus:outline-none" 
                    type="checkbox"
                    >
            </div>
            <div v-else class="flex flex-row justify-between items-center select-none">
                <label :for="isID + index" v-text="sub.text" class="font-Roboto text-sm py-3 border-b w-4/6 pl-4"></label>
                <input 
                    :id=" isID + index "
                    v-model="sub.model"
                    @change="onChecked" 
                    class="focus:outline-none" 
                    type="checkbox"
                    >
            </div>
        </div>  
    </div>
    ` 
};

const COLLAPSE_VIEW_COMPONENT = {
    data() {
        return {
            isCollapse      : false,
            isHaveSelected  : false,
            main            : false,
            subCollapse     : this.data,
        }
    },
    mounted() {
        this.onChecked()
    },
    methods: {
        onCollapse() {
            this.isCollapse = !this.isCollapse
        },
        onChecked() {
            let isChecked       = this.subCollapse.some(sub => sub.model == true );
            let isCheckedAll    = this.subCollapse.every(sub => sub.model == true);

            if( isCheckedAll == true ) {
                this.main = true
                this.isCollapse = true
            } else { 
                if(isChecked == true){
                    this.isHaveSelected = true
                    this.isCollapse = true
                } else {
                    this.isHaveSelected = false
                }
                this.main = false
            }
        },
        onCheckedAll() {
            let checked = this.subCollapse.every(sub => sub.model == true);
            checked ? this.subCollapse.forEach(sub => { sub.model = false }) : this.subCollapse.forEach(sub => { sub.model = true });
            this.onChecked();
        },
    },
    props: {
        title   : String,
        data    : Array
    },
    template: /*html*/`
    <div>
        <div class="w-full flex flex-row justify-between items-center">
            <div class="flex-1 flex flex-row items-center cursor-pointer select-none space-x-3">
                <svg v-if="!isCollapse" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
                <p  
                    class="font-Roboto font-medium" 
                    :class="{ 'w-3/12 pb-3 border-b' : !isCollapse }"
                    v-text="title">
                    </p>
            </div>
            <input 
                v-model="main"
                class="border-none focus:outline-none"
                :class="{ 'is-checked' : isHaveSelected }"
                type="checkbox"
                disabled
            >
        </div>
        <div 
            v-show="isCollapse"
            v-for="(sub, index) in subCollapse" 
            :key="sub.id"
            class="pl-7"
            >
            <div v-if="index == 0" class="flex flex-row justify-between items-center select-none mt-3">
                <label v-text="sub.text" class="font-Roboto text-sm py-3 border-t border-b w-4/6 pl-4"></label>
                <input 
                    v-model="sub.model"
                    class="border-none focus:outline-none" 
                    type="checkbox"
                    disabled
                    >
            </div>
            <div v-else class="flex flex-row justify-between items-center select-none">
                <label v-text="sub.text" class="font-Roboto text-sm py-3 border-b w-4/6 pl-4"></label>
                <input 
                    v-model="sub.model"
                    class="border-none focus:outline-none" 
                    type="checkbox"
                    disabled
                    >
            </div>
        </div>  
    </div>
    ` 
};

const TABLE_TEST = {
    data() {
        return {
            datas       : this.tbData,
            isShowArchive      : false,
            isShowStatus       : false,
            isDown      : false,
            permission  : this.isPermission
        }
    },
    props: {
        tbData              : Array,
        isPermission        : String,
        isStatus            : String,
        isType              : String
    },
    directives:{
        'click-away' : {
            beforeMount(el, binding, vnode) {
                el.clickOutsideEvent = function(event) {
                if (!(el === event.target || el.contains(event.target))) {
                    binding.value(event, el);
                }
                };
                document.body.addEventListener('click', el.clickOutsideEvent);
            },
            unmounted(el) {
                document.body.removeEventListener('click', el.clickOutsideEvent);
            }
        }
    },
    methods: {
        onModal(){
            this.isShowStatus = !this.isShowStatus
        },
        onClickAway(){
            this.isShow = false
        },
        onCheckDropdown(){
            let ul = this.$refs.dropdown
            let button = this.$refs.btnDropdown
            if(ul.parentElement.parentElement.parentElement.clientHeight > 320){
                let spaceUp = (ul.offsetTop - button.clientHeight - ul.clientHeight) - ul.parentElement.parentElement.parentElement.scrollTop;
                let spaceDown = (ul.parentElement.parentElement.parentElement.scrollTop + ul.parentElement.parentElement.parentElement.clientHeight - (ul.offsetTop + ul.clientHeight)) - 160;
                if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown)){
                    this.isDown = true
                }
            }
        }
    },
    template:
    /*html */
    `
    <div class="w-full h-full flex flex-col justify-between mx-auto overflow-hidden">
        <div class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <table class="relative w-full whitespace-no-wrap">
                <thead class="sticky top-0 z-10 select-none">
                    <tr class="font-bold text-sm text-left text-white bg-gray-700 uppercase">
                        <th class="px-4 py-3"></th>
                        <th class="px-4 py-3">ID</th>
                        <th class="px-4 py-3">Status</th>
                        <th class="px-4 py-3">Version</th>
                        <th class="px-4 py-3">Product Name</th>
                        <th class="px-4 py-3">Category</th>
                        <th class="px-4 py-3">Platform</th>
                        <th class="px-4 py-3">Form Link</th>
                        <th class="px-4 py-3">By Link</th>
                        <th class="px-4 py-3 w-2/12">Report</th>
                        <th class="px-4 py-3">Action</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    <tr 
                        v-for="(data, index) in datas"
                        :key="data.id"
                        class="text-sm text-gray-700"
                        :class="{ 'bg-gray-100' : index % 2 === 0 }"
                    >
                        <td class="px-4 py-3 text-sm">
                            <dropdown-archive 
                                :is-permission="permission" 
                                :is-type="co.type"
                                @on-archive="onArchive(co.id)"
                                >
                            </dropdown-archive>
                        </td>
                        <td class="px-4 py-3 text-sm" v-text="index + 1"></td>
                        <td class="px-4 py-3 text-sm">
                            <dropdown-status 
                                :is-permission="permission" 
                                :is-status="co.status"
                                @on-start="onStart(co.id)"
                                @on-stop="onStop(co.id)"
                                @on-suspend="onSuspend(co.id)"
                                @on-delete="onDelete(co.id)"
                                >
                            </dropdown-status>
                        </td>
                        <td class="px-4 py-3 text-sm" v-text="data.version"></td>
                        <td class="px-4 py-3 text-sm" v-text="data.productName"></td>
                        <td class="px-4 py-3 text-sm" v-text="data.category"></td>
                        <td class="px-4 py-3 text-sm" v-text="data.platform"></td>
                        <td class="px-4 py-3 text-sm" v-text="data.formLink"></td>
                        <td class="px-4 py-3 text-sm" v-text="data.byLink"></td>
                        <td class="px-4 py-3 text-sm relative group">
                            <span class="line-clamp-1" v-text="data.report"></span>
                            <span class="w-full absolute top-0 right-0 text-gray-700 bg-white shadow-md border border-gray-700 hidden group-hover:block z-10 px-4 py-2" v-text="data.report"></span>
                        </td>
                        <td class="px-4 py-3 text-sm">
                            <div class="flex items-center space-x-4 text-sm">
                                <a href="/test/view">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <a href="/test/edit" class="no-underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <button @click="$emit('onDelete', data.id )" class="focus:outline-none focus:shadow-outline-gray">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="w-full flex justify-center items-center uppercase py-6.5 space-x-3">
            <span class="text-lg">1-10 of 100</span>
            <!-- Pagination -->
            <div class="flex">
                <ul class="flex flex-row justify-center items-center space-x-2">
                    <li class="flex justify-center items-center">
                        <button class="text-center hover:text-gray-700 focus:outline-none" aria-label="Previous">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </li>
                    <li class="w-7 h-7">
                        <button class="w-full h-full text-center text-white bg-gray-700 focus:outline-none">1</button>
                    </li>
                    <li class="w-7 h-7">
                        <button class="w-full h-full text-center focus:outline-none hover:text-white hover:bg-gray-700">2</button>
                    </li>
                    <li class="w-7 h-7">
                        <button class="w-full h-full text-center focus:outline-none hover:text-white hover:bg-gray-700">3</button>
                    </li>
                    <li class="w-7 h-7">
                        <button class="w-full h-full text-center focus:outline-none hover:text-white hover:bg-gray-700">4</button>
                    </li>
                    <li class="w-7 h-7">
                        <button class="w-full h-full text-center focus:outline-none hover:text-white hover:bg-gray-700">5</button>
                    </li>
                    <li class="w-7 h-7">
                        <button class="w-full h-full text-center focus:outline-none hover:text-white hover:bg-gray-700">6</button>
                    </li>
                    <li class="flex justify-center items-center">
                        <button class="text-center hover:text-gray-700 focus:outline-none" aria-label="Next">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
};