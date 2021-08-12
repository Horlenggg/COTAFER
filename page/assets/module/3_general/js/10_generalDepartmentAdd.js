const COLLAPSE_COMPONENT = {
    data() {
        return {
            isCollapse      : false,
            isHaveSelected  : false,
            main            : false,
            subCollapse     : this.data
            
        }
    },
    methods: {
        onCollapse() {
            this.isCollapse = !this.isCollapse
        },
        onChecked() {
            this.isHaveSelected = !this.isHaveSelected
        },
        onCheckedAll() {
            let a = this.subCollapse.every(sub => {
                if (sub.model == true){
                    return true
                } else {
                    return false
                }
            });
            if(a == true){
                this.subCollapse.forEach(sub => {
                    sub.model = false
                });
            } else {
                this.subCollapse.forEach(sub => {
                    sub.model = true
                });
            }
        }
    },
    props: {
        data: Array
    },
    template: /*html*/`
    <div class="w-full flex flex-row justify-between items-center">
        <div @click="onCollapse" class="flex-1 flex flex-row items-center cursor-pointer select-none space-x-3">
            <svg v-if="!isCollapse" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
            <p class="font-Roboto font-medium">Document</p>
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
        <div v-if="index == 0" class="flex flex-row justify-between py-3 pl-2 border-t border-b">
            <p v-text="sub.text" class="font-Roboto text-sm"></p>
            <input 
                v-model="sub.model"
                @change="onChecked" 
                class="focus:outline-none" 
                type="checkbox"
                >
        </div>
        <div v-else class="flex flex-row justify-between py-3 pl-2 border-b">
            <p v-text="sub.text" class="font-Roboto text-sm"></p>
            <input 
                v-model="sub.model"
                @change="onChecked" 
                class="focus:outline-none" 
                type="checkbox"
                >
        </div>
        {{ subCollapse }}
    </div>
    ` 
}


if(document.querySelector('#generalDepartmentAdd')){
    const generalDepartmentAdd = {
        data() {
            return {
                departmentName          : 'abc'
                , dashboard             : false
                , dashboardSelectAll    : false
                , dashboardResetPw      : false

                , document              : false
                , documentAddVersion    : false
                , documentViewId        : false
    
                , isDeVal: false //check validation company name

                , errMessageDe: '' //error message icon

                , isDaCollapse: false
                , isDaHaveSelected: false
                , isDoCollapse: false
                , isDoHaveSelected: false
                , subData           : [
                    { id: 1, text: 'Add Version', model: true }
                    , { id: 2, text: 'View Id', model: false }
                    , { id: 3, text: 'Remove', model: false }
                ],
            }
        },
        mounted() {
            this.onChecked()
        },
        methods: {
            onSubmit(){
    
                if(this.departmentName.length == 0){
                    this.errMessageDe = 'Require.'
                    this.isDeVal = true
                } else if(this.departmentName.length > 75){
                    this.errMessageDe = 'Max character 75 length'
                    this.isDeVal = true
                } else {
                    this.errMessageDe = ''
                    this.isDeVal = false
                }
    
                if(this.companyName ){
                    if(!this.isDeVal){
                        let 
                            form        = document.createElement('form'),
                            dName       = document.createElement('input');
    
                            dName.name              = 'departmentName';
                            dName.value             = this.departmentName;
    
                            form.append(dName);
    
                            form.method             = 'POST'
                            form.action             = '/general/department/add'
                            form.className          = 'hidden';
                            document.querySelector('body').append(form);
    
                            console.log(form);
                            form.submit();
                    }
                }
            }
            , onCollapse(e = ''){
                if(e == 'dashboard'){
                    this.isDaCollapse = !this.isDaCollapse
                } else if(e == 'document'){
                    this.isDoCollapse = !this.isDoCollapse
                }
            }
            , onChecked(e = ''){
                if(e == 'dashboard'){
                    if(this.dashboard == true){
                        this.dashboardSelectAll = true;
                        this.dashboardResetPw = true;
                    } else {
                        this.dashboardSelectAll = false;
                        this.dashboardResetPw = false;
                    }
                } else if(e == 'document'){
                    if(this.document == true){
                        this.documentAddVersion = true;
                        this.documentViewId = true;
                    } else {
                        this.documentAddVersion = false;
                        this.documentViewId = false;
                    }
                }

                if(this.dashboardSelectAll == true || this.dashboardResetPw == true){
                    this.isDaHaveSelected = true
                } else {
                    this.isDaHaveSelected = false
                }

                if(this.documentAddVersion == true || this.documentViewId == true){
                    this.isDoHaveSelected = true
                } else {
                    this.isDoHaveSelected = false
                }
                
                if(this.dashboardSelectAll == true && this.dashboardResetPw == true){
                    this.dashboard = true
                } else {
                    this.dashboard = false
                }

                if(this.documentAddVersion == true && this.documentViewId == true){
                    this.document = true
                } else {
                    this.document = false
                }
            }
        },
    }
    const generalDepartmentAddApp =  Vue.createApp(generalDepartmentAdd);
    generalDepartmentAddApp.component('collapse-vue', COLLAPSE_COMPONENT);
    generalDepartmentAddApp.mount('#generalDepartmentAdd');    
}
