<script setup lang="ts">
  const store = usePortfolioStore()
  if (!store.isLoaded) {
    store.init()
  }
</script>

<template>
  <main>
    <!-- <NuxtErrorBoundary></NuxtErrorBoundary> -->
    <h2>Default page</h2>
  </main>
</template>
