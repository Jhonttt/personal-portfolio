<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  const about = usePortfolioStore().about
</script>

<template>
  <section
    id="about"
    aria-labelledby="about-heading"
    class="py-20 bg-dark-secondary border-y border-dark-border md:px-10"
  >
    <div class="px-6 max-w-6xl mx-auto w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 md:gap-8 lg:gap-10">
        <div class="flex flex-col gap-4">
          <h2 id="about-heading" class="md:text-fluid-2xl font-black text-fluid-3xl">
            {{ about.title }}
          </h2>
          <p class="text-text-muted text-pretty font-bold text-fluid-lg md:text-fluid-md">
            {{ about.description }}
          </p>
          <div class="flex items-center gap-1 text-accent font-bold">
            <span class="material-symbols-outlined">verified</span>
            <span class="text-fluid-md md:text-fluid-sm">{{ about.badge }}</span>
          </div>
        </div>

        <div role="region" aria-labelledby="metrics-heading">
          <h3 id="metrics-heading" class="sr-only">Professional metrics</h3>
          <ul class="grid grid-cols-2 gap-4 list-none">
            <li v-for="card in about.metrics" :key="card.label">
              <BaseCard :title="card.label">
                {{ card.value }}
              </BaseCard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
