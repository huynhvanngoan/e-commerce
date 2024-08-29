<!-- Searchbar.vue -->
<template>
    <div class="relative">
        <input
            type="text"
            v-model="searchQuery"
            @input="handleSearch"
            placeholder="Search..."
            class="w-full px-4 py-2 text-gray-700 bg-white border rounded-full focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />
        <button @click="handleSearch" class="absolute right-0 top-0 mt-2 mr-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </button>
    </div>
</template>

<script setup>
const searchQuery = ref("");

const handleSearch = () => {
    // Implement search logic here
    console.log("Searching for:", searchQuery.value);
};
</script>
