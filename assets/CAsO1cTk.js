import{Q,R as D,S as A,T as X,U as v,V as Y,W as J,X as _,Y as ee,Z as te,$ as ne,a0 as ie,a1 as w,g as S,a2 as oe,t as f,v as u,O as E,a3 as O,a4 as m,x as I,z as $,a5 as le,a6 as k,a7 as r,a8 as F,a9 as j,A as x,aa as re,y as C,ab as ae,ac as se,ad as ue,B as R}from"./D9ZKqHZa.js";import{Z as B}from"./DGEOgZpe.js";import{C as pe}from"./JyfP4EOn.js";import{s as de}from"./BuAWiVmi.js";import{s as ce}from"./_IhsXs8j.js";import fe from"./BjFhK4yQ.js";import he from"./DJYlv2r4.js";import{O as me}from"./ap9eDFmk.js";import{s as ye}from"./C9DFhQwK.js";import{R as ge}from"./DFOs8S4O.js";import be from"./S38Pbcwg.js";import{s as ve}from"./C30oQ8QO.js";import"./BS3aGP0C.js";import"./CgFZ6u3b.js";import"./Be1fzYNM.js";import"./qZwtCud4.js";import"./Dac-RJjE.js";import"./DmfvTtO6.js";import"./tJlBGt6a.js";var Oe=({dt:e})=>`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: ${e("autocomplete.padding.x")};
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(${e("autocomplete.dropdown.width")} + ${e("autocomplete.padding.x")});
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: ${e("autocomplete.dropdown.width")};
    border-start-end-radius: ${e("autocomplete.dropdown.border.radius")};
    border-end-end-radius: ${e("autocomplete.dropdown.border.radius")};
    background: ${e("autocomplete.dropdown.background")};
    border: 1px solid ${e("autocomplete.dropdown.border.color")};
    border-inline-start: 0 none;
    color: ${e("autocomplete.dropdown.color")};
    transition: background ${e("autocomplete.transition.duration")}, color ${e("autocomplete.transition.duration")}, border-color ${e("autocomplete.transition.duration")}, outline-color ${e("autocomplete.transition.duration")}, box-shadow ${e("autocomplete.transition.duration")};
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: ${e("autocomplete.dropdown.hover.background")};
    border-color: ${e("autocomplete.dropdown.hover.border.color")};
    color: ${e("autocomplete.dropdown.hover.color")};
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: ${e("autocomplete.dropdown.active.background")};
    border-color: ${e("autocomplete.dropdown.active.border.color")};
    color: ${e("autocomplete.dropdown.active.color")};
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: ${e("autocomplete.dropdown.focus.ring.shadow")};
    outline: ${e("autocomplete.dropdown.focus.ring.width")} ${e("autocomplete.dropdown.focus.ring.style")} ${e("autocomplete.dropdown.focus.ring.color")};
    outline-offset: ${e("autocomplete.dropdown.focus.ring.offset")};
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${e("autocomplete.overlay.background")};
    color: ${e("autocomplete.overlay.color")};
    border: 1px solid ${e("autocomplete.overlay.border.color")};
    border-radius: ${e("autocomplete.overlay.border.radius")};
    box-shadow: ${e("autocomplete.overlay.shadow")};
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: ${e("autocomplete.list.gap")};
    padding: ${e("autocomplete.list.padding")};
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: ${e("autocomplete.option.padding")};
    border: 0 none;
    color: ${e("autocomplete.option.color")};
    background: transparent;
    transition: background ${e("autocomplete.transition.duration")}, color ${e("autocomplete.transition.duration")}, border-color ${e("autocomplete.transition.duration")};
    border-radius: ${e("autocomplete.option.border.radius")};
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: ${e("autocomplete.option.focus.background")};
    color: ${e("autocomplete.option.focus.color")};
}

.p-autocomplete-option-selected {
    background: ${e("autocomplete.option.selected.background")};
    color: ${e("autocomplete.option.selected.color")};
}

.p-autocomplete-option-selected.p-focus {
    background: ${e("autocomplete.option.selected.focus.background")};
    color: ${e("autocomplete.option.selected.focus.color")};
}

.p-autocomplete-option-group {
    margin: 0;
    padding: ${e("autocomplete.option.group.padding")};
    color: ${e("autocomplete.option.group.color")};
    background: ${e("autocomplete.option.group.background")};
    font-weight: ${e("autocomplete.option.group.font.weight")};
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(${e("autocomplete.padding.y")} / 2) ${e("autocomplete.padding.x")};
    gap: calc(${e("autocomplete.padding.y")} / 2);
    color: ${e("autocomplete.color")};
    background: ${e("autocomplete.background")};
    border: 1px solid ${e("autocomplete.border.color")};
    border-radius: ${e("autocomplete.border.radius")};
    width: 100%;
    transition: background ${e("autocomplete.transition.duration")}, color ${e("autocomplete.transition.duration")}, border-color ${e("autocomplete.transition.duration")}, outline-color ${e("autocomplete.transition.duration")}, box-shadow ${e("autocomplete.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("autocomplete.shadow")};
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: ${e("autocomplete.hover.border.color")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: ${e("autocomplete.focus.border.color")};
    box-shadow: ${e("autocomplete.focus.ring.shadow")};
    outline: ${e("autocomplete.focus.ring.width")} ${e("autocomplete.focus.ring.style")} ${e("autocomplete.focus.ring.color")};
    outline-offset: ${e("autocomplete.focus.ring.offset")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: ${e("autocomplete.invalid.border.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.background")};
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.hover.background")};
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: ${e("autocomplete.filled.focus.background")};
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: ${e("autocomplete.disabled.background")};
    color: ${e("autocomplete.disabled.color")};
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(${e("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${e("autocomplete.padding.y")} / 2);
    border-radius: ${e("autocomplete.chip.border.radius")};
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(${e("autocomplete.padding.y")} / 2);
    padding-inline-end: calc(${e("autocomplete.padding.y")} / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: ${e("autocomplete.chip.focus.background")};
    color: ${e("autocomplete.chip.focus.color")};
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(${e("autocomplete.padding.y")} / 2);
    padding-block-end: calc(${e("autocomplete.padding.y")} / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: ${e("autocomplete.placeholder.color")};
}

.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
    color: ${e("autocomplete.invalid.placeholder.color")};
}

.p-autocomplete-empty-message {
    padding: ${e("autocomplete.empty.message.padding")};
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: ${e("autocomplete.dropdown.sm.width")};
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: ${e("autocomplete.dropdown.lg.width")};
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
}
`,Ie={root:{position:"relative"}},we={root:function(t){var n=t.instance,o=t.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":o.disabled,"p-invalid":n.$invalid,"p-focus":n.focused,"p-inputwrapper-filled":n.$filled||D(n.inputValue),"p-inputwrapper-focus":n.focused,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-fluid":n.$fluid}]},pcInputText:"p-autocomplete-input",inputMultiple:function(t){var n=t.instance;return["p-autocomplete-input-multiple",{"p-variant-filled":n.$variant==="filled"}]},chipItem:function(t){var n=t.instance,o=t.i;return["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex===o}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(t){var n=t.instance,o=t.option,l=t.i,i=t.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":n.isSelected(o),"p-focus":n.focusedOptionIndex===n.getOptionIndex(l,i),"p-disabled":n.isOptionDisabled(o)}]},emptyMessage:"p-autocomplete-empty-message"},Se=Q.extend({name:"autocomplete",style:Oe,classes:we,inlineStyles:Ie}),ke={name:"BaseAutoComplete",extends:ve,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Se,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function P(e){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(e)}function G(e){return Me(e)||Le(e)||Ce(e)||xe()}function xe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ce(e,t){if(e){if(typeof e=="string")return z(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function Le(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Me(e){if(Array.isArray(e))return z(e)}function z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var Ke={name:"AutoComplete",extends:ke,inheritAttrs:!1,emits:["change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,startRangeIndex:-1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(B.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(t,n){return this.virtualScrollerDisabled?t:n&&n(t).index},getOptionLabel:function(t){return this.optionLabel?w(t,this.optionLabel):t},getOptionValue:function(t){return t},getOptionRenderKey:function(t,n){return(this.dataKey?w(t,this.dataKey):this.getOptionLabel(t))+"_"+n},getPTOptions:function(t,n,o,l){return this.ptm(l,{context:{option:t,index:o,selected:this.isSelected(t),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(t)}})},isOptionDisabled:function(t){return this.optionDisabled?w(t,this.optionDisabled):!1},isOptionGroup:function(t){return this.optionGroupLabel&&t.optionGroup&&t.group},getOptionGroupLabel:function(t){return w(t,this.optionGroupLabel)},getOptionGroupChildren:function(t){return w(t,this.optionGroupChildren)},getAriaPosInset:function(t){var n=this;return(this.optionGroupLabel?t-this.visibleOptions.slice(0,t).filter(function(o){return n.isOptionGroup(o)}).length:t)+1},show:function(t){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,t&&v(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(t){var n=this,o=function(){var i;n.$emit("before-hide"),n.dirty=t,n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,t&&v(n.multiple?n.$refs.focusInput:(i=n.$refs.focusInput)===null||i===void 0?void 0:i.$el)};setTimeout(function(){o()},0)},onFocus:function(t){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(t,t.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",t))},onBlur:function(t){var n,o;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t),(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o)},onKeyDown:function(t){if(this.disabled){t.preventDefault();return}switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"ArrowRight":this.onArrowRightKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.onEscapeKey(t);break;case"Tab":this.onTabKey(t);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(t);break;case"Backspace":this.onBackspaceKey(t);break}this.clicked=!1},onInput:function(t){var n=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var o=t.target.value;this.multiple||this.updateModel(t,o),o.length===0?(this.hide(),this.$emit("clear")):o.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(t,o,"input")},this.delay)):this.hide()}},onChange:function(t){var n=this;if(this.forceSelection){var o=!1;if(this.visibleOptions&&!this.multiple){var l,i=this.multiple?this.$refs.focusInput.value:(l=this.$refs.focusInput)===null||l===void 0||(l=l.$el)===null||l===void 0?void 0:l.value,d=this.visibleOptions.find(function(V){return n.isOptionMatched(V,i||"")});d!==void 0&&(o=!0,!this.isSelected(d)&&this.onOptionSelect(t,d))}if(!o){if(this.multiple)this.$refs.focusInput.value="";else{var h,b=(h=this.$refs.focusInput)===null||h===void 0?void 0:h.$el;b&&(b.value="")}this.$emit("clear"),!this.multiple&&this.updateModel(t,null)}}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(t){if(this.disabled){t.preventDefault();return}switch(t.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(t);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(t);break;case"Backspace":this.onBackspaceKeyOnMultiple(t);break}},onContainerClick:function(t){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(t))&&(!this.overlay||!this.overlay.contains(t.target))&&v(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(t){var n=void 0;if(this.overlayVisible)this.hide(!0);else{var o=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;v(o),n=o.value,this.dropdownMode==="blank"?this.search(t,"","dropdown"):this.dropdownMode==="current"&&this.search(t,n,"dropdown")}this.$emit("dropdown-click",{originalEvent:t,query:n})},onOptionSelect:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(t,[].concat(G(this.d_value||[]),[l]))):this.updateModel(t,l),this.$emit("item-select",{originalEvent:t,value:n}),this.$emit("option-select",{originalEvent:t,value:n}),o&&this.hide(!0)},onOptionMouseMove:function(t,n){this.focusOnHover&&this.changeFocusedOptionIndex(t,n)},onOptionSelectRange:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(o===-1&&(o=this.findNearestSelectedOptionIndex(l,!0)),l===-1&&(l=this.findNearestSelectedOptionIndex(o)),o!==-1&&l!==-1){var i=Math.min(o,l),d=Math.max(o,l),h=this.visibleOptions.slice(i,d+1).filter(function(b){return n.isValidOption(b)}).map(function(b){return n.getOptionValue(b)});this.updateModel(t,h)}},onOverlayClick:function(t){me.emit("overlay-click",{originalEvent:t,target:this.$el})},onOverlayKeyDown:function(t){switch(t.code){case"Escape":this.onEscapeKey(t);break}},onArrowDownKey:function(t){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.multiple&&t.shiftKey&&this.onOptionSelectRange(t,this.startRangeIndex,n),this.changeFocusedOptionIndex(t,n),t.preventDefault()}},onArrowUpKey:function(t){if(this.overlayVisible)if(t.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),t.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.multiple&&t.shiftKey&&this.onOptionSelectRange(t,n,this.startRangeIndex),this.changeFocusedOptionIndex(t,n),t.preventDefault()}},onArrowLeftKey:function(t){var n=t.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(ie(n.value)&&this.$filled?(v(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):t.stopPropagation())},onArrowRightKey:function(t){this.focusedOptionIndex=-1,this.multiple&&t.stopPropagation()},onHomeKey:function(t){var n=t.currentTarget,o=n.value.length,l=t.metaKey||t.ctrlKey,i=this.findFirstOptionIndex();this.multiple&&t.shiftKey&&l&&this.onOptionSelectRange(t,i,this.startRangeIndex),n.setSelectionRange(0,t.shiftKey?o:0),this.focusedOptionIndex=-1,t.preventDefault()},onEndKey:function(t){var n=t.currentTarget,o=n.value.length,l=t.metaKey||t.ctrlKey,i=this.findLastOptionIndex();this.multiple&&t.shiftKey&&l&&this.onOptionSelectRange(t,this.startRangeIndex,i),n.setSelectionRange(t.shiftKey?0:o,o),this.focusedOptionIndex=-1,t.preventDefault()},onPageUpKey:function(t){this.scrollInView(0),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.visibleOptions.length-1),t.preventDefault()},onEnterKey:function(t){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&(this.multiple&&t.shiftKey?(this.onOptionSelectRange(t,this.focusedOptionIndex),t.preventDefault()):this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex])),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(t)):this.multiple&&(this.updateModel(t,[].concat(G(this.d_value||[]),[t.target.value])),this.$refs.focusInput.value="")},onSpaceKey:function(t){this.focusedOptionIndex!==-1&&this.onEnterKey(t)},onEscapeKey:function(t){this.overlayVisible&&this.hide(!0),t.preventDefault()},onTabKey:function(t){this.focusedOptionIndex!==-1&&this.onOptionSelect(t,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onBackspaceKey:function(t){if(this.multiple){if(D(this.d_value)&&!this.$refs.focusInput.value){var n=this.d_value[this.d_value.length-1],o=this.d_value.slice(0,-1);this.writeValue(o,t),this.$emit("item-unselect",{originalEvent:t,value:n}),this.$emit("option-unselect",{originalEvent:t,value:n})}t.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,v(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(t){this.focusedMultipleOptionIndex!==-1&&this.removeOption(t,this.focusedMultipleOptionIndex)},onOverlayEnter:function(t){B.set("overlay",t,this.$primevue.config.zIndex.overlay),ne(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(t){B.clear(t)},alignOverlay:function(){var t=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?_(this.overlay,t):(this.overlay.style.minWidth=ee(t)+"px",te(this.overlay,t))},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){t.overlayVisible&&t.overlay&&t.isOutsideClicked(n)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new pe(this.$refs.container,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!J()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(t){return!this.overlay.contains(t.target)&&!this.isInputClicked(t)&&!this.isDropdownClicked(t)},isInputClicked:function(t){return this.multiple?t.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(t.target):t.target===this.$refs.focusInput.$el},isDropdownClicked:function(t){return this.$refs.dropdownButton?t.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(t.target):!1},isOptionMatched:function(t,n){var o;return this.isValidOption(t)&&((o=this.getOptionLabel(t))===null||o===void 0?void 0:o.toLocaleLowerCase(this.searchLocale))===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(t){return D(t)&&!(this.isOptionDisabled(t)||this.isOptionGroup(t))},isValidSelectedOption:function(t){return this.isValidOption(t)&&this.isSelected(t)},isEquals:function(t,n){return Y(t,n,this.equalityKey)},isSelected:function(t){var n=this,o=this.getOptionValue(t);return this.multiple?(this.d_value||[]).some(function(l){return n.isEquals(l,o)}):this.isEquals(this.d_value,this.getOptionValue(t))},findFirstOptionIndex:function(){var t=this;return this.visibleOptions.findIndex(function(n){return t.isValidOption(n)})},findLastOptionIndex:function(){var t=this;return A(this.visibleOptions,function(n){return t.isValidOption(n)})},findNextOptionIndex:function(t){var n=this,o=t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(l){return n.isValidOption(l)}):-1;return o>-1?o+t+1:t},findPrevOptionIndex:function(t){var n=this,o=t>0?A(this.visibleOptions.slice(0,t),function(l){return n.isValidOption(l)}):-1;return o>-1?o:t},findSelectedOptionIndex:function(){var t=this;return this.$filled?this.visibleOptions.findIndex(function(n){return t.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findFirstOptionIndex():t},findLastFocusedOptionIndex:function(){var t=this.findSelectedOptionIndex();return t<0?this.findLastOptionIndex():t},search:function(t,n,o){n!=null&&(o==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:t,query:n})))},removeOption:function(t,n){var o=this,l=this.d_value[n],i=this.d_value.filter(function(d,h){return h!==n}).map(function(d){return o.getOptionValue(d)});this.updateModel(t,i),this.$emit("item-unselect",{originalEvent:t,value:l}),this.$emit("option-unselect",{originalEvent:t,value:l}),this.dirty=!0,v(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(t,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(t,this.visibleOptions[n],!1))},scrollInView:function(){var t=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=n!==-1?"".concat(t.$id,"_").concat(n):t.focusedOptionId,l=X(t.list,'li[id="'.concat(o,'"]'));l?l.scrollIntoView&&l.scrollIntoView({block:"nearest",inline:"start"}):t.virtualScrollerDisabled||t.virtualScroller&&t.virtualScroller.scrollToIndex(n!==-1?n:t.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(t,n){this.writeValue(n,t),this.$emit("change",{originalEvent:t,value:n})},flatOptions:function(t){var n=this;return(t||[]).reduce(function(o,l,i){o.push({optionGroup:l,group:!0,index:i});var d=n.getOptionGroupChildren(l);return d&&d.forEach(function(h){return o.push(h)}),o},[])},overlayRef:function(t){this.overlay=t},listRef:function(t,n){this.list=t,n&&n(t)},virtualScrollerRef:function(t){this.virtualScroller=t},findNextSelectedOptionIndex:function(t){var n=this,o=this.$filled&&t<this.visibleOptions.length-1?this.visibleOptions.slice(t+1).findIndex(function(l){return n.isValidSelectedOption(l)}):-1;return o>-1?o+t+1:-1},findPrevSelectedOptionIndex:function(t){var n=this,o=this.$filled&&t>0?A(this.visibleOptions.slice(0,t),function(l){return n.isValidSelectedOption(l)}):-1;return o>-1?o:-1},findNearestSelectedOptionIndex:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=-1;return this.$filled&&(n?(o=this.findPrevSelectedOptionIndex(t),o=o===-1?this.findNextSelectedOptionIndex(t):o):(o=this.findNextSelectedOptionIndex(t),o=o===-1?this.findPrevSelectedOptionIndex(t):o)),o>-1?o:t}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(this.$filled)if(P(this.d_value)==="object"){var t=this.getOptionLabel(this.d_value);return t??this.d_value}else return this.d_value;else return""},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return D(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.multiple?this.d_value.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.$id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var t=this;return this.visibleOptions.filter(function(n){return!t.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.$id+"_panel"}},components:{InputText:he,VirtualScroller:be,Portal:ye,ChevronDownIcon:de,SpinnerIcon:ce,Chip:fe},directives:{ripple:ge}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(o){$e(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function $e(e,t,n){return(t=De(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function De(e){var t=Ve(e,"string");return L(t)=="symbol"?t:t+""}function Ve(e,t){if(L(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(L(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Te=["aria-activedescendant"],Ae=["id","aria-label","aria-setsize","aria-posinset"],Ee=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],Fe=["disabled","aria-expanded","aria-controls"],Re=["id"],Be=["id","aria-label"],Pe=["id"],ze=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focus","data-p-disabled"];function je(e,t,n,o,l,i){var d=S("InputText"),h=S("Chip"),b=S("SpinnerIcon"),V=S("VirtualScroller"),U=S("Portal"),q=oe("ripple");return u(),f("div",r({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:t[11]||(t[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},e.ptmi("root")),[e.multiple?O("",!0):(u(),E(d,{key:0,ref:"focusInput",id:e.inputId,type:"text",name:e.$formName,class:k([e.cx("pcInputText"),e.inputClass]),style:le(e.inputStyle),value:i.inputValue,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,fluid:e.$fluid,disabled:e.disabled,size:e.size,invalid:e.invalid,variant:e.variant,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":l.overlayVisible,"aria-controls":i.panelId,"aria-activedescendant":l.focused?i.focusedOptionId:void 0,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onInput:i.onInput,onChange:i.onChange,unstyled:e.unstyled,pt:e.ptm("pcInputText")},null,8,["id","name","class","style","value","placeholder","tabindex","fluid","disabled","size","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","pt"])),e.multiple?(u(),f("ul",r({key:1,ref:"multiContainer",class:e.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":l.focused?i.focusedMultipleOptionId:void 0,onFocus:t[5]||(t[5]=function(){return i.onMultipleContainerFocus&&i.onMultipleContainerFocus.apply(i,arguments)}),onBlur:t[6]||(t[6]=function(){return i.onMultipleContainerBlur&&i.onMultipleContainerBlur.apply(i,arguments)}),onKeydown:t[7]||(t[7]=function(){return i.onMultipleContainerKeyDown&&i.onMultipleContainerKeyDown.apply(i,arguments)})},e.ptm("inputMultiple")),[(u(!0),f(F,null,j(e.d_value,function(p,a){return u(),f("li",r({key:"".concat(a,"_").concat(i.getOptionLabel(p)),id:e.$id+"_multiple_option_"+a,class:e.cx("chipItem",{i:a}),role:"option","aria-label":i.getOptionLabel(p),"aria-selected":!0,"aria-setsize":e.d_value.length,"aria-posinset":a+1,ref_for:!0},e.ptm("chipItem")),[m(e.$slots,"chip",r({class:e.cx("pcChip"),value:p,index:a,removeCallback:function(y){return i.removeOption(y,a)},ref_for:!0},e.ptm("pcChip")),function(){return[$(h,{class:k(e.cx("pcChip")),label:i.getOptionLabel(p),removeIcon:e.chipIcon||e.removeTokenIcon,removable:"",unstyled:e.unstyled,onRemove:function(y){return i.removeOption(y,a)},pt:e.ptm("pcChip")},{removeicon:x(function(){return[m(e.$slots,e.$slots.chipicon?"chipicon":"removetokenicon",{class:k(e.cx("chipIcon")),index:a,removeCallback:function(y){return i.removeOption(y,a)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,Ae)}),128)),I("li",r({class:e.cx("inputChip"),role:"option"},e.ptm("inputChip")),[I("input",r({ref:"focusInput",id:e.inputId,type:"text",style:e.inputStyle,class:e.inputClass,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,disabled:e.disabled,autocomplete:"off",role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":l.overlayVisible,"aria-controls":e.$id+"_list","aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:t[3]||(t[3]=function(){return i.onInput&&i.onInput.apply(i,arguments)}),onChange:t[4]||(t[4]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},e.ptm("input")),null,16,Ee)],16)],16,Te)):O("",!0),l.searching||e.loading?m(e.$slots,e.$slots.loader?"loader":"loadingicon",{key:2,class:k(e.cx("loader"))},function(){return[e.loader||e.loadingIcon?(u(),f("i",r({key:0,class:["pi-spin",e.cx("loader"),e.loader,e.loadingIcon],"aria-hidden":"true"},e.ptm("loader")),null,16)):(u(),E(b,r({key:1,class:e.cx("loader"),spin:"","aria-hidden":"true"},e.ptm("loader")),null,16,["class"]))]}):O("",!0),m(e.$slots,e.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(a){return i.onDropdownClick(a)}},function(){return[e.dropdown?(u(),f("button",r({key:0,ref:"dropdownButton",type:"button",class:[e.cx("dropdown"),e.dropdownClass],disabled:e.disabled,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":i.panelId,onClick:t[8]||(t[8]=function(){return i.onDropdownClick&&i.onDropdownClick.apply(i,arguments)})},e.ptm("dropdown")),[m(e.$slots,"dropdownicon",{class:k(e.dropdownIcon)},function(){return[(u(),E(re(e.dropdownIcon?"span":"ChevronDownIcon"),r({class:e.dropdownIcon},e.ptm("dropdownIcon")),null,16,["class"]))]})],16,Fe)):O("",!0)]}),I("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),C(i.searchResultMessageText),17),$(U,{appendTo:e.appendTo},{default:x(function(){return[$(ae,r({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:x(function(){return[l.overlayVisible?(u(),f("div",r({key:0,ref:i.overlayRef,id:i.panelId,class:[e.cx("overlay"),e.panelClass,e.overlayClass],style:H(H({},e.panelStyle),e.overlayStyle),onClick:t[9]||(t[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:t[10]||(t[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},e.ptm("overlay")),[m(e.$slots,"header",{value:e.d_value,suggestions:i.visibleOptions}),I("div",r({class:e.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?e.scrollHeight:""}},e.ptm("listContainer")),[$(V,r({ref:i.virtualScrollerRef},e.virtualScrollerOptions,{style:{height:e.scrollHeight},items:i.visibleOptions,tabindex:-1,disabled:i.virtualScrollerDisabled,pt:e.ptm("virtualScroller")}),se({content:x(function(p){var a=p.styleClass,M=p.contentRef,y=p.items,g=p.getItemOptions,W=p.contentStyle,K=p.itemSize;return[I("ul",r({ref:function(c){return i.listRef(c,M)},id:e.$id+"_list",class:[e.cx("list"),a],style:W,role:"listbox","aria-label":i.listAriaLabel},e.ptm("list")),[(u(!0),f(F,null,j(y,function(s,c){return u(),f(F,{key:i.getOptionRenderKey(s,i.getOptionIndex(c,g))},[i.isOptionGroup(s)?(u(),f("li",r({key:0,id:e.$id+"_"+i.getOptionIndex(c,g),style:{height:K?K+"px":void 0},class:e.cx("optionGroup"),role:"option",ref_for:!0},e.ptm("optionGroup")),[m(e.$slots,"optiongroup",{option:s.optionGroup,index:i.getOptionIndex(c,g)},function(){return[R(C(i.getOptionGroupLabel(s.optionGroup)),1)]})],16,Pe)):ue((u(),f("li",r({key:1,id:e.$id+"_"+i.getOptionIndex(c,g),style:{height:K?K+"px":void 0},class:e.cx("option",{option:s,i:c,getItemOptions:g}),role:"option","aria-label":i.getOptionLabel(s),"aria-selected":i.isSelected(s),"aria-disabled":i.isOptionDisabled(s),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(c,g)),onClick:function(T){return i.onOptionSelect(T,s)},onMousemove:function(T){return i.onOptionMouseMove(T,i.getOptionIndex(c,g))},"data-p-selected":i.isSelected(s),"data-p-focus":l.focusedOptionIndex===i.getOptionIndex(c,g),"data-p-disabled":i.isOptionDisabled(s),ref_for:!0},i.getPTOptions(s,g,c,"option")),[m(e.$slots,"option",{option:s,index:i.getOptionIndex(c,g)},function(){return[R(C(i.getOptionLabel(s)),1)]})],16,ze)),[[q]])],64)}),128)),e.showEmptyMessage&&(!y||y&&y.length===0)?(u(),f("li",r({key:0,class:e.cx("emptyMessage"),role:"option"},e.ptm("emptyMessage")),[m(e.$slots,"empty",{},function(){return[R(C(i.searchResultMessageText),1)]})],16)):O("",!0)],16,Be)]}),_:2},[e.$slots.loader?{name:"loader",fn:x(function(p){var a=p.options;return[m(e.$slots,"loader",{options:a})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),m(e.$slots,"footer",{value:e.d_value,suggestions:i.visibleOptions}),I("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),C(i.selectedMessageText),17)],16,Re)):O("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Ke.render=je;export{Ke as default};
