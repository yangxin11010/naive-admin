<template>
    <n-pagination
        :page-size="size"
        :item-count="total"
        :page-slot="7"
        show-size-picker
        show-quick-jumper
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        @update:page="onPageChange"
        @update:page-size="onSizeChange"
    >
        <template #prefix="{ itemCount }">
            共 {{ itemCount }} 条
        </template>
    </n-pagination>
</template>

<script lang="ts">
import { NPagination } from "naive-ui";

export default defineComponent({
    name: "Pagination",
    components: { NPagination },
    props: {
        size: { type: Number, default: void 0 },
        total: { type: Number, default: void 0 },
    },
    emits: ["change", "update:page", "update:size"],
    setup(_, { emit }) {
        function onPageChange(value: number) {
            emit("change");
            emit("update:page", value);
        }
        function onSizeChange(value: number) {
            emit("change");
            emit("update:size", value);
        }
        return {
            onPageChange,
            onSizeChange,
        };
    },
});
</script>
