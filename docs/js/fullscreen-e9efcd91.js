import{_ as B,d as D,cg as x,b as c,e as O,f as u,g as e,j as t,ab as i,aj as s,am as n,l as y,i as h,m as N,ao as S,an as w,ak as z}from"../assets/index.fad64095.js";import{u as V,F as a}from"./use-fullscreen-a6e50651.js";import{_}from"./CodeCard-8e53b603.js";import{_ as j}from"./GridItem-0a62ea68.js";import{_ as T}from"./Grid-99448246.js";const $={class:"fullscreen"},q=h("h1",null,"v-fullscreen",-1),G={name:"Fullscreen"},H=D({...G,setup(J){const{isEnabled:d,isFullScreen:m,full:E,exit:C,toggle:g}=V(),b=`
<template>
    <div>
        <n-button v-fullscreen type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            \u6309\u94AE\u5168\u5C4F
        </n-button>
    <div>
</template>
`,v=`
<template>
    <n-space>
        // body \u7F51\u9875\u5168\u5C4F
        <n-button v-fullscreen.body type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            \u5168\u5C4F
        </n-button>

        // parent\uFF1A\u5C06\u70B9\u51FB\u4E8B\u4EF6\u6302\u8F7D\u5230\u7236\u7EA7\u5143\u7D20 arg: \u63A5\u6536\u4E00\u4E2ANumber\u503C \u5411\u4E0A\u67E5\u627E\u7684\u7236\u5143\u7D20\u5C42\u7EA7 \u9ED8\u8BA4\u4E3A1
        <n-button v-fullscreen:1.parent type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            \u6309\u94AE\u5168\u5C4F
        </n-button>

        // \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1
        <n-button v-fullscreen.stop type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            card \u5168\u5C4F
        </n-button>
    </n-space>
</template>
`,A=`
<template>
    <n-card class="full-card" title="\u9009\u62E9\u5668">
        <n-button v-fullscreen="'.full-card'" type="primary">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            card \u5168\u5C4F
        </n-button>
    </n-card>
</template>
`,I=`
<template>
    <n-space>
        <n-tag :type="isEnabled ? 'primary' : 'error'" size="large">{{ isEnabled ? "\u652F\u6301\u5168\u5C4F" : "\u4E0D\u652F\u6301\u5168\u5C4F" }}</n-tag>
        <n-tag :type="isFullScreen ? 'primary' : 'error'" size="large">{{ isFullScreen ? "\u5168\u5C4F" : "\u975E\u5168\u5C4F" }}</n-tag>
        <n-button type="primary" @click="full">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            full
        </n-button>
        <n-button type="primary" @click="exit">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            exit
        </n-button>
        <n-button type="primary" @click="toggle">
            <template #icon>
                <Icon><FullscreenOutlined /></Icon>
            </template>
            toggle
        </n-button>
    </n-space>
</template>

<script lang="ts" setup>
import { FullscreenOutlined } from "@vicons/antd";
import { useFullscreen } from "@/hooks";

// useFullscreen \u63A5\u53D7\u4E00\u4E2A \u8282\u70B9\u5143\u7D20 \u6216\u8005\u4E00\u4E2A\u9009\u62E9\u5668
const { isEnabled, isFullScreen, full, exit, toggle } = useFullscreen();
<\/script>
`;return(K,L)=>{const l=N,o=S,p=j,f=w,F=z,k=T,r=x("fullscreen");return c(),O("div",$,[q,u(k,{cols:1,"y-gap":12},{default:e(()=>[u(p,null,{default:e(()=>[u(t(_),{title:"\u57FA\u7840\u793A\u4F8B",code:b},{default:e(()=>[i((c(),s(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" \u6309\u94AE\u5168\u5C4F ")]),_:1})),[[r]])]),_:1})]),_:1}),u(p,null,{default:e(()=>[u(t(_),{title:"\u4FEE\u9970\u7B26",code:v},{default:e(()=>[u(f,null,{default:e(()=>[i((c(),s(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" \u5168\u5C4F ")]),_:1})),[[r,void 0,void 0,{body:!0}]]),i((c(),s(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" \u6309\u94AE\u5168\u5C4F ")]),_:1})),[[r,void 0,"1",{parent:!0}]]),i((c(),s(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" \u6309\u94AE\u5168\u5C4F ")]),_:1})),[[r,void 0,void 0,{stop:!0}]])]),_:1})]),_:1})]),_:1}),u(p,null,{default:e(()=>[u(t(_),{class:"full-card",title:"\u9009\u62E9\u5668",code:A},{default:e(()=>[i((c(),s(o,{type:"primary"},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" card \u5168\u5C4F ")]),_:1})),[[r,".full-card"]])]),_:1})]),_:1}),u(p,null,{default:e(()=>[u(t(_),{class:"full-card",title:"\u51FD\u6570\u8C03\u7528",code:I},{default:e(()=>[u(f,null,{default:e(()=>[u(F,{type:t(d)?"primary":"error",size:"large"},{default:e(()=>[n(y(t(d)?"\u652F\u6301\u5168\u5C4F":"\u4E0D\u652F\u6301\u5168\u5C4F"),1)]),_:1},8,["type"]),u(F,{type:t(m)?"primary":"error",size:"large"},{default:e(()=>[n(y(t(m)?"\u5168\u5C4F":"\u975E\u5168\u5C4F"),1)]),_:1},8,["type"]),u(o,{type:"primary",onClick:t(E)},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" full ")]),_:1},8,["onClick"]),u(o,{type:"primary",onClick:t(C)},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" exit ")]),_:1},8,["onClick"]),u(o,{type:"primary",onClick:t(g)},{icon:e(()=>[u(l,null,{default:e(()=>[u(t(a))]),_:1})]),default:e(()=>[n(" toggle ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})])}}});var W=B(H,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/directive/fullscreen.vue"]]);export{W as default};