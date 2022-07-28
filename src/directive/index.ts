import fullscreen from "./fullscreen";
import copy from "./copy";
import focus from "./focus";
import type { App } from "vue";

export default {
    install: (app: App) => {
        /**
         * 全屏
         * @param value string
         * @param args number get parent node
         * @param modifiers parent/body  body > parent
         */
        app.directive("fullscreen", fullscreen);
        /**
         * 复制
         * @param value string
         * @param args success/error callback
         */
        app.directive("copy", copy);
        app.directive("focus", focus);
    },
};
