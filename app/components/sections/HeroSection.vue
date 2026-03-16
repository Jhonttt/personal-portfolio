<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const hero = usePortfolioStore().hero
</script>

<template>
  <section id="hero" aria-labelledby="hero-heading" class="py-20">
    <div class="px-6 max-w-5xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12 content-center">
        <div class="flex flex-col gap-5" role="region" aria-labelledby="hero-heading">
          <h1 id="hero-heading" class="text-4xl font-black">
            {{ hero.headline }} <span class="text-accent">{{ hero.highlight }}</span>
            {{ hero.headlineEnd }}
          </h1>
          <p class="text-text-muted text-pretty">{{ hero.description }}</p>
          <div class="flex gap-4">
            <BaseButton
              :link="hero.cta.primary.href"
              class="bg-accent text-text-primary border-accent hover:bg-transparent hover:text-accent px-5 py-3"
            >
              {{ hero.cta.primary.label }}
            </BaseButton>
            <BaseButton
              :link="hero.cta.secondary.href"
              class="bg-transparent text-text-primary border-dark-border hover:border-text-primary px-5 py-3"
            >
              {{ hero.cta.secondary.label }}
            </BaseButton>
          </div>
        </div>
        <div class="relative">
          <img
            :src="hero.image.src"
            :alt="hero.image.alt"
            class="w-full h-110 mt-10 rounded-md object-cover"
          />
          <div
            class="absolute -bottom-6 -left-6 text-text-primary px-4 py-2 rounded-md shadow-lg bg-dark-primary border border-dark-border flex flex-col items-start gap-1"
            aria-hidden="true"
          >
            <span class="text-text-muted text-xs uppercase font-bold">Trusted by</span>
            <p class="font-bold text-xs text-text-primary">25+ Global Clients</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
