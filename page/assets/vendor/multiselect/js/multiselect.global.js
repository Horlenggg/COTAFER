var VueformMultiselect=function(e,t){"use strict";function a(e){return-1!==[null,void 0,!1].indexOf(e)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function i(e){return String(e).toLowerCase().trim()}function c(t,r,o){var u=e.toRefs(t),c=u.options,s=u.mode,v=u.trackBy,d=u.limit,p=u.hideSelected,f=u.createTag,m=u.label,h=u.appendNewTag,g=u.multipleLabel,b=u.object,y=u.loading,S=u.delay,k=u.resolveOnLoad,O=u.minChars,w=u.filterResults,V=u.clearOnSearch,N=u.clearOnSelect,B=u.valueProp,L=u.canDeselect,x=u.max,C=o.iv,T=o.ev,q=o.search,P=o.clearSearch,D=o.update,R=o.pointer,j=o.blur,I=e.ref([]),A=e.ref([]),M=e.ref(!1),H=e.computed((function(){var e,t=A.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var a,l=t[e];return n(a={},B.value,e),n(a,v.value,l),n(a,m.value,l),a}))),t=t.map((function(e,t){var a;return"object"===l(e)?e:(n(a={},B.value,e),n(a,v.value,e),n(a,m.value,e),a)})),I.value.length&&(t=t.concat(I.value)),t})),$=e.computed((function(){var e=H.value;return _.value.length&&(e=_.value.concat(e)),q.value&&w.value&&(e=e.filter((function(e){return-1!==i(e[v.value]).indexOf(i(q.value))}))),p.value&&(e=e.filter((function(e){return!ne(e)}))),d.value>0&&(e=e.slice(0,d.value)),e})),F=e.computed((function(){switch(s.value){case"single":return!a(C.value[B.value]);case"multiple":case"tags":return!a(C.value)&&C.value.length>0}})),E=e.computed((function(){return void 0!==g&&void 0!==g.value?g.value(C.value):C.value&&C.value.length>1?"".concat(C.value.length," options selected"):"1 option selected"})),K=e.computed((function(){return!H.value.length&&!M.value})),W=e.computed((function(){return H.value.length>0&&0==$.value.length})),_=e.computed((function(){var e;return!1!==f.value&&q.value?-1!==le(q.value)?[]:[(e={},n(e,B.value,q.value),n(e,m.value,q.value),n(e,v.value,q.value),e)]:[]})),U=e.computed((function(){switch(s.value){case"single":return null;case"multiple":case"tags":return[]}})),z=e.computed((function(){return y.value||M.value})),G=function(e){switch("object"!==l(e)&&(e=ae(e)),s.value){case"single":D(e);break;case"multiple":case"tags":D(C.value.concat(e))}r.emit("select",Q(e),e)},J=function(e){switch("object"!==l(e)&&(e=ae(e)),s.value){case"single":Y();break;case"tags":case"multiple":D(C.value.filter((function(t){return t[B.value]!=e[B.value]})))}r.emit("deselect",Q(e),e)},Q=function(e){return b.value?e:e[B.value]},X=function(e){J(e)},Y=function(){r.emit("clear"),D(U.value)},Z=function(e){switch(s.value){case"single":return!a(C.value)&&C.value[B.value]==e[B.value];case"tags":case"multiple":return!a(C.value)&&-1!==C.value.map((function(e){return e[B.value]})).indexOf(e[B.value])}},ee=function(e){return!0===e.disabled},te=function(){return!(void 0===x||-1===x.value||!F.value&&x.value>0)&&C.value.length>=x.value},ae=function(e){return H.value[H.value.map((function(e){return String(e[B.value])})).indexOf(String(e))]},le=function(e){return H.value.map((function(e){return i(e[v.value])})).indexOf(i(e))},ne=function(e){return"tags"===s.value&&p.value&&Z(e)},re=function(e){I.value.push(e)},oe=function(){a(T.value)||(C.value=ie(T.value))},ue=function(e){M.value=!0,c.value(q.value).then((function(t){A.value=t,"function"==typeof e&&e(t),M.value=!1}))},ie=function(e){return a(e)?"single"===s.value?{}:[]:b.value?e:"single"===s.value?ae(e)||{}:e.filter((function(e){return!!ae(e)})).map((function(e){return ae(e)}))};if("single"!==s.value&&!a(T.value)&&!Array.isArray(T.value))throw new Error('v-model must be an array when using "'.concat(s.value,'" mode'));return c&&"function"==typeof c.value?k.value?ue(oe):1==b.value&&oe():(A.value=c.value,oe()),S.value>-1&&e.watch(q,(function(e){e.length<O.value||(M.value=!0,V.value&&(A.value=[]),setTimeout((function(){e==q.value&&c.value(q.value).then((function(t){e==q.value&&(A.value=t,R.value=$.value.filter((function(e){return!0!==e.disabled}))[0]||null,M.value=!1)}))}),S.value))}),{flush:"sync"}),e.watch(T,(function(e){var t,l,n;if(a(e))C.value=ie(e);else switch(s.value){case"single":(b.value?e[B.value]!=C.value[B.value]:e!=C.value[B.value])&&(C.value=ie(e));break;case"multiple":case"tags":t=b.value?e.map((function(e){return e[B.value]})):e,l=C.value.map((function(e){return e[B.value]})),n=l.slice().sort(),t.length===l.length&&t.slice().sort().every((function(e,t){return e===n[t]}))||(C.value=ie(e))}}),{deep:!0}),"function"!=typeof t.options&&e.watch(c,(function(e,a){A.value=t.options,Object.keys(C.value).length||oe(),function(){if(F.value)if("single"===s.value){var e=ae(C.value[B.value])[m.value];C.value[m.value]=e,b.value&&(T.value[m.value]=e)}else C.value.forEach((function(e,t){var a=ae(C.value[t][B.value])[m.value];C.value[t][m.value]=a,b.value&&(T.value[t][m.value]=a)}))}()})),{fo:$,filteredOptions:$,hasSelected:F,multipleLabelText:E,eo:H,extendedOptions:H,noOptions:K,noResults:W,resolving:M,busy:z,select:G,deselect:J,remove:X,clear:Y,isSelected:Z,isDisabled:ee,isMax:te,getOption:ae,handleOptionClick:function(e){if(!ee(e))switch(s.value){case"single":if(Z(e))return void(L.value&&J(e));j(),G(e);break;case"multiple":if(Z(e))return void J(e);if(te())return;G(e),N.value&&P();break;case"tags":if(Z(e))return void J(e);if(te())return;void 0===ae(e[B.value])&&f.value&&(r.emit("tag",e[B.value]),h.value&&re(e),P()),N.value&&P(),G(e)}},handleTagRemove:function(e,t){0===t.button?X(e):t.preventDefault()},refreshOptions:function(e){ue(e)},resolveOptions:ue}}function s(t,a,l){var o=e.toRefs(t),u=o.disabled,i=o.openDirection,c=l.isOpen,s=l.isPointed,v=l.isSelected,d=l.isDisabled,p=l.isActive,f=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearch:"multiselect-tags-search",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",options:"multiselect-options",optionsTop:"is-top",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},o.classes.value);return{classList:e.computed((function(){return{container:[f.container].concat(u.value?f.containerDisabled:[]).concat(c.value&&"top"===i.value?f.containerOpenTop:[]).concat(c.value&&"top"!==i.value?f.containerOpen:[]).concat(p.value?f.containerActive:[]),spacer:f.spacer,singleLabel:f.singleLabel,multipleLabel:f.multipleLabel,search:f.search,tags:f.tags,tag:[f.tag].concat(u.value?f.tagDisabled:[]),tagRemove:f.tagRemove,tagRemoveIcon:f.tagRemoveIcon,tagsSearch:f.tagsSearch,placeholder:f.placeholder,caret:[f.caret].concat(c.value?f.caretOpen:[]),clear:f.clear,clearIcon:f.clearIcon,spinner:f.spinner,dropdown:[f.dropdown].concat("top"===i.value?f.dropdownTop:[]),options:[f.options].concat("top"===i.value?f.optionsTop:[]),option:function(e){var t=[f.option];return s(e)?t.push(v(e)?f.optionSelectedPointed:f.optionPointed):v(e)?t.push(d(e)?f.optionSelectedDisabled:f.optionSelected):d(e)&&t.push(f.optionDisabled),t},noOptions:f.noOptions,noResults:f.noResults,fakeInput:f.fakeInput}}))}}var v={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:[String,Number],required:!1,default:"10rem"},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})}},setup(t,l){const n=function(t,a){var l=e.toRefs(t),n=l.value,r=l.modelValue,o=l.mode,u=l.valueProp,i=e.ref("single"!==o.value?[]:{}),c=void 0!==a.expose?r:n,s=e.computed((function(){return"single"===o.value?i.value[u.value]:i.value.map((function(e){return e[u.value]}))})),v=e.computed((function(){return"single"!==o.value?i.value.map((function(e){return e[u.value]})).join(","):i.value[u.value]}));return{iv:i,internalValue:i,ev:c,externalValue:c,textValue:v,plainValue:s}}(t,l),r={pointer:e.ref(null)},u=function(t,a,l){var n=e.toRefs(t),r=n.maxHeight,o=n.disabled,u=e.ref(!1),i=e.computed((function(){return"number"==typeof r.value?"".concat(r.value,"px"):r.value}));return{isOpen:u,contentMaxHeight:i,open:function(){u.value||o.value||(u.value=!0,a.emit("open"))},close:function(){u.value&&(u.value=!1,a.emit("close"))}}}(t,l),i=function(t,l,n){var r=e.toRefs(t),o=r.object,u=r.valueProp,i=r.mode,c=n.iv,s=function(e){return o.value||a(e)?e:Array.isArray(e)?e.map((function(e){return e[u.value]})):e[u.value]},v=function(e){return a(e)?"single"===i.value?{}:[]:e};return{update:function(e){c.value=v(e);var t=s(e);l.emit("change",t),l.emit("input",t),l.emit("update:modelValue",t)}}}(t,l,{iv:n.iv}),v=function(t,a,l){var n=e.toRefs(t).mode,r=l.iv,o=e.ref(null),u=e.ref(null),i=e.computed((function(){return o.value?"".concat(c.value,"px"):"tags"===n.value&&-1===[null,void 0].indexOf(r.value)&&r.value.length?"1ch":"100%"})),c=e.computed((function(){var e=document.createElement("span");e.innerHTML=o.value.replace(/ /g,"&nbsp;"),e.style.position="absolute",e.style.left="-9999px",e.style.top="-9999px",document.body.append(e);var t=e.offsetWidth;return e.remove(),t}));return e.watch(o,(function(e){a.emit("search-change",e)})),{search:o,input:u,tagsSearchWidth:i,clearSearch:function(){o.value=""},handleSearchInput:function(e){o.value=e.target.value}}}(t,l,{iv:n.iv}),d=function(t,a,l){var n=e.toRefs(t),r=n.searchable,o=n.disabled,u=l.input,i=l.open,c=l.close,s=e.ref(null),v=e.ref(!1),d=e.computed((function(){return r.value?-1:0}));return{multiselect:s,tabindex:d,isActive:v,blur:function(){r.value&&u.value.blur(),s.value.blur()},handleFocus:function(){r.value&&!o.value&&u.value.focus()},activate:function(){o.value||(v.value=!0,i())},deactivate:function(){v.value=!1,c()}}}(t,0,{input:v.input,open:u.open,close:u.close}),p=c(t,l,{ev:n.ev,iv:n.iv,search:v.search,clearSearch:v.clearSearch,update:i.update,pointer:r.pointer,blur:d.blur}),f=function(t,a,l){var n=e.toRefs(t),r=n.valueProp,o=n.showOptions,u=n.searchable,i=l.fo,c=l.handleOptionClick,s=l.search,v=l.pointer,d=l.multiselect,p=e.computed((function(){return i.value.filter((function(e){return!0!==e.disabled}))})),f=function(e){!o.value||null!==e&&e.disabled||(v.value=e)},m=function(){f(p.value[0]||null)},h=function(){f(null)},g=function(){var e=d.value.querySelector("[data-pointed]");if(e){var t=e.parentElement.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return e.watch(s,(function(e){u.value&&(e.length?m():h())})),{pointer:v,isPointed:function(e){return!!v.value&&v.value[r.value]==e[r.value]},setPointer:f,setPointerFirst:m,clearPointer:h,selectPointer:function(){v.value&&!0!==v.value.disabled&&c(v.value)},forwardPointer:function(){if(null===v.value)f(p.value[0]||null);else{var t=p.value.map((function(e){return e[r.value]})).indexOf(v.value[r.value])+1;p.value.length<=t&&(t=0),f(p.value[t]||null)}e.nextTick((function(){g()}))},backwardPointer:function(){if(null===v.value)f(p.value[p.value.length-1]||null);else{var t=p.value.map((function(e){return e[r.value]})).indexOf(v.value[r.value])-1;t<0&&(t=p.value.length-1),f(p.value[t]||null)}e.nextTick((function(){g()}))}}}(t,0,{fo:p.fo,handleOptionClick:p.handleOptionClick,search:v.search,pointer:r.pointer,multiselect:d.multiselect}),m=function(t,a,l){var n=e.toRefs(t),r=n.mode,u=n.addTagOn,i=n.createTag,c=n.openDirection,s=n.searchable,v=l.iv,d=l.update,p=l.search,f=l.selectPointer,m=l.backwardPointer,h=l.forwardPointer,g=l.blur;return{handleKeydown:function(e){switch(e.keyCode){case 8:if("single"===r.value)return;if(s.value&&-1===[null,""].indexOf(p.value))return;if(0===v.value.length)return;d(o(v.value).slice(0,-1));break;case 13:if(e.preventDefault(),"tags"===r.value&&-1===u.value.indexOf("enter"))return;f();break;case 27:g();break;case 32:if("tags"!==r.value&&s.value)return;if("tags"===r.value&&-1===u.value.indexOf("space"))return;e.preventDefault(),f();break;case 38:e.preventDefault(),"top"===c.value?h():m();break;case 40:e.preventDefault(),"top"===c.value?m():h();break;case 186:if("tags"!==r.value)return;if(-1===u.value.indexOf(";")||!i.value)return;f(),e.preventDefault();break;case 188:if("tags"!==r.value)return;if(-1===u.value.indexOf(",")||!i.value)return;f(),e.preventDefault()}}}}(t,0,{iv:n.iv,update:i.update,search:v.search,selectPointer:f.selectPointer,backwardPointer:f.backwardPointer,forwardPointer:f.forwardPointer,blur:d.blur}),h=s(t,0,{isOpen:u.isOpen,isPointed:f.isPointed,isSelected:p.isSelected,isDisabled:p.isDisabled,isActive:d.isActive});return{...n,...u,...d,...r,...i,...v,...p,...f,...m,...h}}};return v.render=function(e,a,l,n,r,o){return t.openBlock(),t.createBlock("div",{ref:"multiselect",tabindex:e.tabindex,class:e.classList.container,id:l.id,onFocusin:a[4]||(a[4]=(...t)=>e.activate&&e.activate(...t)),onFocusout:a[5]||(a[5]=(...t)=>e.deactivate&&e.deactivate(...t)),onKeydown:a[6]||(a[6]=(...t)=>e.handleKeydown&&e.handleKeydown(...t)),onFocus:a[7]||(a[7]=(...t)=>e.handleFocus&&e.handleFocus(...t))},[t.createCommentVNode(" Search "),"tags"!==l.mode&&l.searchable&&!l.disabled?(t.openBlock(),t.createBlock("input",{key:0,modelValue:e.search,value:e.search,class:e.classList.search,onInput:a[1]||(a[1]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),ref:"input"},null,42,["modelValue","value"])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Tags (with search) "),"tags"==l.mode?(t.openBlock(),t.createBlock("div",{key:1,class:e.classList.tags},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.iv,((a,n,r)=>t.renderSlot(e.$slots,"tag",{option:a,handleTagRemove:e.handleTagRemove,disabled:l.disabled},(()=>[(t.openBlock(),t.createBlock("div",{class:e.classList.tag,key:r},[t.createTextVNode(t.toDisplayString(a[l.label])+" ",1),l.disabled?t.createCommentVNode("v-if",!0):(t.openBlock(),t.createBlock("span",{key:0,class:e.classList.tagRemove,onMousedown:t.withModifiers((t=>e.handleTagRemove(a,t)),["prevent"])},[t.createVNode("span",{class:e.classList.tagRemoveIcon},null,2)],42,["onMousedown"]))],2))])))),256)),l.searchable&&!l.disabled?(t.openBlock(),t.createBlock("input",{key:0,modelValue:e.search,value:e.search,class:e.classList.tagsSearch,style:{width:e.tagsSearchWidth},onInput:a[2]||(a[2]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),ref:"input"},null,46,["modelValue","value"])):t.createCommentVNode("v-if",!0)],2)):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Single label "),"single"==l.mode&&e.hasSelected&&!e.search&&e.iv?t.renderSlot(e.$slots,"singlelabel",{key:2,value:e.iv},(()=>[t.createVNode("div",{class:e.classList.singleLabel},t.toDisplayString(e.iv[l.label]),3)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Multiple label "),"multiple"==l.mode&&e.hasSelected&&!e.search?t.renderSlot(e.$slots,"multiplelabel",{key:3,values:e.iv},(()=>[t.createVNode("div",{class:e.classList.multipleLabel},t.toDisplayString(e.multipleLabelText),3)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Placeholder "),!l.placeholder||e.hasSelected||e.search?t.createCommentVNode("v-if",!0):t.renderSlot(e.$slots,"placeholder",{key:4},(()=>[t.createVNode("div",{class:e.classList.placeholder},t.toDisplayString(l.placeholder),3)])),t.createCommentVNode(" Spinner "),e.busy?t.renderSlot(e.$slots,"spinner",{key:5},(()=>[t.createVNode("span",{class:e.classList.spinner},null,2)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Clear "),e.hasSelected&&!l.disabled&&l.canClear&&!e.busy?t.renderSlot(e.$slots,"clear",{key:6,clear:e.clear},(()=>[t.createVNode("span",{class:e.classList.clear,onMousedown:a[3]||(a[3]=(...t)=>e.clear&&e.clear(...t))},[t.createVNode("span",{class:e.classList.clearIcon},null,2)],34)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Caret "),l.caret?t.renderSlot(e.$slots,"caret",{key:7},(()=>[t.createVNode("span",{class:e.classList.caret},null,2)])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Options "),e.resolving&&l.clearOnSearch?t.createCommentVNode("v-if",!0):(t.openBlock(),t.createBlock(t.Transition,{key:8,name:"multiselect",onAfterLeave:e.clearSearch},{default:t.withCtx((()=>[t.withDirectives(t.createVNode("div",{class:e.classList.dropdown,style:{maxHeight:e.contentMaxHeight}},[t.renderSlot(e.$slots,"beforelist",{options:e.fo}),t.createVNode("ul",{class:e.classList.options},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.fo,((a,n,r)=>(t.openBlock(),t.createBlock("li",{class:e.classList.option(a),key:r,"data-pointed":e.isPointed(a),onMouseenter:t=>e.setPointer(a),onClick:t=>e.handleOptionClick(a)},[t.renderSlot(e.$slots,"option",{option:a,search:e.search},(()=>[t.createVNode("span",null,t.toDisplayString(a[l.label]),1)]))],42,["data-pointed","onMouseenter","onClick"])))),128))],2),e.noOptions?t.renderSlot(e.$slots,"nooptions",{key:0},(()=>[t.createVNode("div",{class:e.classList.noOptions,innerHTML:l.noOptionsText},null,10,["innerHTML"])])):t.createCommentVNode("v-if",!0),e.noResults?t.renderSlot(e.$slots,"noresults",{key:1},(()=>[t.createVNode("div",{class:e.classList.noResults,innerHTML:l.noResultsText},null,10,["innerHTML"])])):t.createCommentVNode("v-if",!0),t.renderSlot(e.$slots,"afterlist",{options:e.fo})],6),[[t.vShow,e.isOpen&&l.showOptions]])])),_:3},8,["onAfterLeave"])),t.createCommentVNode(" Hacky input element to show HTML5 required warning "),l.required?(t.openBlock(),t.createBlock("input",{key:9,class:e.classList.fakeInput,tabindex:"-1",value:e.textValue,required:""},null,10,["value"])):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Native input support "),l.nativeSupport?(t.openBlock(),t.createBlock(t.Fragment,{key:10},["single"==l.mode?(t.openBlock(),t.createBlock("input",{key:0,type:"hidden",name:l.name,value:void 0!==e.plainValue?e.plainValue:""},null,8,["name","value"])):(t.openBlock(!0),t.createBlock(t.Fragment,{key:1},t.renderList(e.plainValue,((e,a)=>(t.openBlock(),t.createBlock("input",{type:"hidden",name:`${l.name}[]`,value:e,key:a},null,8,["name","value"])))),128))],64)):t.createCommentVNode("v-if",!0),t.createCommentVNode(" Create height for empty input "),t.createVNode("div",{class:e.classList.spacer},null,2)],42,["tabindex","id"])},v.__file="src/Multiselect.vue",v}(Vue,Vue);