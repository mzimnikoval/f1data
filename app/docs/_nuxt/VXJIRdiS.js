import{Q as ne,R as F,a0 as le,as as se,T as oe,S as P,V as H,ak as re,W as ae,X as ue,Y as ce,Z as de,$ as pe,U as C,at as he,au as fe,ae as me,a1 as $,g as I,a2 as be,t as c,v as r,x as y,a4 as m,a3 as g,z as x,a7 as o,a8 as K,B as T,y as v,a9 as N,A as S,a6 as k,O,aa as M,ab as ge,av as ye,ac as ve,ad as Oe}from"./nr4C_rNa.js";import{Z as G}from"./DGEOgZpe.js";import{C as Ie}from"./CtaG-uMl.js";import{s as Se}from"./CN-uJwhJ.js";import{s as ke}from"./CwLCGTqX.js";import{s as we}from"./CKkpWFR5.js";import{s as Le}from"./DStluF04.js";import{s as Fe}from"./B5tyGlTj.js";import Ce from"./BGluewbP.js";import xe from"./D-Ia2JrQ.js";import Ve from"./DI59vyHd.js";import $e from"./hObpbkUP.js";import Ke from"./ChKMW1f8.js";import{O as Me}from"./D79zvF0I.js";import{s as Te}from"./zX_nPhqn.js";import{R as Ae}from"./C26iI0S-.js";import Ee from"./DEYVeQop.js";import{s as De}from"./CVNDOyE-.js";import"./CxO2mwmc.js";import"./GAao0N8K.js";import"./Be1fzYNM.js";import"./CKlU7_Eb.js";import"./B1d6ZBoG.js";import"./DnxLn_5q.js";import"./DmfvTtO6.js";import"./mhq9eYYb.js";var Re=({dt:e})=>`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${e("multiselect.background")};
    border: 1px solid ${e("multiselect.border.color")};
    transition: background ${e("multiselect.transition.duration")}, color ${e("multiselect.transition.duration")}, border-color ${e("multiselect.transition.duration")}, outline-color ${e("multiselect.transition.duration")}, box-shadow ${e("multiselect.transition.duration")};
    border-radius: ${e("multiselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("multiselect.shadow")};
}

.p-multiselect:not(.p-disabled):hover {
    border-color: ${e("multiselect.hover.border.color")};
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: ${e("multiselect.focus.border.color")};
    box-shadow: ${e("multiselect.focus.ring.shadow")};
    outline: ${e("multiselect.focus.ring.width")} ${e("multiselect.focus.ring.style")} ${e("multiselect.focus.ring.color")};
    outline-offset: ${e("multiselect.focus.ring.offset")};
}

.p-multiselect.p-variant-filled {
    background: ${e("multiselect.filled.background")};
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("multiselect.filled.hover.background")};
}

.p-multiselect.p-variant-filled.p-focus {
    background: ${e("multiselect.filled.focus.background")};
}

.p-multiselect.p-invalid {
    border-color: ${e("multiselect.invalid.border.color")};
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: ${e("multiselect.disabled.background")};
}

.p-multiselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${e("multiselect.dropdown.color")};
    width: ${e("multiselect.dropdown.width")};
    border-start-end-radius: ${e("multiselect.border.radius")};
    border-end-end-radius: ${e("multiselect.border.radius")};
}

.p-multiselect-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${e("multiselect.clear.icon.color")};
    inset-inline-end: ${e("multiselect.dropdown.width")};
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: flex;
    align-items: center;
    gap: calc(${e("multiselect.padding.y")} / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${e("multiselect.padding.y")} ${e("multiselect.padding.x")};
    color: ${e("multiselect.color")};
}

.p-multiselect-label.p-placeholder {
    color: ${e("multiselect.placeholder.color")};
}

.p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
    color: ${e("multiselect.invalid.placeholder.color")};
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: ${e("multiselect.disabled.color")};
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect .p-multiselect-overlay {
    min-width: 100%;
}

.p-multiselect-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${e("multiselect.overlay.background")};
    color: ${e("multiselect.overlay.color")};
    border: 1px solid ${e("multiselect.overlay.border.color")};
    border-radius: ${e("multiselect.overlay.border.radius")};
    box-shadow: ${e("multiselect.overlay.shadow")};
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    padding: ${e("multiselect.list.header.padding")};
}

.p-multiselect-header .p-checkbox {
    margin-inline-end: ${e("multiselect.option.gap")};
}

.p-multiselect-filter-container {
    flex: 1 1 auto;
}

.p-multiselect-filter {
    width: 100%;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${e("multiselect.list.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("multiselect.list.gap")};
}

.p-multiselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: ${e("multiselect.option.gap")};
    padding: ${e("multiselect.option.padding")};
    border: 0 none;
    color: ${e("multiselect.option.color")};
    background: transparent;
    transition: background ${e("multiselect.transition.duration")}, color ${e("multiselect.transition.duration")}, border-color ${e("multiselect.transition.duration")}, box-shadow ${e("multiselect.transition.duration")}, outline-color ${e("multiselect.transition.duration")};
    border-radius: ${e("multiselect.option.border.radius")};
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: ${e("multiselect.option.focus.background")};
    color: ${e("multiselect.option.focus.color")};
}

.p-multiselect-option.p-multiselect-option-selected {
    background: ${e("multiselect.option.selected.background")};
    color: ${e("multiselect.option.selected.color")};
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: ${e("multiselect.option.selected.focus.background")};
    color: ${e("multiselect.option.selected.focus.color")};
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: ${e("multiselect.option.group.padding")};
    background: ${e("multiselect.option.group.background")};
    color: ${e("multiselect.option.group.color")};
    font-weight: ${e("multiselect.option.group.font.weight")};
}

.p-multiselect-empty-message {
    padding: ${e("multiselect.empty.message.padding")};
}

.p-multiselect-label .p-chip {
    padding-block-start: calc(${e("multiselect.padding.y")} / 2);
    padding-block-end: calc(${e("multiselect.padding.y")} / 2);
    border-radius: ${e("multiselect.chip.border.radius")};
}

.p-multiselect-label:has(.p-chip) {
    padding: calc(${e("multiselect.padding.y")} / 2) calc(${e("multiselect.padding.x")} / 2);
}

.p-multiselect-fluid {
    display: flex;
    width: 100%;
}

.p-multiselect-sm .p-multiselect-label {
    font-size: ${e("multiselect.sm.font.size")};
    padding-block: ${e("multiselect.sm.padding.y")};
    padding-inline: ${e("multiselect.sm.padding.x")};
}

.p-multiselect-sm .p-multiselect-dropdown .p-icon {
    font-size: ${e("multiselect.sm.font.size")};
    width: ${e("multiselect.sm.font.size")};
    height: ${e("multiselect.sm.font.size")};
}

.p-multiselect-lg .p-multiselect-label {
    font-size: ${e("multiselect.lg.font.size")};
    padding-block: ${e("multiselect.lg.padding.y")};
    padding-inline: ${e("multiselect.lg.padding.x")};
}

.p-multiselect-lg .p-multiselect-dropdown .p-icon {
    font-size: ${e("multiselect.lg.font.size")};
    width: ${e("multiselect.lg.font.size")};
    height: ${e("multiselect.lg.font.size")};
}
`,Pe={root:function(t){var i=t.props;return{position:i.appendTo==="self"?"relative":void 0}}},He={root:function(t){var i=t.instance,l=t.props;return["p-multiselect p-component p-inputwrapper",{"p-multiselect-display-chip":l.display==="chip","p-disabled":l.disabled,"p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-focus":i.focused,"p-inputwrapper-filled":i.$filled,"p-inputwrapper-focus":i.focused||i.overlayVisible,"p-multiselect-open":i.overlayVisible,"p-multiselect-fluid":i.$fluid,"p-multiselect-sm p-inputfield-sm":l.size==="small","p-multiselect-lg p-inputfield-lg":l.size==="large"}]},labelContainer:"p-multiselect-label-container",label:function(t){var i=t.instance,l=t.props;return["p-multiselect-label",{"p-placeholder":i.label===l.placeholder,"p-multiselect-label-empty":!l.placeholder&&!i.$filled}]},clearIcon:"p-multiselect-clear-icon",chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:function(t){var i=t.instance,l=t.option,s=t.index,n=t.getItemOptions,d=t.props;return["p-multiselect-option",{"p-multiselect-option-selected":i.isSelected(l)&&d.highlightOnSelect,"p-focus":i.focusedOptionIndex===i.getOptionIndex(s,n),"p-disabled":i.isOptionDisabled(l)}]},emptyMessage:"p-multiselect-empty-message"},ze=ne.extend({name:"multiselect",style:Re,classes:He,inlineStyles:Pe}),Be={name:"BaseMultiSelect",extends:De,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},placeholder:String,inputId:{type:String,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},overlayClass:{type:String,default:null},overlayStyle:{type:null,default:null},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},resetFilterOnClear:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:null},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ze,provide:function(){return{$pcMultiSelect:this,$parentInstance:this}}};function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function j(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,l)}return i}function q(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?j(Object(i),!0).forEach(function(l){Q(e,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(i,l))})}return e}function Q(e,t,i){return(t=Ge(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Ge(e){var t=Ue(e,"string");return A(t)=="symbol"?t:t+""}function Ue(e,t){if(A(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var l=i.call(e,t);if(A(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W(e){return We(e)||qe(e)||je(e)||Ne()}function Ne(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(e,t){if(e){if(typeof e=="string")return U(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?U(e,t):void 0}}function qe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function We(e){if(Array.isArray(e))return U(e)}function U(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,l=Array(t);i<t;i++)l[i]=e[i];return l}var Ze={name:"MultiSelect",extends:Be,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{options:function(){this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(G.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(t,i){return this.virtualScrollerDisabled?t:i&&i(t).index},getOptionLabel:function(t){return this.optionLabel?$(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?$(t,this.optionValue):t},getOptionRenderKey:function(t,i){return this.dataKey?$(t,this.dataKey):this.getOptionLabel(t)+"_".concat(i)},getHeaderCheckboxPTOptions:function(t){return this.ptm(t,{context:{selected:this.allSelected}})},getCheckboxPTOptions:function(t,i,l,s){return this.ptm(s,{context:{selected:this.isSelected(t),focused:this.focusedOptionIndex===this.getOptionIndex(l,i),disabled:this.isOptionDisabled(t)}})},isOptionDisabled:function(t){return this.maxSelectionLimitReached&&!this.isSelected(t)?!0:this.optionDisabled?$(t,this.optionDisabled):!1},isOptionGroup:function(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel:function(t){return $(t,this.optionGroupLabel)},getOptionGroupChildren:function(t){return $(t,this.optionGroupChildren)},getAriaPosInset:function(t){var i=this;return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(function(l){return i.isOptionGroup(l)}).length:t)+1},show:function(t){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),t&&C(this.$refs.focusInput)},hide:function(t){var i=this,l=function(){i.$emit("before-hide"),i.overlayVisible=!1,i.clicked=!1,i.focusedOptionIndex=-1,i.searchValue="",i.resetFilterOnHide&&(i.filterValue=null),t&&C(i.$refs.focusInput)};setTimeout(function(){l()},0)},onFocus:function(t){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),!this.autoFilterFocus&&this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",t))},onBlur:function(t){var i,l;this.clicked=!1,this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",t),(i=(l=this.formField).onBlur)===null||i===void 0||i.call(l)},onKeyDown:function(t){var i=this;if(this.disabled){t.preventDefault();return}var l=t.metaKey||t.ctrlKey;switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(t);break;default:if(t.code==="KeyA"&&l){var s=this.visibleOptions.filter(function(n){return i.isValidOption(n)}).map(function(n){return i.getOptionValue(n)});this.updateModel(t,s),t.preventDefault();break}!l&&me(t.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(t),t.preventDefault());break}this.clicked=!1},onContainerClick:function(t){this.disabled||this.loading||t.target.tagName==="INPUT"||t.target.getAttribute("data-pc-section")==="clearicon"||t.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(t.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(t){this.updateModel(t,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(t){var i=t.relatedTarget===this.$refs.focusInput?fe(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;C(i)},onLastHiddenFocus:function(t){var i=t.relatedTarget===this.$refs.focusInput?he(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;C(i)},onOptionSelect:function(t,i){var l=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!(this.disabled||this.isOptionDisabled(i))){var d=this.isSelected(i),h=null;d?h=this.d_value.filter(function(f){return!H(f,l.getOptionValue(i),l.equalityKey)}):h=[].concat(W(this.d_value||[]),[this.getOptionValue(i)]),this.updateModel(t,h),s!==-1&&(this.focusedOptionIndex=s),n&&C(this.$refs.focusInput)}},onOptionMouseMove:function(t,i){this.focusOnHover&&this.changeFocusedOptionIndex(t,i)},onOptionSelectRange:function(t){var i=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(l===-1&&(l=this.findNearestSelectedOptionIndex(s,!0)),s===-1&&(s=this.findNearestSelectedOptionIndex(l)),l!==-1&&s!==-1){var n=Math.min(l,s),d=Math.max(l,s),h=this.visibleOptions.slice(n,d+1).filter(function(f){return i.isValidOption(f)}).map(function(f){return i.getOptionValue(f)});this.updateModel(t,h)}},onFilterChange:function(t){var i=t.target.value;this.filterValue=i,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:t,value:i}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(t,!0);break;case"Home":this.onHomeKey(t,!0);break;case"End":this.onEndKey(t,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(t){Me.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown:function(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey:function(t){if(!this.overlayVisible)this.show();else{var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,this.startRangeIndex,i),this.changeFocusedOptionIndex(t,i)}t.preventDefault()},onArrowUpKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(t.altKey&&!i)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{var l=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();t.shiftKey&&this.onOptionSelectRange(t,l,this.startRangeIndex),this.changeFocusedOptionIndex(t,l),!this.overlayVisible&&this.show(),t.preventDefault()}},onArrowLeftKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var l=t.currentTarget;t.shiftKey?l.setSelectionRange(0,t.target.selectionStart):(l.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var s=t.metaKey||t.ctrlKey,n=this.findFirstOptionIndex();t.shiftKey&&s&&this.onOptionSelectRange(t,n,this.startRangeIndex),this.changeFocusedOptionIndex(t,n),!this.overlayVisible&&this.show()}t.preventDefault()},onEndKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var l=t.currentTarget;if(t.shiftKey)l.setSelectionRange(t.target.selectionStart,l.value.length);else{var s=l.value.length;l.setSelectionRange(s,s),this.focusedOptionIndex=-1}}else{var n=t.metaKey||t.ctrlKey,d=this.findLastOptionIndex();t.shiftKey&&n&&this.onOptionSelectRange(t,this.startRangeIndex,d),this.changeFocusedOptionIndex(t,d),!this.overlayVisible&&this.show()}t.preventDefault()},onPageUpKey:function(t){this.scrollInView(0),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey:function(t){this.overlayVisible?this.focusedOptionIndex!==-1&&(t.shiftKey?this.onOptionSelectRange(t,this.focusedOptionIndex):this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex])):(this.focusedOptionIndex=-1,this.onArrowDownKey(t)),t.preventDefault()},onEscapeKey:function(t){this.overlayVisible&&this.hide(!0),t.preventDefault()},onTabKey:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i||(this.overlayVisible&&this.hasFocusableElements()?(C(t.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),t.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter:function(t){G.set("overlay",t,this.$primevue.config.zIndex.overlay),pe(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&C(this.$refs.filterInput.$el),this.autoUpdateModel()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){G.clear(t)},alignOverlay:function(){this.appendTo==="self"?ue(this.overlay,this.$el):(this.overlay.style.minWidth=ce(this.$el)+"px",de(this.overlay,this.$el))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(i){t.overlayVisible&&t.isOutsideClicked(i)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new Ie(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!ae()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!(this.$el.isSameNode(t.target)||this.$el.contains(t.target)||this.overlay&&this.overlay.contains(t.target))},getLabelByValue:function(t){var i=this,l=this.optionGroupLabel?this.flatOptions(this.options):this.options||[],s=l.find(function(n){return!i.isOptionGroup(n)&&H(i.getOptionValue(n),t,i.equalityKey)});return s?this.getOptionLabel(s):null},getSelectedItemsLabel:function(){var t=/{(.*?)}/,i=this.selectedItemsLabel||this.$primevue.config.locale.selectionMessage;return t.test(i)?i.replace(i.match(t)[0],this.d_value.length+""):i},onToggleAll:function(t){var i=this;if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:t,checked:!this.allSelected});else{var l=this.allSelected?[]:this.visibleOptions.filter(function(s){return i.isValidOption(s)}).map(function(s){return i.getOptionValue(s)});this.updateModel(t,l)}},removeOption:function(t,i){var l=this;t.stopPropagation();var s=this.d_value.filter(function(n){return!H(n,i,l.equalityKey)});this.updateModel(t,s)},clearFilter:function(){this.filterValue=null},hasFocusableElements:function(){return re(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(t){var i;return this.isValidOption(t)&&typeof this.getOptionLabel(t)=="string"&&((i=this.getOptionLabel(t))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(t){return F(t)&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption:function(t){return this.isValidOption(t)&&this.isSelected(t)},isEquals:function(t,i){return H(t,i,this.equalityKey)},isSelected:function(t){var i=this,l=this.getOptionValue(t);return(this.d_value||[]).some(function(s){return i.isEquals(s,l)})},findFirstOptionIndex:function(){var t=this;return this.visibleOptions.findIndex(function(i){return t.isValidOption(i)})},findLastOptionIndex:function(){var t=this;return P(this.visibleOptions,function(i){return t.isValidOption(i)})},findNextOptionIndex:function(t){var i=this,l=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(s){return i.isValidOption(s)}):-1;return l>-1?l+t+1:t},findPrevOptionIndex:function(t){var i=this,l=t>0?P(this.visibleOptions.slice(0,t),function(s){return i.isValidOption(s)}):-1;return l>-1?l:t},findSelectedOptionIndex:function(){var t=this;if(this.$filled){for(var i=function(){var d=t.d_value[s],h=t.visibleOptions.findIndex(function(f){return t.isValidSelectedOption(f)&&t.isEquals(d,t.getOptionValue(f))});if(h>-1)return{v:h}},l,s=this.d_value.length-1;s>=0;s--)if(l=i(),l)return l.v}return-1},findFirstSelectedOptionIndex:function(){var t=this;return this.$filled?this.visibleOptions.findIndex(function(i){return t.isValidSelectedOption(i)}):-1},findLastSelectedOptionIndex:function(){var t=this;return this.$filled?P(this.visibleOptions,function(i){return t.isValidSelectedOption(i)}):-1},findNextSelectedOptionIndex:function(t){var i=this,l=this.$filled&&t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(s){return i.isValidSelectedOption(s)}):-1;return l>-1?l+t+1:-1},findPrevSelectedOptionIndex:function(t){var i=this,l=this.$filled&&t>0?P(this.visibleOptions.slice(0,t),function(s){return i.isValidSelectedOption(s)}):-1;return l>-1?l:-1},findNearestSelectedOptionIndex:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=-1;return this.$filled&&(i?(l=this.findPrevSelectedOptionIndex(t),l=l===-1?this.findNextSelectedOptionIndex(t):l):(l=this.findNextSelectedOptionIndex(t),l=l===-1?this.findPrevSelectedOptionIndex(t):l)),l>-1?l:t},findFirstFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},searchOptions:function(t){var i=this;this.searchValue=(this.searchValue||"")+t.key;var l=-1;F(this.searchValue)&&(this.focusedOptionIndex!==-1?(l=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(s){return i.isOptionMatched(s)}),l=l===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(s){return i.isOptionMatched(s)}):l+this.focusedOptionIndex):l=this.visibleOptions.findIndex(function(s){return i.isOptionMatched(s)}),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(t,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500)},changeFocusedOptionIndex:function(t,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[i]))},scrollInView:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var l=i!==-1?"".concat(t.$id,"_").concat(i):t.focusedOptionId,s=oe(t.list,'li[id="'.concat(l,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"nearest"}):t.virtualScrollerDisabled||t.virtualScroller&&t.virtualScroller.scrollToIndex(i!==-1?i:t.focusedOptionIndex)})},autoUpdateModel:function(){if(this.autoOptionFocus&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex()),this.selectOnFocus&&this.autoOptionFocus&&!this.$filled){var t=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[t])}},updateModel:function(t,i){this.writeValue(i,t),this.$emit("change",{originalEvent:t,value:i})},flatOptions:function(t){var i=this;return(t||[]).reduce(function(l,s,n){l.push({optionGroup:s,group:!0,index:n});var d=i.getOptionGroupChildren(s);return d&&d.forEach(function(h){return l.push(h)}),l},[])},overlayRef:function(t){this.overlay=t},listRef:function(t,i){this.list=t,i&&i(t)},virtualScrollerRef:function(t){this.virtualScroller=t}},computed:{visibleOptions:function(){var t=this,i=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var l=se.filter(i,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var s=this.options||[],n=[];return s.forEach(function(d){var h=t.getOptionGroupChildren(d),f=h.filter(function(z){return l.includes(z)});f.length>0&&n.push(q(q({},d),{},Q({},typeof t.optionGroupChildren=="string"?t.optionGroupChildren:"items",W(f))))}),this.flatOptions(n)}return l}return i},label:function(){var t;if(this.d_value&&this.d_value.length){if(F(this.maxSelectedLabels)&&this.d_value.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();t="";for(var i=0;i<this.d_value.length;i++)i!==0&&(t+=", "),t+=this.getLabelByValue(this.d_value[i])}else t=this.placeholder;return t},chipSelectedItems:function(){return F(this.maxSelectedLabels)&&this.d_value&&this.d_value.length>this.maxSelectedLabels},allSelected:function(){var t=this;return this.selectAll!==null?this.selectAll:F(this.visibleOptions)&&this.visibleOptions.every(function(i){return t.isOptionGroup(i)||t.isOptionDisabled(i)||t.isSelected(i)})},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached:function(){return this.selectionLimit&&this.d_value&&this.d_value.length===this.selectionLimit},filterResultMessageText:function(){return F(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.d_value.length):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var t=this;return this.visibleOptions.filter(function(i){return!t.isOptionGroup(i)}).length},toggleAllAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return le(this.fluid)?!!this.$pcFluid:this.fluid},isClearIconVisible:function(){return this.showClear&&this.d_value&&this.d_value.length&&this.d_value!=null&&F(this.options)}},directives:{ripple:Ae},components:{InputText:Ke,Checkbox:Ce,VirtualScroller:Ee,Portal:Te,Chip:xe,IconField:Ve,InputIcon:$e,TimesIcon:Fe,SearchIcon:we,ChevronDownIcon:ke,SpinnerIcon:Le,CheckIcon:Se}};function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function Z(e,t,i){return(t=Qe(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Qe(e){var t=Xe(e,"string");return E(t)=="symbol"?t:t+""}function Xe(e,t){if(E(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var l=i.call(e,t);if(E(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ye=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Je={key:0},_e=["id","aria-label"],et=["id"],tt=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function it(e,t,i,l,s,n){var d=I("Chip"),h=I("SpinnerIcon"),f=I("Checkbox"),z=I("InputText"),X=I("SearchIcon"),Y=I("InputIcon"),J=I("IconField"),_=I("VirtualScroller"),ee=I("Portal"),te=be("ripple");return r(),c("div",o({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[7]||(t[7]=function(){return n.onContainerClick&&n.onContainerClick.apply(n,arguments)})},e.ptmi("root")),[y("div",o({class:"p-hidden-accessible"},e.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[y("input",o({ref:"focusInput",id:e.inputId,type:"text",readonly:"",disabled:e.disabled,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":s.overlayVisible,"aria-controls":e.$id+"_list","aria-activedescendant":s.focused?n.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:t[1]||(t[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:t[2]||(t[2]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)})},e.ptm("hiddenInput")),null,16,Ye)],16),y("div",o({class:e.cx("labelContainer")},e.ptm("labelContainer")),[y("div",o({class:e.cx("label")},e.ptm("label")),[m(e.$slots,"value",{value:e.d_value,placeholder:e.placeholder},function(){return[e.display==="comma"?(r(),c(K,{key:0},[T(v(n.label||"empty"),1)],64)):e.display==="chip"?(r(),c(K,{key:1},[n.chipSelectedItems?(r(),c("span",Je,v(n.label),1)):(r(!0),c(K,{key:1},N(e.d_value,function(a){return r(),c("span",o({key:n.getLabelByValue(a),class:e.cx("chipItem"),ref_for:!0},e.ptm("chipItem")),[m(e.$slots,"chip",{value:a,removeCallback:function(w){return n.removeOption(w,a)}},function(){return[x(d,{class:k(e.cx("pcChip")),label:n.getLabelByValue(a),removeIcon:e.chipIcon||e.removeTokenIcon,removable:"",unstyled:e.unstyled,onRemove:function(w){return n.removeOption(w,a)},pt:e.ptm("pcChip")},{removeicon:S(function(){return[m(e.$slots,e.$slots.chipicon?"chipicon":"removetokenicon",{class:k(e.cx("chipIcon")),item:a,removeCallback:function(w){return n.removeOption(w,a)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16)}),128)),!e.d_value||e.d_value.length===0?(r(),c(K,{key:2},[T(v(e.placeholder||"empty"),1)],64)):g("",!0)],64)):g("",!0)]})],16)],16),n.isClearIconVisible?m(e.$slots,"clearicon",{key:0,class:k(e.cx("clearIcon")),clearCallback:n.onClearClick},function(){return[(r(),O(M(e.clearIcon?"i":"TimesIcon"),o({ref:"clearIcon",class:[e.cx("clearIcon"),e.clearIcon],onClick:n.onClearClick},e.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):g("",!0),y("div",o({class:e.cx("dropdown")},e.ptm("dropdown")),[e.loading?m(e.$slots,"loadingicon",{key:0,class:k(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(r(),c("span",o({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon],"aria-hidden":"true"},e.ptm("loadingIcon")),null,16)):(r(),O(h,o({key:1,class:e.cx("loadingIcon"),spin:"","aria-hidden":"true"},e.ptm("loadingIcon")),null,16,["class"]))]}):m(e.$slots,"dropdownicon",{key:1,class:k(e.cx("dropdownIcon"))},function(){return[(r(),O(M(e.dropdownIcon?"span":"ChevronDownIcon"),o({class:[e.cx("dropdownIcon"),e.dropdownIcon],"aria-hidden":"true"},e.ptm("dropdownIcon")),null,16,["class"]))]})],16),x(ee,{appendTo:e.appendTo},{default:S(function(){return[x(ge,o({name:"p-connected-overlay",onEnter:n.onOverlayEnter,onAfterEnter:n.onOverlayAfterEnter,onLeave:n.onOverlayLeave,onAfterLeave:n.onOverlayAfterLeave},e.ptm("transition")),{default:S(function(){return[s.overlayVisible?(r(),c("div",o({key:0,ref:n.overlayRef,style:[e.panelStyle,e.overlayStyle],class:[e.cx("overlay"),e.panelClass,e.overlayClass],onClick:t[5]||(t[5]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),onKeydown:t[6]||(t[6]=function(){return n.onOverlayKeyDown&&n.onOverlayKeyDown.apply(n,arguments)})},e.ptm("overlay")),[y("span",o({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[3]||(t[3]=function(){return n.onFirstHiddenFocus&&n.onFirstHiddenFocus.apply(n,arguments)})},e.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),m(e.$slots,"header",{value:e.d_value,options:n.visibleOptions}),e.showToggleAll&&e.selectionLimit==null||e.filter?(r(),c("div",o({key:0,class:e.cx("header")},e.ptm("header")),[e.showToggleAll&&e.selectionLimit==null?(r(),O(f,{key:0,modelValue:n.allSelected,binary:!0,disabled:e.disabled,variant:e.variant,"aria-label":n.toggleAllAriaLabel,onChange:n.onToggleAll,unstyled:e.unstyled,pt:n.getHeaderCheckboxPTOptions("pcHeaderCheckbox"),formControl:{novalidate:!0}},{icon:S(function(a){return[e.$slots.headercheckboxicon?(r(),O(M(e.$slots.headercheckboxicon),{key:0,checked:a.checked,class:k(a.class)},null,8,["checked","class"])):a.checked?(r(),O(M(e.checkboxIcon?"span":"CheckIcon"),o({key:1,class:[a.class,Z({},e.checkboxIcon,a.checked)]},n.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon")),null,16,["class"])):g("",!0)]}),_:1},8,["modelValue","disabled","variant","aria-label","onChange","unstyled","pt"])):g("",!0),e.filter?(r(),O(J,{key:1,class:k(e.cx("pcFilterContainer")),unstyled:e.unstyled,pt:e.ptm("pcFilterContainer")},{default:S(function(){return[x(z,{ref:"filterInput",value:s.filterValue,onVnodeMounted:n.onFilterUpdated,onVnodeUpdated:n.onFilterUpdated,class:k(e.cx("pcFilter")),placeholder:e.filterPlaceholder,disabled:e.disabled,variant:e.variant,unstyled:e.unstyled,role:"searchbox",autocomplete:"off","aria-owns":e.$id+"_list","aria-activedescendant":n.focusedOptionId,onKeydown:n.onFilterKeyDown,onBlur:n.onFilterBlur,onInput:n.onFilterChange,pt:e.ptm("pcFilter"),formControl:{novalidate:!0}},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","disabled","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),x(Y,{unstyled:e.unstyled,pt:e.ptm("pcFilterIconContainer")},{default:S(function(){return[m(e.$slots,"filtericon",{},function(){return[e.filterIcon?(r(),c("span",o({key:0,class:e.filterIcon},e.ptm("filterIcon")),null,16)):(r(),O(X,ye(o({key:1},e.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["class","unstyled","pt"])):g("",!0),e.filter?(r(),c("span",o({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),v(n.filterResultMessageText),17)):g("",!0)],16)):g("",!0),y("div",o({class:e.cx("listContainer"),style:{"max-height":n.virtualScrollerDisabled?e.scrollHeight:""}},e.ptm("listContainer")),[x(_,o({ref:n.virtualScrollerRef},e.virtualScrollerOptions,{items:n.visibleOptions,style:{height:e.scrollHeight},tabindex:-1,disabled:n.virtualScrollerDisabled,pt:e.ptm("virtualScroller")}),ve({content:S(function(a){var V=a.styleClass,w=a.contentRef,D=a.items,b=a.getItemOptions,ie=a.contentStyle,R=a.itemSize;return[y("ul",o({ref:function(p){return n.listRef(p,w)},id:e.$id+"_list",class:[e.cx("list"),V],style:ie,role:"listbox","aria-multiselectable":"true","aria-label":n.listAriaLabel},e.ptm("list")),[(r(!0),c(K,null,N(D,function(u,p){return r(),c(K,{key:n.getOptionRenderKey(u,n.getOptionIndex(p,b))},[n.isOptionGroup(u)?(r(),c("li",o({key:0,id:e.$id+"_"+n.getOptionIndex(p,b),style:{height:R?R+"px":void 0},class:e.cx("optionGroup"),role:"option",ref_for:!0},e.ptm("optionGroup")),[m(e.$slots,"optiongroup",{option:u.optionGroup,index:n.getOptionIndex(p,b)},function(){return[T(v(n.getOptionGroupLabel(u.optionGroup)),1)]})],16,et)):Oe((r(),c("li",o({key:1,id:e.$id+"_"+n.getOptionIndex(p,b),style:{height:R?R+"px":void 0},class:e.cx("option",{option:u,index:p,getItemOptions:b}),role:"option","aria-label":n.getOptionLabel(u),"aria-selected":n.isSelected(u),"aria-disabled":n.isOptionDisabled(u),"aria-setsize":n.ariaSetSize,"aria-posinset":n.getAriaPosInset(n.getOptionIndex(p,b)),onClick:function(B){return n.onOptionSelect(B,u,n.getOptionIndex(p,b),!0)},onMousemove:function(B){return n.onOptionMouseMove(B,n.getOptionIndex(p,b))},ref_for:!0},n.getCheckboxPTOptions(u,b,p,"option"),{"data-p-selected":n.isSelected(u),"data-p-focused":s.focusedOptionIndex===n.getOptionIndex(p,b),"data-p-disabled":n.isOptionDisabled(u)}),[x(f,{defaultValue:n.isSelected(u),binary:!0,tabindex:-1,variant:e.variant,unstyled:e.unstyled,pt:n.getCheckboxPTOptions(u,b,p,"pcOptionCheckbox"),formControl:{novalidate:!0}},{icon:S(function(L){return[e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon?(r(),O(M(e.$slots.optioncheckboxicon||e.$slots.itemcheckboxicon),{key:0,checked:L.checked,class:k(L.class)},null,8,["checked","class"])):L.checked?(r(),O(M(e.checkboxIcon?"span":"CheckIcon"),o({key:1,class:[L.class,Z({},e.checkboxIcon,L.checked)],ref_for:!0},n.getCheckboxPTOptions(u,b,p,"pcOptionCheckbox.icon")),null,16,["class"])):g("",!0)]}),_:2},1032,["defaultValue","variant","unstyled","pt"]),m(e.$slots,"option",{option:u,selected:n.isSelected(u),index:n.getOptionIndex(p,b)},function(){return[y("span",o({ref_for:!0},e.ptm("optionLabel")),v(n.getOptionLabel(u)),17)]})],16,tt)),[[te]])],64)}),128)),s.filterValue&&(!D||D&&D.length===0)?(r(),c("li",o({key:0,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[m(e.$slots,"emptyfilter",{},function(){return[T(v(n.emptyFilterMessageText),1)]})],16)):!e.options||e.options&&e.options.length===0?(r(),c("li",o({key:1,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[m(e.$slots,"empty",{},function(){return[T(v(n.emptyMessageText),1)]})],16)):g("",!0)],16,_e)]}),_:2},[e.$slots.loader?{name:"loader",fn:S(function(a){var V=a.options;return[m(e.$slots,"loader",{options:V})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),m(e.$slots,"footer",{value:e.d_value,options:n.visibleOptions}),!e.options||e.options&&e.options.length===0?(r(),c("span",o({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),v(n.emptyMessageText),17)):g("",!0),y("span",o({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),v(n.selectedMessageText),17),y("span",o({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:t[4]||(t[4]=function(){return n.onLastHiddenFocus&&n.onLastHiddenFocus.apply(n,arguments)})},e.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16)):g("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Ze.render=it;export{Ze as default};
