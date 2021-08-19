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
}

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
}