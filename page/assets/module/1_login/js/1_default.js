const CPN_INPUT_PASSWORD = {
    data() {
        return {
            showPassword: false,
            password: ''
        }
    },
    props: ['keyLabel', 'errorLabel', 'textLabel'],
    template:
        /*html*/`<div>
        <div class="relative w-full h-12.5 flex flex-col">
            <input 
                v-model="password"
                @input="$emit('onInput', keyLabel, password)"
                :type="showPassword ? 'text' : 'password'"
                class="w-full h-full appearance-none relative block rounded-sm px-4 py-3 border border-lightgrey placeholder-grey text-dark font-Lato font-normal focus:outline-none focus:border-main focus:z-10" 
                :placeholder="textLabel"
            >
            <button
                type="button" 
                @click='showPassword = !showPassword'
                class="h-full absolute top-0 right-3 focus:outline-none z-20">
                <svg 
                    v-if="!showPassword" 
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-300" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                <svg 
                    v-else-if="showPassword" 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-6 w-6 text-gray-300"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path 
                        stroke-linecap="round"
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path 
                        stroke-linecap="round"
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </button>
        </div>
        <span 
            class="text-xs text-red-500 my-1" 
            v-text="errorLabel"
        ></span>
        </div>`
};

const loading = () => {
    let load = document.querySelector('#loading');
    if(load.classList.contains('hidden')){
        load.classList.add('flex');
        load.classList.remove('hidden');
    } else {
        load.classList.remove('flex');
        load.classList.add('hidden');
    }
};