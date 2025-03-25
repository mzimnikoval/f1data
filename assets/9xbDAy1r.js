import{Q as d,aZ as f,g as m,O as o,v as r,A as a,a3 as h,a7 as i,a4 as v,a6 as b,aa as L,ab as y}from"./D9ZKqHZa.js";import{Z as l}from"./DGEOgZpe.js";import{s as S}from"./D7LlOsA9.js";import w from"./BRKx7Kzk.js";import{s as g}from"./CgFZ6u3b.js";import"./BS3aGP0C.js";import"./Be1fzYNM.js";import"./_IhsXs8j.js";import"./DozQ4w8u.js";import"./DFOs8S4O.js";import"./Dac-RJjE.js";import"./DmfvTtO6.js";var k=`
.p-scrolltop.p-button {
    position: fixed !important;
    inset-block-end: 20px;
    inset-inline-end: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky !important;
    display: flex;
    margin-inline-start: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`,E={root:function(n){var s=n.props;return["p-scrolltop",{"p-scrolltop-sticky":s.target!=="window"}]},icon:"p-scrolltop-icon"},$=d.extend({name:"scrolltop",style:k,classes:E}),C={name:"BaseScrollTop",extends:g,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:$,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},T={name:"ScrollTop",extends:C,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(l.clear(this.container),this.overlay=null)},methods:{onClick:function(){var n=this.target==="window"?window:this.$el.parentElement;n.scroll({top:0,behavior:this.behavior})},checkVisibility:function(n){n>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(n.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var n=this;this.scrollListener=function(){n.checkVisibility(f())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(n){l.set("overlay",n,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(n){l.clear(n)},containerRef:function(n){this.container=n?n.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:S,Button:w}};function A(e,n,s,P,c,t){var p=m("Button");return r(),o(y,i({name:"p-scrolltop",appear:"",onEnter:t.onEnter,onAfterLeave:t.onAfterLeave},e.ptm("transition")),{default:a(function(){return[c.visible?(r(),o(p,i({key:0,ref:t.containerRef,class:e.cx("root"),onClick:t.onClick,"aria-label":t.scrollTopAriaLabel,unstyled:e.unstyled},e.buttonProps,{pt:e.pt}),{icon:a(function(u){return[v(e.$slots,"icon",{class:b(e.cx("icon"))},function(){return[(r(),o(L(e.icon?"span":"ChevronUpIcon"),i({class:[e.cx("icon"),e.icon,u.class]},e.ptm("icon")),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):h("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}T.render=A;export{T as default};
