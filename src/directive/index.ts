import fullscreen from "./fullscreen";
import copy from "./copy";
import permission from "./permission";
import drag from "./drag";
import type { App } from "vue";

export {
    fullscreen,
    copy,
    permission,
};

export default {
    install: (app: App) => {
        /**
         * 全屏
         * @param value - string
         * @param args - number get parent node
         * @param modifiers - parent/body  body \> parent
         */
        app.directive("fullscreen", fullscreen);
        /**
         * 复制
         * @param value - string
         * @param args - success/error callback
         */
        app.directive("copy", copy);
        /**
         * 权限控制
         */
        app.directive("auth", permission);
        /**
         * 权限控制
         */
        app.directive("drag", drag);
    },
};
