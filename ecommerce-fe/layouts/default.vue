<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <Navigation />
        <main class="flex-grow container mx-auto px-4 py-8">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
