<script setup lang="ts">
  const { locale } = useI18n()
  useHead(() => ({ htmlAttrs: { lang: locale.value === 'es' ? 'es-ES' : 'en-US' } }))

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
    <p class="text-text-primary">{{ store.loadError }}</p>
  </div>
  <div :aria-busy="!store.isLoaded ? 'true' : 'false'" aria-live="polite">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
