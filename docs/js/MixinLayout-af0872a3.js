import{d as C,cK as L,p as x,a as T,c as a,cL as p,q as N,f as t,bp as B}from"../assets/index.fad64095.js";import{M as v,T as M,N as y,L as H,H as O,a as h,b as F}from"./Logo-87fa7316.js";import{B as I,N as U,C as V}from"./Breadcrumb-6ac6a64b.js";import"./use-fullscreen-a6e50651.js";import"./index-2dc74376.js";import"./FormItem-42e970ca.js";import"./Grid-99448246.js";import"./ReloadOutlined-96698e3f.js";import"./Avatar-543d1ea8.js";import"./Dropdown-4e1f87e6.js";import"./ChevronRight-b9954327.js";import"./create-ref-setter-04566897.js";import"./use-deounce-3cb026e8.js";var J=C({name:"MixinLayout",props:{nativeScrollbar:{type:Boolean,default:!0},menuOptions:{type:Array,default:()=>[]},tagsFixed:{type:Boolean,default:!0},collapsed:{type:Boolean,default:!0},inverted:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},onScroll:{type:Function,default:void 0}},emits:["update:collapsed"],setup(s,{emit:o}){const n=L(),r=x(),d=T(!0),g=a(()=>["dark"].includes(r.navMode)),u=a(()=>r.isCutMenu),c=a(()=>{var e;return(e=n.matched.filter(l=>l.path)[0])==null?void 0:e.path}),f=a(()=>r.isShowTabs),w=a(()=>s.tagsFixed&&f.value?p.tagsHeight:0),m=a(()=>{const e=s.menuOptions.find(i=>i.path===c.value),l=((e==null?void 0:e.children)||[]).map(i=>({...i,icon:i.icon||(e==null?void 0:e.icon)}));return u.value?l:s.menuOptions});N(()=>n.fullPath,()=>{n.fullPath.startsWith("/redirect")||(d.value=m.value.length>0)},{immediate:!0});const b=a(()=>{const e={collapsed:s.collapsed,width:64},l={collapsed:!0,width:0};return u.value?d.value?e:l:e});function S(e){o("update:collapsed",e)}return{defaultInverted:g,isCutMenu:u,defaultValue:c,menuChildrensOptions:m,isShowSilder:d,state:b,onUpdateCollapsed:S,isShowTabs:f,contentTop:w}},render(){const s=t(v,{mode:"horizontal",value:this.defaultValue,collapsed:!1,inverted:this.defaultInverted,options:this.menuOptions,"children-field":"noChild"},null),o=this.isShowTabs?t(y,{class:"layout-tags",bordered:!0},{default:()=>[t(M,null,null)]}):null;return t(h,{class:"layout-wrapper layout-wrapper-mixin"},{default:()=>[t(y,{class:"layout-header",inverted:this.defaultInverted,bordered:!0},{default:()=>[t(H,{width:200,height:p.headerHeight},null),t(O,null,{left:()=>this.isCutMenu?s:t(I,null,null)})]}),t(h,{"has-sider":!0,position:"absolute",style:`top: ${p.headerHeight}px`},{default:()=>[t("div",{class:"layout-sider-wrapper"},[t(U,{class:"layout-sider",collapsed:this.state.collapsed,"collapse-mode":"width","collapsed-width":this.state.width,width:200,bordered:!0,inverted:this.inverted,"content-style":"height: 100%;","native-scrollbar":this.nativeScrollbar,"show-trigger":this.isShowSilder?this.showTrigger:!1,"onUpdate:collapsed":this.onUpdateCollapsed},{default:()=>[t(v,{inverted:this.inverted,options:this.menuChildrensOptions},null)]}),t(V,{class:"mixin-collapse",collapsed:this.state.collapsed,size:this.state.collapsed?24:22,width:200,border:this.inverted?"top":"top,right",inverted:this.inverted,"collapsed-width":this.state.width},null)]),t(h,{class:"n-layout-main"},{default:()=>[this.tagsFixed?o:null,t(F,{class:"layout-content",position:"absolute",style:`top: ${this.contentTop}px; bottom: 0`,"native-scrollbar":this.nativeScrollbar,onScroll:this.onScroll},{default:()=>[this.tagsFixed?null:o,B(this.$slots,"default")]})]})]})]})}});export{J as default};