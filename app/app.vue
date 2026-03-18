<script setup lang="ts">
  const store = usePortfolioStore()
  store.init()
</script>

<template>
  <div
    v-if="store.loadError"
    role="alert"
    aria-live="assertive"
    class="min-h-screen flex items-center justify-center"
  >
    <p class="text-secondary">{{ store.loadError }}</p>
  </div>
  <div :aria-busy="!store.isLoaded ? 'true' : 'false'" aria-live="polite">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
