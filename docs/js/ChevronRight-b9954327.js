import{bj as m,bk as y,bl as w,H as b,af as f,bm as v,ae as c,q as C,d as g,B as p}from"../assets/index.fad64095.js";function L(h={},a){const n=m({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:u}=h,s=e=>{switch(e.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}i!==void 0&&Object.keys(i).forEach(o=>{if(o!==e.key)return;const t=i[o];if(typeof t=="function")t(e);else{const{stop:l=!1,prevent:d=!1}=t;l&&e.stopPropagation(),d&&e.preventDefault(),t.handler(e)}})},r=e=>{switch(e.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}u!==void 0&&Object.keys(u).forEach(o=>{if(o!==e.key)return;const t=u[o];if(typeof t=="function")t(e);else{const{stop:l=!1,prevent:d=!1}=t;l&&e.stopPropagation(),d&&e.preventDefault(),t.handler(e)}})},k=()=>{(a===void 0||a.value)&&(c("keydown",document,s),c("keyup",document,r)),a!==void 0&&C(a,e=>{e?(c("keydown",document,s),c("keyup",document,r)):(f("keydown",document,s),f("keyup",document,r))})};return y()?(w(k),b(()=>{(a===void 0||a.value)&&(f("keydown",document,s),f("keyup",document,r))})):k(),v(n)}var M=g({name:"ChevronRight",render(){return p("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}});export{M as C,L as u};