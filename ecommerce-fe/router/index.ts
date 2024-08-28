import { defineNuxtModule } from "@nuxt/kit";
import home from "./routes/home";
import products from "./routes/products";
import cart from "./routes/cart";
import checkout from "./routes/checkout";
import account from "./routes/account";
import vendor from "./routes/vendors";
import admin from "./routes/admin";

export default defineNuxtModule({
    setup(options, nuxt) {
        const router = [
            ...home,
            ...products,
            ...cart,
            ...checkout,
            ...account,
            ...vendor,
            ...admin,
        ];

        nuxt.hook("pages:extend", (pages) => {
            pages.push(...router);
        });
    },
});
