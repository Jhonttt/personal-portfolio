<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const hero = usePortfolioStore().hero
</script>

<template>
  <section id="hero" aria-labelledby="hero-heading" class="py-20 md:px-10">
    <div class="px-6 max-w-6xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center content-center md:gap-12">
        <div class="flex flex-col gap-5">
          <h1 id="hero-heading" class="text-fluid-4xl font-black leading-[0.9] tracking-tight">
            {{ hero.headline }} <span class="text-accent">{{ hero.highlight }}</span>
            {{ hero.headlineEnd }}
          </h1>
          <p class="text-text-muted text-pretty text-lg md:text-md">{{ hero.description }}</p>
          <div class="flex gap-4">
            <BaseLink
              :link="hero.cta.primary.href"
              class="bg-accent text-text-primary border-accent hover:bg-transparent hover:text-accent px-5 py-3"
            >
              {{ hero.cta.primary.label }}
            </BaseLink>
            <BaseLink
              :link="hero.cta.secondary.href"
              class="bg-transparent text-text-primary border-dark-border hover:border-text-primary px-5 py-3"
            >
              {{ hero.cta.secondary.label }}
            </BaseLink>
          </div>
        </div>
        <div class="relative">
          <img
            :src="hero.image.src"
            :alt="hero.image.alt"
            class="md:w-110 w-full md:h-110 h-full mt-10 rounded-2xl object-cover"
          />
          <div
            class="absolute -bottom-6 -left-6 text-text-primary px-4 py-2 rounded-md shadow-lg bg-dark-primary border border-dark-border flex flex-col items-start gap-1"
            aria-hidden="true"
          >
            <span class="text-text-muted text-fluid-xs uppercase font-bold">Trusted by</span>
            <p class="font-bold text-fluid-xs text-text-primary">25+ Global Clients</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
