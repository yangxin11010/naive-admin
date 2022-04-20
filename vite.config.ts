import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import DefineOptions from "unplugin-vue-define-options/vite";

const resolve = (path: string) => {
    return fileURLToPath(new URL(`./${path}`, import.meta.url));
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        DefineOptions(),
        Components({
            dts: true,
            resolvers: [NaiveUiResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve("src"),
            "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
        },
    },
    server: {
        host: "0.0.0.0",
        port: 9527,
        // open: true,
        https: false,
        proxy: {},
    },
    build: {
        // minify: "terser", // use terser will prod clear console debugger
        // terserOptions: {
        //     // prod clear console debugger
        //     compress: {
        //         drop_console: true,
        //         drop_debugger: true,
        //     },
        // },
    },
    define: {
        __VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
        __VUE_I18N_LEGACY_API__: JSON.stringify(false),
        __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
    },
});
