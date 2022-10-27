import { zhCN, enUS, dateZhCN, dateEnUS } from "naive-ui";
import { createI18n } from "vue-i18n";
// import { location } from "@/util/storage";
import zhCNJson from "./langs/zh-CN.json";
import enUSJson from "./langs/enUS.json";
import type { SelectOption } from "naive-ui";

// const set = location.getItem("vue-pinia-set");

const i18n = createI18n({
    // locale: set?.lang || "zh-CN",
    legacy: false,
    fallbackLocale: "enUS",
    messages: {
        "zh-CN": zhCNJson,
        enUS: enUSJson,
    },
});

export type Lang = "zh-CN" | "enUS";
export interface LangMap {
    label: string;
    value: Lang;
}

const lang: SelectOption[] = [
    { label: "简体中文", value: "zh-CN" },
    { label: "English", value: "enUS" },
];

// n-config-provider local 配置
const localeMap = { "zh-CN": zhCN, enUS: enUS };
// n-config-provider dateLocal 配置
const dateLocaleMap = { "zh-CN": dateZhCN, enUS: dateEnUS };

export { lang, localeMap, dateLocaleMap };

export default i18n;