<script setup lang="ts">
  const store = usePortfolioStore()
  if (!store.isLoaded) {
    store.init()
  }
</script>

<template>
  <main>
    <!-- <NuxtErrorBoundary></NuxtErrorBoundary> -->
    <SectionsHeroSection />
  </main>
</template>
