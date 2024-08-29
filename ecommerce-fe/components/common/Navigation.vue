<template>
    <nav class="bg-gradient-to-r from-gray-100 to-gray-200 shadow-md">
        <div class="container mx-auto px-4 py-3">
            <ul
                class="flex flex-wrap justify-center md:justify-start space-x-1 md:space-x-4"
            >
                <li
                    v-for="category in categories"
                    :key="category.id"
                    class="my-1"
                >
                    <NuxtLink
                        :to="`/categories/${category.id}`"
                        class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-full transition duration-300 ease-in-out hover:bg-white hover:shadow-lg text-sm md:text-base font-medium"
                    >
                        {{ category.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Books" },
    { id: 4, name: "Home & Garden" },
    { id: 5, name: "Sports" },
    
    
];
</script>
