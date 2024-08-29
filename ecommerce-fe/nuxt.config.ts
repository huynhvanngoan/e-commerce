import router from "./router";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    ssr: true, // Bật Server-Side Rendering

    // Cấu hình app
    app: {
        head: {
            title: "E-commerce Platform",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content: "Multi-vendor E-commerce Platform",
                },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },

    // CSS toàn cục
    css: ["~/assets/styles/main.css"],
    image: { dir: "public/images" },

    // Auto-import components
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],

    // Modules
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "@nuxtjs/color-mode",
        router,
        "@nuxt/image",
    ],

    // Cấu hình runtime config
    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE || "http://localhost:3000/api",
        },
        private: {
            apiSecret: process.env.API_SECRET,
        },
    },

    // Cấu hình nitro (server)
    nitro: {
        devProxy: {
            "/api": {
                target: process.env.API_BASE || "http://localhost:3000",
                changeOrigin: true,
            },
        },
    },

    // Cấu hình TypeScript
    typescript: {
        strict: true,
    },

    // Thêm plugin tùy chỉnh
    // plugins: ["~/plugins/api.ts"],
});
