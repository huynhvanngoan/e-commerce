<template>
    <div class="relative w-full h-[500px] overflow-hidden mt-[81px]">
        <div class="relative w-full h-full">
            <div
                v-for="(item, index) in bannerItems"
                :key="item.id"
                class="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
                :class="{ 'opacity-0': index !== currentIndex }"
            >
                <NuxtImg :src="item.src" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                <div
                    class="absolute inset-0 flex flex-col justify-center px-16 md:px-20 lg:px-24"
                >
                    <div class="text-white max-w-2xl">
                        <h3
                            class="text-sm md:text-base uppercase tracking-wider mb-2"
                        >
                            {{ item.type }}
                        </h3>
                        <h2 class="text-3xl md:text-5xl font-bold mb-4">
                            {{ item.title }}
                        </h2>
                        <p class="text-sm md:text-base mb-6">
                            {{ item.description }}
                        </p>
                        <Button
                            label="Explore More"
                            variant="outline"
                            class="bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
            <button
                v-for="(item, index) in bannerItems"
                :key="item.id"
                @click="currentIndex = index"
                class="w-3 h-3 rounded-full transition-all duration-300 ease-in-out"
                :class="
                    index === currentIndex
                        ? 'bg-white scale-125'
                        : 'bg-gray-400 hover:bg-gray-300'
                "
            ></button>
        </div>

        <button
            @click="prev"
            class="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
        <button
            @click="next"
            class="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    </div>
</template>

<script setup>
const bannerItems = [
    {
        id: 1,
        src: "banner1.png",
        type: "Technology Device",
        title: "Back To School",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium aliquid nesciunt ipsum pariatur dolor reiciendis. Eius magni veniam dolore.",
    },
    {
        id: 2,
        src: "banner2.png",
        type: "Technology Device",
        title: "Apple Sales",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium aliquid nesciunt ipsum pariatur dolor reiciendis. Eius magni veniam dolore.",
    },
    {
        id: 3,
        src: "banner3.png",
        type: "Cosmetic",
        title: "Deal Hời",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium aliquid nesciunt ipsum pariatur dolor reiciendis. Eius magni veniam dolore.",
    },
];

const currentIndex = ref(0);

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % bannerItems.length;
};

const prev = () => {
    currentIndex.value =
        (currentIndex.value - 1 + bannerItems.length) % bannerItems.length;
};

// Auto-rotate banner every 5 seconds
onMounted(() => {
    setInterval(next, 5000);
});
</script>
