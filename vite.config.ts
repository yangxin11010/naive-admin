import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

const resolve = (path: string) => {
    return fileURLToPath(new URL(`./${path}`, import.meta.url));
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            // dts: true,
            resolvers: [NaiveUiResolver()],
        }),
        vueJsx(),
    ],
    resolve: {
        alias: {
            "@": resolve("src"),
            "@comps": resolve("src/components"),
            "@hooks": resolve("src/hooks"),
            "@types": resolve("src/model"),
        },
    },
    server: {
        host: "0.0.0.0",
        port: 3000,
        // open: true,
        https: false,
        proxy: {},
    },
    build: {
        terserOptions: {
            // prod clear console debugger
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
});
