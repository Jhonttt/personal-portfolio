<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  const projects = usePortfolioStore().projects

  const size = projects.items.length >= 2 ? 2 : projects.items.length
</script>

<template>
  <section
    id="projects"
    aria-labelledby="projects-heading"
    class="py-20 px-6 max-w-6xl mx-auto w-full md:px-10 pt-0 lg:pt-20"
  >
    <div class="flex flex-col gap-2">
      <h2
        id="projects-heading"
        class="md:text-fluid-2xl text-fluid-3xl font-black text-right md:text-left"
      >
        {{ projects.title }}
      </h2>
      <div class="flex justify-between flex-col md:flex-row items-end md:gap-0 gap-3">
        <p
          class="text-text-muted text-pretty font-bold leading-relaxed md:text-fluid-md text-fluid-lg"
        >
          {{ projects.description }}
        </p>
        <NuxtLink
          :href="projects.cta.href"
          class="flex items-center gap-1 transition group"
          aria-label="See all the projects"
        >
          <span class="md:text-fluid-sm text-fluid-md font-bold">{{ projects.cta.label }}</span>
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform"
            >arrow_forward</span
          >
        </NuxtLink>
      </div>
    </div>

    <ul
      v-if="projects.items?.length"
      class="grid grid-cols-1 gap-6 mt-5 md:mt-10 list-none p-0"
      :class="size >= 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'"
      aria-label="List of projects"
    >
      <li v-for="project in projects.items.slice(0, size)" :key="project.id">
        <BaseProject v-bind="project" />
      </li>
    </ul>
    <p v-else class="text-center text-fluid-2xl mt-3" role="status">There aren't projects</p>
  </section>
</template>
