<script setup lang="ts">
  const store = usePortfolioStore()
  store.init()
</script>

<template>
  <div v-if="store.loadError" class="min-h-screen flex items-center justify-center">
    <p class="text-secondary">{{ store.loadError }}</p>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
