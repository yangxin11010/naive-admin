<template>
    <n-card v-show="show" class="icon-card" v-bind="$attrs" @mouseenter="isShow = true" @mouseleave="isShow = false">
        <div class="icon-wrapper">
            <div class="icon">
                <Icon :icon="icon" :size="26" />
                <n-ellipsis :line-clamp="1">{{ icon }}</n-ellipsis>
            </div>
            <transition name="fade">
                <n-button v-if="isShow" text size="tiny" @click="onClick">copy</n-button>
            </transition>
        </div>
    </n-card>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "IconCard",
    inheritAttrs: false,
    props: {
        icon: String,
        show: { type: Boolean, default: false },
    },
    emits: ["click"],
    setup(props, { emit }) {

        const isShow = ref(false);

        function onClick() {
            emit("click", props.icon);
        }

        return {
            isShow,
            onClick,
        };
    },
});
</script>

<style lang="scss">
.icon-card {
    max-width: calc((100% - 48px) / 5);
    min-width: 160px;
    .icon-wrapper {
        @extend .flex-between-center;
        .icon {
            font-size: 13px;
            gap: 0 10px;
            @extend .flex-center;
        }
    }
    :deep(.n-card__content) {
        padding: 20px;
    }
}
</style>
