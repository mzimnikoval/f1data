import L from"./CIkKdggY.js";import{Q as S,bk as u,g as b,O as m,v as r,ac as p,A as l,a4 as f,z as v,a7 as a,x as d,t as h,a3 as j,a8 as y,aa as k,a6 as B,y as I}from"./nr4C_rNa.js";import F from"./BJ8jdh-9.js";import{s as D}from"./GAao0N8K.js";import"./Be1fzYNM.js";import"./DStluF04.js";import"./CxO2mwmc.js";import"./Bj7CAaiF.js";import"./C26iI0S-.js";import"./DnxLn_5q.js";import"./DmfvTtO6.js";import"./DGEOgZpe.js";import"./B5tyGlTj.js";import"./BVJvBkwf.js";import"./zX_nPhqn.js";import"./zv8oy0Y5.js";var A=({dt:e})=>`
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  ${e("confirmdialog.content.gap")};
}

.p-confirmdialog-icon {
    color: ${e("confirmdialog.icon.color")};
    font-size: ${e("confirmdialog.icon.size")};
    width: ${e("confirmdialog.icon.size")};
    height: ${e("confirmdialog.icon.size")};
}
`,E={root:"p-confirmdialog",icon:"p-confirmdialog-icon",message:"p-confirmdialog-message",pcRejectButton:"p-confirmdialog-reject-button",pcAcceptButton:"p-confirmdialog-accept-button"},O=S.extend({name:"confirmdialog",style:A,classes:E}),R={name:"BaseConfirmDialog",extends:D,props:{group:String,breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0}},style:O,provide:function(){return{$pcConfirmDialog:this,$parentInstance:this}}},z={name:"ConfirmDialog",extends:R,confirmListener:null,closeListener:null,data:function(){return{visible:!1,confirmation:null}},mounted:function(){var n=this;this.confirmListener=function(i){i&&i.group===n.group&&(n.confirmation=i,n.confirmation.onShow&&n.confirmation.onShow(),n.visible=!0)},this.closeListener=function(){n.visible=!1,n.confirmation=null},u.on("confirm",this.confirmListener),u.on("close",this.closeListener)},beforeUnmount:function(){u.off("confirm",this.confirmListener),u.off("close",this.closeListener)},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1}},computed:{appendTo:function(){return this.confirmation?this.confirmation.appendTo:"body"},target:function(){return this.confirmation?this.confirmation.target:null},modal:function(){return this.confirmation?this.confirmation.modal==null?!0:this.confirmation.modal:!0},header:function(){return this.confirmation?this.confirmation.header:null},message:function(){return this.confirmation?this.confirmation.message:null},blockScroll:function(){return this.confirmation?this.confirmation.blockScroll:!0},position:function(){return this.confirmation?this.confirmation.position:null},acceptLabel:function(){if(this.confirmation){var n,i=this.confirmation;return i.acceptLabel||((n=i.acceptProps)===null||n===void 0?void 0:n.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var n,i=this.confirmation;return i.rejectLabel||((n=i.rejectProps)===null||n===void 0?void 0:n.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var n;return this.confirmation?this.confirmation.acceptIcon:(n=this.confirmation)!==null&&n!==void 0&&n.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var n;return this.confirmation?this.confirmation.rejectIcon:(n=this.confirmation)!==null&&n!==void 0&&n.rejectProps?this.confirmation.rejectProps.icon:null},autoFocusAccept:function(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject:function(){return this.confirmation.defaultFocus==="reject"},closeOnEscape:function(){return this.confirmation?this.confirmation.closeOnEscape:!0}},components:{Dialog:F,Button:L}};function P(e,n,i,T,t,o){var g=b("Button"),C=b("Dialog");return r(),m(C,{visible:t.visible,"onUpdate:visible":[n[2]||(n[2]=function(c){return t.visible=c}),o.onHide],role:"alertdialog",class:B(e.cx("root")),modal:o.modal,header:o.header,blockScroll:o.blockScroll,appendTo:o.appendTo,position:o.position,breakpoints:e.breakpoints,closeOnEscape:o.closeOnEscape,draggable:e.draggable,pt:e.pt,unstyled:e.unstyled},p({default:l(function(){return[e.$slots.container?j("",!0):(r(),h(y,{key:0},[e.$slots.message?(r(),m(k(e.$slots.message),{key:1,message:t.confirmation},null,8,["message"])):(r(),h(y,{key:0},[f(e.$slots,"icon",{},function(){return[e.$slots.icon?(r(),m(k(e.$slots.icon),{key:0,class:B(e.cx("icon"))},null,8,["class"])):t.confirmation.icon?(r(),h("span",a({key:1,class:[t.confirmation.icon,e.cx("icon")]},e.ptm("icon")),null,16)):j("",!0)]}),d("span",a({class:e.cx("message")},e.ptm("message")),I(o.message),17)],64))],64))]}),_:2},[e.$slots.container?{name:"container",fn:l(function(c){return[f(e.$slots,"container",{message:t.confirmation,closeCallback:c.onclose,acceptCallback:o.accept,rejectCallback:o.reject})]}),key:"0"}:void 0,e.$slots.container?void 0:{name:"footer",fn:l(function(){var c;return[v(g,a({class:[e.cx("pcRejectButton"),t.confirmation.rejectClass],autofocus:o.autoFocusReject,unstyled:e.unstyled,text:((c=t.confirmation.rejectProps)===null||c===void 0?void 0:c.text)||!1,onClick:n[0]||(n[0]=function(s){return o.reject()})},t.confirmation.rejectProps,{label:o.rejectLabel,pt:e.ptm("pcRejectButton")}),p({_:2},[o.rejectIcon||e.$slots.rejecticon?{name:"icon",fn:l(function(s){return[f(e.$slots,"rejecticon",{},function(){return[d("span",a({class:[o.rejectIcon,s.class]},e.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","text","label","pt"]),v(g,a({label:o.acceptLabel,class:[e.cx("pcAcceptButton"),t.confirmation.acceptClass],autofocus:o.autoFocusAccept,unstyled:e.unstyled,onClick:n[1]||(n[1]=function(s){return o.accept()})},t.confirmation.acceptProps,{pt:e.ptm("pcAcceptButton")}),p({_:2},[o.acceptIcon||e.$slots.accepticon?{name:"icon",fn:l(function(s){return[f(e.$slots,"accepticon",{},function(){return[d("span",a({class:[o.acceptIcon,s.class]},e.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["label","class","autofocus","unstyled","pt"])]}),key:"1"}]),1032,["visible","class","modal","header","blockScroll","appendTo","position","breakpoints","closeOnEscape","draggable","onUpdate:visible","pt","unstyled"])}z.render=P;export{z as default};
