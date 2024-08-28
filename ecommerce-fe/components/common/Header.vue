<template>
    <header class="fixed top-0 left-0 right-0 z-50">
        <nav class="bg-white shadow-lg backdrop-blur-md bg-opacity-80">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between h-20">
                    <div class="flex-shrink-0">
                        <NuxtLink to="/">
                            <NuxtImg
                                src="/logo.png"
                                alt="logo"
                                width="64"
                                height="64"
                                class="h-16 w-auto transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </NuxtLink>
                    </div>
                    <ul class="hidden md:flex space-x-1">
                        <li v-for="item in navItems" :key="item.id">
                            <NuxtLink
                                :to="item.path"
                                class="px-4 py-2 rounded-full text-gray-800 font-medium transition-all duration-300 ease-in-out hover:bg-gray-400 hover:bg-opacity-30 hover:shadow-md relative group"
                                :class="
                                    route.path === item.path
                                        ? 'bg-gray-400 bg-opacity-60 font-bold'
                                        : ''
                                "
                            >
                                {{ item.name }}
                                <span
                                    class="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                                ></span>
                            </NuxtLink>
                        </li>
                    </ul>
                    <div class="md:hidden">
                        <button
                            class="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="Toggle menu"
                        >
                            <svg
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <Button
                        label="Login"
                        :icon="UserCircleIcon"
                        @click="handleLogin"
                        :loading="isLoading"
                    />
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { UserCircleIcon } from "@heroicons/vue/24/outline";
const route = useRoute();

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Categories", path: "/categories" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Contact", path: "/contact" },
];

const isLoading = ref(false);

const handleLogin = () => {
    isLoading.value = true;
    setTimeout(() => {
        console.log("Login Clicked");
        isLoading.value = false;
    }, 2000);
};
</script>

<style scoped>
@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}

.floating {
    animation: float 3s ease-in-out infinite;
}
</style>
