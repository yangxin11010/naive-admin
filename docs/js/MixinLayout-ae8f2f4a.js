import{d as x,u as T,z as N,f as B,g as s,cN as v,B as M,l as t,bw as H}from"../assets/index.dfdd9c17.js";import{M as S,T as O,N as C,L as F,H as z,a as w,b as U}from"./Logo-aa7c375c.js";import{B as V,N as $,C as I}from"./Breadcrumb-5b3a1c54.js";import"./use-fullscreen-b495c9d5.js";import"./index-551fc7de.js";import"./index-d95ae7da.js";import"./index-751b6e38.js";import"./Grid-06d0c95e.js";import"./RadioGroup-9a3af1e7.js";import"./Forward-248f5062.js";import"./InputNumber-14449cdf.js";import"./ReloadOutlined-335f0b25.js";import"./Avatar-aed3739f.js";import"./Dropdown-d76ac393.js";import"./create-ref-setter-2fcdeee9.js";import"./use-deounce-cab4044f.js";const _=x({name:"MixinLayout",props:{nativeScrollbar:{type:Boolean,default:!0},menuOptions:{type:Array,default:()=>[]},tagsFixed:{type:Boolean,default:!0},collapsed:{type:Boolean,default:!0},inverted:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},onScroll:{type:Function,default:void 0}},emits:["update:collapsed"],setup(n,{emit:m}){const i=T(),u=N(),r=B(!0),f=s(()=>["dark"].includes(u.navMode)),p=s(()=>u.isCutMenu),o=s(()=>{var e;return(e=i.matched.filter(a=>a.path)[0])==null?void 0:e.path}),l=s(()=>u.isShowTabs),c=s(()=>n.tagsFixed&&l.value?v.tagsHeight:0),h=s(()=>{const e=n.menuOptions.find(d=>d.path===o.value),a=((e==null?void 0:e.children)||[]).map(d=>({...d,icon:d.icon||(e==null?void 0:e.icon)}));return p.value?a:n.menuOptions});M(()=>i.fullPath,()=>{i.fullPath.startsWith("/redirect")||(r.value=h.value.length>0)},{immediate:!0});const y=s(()=>{const e={collapsed:n.collapsed,width:64},a={collapsed:!0,width:0};return p.value?r.value?e:a:e});function g(e){m("update:collapsed",e)}return{defaultInverted:f,isCutMenu:p,defaultValue:o,menuChildrensOptions:h,isShowSilder:r,state:y,onUpdateCollapsed:g,isShowTabs:l,contentTop:c}},render(){const{$slots:n,defaultValue:m,defaultInverted:i,menuOptions:u,tagsFixed:r,isShowTabs:f,isCutMenu:p,state:o,inverted:l,nativeScrollbar:c,isShowSilder:h,showTrigger:y,menuChildrensOptions:g,contentTop:e,onUpdateCollapsed:a,onScroll:d}=this,L=t(S,{mode:"horizontal",value:m,collapsed:!1,inverted:i,options:u,"children-field":"noChild"},null),b=f?t(C,{class:"layout-tags",bordered:!0},{default:()=>[t(O,null,null)]}):null;return t(w,{class:"layout-wrapper layout-wrapper-mixin"},{default:()=>[t(C,{class:"layout-header",inverted:i,bordered:!0},{default:()=>[t(F,{width:200,height:v.headerHeight},null),t(z,null,{left:()=>p?L:t(V,null,null)})]}),t(w,{"has-sider":!0,position:"absolute",style:`top: ${v.headerHeight}px`},{default:()=>[t("div",{class:"layout-sider-wrapper"},[t($,{class:"layout-sider",collapsed:o.collapsed,"collapse-mode":"width","collapsed-width":o.width,width:200,bordered:!0,inverted:l,"content-style":"height: 100%;","native-scrollbar":c,"show-trigger":h?y:!1,"onUpdate:collapsed":a},{default:()=>[t(S,{inverted:l,options:g},null)]}),t(I,{class:"mixin-collapse",collapsed:o.collapsed,size:o.collapsed?24:22,width:200,border:l?"top":"top,right",inverted:l,"collapsed-width":o.width},null)]),t(w,{class:"n-layout-main"},{default:()=>[r?b:null,t(U,{class:"layout-content",position:"absolute",style:`top: ${e}px; bottom: 0`,"native-scrollbar":c,onScroll:d},{default:()=>[r?null:b,H(n,"default")]})]})]})]})}});export{_ as default};
