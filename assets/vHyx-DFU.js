import{u as r}from"./DmfvTtO6.js";import{s as e}from"./tJlBGt6a.js";import{Q as a,t as n,v as s,a4 as i,a7 as u}from"./D9ZKqHZa.js";import"./CgFZ6u3b.js";var p=`
.p-radiobutton-group {
    display: inline-flex;
}
`,d={root:"p-radiobutton-group p-component"},m=a.extend({name:"radiobuttongroup",style:p,classes:d}),c={name:"BaseRadioButtonGroup",extends:e,style:m,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},l={name:"RadioButtonGroup",extends:c,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||r("radiobutton-group-")}};function f(t,o,g,h,v,$){return s(),n("div",u({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default")],16)}l.render=f;export{l as default};
