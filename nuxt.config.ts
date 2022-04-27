import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // Nuxt App configuration.
    app: {
        // The base path of your Nuxt application.
        baseURL: "/",
        // The folder name for the built site assets, relative to baseURL (or cdnURL if set). 
        // This is set at build time and should not be customized at runtime.
        buildAssetsDir: "/_nuxt/",
        // An absolute URL to serve the public folder from (production-only).
        cdnURL: "",
        // Set default configuration for <head> on every page.
        head: {
            "title": "PARTA Cursinho online preparatório para o ENEM",
            "description": "PARTA Cursinho online preparatório para o ENEM",
            "meta": [
                { name: "charset", content: "utf-8" },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            "link": [],
            "style": [],
            "script": [
                {
                    type: 'text/javascript',
                    content: '@assets/js/yandex.js',
                    children: '@assets/js/yandex.js'
                }
            ]
        }
    },
    // Configure Nuxt component auto-registration.
    components: {
        "dirs": ["~/components"]
    },
    // You can define the CSS files/modules/libraries you want to set globally (included in every page).
    css: ["@/assets/css/index.css"],
    modules: [
        "@vueuse/nuxt",
        "@unocss/nuxt",
        "@pinia/nuxt",
    ],
    // Define the source directory of your Nuxt application.
    srcDir: "src/",
    // 
    unocss: {
        uno: true,
        attributify: true,
        preflight: true,
        icons: {
            scale: 1.2,
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle'
            }
        },
        shortcuts: [],
        rules: [],
    },
    // 
    vueuse: {
        ssrHandlers: true,
    },
    //
    typescript: {
        strict: true
    }
})
