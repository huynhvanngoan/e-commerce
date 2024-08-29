<template>
    <header class="fixed top-0 left-0 right-0 z-50">
        <nav class="bg-white shadow-lg backdrop-blur-md bg-opacity-80">
            <div class="container mx-auto px-4 max-w-7xl">
                <div class="flex items-center justify-between h-20">
                    <div class="flex-shrink-0">
                        <NuxtLink to="/">
                            <NuxtImg
                                src="logo.png"
                                alt="logo"
                                width="64"
                                height="64"
                                class="h-16 w-auto transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </NuxtLink>
                    </div>
                    <div class="hidden md:block flex-grow mx-4">
                        <Searchbar class="max-w-md mx-auto" />
                    </div>
                    <ul class="hidden lg:flex space-x-1">
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
                    <div class="lg:hidden">
                        <button
                            @click="toggleMobileMenu"
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
                    <div class="lg:block hidden">
                        <Button
                            label="Login"
                            :icon="UserCircleIcon"
                            @click="handleLogin"
                            :loading="isLoading"
                        />
                    </div>
                </div>
            </div>
        </nav>
        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <ul
                v-if="isMobileMenuOpen"
                class="lg:hidden absolute w-full bg-white shadow-lg py-2 px-4"
            >
                <li class="md:hidden block py-2">
                    <Searchbar />
                </li>
                <li v-for="item in navItems" :key="item.id" class="py-2">
                    <NuxtLink
                        :to="item.path"
                        @click="closeMobileMenu"
                        class="block px-4 py-2 rounded-full text-gray-800 font-medium transition-all duration-300 ease-in-out hover:bg-gray-400 hover:bg-opacity-30 hover:shadow-md relative group"
                        :class="
                            route.path === item.path
                                ? 'bg-gray-400 bg-opacity-60 font-bold'
                                : ''
                        "
                    >
                        {{ item.name }}
                    </NuxtLink>
                </li>
                <li class="py-2">
                    <Button
                        label="Login"
                        :icon="UserCircleIcon"
                        @click="handleLogin"
                        :loading="isLoading"
                        class="w-full"
                    />
                </li>
            </ul>
        </transition>
    </header>
</template>

<script setup>
import Searchbar from "./SearchBar.vue";
import { UserCircleIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const isMobileMenuOpen = ref(false);

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

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
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
