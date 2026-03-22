<script setup lang="ts">
  const config = useRuntimeConfig()

  definePageMeta({
    layout: 'projects',
  })

  useSeoMeta({
    title: 'Juan Atahona | Proyects',
    description: 'Fullstack Developer focused on visual depth and clean execution.',
    ogTitle: 'Juan Atahona | Proyects',
    ogDescription: 'Fullstack Developer focused on visual depth and clean execution.',
    ogImage: `${config.public.siteUrl}/og-image.webp`,
    ogUrl: config.public.siteUrl,
    ogType: 'website',
    twitterCard: 'summary_large_image',
  })

  const store = usePortfolioStore()
  if (!store.isLoaded) {
    store.init()
  }
</script>
<template>
  <NuxtErrorBoundary>
    <template #error="{ clearError }">
      <div
        role="alert"
        class="min-h-screen flex flex-col items-center justify-center gap-3 text-center"
      >
        <p class="text-text-primary">Something went wrong loading the portfolio.</p>
        <button
          class="border-2 rounded-md py-1.5 px-3.5 text-fluid-xs font-bold hover:text-text-primary hover:bg-accent hover:border-accent transition"
          @click="clearError()"
        >
          Try again
        </button>
      </div>
    </template>

    <div></div>
  </NuxtErrorBoundary>
</template>
