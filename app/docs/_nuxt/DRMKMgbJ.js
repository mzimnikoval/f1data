import{c as b}from"./Be1fzYNM.js";import{s as f}from"./CKlU7_Eb.js";import{s as $}from"./B2AUTfBy.js";import v from"./CIkKdggY.js";import{R as y}from"./C26iI0S-.js";import{s as B}from"./GAao0N8K.js";import{Q as k,g as w,t as p,v as s,x as d,z as g,a4 as a,a3 as c,a7 as t,y as P,a6 as C,A as h,O as A,aa as D,ad as S,ao as I,ab as K}from"./nr4C_rNa.js";import"./CxO2mwmc.js";import"./DStluF04.js";import"./Bj7CAaiF.js";import"./DnxLn_5q.js";import"./DmfvTtO6.js";var L=({dt:e})=>`
.p-panel {
    border: 1px solid ${e("panel.border.color")};
    border-radius: ${e("panel.border.radius")};
    background: ${e("panel.background")};
    color: ${e("panel.color")};
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${e("panel.header.padding")};
    background: ${e("panel.header.background")};
    color: ${e("panel.header.color")};
    border-style: solid;
    border-width: ${e("panel.header.border.width")};
    border-color: ${e("panel.header.border.color")};
    border-radius: ${e("panel.header.border.radius")};
}

.p-panel-toggleable .p-panel-header {
    padding: ${e("panel.toggleable.header.padding")};
}

.p-panel-title {
    line-height: 1;
    font-weight: ${e("panel.title.font.weight")};
}

.p-panel-content {
    padding: ${e("panel.content.padding")};
}

.p-panel-footer {
    padding: ${e("panel.footer.padding")};
}
`,T={root:function(o){var u=o.props;return["p-panel p-component",{"p-panel-toggleable":u.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},E=k.extend({name:"panel",style:L,classes:T}),N={name:"BasePanel",extends:B,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:E,provide:function(){return{$pcPanel:this,$parentInstance:this}}},V={name:"Panel",extends:N,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(o){this.d_collapsed=o}},methods:{toggle:function(o){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:o,value:this.d_collapsed})},onKeyDown:function(o){(o.code==="Enter"||o.code==="NumpadEnter"||o.code==="Space")&&(this.toggle(o),o.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header},dataP:function(){return b({toggleable:this.toggleable})}},components:{PlusIcon:$,MinusIcon:f,Button:v},directives:{ripple:y}},j=["data-p"],z=["data-p"],M=["id"],O=["id","aria-labelledby"];function R(e,o,u,Q,l,n){var m=w("Button");return s(),p("div",t({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[d("div",t({class:e.cx("header"),"data-p":n.dataP},e.ptm("header")),[a(e.$slots,"header",{id:e.$id+"_header",class:C(e.cx("title"))},function(){return[e.header?(s(),p("span",t({key:0,id:e.$id+"_header",class:e.cx("title")},e.ptm("title")),P(e.header),17,M)):c("",!0)]}),d("div",t({class:e.cx("headerActions")},e.ptm("headerActions")),[a(e.$slots,"icons"),e.toggleable?a(e.$slots,"togglebutton",{key:0,collapsed:l.d_collapsed,toggleCallback:function(i){return n.toggle(i)},keydownCallback:function(i){return n.onKeyDown(i)}},function(){return[g(m,t({id:e.$id+"_header",class:e.cx("pcToggleButton"),"aria-label":n.buttonAriaLabel,"aria-controls":e.$id+"_content","aria-expanded":!l.d_collapsed,unstyled:e.unstyled,onClick:o[0]||(o[0]=function(r){return n.toggle(e.event)}),onKeydown:o[1]||(o[1]=function(r){return n.onKeyDown(e.event)})},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h(function(r){return[a(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed},function(){return[(s(),A(D(l.d_collapsed?"PlusIcon":"MinusIcon"),t({class:r.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","pt"])]}):c("",!0)],16)],16,z),g(K,t({name:"p-toggleable-content"},e.ptm("transition")),{default:h(function(){return[S(d("div",t({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[d("div",t({class:e.cx("content")},e.ptm("content")),[a(e.$slots,"default")],16),e.$slots.footer?(s(),p("div",t({key:0,class:e.cx("footer")},e.ptm("footer")),[a(e.$slots,"footer")],16)):c("",!0)],16,O),[[I,!l.d_collapsed]])]}),_:3},16)],16,j)}V.render=R;export{V as default};
