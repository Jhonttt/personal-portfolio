<script setup lang="ts">
  const config = useRuntimeConfig()

  useSeoMeta({
    title: 'Juan Atahona | FullStack Developer',
    description: 'Fullstack Developer focused on visual depth and clean execution.',
    ogTitle: 'Juan Atahona | FullStack Developer',
    ogDescription: 'Fullstack Developer focused on visual depth and clean execution.',
    ogImage: `${config.public.siteUrl}/og-image.jpg`,
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
  <main>
    <!-- <NuxtErrorBoundary></NuxtErrorBoundary> -->
    <SectionsHeroSection />
    <SectionsAboutSection />
    <SectionsSkillsSection />
    <SectionsProjectsSection />
    <SectionsContactSection />
  </main>
</template>
