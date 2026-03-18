<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  import TechGroup from '../base/TechGroup.vue'
  const skills = usePortfolioStore().skills
</script>

<template>
  <section id="stack" aria-labelledby="skills-heading" class="py-20 px-6 max-w-6xl mx-auto w-full">
    <div class="flex flex-col gap-2">
      <h2 id="skills-heading" class="text-2xl font-black text-center">
        {{ skills.title }}
      </h2>
      <p class="text-text-muted text-pretty font-bold leading-relaxed text-sm text-center">
        {{ skills.description }}
      </p>
    </div>
    <ul
      class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 list-none p-0"
      aria-label="List of techs"
    >
      <li v-for="category in skills.categories" :key="category.id">
        <TechGroup v-bind="category" />
      </li>
    </ul>
  </section>
</template>
