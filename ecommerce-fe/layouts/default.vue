<template>
    <div class="flex flex-col min-h-screen">
      <Header />
      <Banner />
      <Navigation />
      <main class="flex-grow container mx-auto px-4 py-8 overflow-y-auto custom-scroll">
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss">

  </style>
  