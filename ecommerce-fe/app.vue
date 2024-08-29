<template>
    <div id="app">
        <LoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    overflow: hidden; /* Ẩn cuộn */
}

body::-webkit-scrollbar {
    display: none; /* Ẩn scrollbar trên Chrome, Safari và các trình duyệt dựa trên WebKit */
}

body {
    overflow-y: scroll; /* Cho phép cuộn theo chiều dọc */
}
</style>
