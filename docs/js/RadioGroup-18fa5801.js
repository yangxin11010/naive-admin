import{I as re,w as ne,aV as ae,aY as O,a as I,z as ie,M as U,a3 as G,K as H,J as j,aN as V,$ as _,a2 as g,a0 as s,a1 as R,aS as A,d as N,a6 as $,c as F,ag as M,a7 as K,B as y,ah as de,bm as L,av as D,L as se,P as le,Q as ce,aP as ue}from"../assets/index.78bcc101.js";const be={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},Y=re("n-radio-group");function he(e){ne(()=>{e.checkedValue!==void 0&&ae("radio","`checked-value` is deprecated, please use `checked` instead.")});const o=O(e,{mergedSize(n){const{size:l}=e;if(l!==void 0)return l;if(t){const{mergedSizeRef:{value:b}}=t;if(b!==void 0)return b}return n?n.mergedSize.value:"medium"},mergedDisabled(n){return!!(e.disabled||t!=null&&t.disabledRef.value||n!=null&&n.disabled.value)}}),{mergedSizeRef:r,mergedDisabledRef:d}=o,a=I(null),f=I(null),t=ie(Y,null),u=I(e.defaultChecked),i=U(e,"checked"),p=G(i,u),m=H(()=>t?t.valueRef.value===e.value:p.value),w=H(()=>{const{name:n}=e;if(n!==void 0)return n;if(t)return t.nameRef.value}),v=I(!1);function k(){if(t){const{doUpdateValue:n}=t,{value:l}=e;V(n,l)}else{const{onUpdateChecked:n,"onUpdate:checked":l}=e,{nTriggerFormInput:b,nTriggerFormChange:c}=o;n&&V(n,!0),l&&V(l,!0),b(),c(),u.value=!0}}function x(){d.value||m.value||k()}function C(){x()}function z(){v.value=!1}function S(){v.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:j(e).mergedClsPrefixRef,inputRef:a,labelRef:f,mergedName:w,mergedDisabled:d,uncontrolledChecked:u,renderSafeChecked:m,focus:v,mergedSize:r,handleRadioInputChange:C,handleRadioInputBlur:z,handleRadioInputFocus:S}}var fe=_("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[g("checked",[s("dot",`
 background-color: var(--n-color-active);
 `)]),s("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),_("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),s("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),g("checked",{boxShadow:"var(--n-box-shadow-active)"},[R("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),s("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),A("disabled",`
 cursor: pointer;
 `,[R("&:hover",[s("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),g("focus",[R("&:not(:active)",[s("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),g("disabled",`
 cursor: not-allowed;
 `,[s("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[R("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),g("checked",`
 opacity: 1;
 `)]),s("label",{color:"var(--n-text-color-disabled)"}),_("radio-input",`
 cursor: not-allowed;
 `)])]),xe=N({name:"Radio",props:Object.assign(Object.assign({},$.props),be),setup(e){const o=he(e),r=$("Radio","-radio",fe,L,e,o.mergedClsPrefix),d=F(()=>{const{mergedSize:{value:p}}=o,{common:{cubicBezierEaseInOut:m},self:{boxShadow:w,boxShadowActive:v,boxShadowDisabled:k,boxShadowFocus:x,boxShadowHover:C,color:z,colorDisabled:S,colorActive:n,textColor:l,textColorDisabled:b,dotColorActive:c,dotColorDisabled:h,labelPadding:B,labelLineHeight:T,[D("fontSize",p)]:E,[D("radioSize",p)]:P}}=r.value;return{"--n-bezier":m,"--n-label-line-height":T,"--n-box-shadow":w,"--n-box-shadow-active":v,"--n-box-shadow-disabled":k,"--n-box-shadow-focus":x,"--n-box-shadow-hover":C,"--n-color":z,"--n-color-active":n,"--n-color-disabled":S,"--n-dot-color-active":c,"--n-dot-color-disabled":h,"--n-font-size":E,"--n-radio-size":P,"--n-text-color":l,"--n-text-color-disabled":b,"--n-label-padding":B}}),{inlineThemeDisabled:a,mergedClsPrefixRef:f,mergedRtlRef:t}=j(e),u=M("Radio",t,f),i=a?K("radio",F(()=>o.mergedSize.value[0]),d,e):void 0;return Object.assign(o,{rtlEnabled:u,cssVars:a?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){const{$slots:e,mergedClsPrefix:o,onRender:r,label:d}=this;return r==null||r(),y("label",{class:[`${o}-radio`,this.themeClass,{[`${o}-radio--rtl`]:this.rtlEnabled,[`${o}-radio--disabled`]:this.mergedDisabled,[`${o}-radio--checked`]:this.renderSafeChecked,[`${o}-radio--focus`]:this.focus}],style:this.cssVars},y("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),y("div",{class:`${o}-radio__dot-wrapper`},"\xA0",y("div",{class:[`${o}-radio__dot`,this.renderSafeChecked&&`${o}-radio__dot--checked`]})),de(e.default,a=>!a&&!d?null:y("div",{ref:"labelRef",class:`${o}-radio__label`},a||d)))}}),ve=_("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[s("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[g("checked",{backgroundColor:"var(--n-button-border-color-active)"}),g("disabled",{opacity:"var(--n-opacity-disabled)"})]),g("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[_("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),s("splitor",{height:"var(--n-height)"})]),_("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[_("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),s("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),R("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[s("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),R("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[s("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),A("disabled",`
 cursor: pointer;
 `,[R("&:hover",[s("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),A("checked",{color:"var(--n-button-text-color-hover)"})]),g("focus",[R("&:not(:active)",[s("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),g("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),g("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function ge(e,o,r){var d;const a=[];let f=!1;for(let t=0;t<e.length;++t){const u=e[t],i=(d=u.type)===null||d===void 0?void 0:d.name;if(i==="RadioButton"&&(f=!0),f&&i!=="RadioButton"){ue("radio-group","`n-radio-group` in button mode only takes `n-radio-button` as children.");continue}const p=u.props;if(i!=="RadioButton"){a.push(u);continue}if(t===0)a.push(u);else{const m=a[a.length-1].props,w=o===m.value,v=m.disabled,k=o===p.value,x=p.disabled,C=(w?2:0)+(v?0:1),z=(k?2:0)+(x?0:1),S={[`${r}-radio-group__splitor--disabled`]:v,[`${r}-radio-group__splitor--checked`]:w},n={[`${r}-radio-group__splitor--disabled`]:x,[`${r}-radio-group__splitor--checked`]:k},l=C<z?n:S;a.push(y("div",{class:[`${r}-radio-group__splitor`,l]}),u)}}return{children:a,isButtonGroup:f}}const pe=Object.assign(Object.assign({},$.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Re=N({name:"RadioGroup",props:pe,setup(e){const o=I(null),{mergedSizeRef:r,mergedDisabledRef:d,nTriggerFormChange:a,nTriggerFormInput:f,nTriggerFormBlur:t,nTriggerFormFocus:u}=O(e),{mergedClsPrefixRef:i,inlineThemeDisabled:p,mergedRtlRef:m}=j(e),w=$("Radio","-radio-group",ve,L,e,i),v=I(e.defaultValue),k=U(e,"value"),x=G(k,v);function C(c){const{onUpdateValue:h,"onUpdate:value":B}=e;h&&V(h,c),B&&V(B,c),v.value=c,a(),f()}function z(c){const{value:h}=o;!h||h.contains(c.relatedTarget)||u()}function S(c){const{value:h}=o;!h||h.contains(c.relatedTarget)||t()}se(Y,{mergedClsPrefixRef:i,nameRef:U(e,"name"),valueRef:x,disabledRef:d,mergedSizeRef:r,doUpdateValue:C});const n=M("Radio",m,i),l=F(()=>{const{value:c}=r,{common:{cubicBezierEaseInOut:h},self:{buttonBorderColor:B,buttonBorderColorActive:T,buttonBorderRadius:E,buttonBoxShadow:P,buttonBoxShadowFocus:J,buttonBoxShadowHover:Q,buttonColorActive:W,buttonTextColor:q,buttonTextColorActive:X,buttonTextColorHover:Z,opacityDisabled:ee,[D("buttonHeight",c)]:oe,[D("fontSize",c)]:te}}=w.value;return{"--n-font-size":te,"--n-bezier":h,"--n-button-border-color":B,"--n-button-border-color-active":T,"--n-button-border-radius":E,"--n-button-box-shadow":P,"--n-button-box-shadow-focus":J,"--n-button-box-shadow-hover":Q,"--n-button-color-active":W,"--n-button-text-color":q,"--n-button-text-color-hover":Z,"--n-button-text-color-active":X,"--n-height":oe,"--n-opacity-disabled":ee}}),b=p?K("radio-group",F(()=>r.value[0]),l,e):void 0;return{selfElRef:o,rtlEnabled:n,mergedClsPrefix:i,mergedValue:x,handleFocusout:S,handleFocusin:z,cssVars:p?void 0:l,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:r,handleFocusin:d,handleFocusout:a}=this,{children:f,isButtonGroup:t}=ge(le(ce(this)),o,r);return(e=this.onRender)===null||e===void 0||e.call(this),y("div",{onFocusin:d,onFocusout:a,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,t&&`${r}-radio-group--button-group`],style:this.cssVars},f)}});export{Re as _,xe as a};
