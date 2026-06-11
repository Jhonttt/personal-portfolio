<script setup lang="ts">
  const config = useRuntimeConfig()

  useSeoMeta({
    title: 'Juan Atahona | Fullstack Developer',
    description: 'Fullstack Developer focused on visual depth and clean execution.',
    ogTitle: 'Juan Atahona | Fullstack Developer',
    ogDescription: 'Fullstack Developer focused on visual depth and clean execution.',
    ogImage: `${config.public.siteUrl}/og-image.webp`,
    ogImageAlt: 'Preview of the portfolio of Juan Atahona, Fullstack Developer',
    ogUrl: config.public.siteUrl,
    ogType: 'website',
    ogSiteName: 'Juan Atahona | Fullstack Developer',
    twitterCard: 'summary_large_image',
    twitterImage: `${config.public.siteUrl}/og-image.webp`,
  })

  const store = usePortfolioStore()

  useHead({
    link: [{ rel: 'canonical', href: config.public.siteUrl }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Person',
              name: 'Juan Atahona',
              jobTitle: 'Fullstack Developer',
              url: config.public.siteUrl,
              email: `mailto:${store.contact.email}`,
              sameAs: store.footer.socials.map((social) => social.href),
            },
            {
              '@type': 'WebSite',
              name: 'Juan Atahona | Fullstack Developer',
              url: config.public.siteUrl,
            },
          ],
        }),
      },
    ],
  })
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

    <SectionsHeroSection />
    <LazySectionsAboutSection />
    <LazySectionsSkillsSection />
    <LazySectionsProjectsSection />
    <LazySectionsContactSection />
  </NuxtErrorBoundary>
</template>
