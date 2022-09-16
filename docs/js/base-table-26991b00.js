import{_ as k,d as y,bo as b,a as r,b as v,e as _,f as o,g as B,j as d,B as l,ak as w,ao as x}from"../assets/index.e8fe7c02.js";import{_ as N}from"./CodeCard-0b370063.js";import{a as A}from"./index-9227e1fe.js";import"./use-fullscreen-2f85f594.js";import"./Checkbox-8c6dc9c9.js";import"./ReloadOutlined-5965408c.js";import"./Dropdown-c60913a2.js";import"./use-keyboard-66511d88.js";import"./create-ref-setter-113bfc30.js";import"./PlusOutlined-1c5b1b1e.js";import"./RadioGroup-1c8ef552.js";import"./Pagination-c4b326e6.js";import"./Forward-b619f328.js";const T={class:"base-table"},P={name:"BaseTable"},z=y({...P,setup(S){const t=b("message"),n=r(1),i=r(10),m=r(1e3),g=[{title:"Name",key:"name",fixed:"left",width:200},{title:"Age",key:"age",width:"10%"},{title:"Address",key:"address",minWidth:300},{title:"Address1",key:"address1",minWidth:300},{title:"Address2",key:"address2",minWidth:300},{title:"Address3",key:"address3",minWidth:300},{title:"Tags",key:"tags",minWidth:200,fixed:"right",render(e){return e.tags.map(s=>l(w,{style:{marginRight:"6px"},type:"primary",bordered:!1},{default:()=>s}))}},{title:"Action",key:"actions",fixed:"right",width:200,render(){return l(x,{size:"small"},{default:()=>"Send Email"})}}],c=r(Array.from({length:i.value}).map((e,a)=>({key:a,name:"Joe Black -- "+a,age:Math.floor(Math.random()*20),address:"Sidney No. 1 Lake Park",address1:"Sidney No. 1 Lake Park",address2:"Sidney No. 1 Lake Park",address3:"Sidney No. 1 Lake Park",tags:["cool","teacher"]})));function p(){t.info("page change")}function f(){t.info("refresh")}function u(e){switch(e){case"insert":t.info(e);break;case"update":t.success(e);break;case"delete":t.error(e);break;case"export":t.warning(e);break}}const h=`
<template>
    <div class="base-table">
        <n-card>
            <basic-table
                v-model:page="page"
                v-model:size="size"
                :total="total"
                :single-line="false"
                :columns="columns"
                :data="data"
                :max-height="200"
                :scroll-x="1800"
                @page-change="onPageChange"
                @behavior="onBehavior"
                @refresh="onRefresh"
            />
        </n-card>
    </div>
</template>

<script setup lang="ts">
import BasicTable, { type Behavior } from "@/components/BasicTable";
import { h, ref } from "vue";
import { NTag, NButton, type DataTableColumns } from "naive-ui";
import { useFeedBack } from "@/hooks";

type RowData = {
    key: number;
    name: string;
    age: number;
    address: string;
    address1: string;
    address2: string;
    address3: string;
    tags: string[];
};

const message = useFeedBack("message");

const page = ref(0);
const size = ref(10);
const total = ref(1000);

const columns: DataTableColumns<RowData> = [
    { title: "Name", key: "name", fixed: "left", width: 200 },
    { title: "Age", key: "age", width: "10%" },
    { title: "Address", key: "address", minWidth: 300 },
    { title: "Address1", key: "address1", minWidth: 300 },
    { title: "Address2", key: "address2", minWidth: 300 },
    { title: "Address3", key: "address3", minWidth: 300 },
    {
        title: "Tags",
        key: "tags",
        minWidth: 200,
        fixed: "right",
        render(row) {
            const tags = row.tags.map(tagKey => {
                return h(
                    NTag,
                    { style: { marginRight: "6px"  }, type: "primary", bordered: false },
                    { default: () => tagKey },
                );
            });
            return tags;
        },
    },
    {
        title: "Action",
        key: "actions",
        fixed: "right",
        width: 200,
        render() {
            return h(NButton, { size: "small" }, { default: () => "Send Email" } );
        },
    },
];

const data = ref<RowData[]>(Array.from({ length: size.value }).map((_, i) => {
    return {
        key: i,
        name: "Joe Black -- " + i,
        age: Math.floor(Math.random() * 20),
        address: "Sidney No. 1 Lake Park",
        address1: "Sidney No. 1 Lake Park",
        address2: "Sidney No. 1 Lake Park",
        address3: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    };
}));

function onPageChange() {
    message.info("page change");
}

function onRefresh(){
    message.info("refresh");
}

function onBehavior(type: Behavior) {
    switch (type) {
        case "insert":
            message.info(type);
            break;
        case "update":
            message.success(type);
            break;
        case "delete":
            message.error(type);
            break;
        case "export":
            message.warning(type);
            break;
    }
}
<\/script>
`;return(e,a)=>(v(),_("div",T,[o(d(N),{title:"base-table",code:h},{default:B(()=>[o(d(A),{page:n.value,"onUpdate:page":a[0]||(a[0]=s=>n.value=s),size:i.value,"onUpdate:size":a[1]||(a[1]=s=>i.value=s),total:m.value,"single-line":!1,columns:g,data:c.value,"max-height":200,"scroll-x":1800,onPageChange:p,onBehavior:u,onRefresh:f},null,8,["page","size","total","data"])]),_:1})]))}});var q=k(z,[["__file","/home/runner/work/naive-admin/naive-admin/src/views/components/base-table.vue"]]);export{q as default};
