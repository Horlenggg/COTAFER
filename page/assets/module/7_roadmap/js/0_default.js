const DROPDOWN = {
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
        isRoute             : String
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
            if(ul.parentElement.parentElement.parentElement.clientHeight > 290){
                let spaceUp = (ul.offsetTop - button.clientHeight - ul.clientHeight) - ul.parentElement.parentElement.parentElement.scrollTop;
                let spaceDown = (ul.parentElement.parentElement.parentElement.scrollTop + ul.parentElement.parentElement.parentElement.clientHeight - (ul.offsetTop + ul.clientHeight)) - 160;
                if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown)){
                    this.isDown = true
                }
            }
        }
    },
    template: 
    /**html*/
    `<div class="relative" ref="dropdown">
    <button @click="onModal(), onCheckDropdown()" v-click-away="onClickAway" ref="btnDropdown" class="focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
    </button>
    <div v-show="isShow" 
        class="absolute bg-white border shadow-md z-10"
        :class="isDown ? 'bottom-8 left-0' : 'top-15 left-0'"
        >
        <div v-if="isStatus === 'Archive'">
            <button @click="$emit('onRestore', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span class="text-sm">Restore</span>
            </button>
        </div>
        <div v-else>
            <div v-if="permission === 'manager'">
                <div v-if="isStatus === 'Stopped'">
                    <button @click="$emit('onStart', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm text-green-500">Start</span>
                    </button>
                </div>
                <div v-else-if="isStatus === 'Running'">
                    <button @click="$emit('onStop', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm text-red-500">Stop</span>
                    </button>
                </div>
                <button @click="$emit('onSuspend', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Suspend</span>
                </button>
                <button class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none">
                    <a :href="isRoute" class="no-underline w-full flex flex-row space-x-5 px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Edit</span>
                    </a>
                </button>
                <button @click="$emit('onArchive', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                        <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Archive</span>
                </button>
                <button @click="$emit('onDelete', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Delete</span>
                </button>
            </div>
            <div v-else-if="permission === 'supervisor'">
                <button class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <a :href="isRoute" class="no-underline w-full flex flex-row space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Edit</span>
                    </a>
                </button>
                <button @click="$emit('onArchive', id )" class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                        <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm">Archive</span>
                </button>
            </div>
            <div v-else-if="permission === 'member'">
                <button class="w-full flex flex-row space-x-5 hover:bg-gray-700 hover:text-white focus:outline-none px-3 py-2">
                    <a :href="isRoute" class="no-underline w-full flex flex-row space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm">Edit</span>
                    </a>
                </button>
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
</div>`
};
