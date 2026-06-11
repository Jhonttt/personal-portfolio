<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const projects = usePortfolioStore().projects
  const featuredProjects = projects.items.slice(0, 2)
</script>

<template>
  <section
    id="projects"
    aria-labelledby="projects-heading"
    class="py-20 px-6 max-w-6xl mx-auto w-full md:px-10 pt-0 lg:pt-20"
  >
    <div class="reveal flex flex-col gap-2">
      <BaseHeading
        heading-id="projects-heading"
        :title="projects.title"
        class="md:text-fluid-2xl text-fluid-3xl text-right md:text-left"
      />
      <div class="flex justify-between flex-col md:flex-row items-end md:gap-0 gap-3">
        <p
          class="text-text-muted text-pretty font-bold leading-relaxed md:text-fluid-md text-fluid-lg"
        >
          {{ projects.description }}
        </p>
        <NuxtLink
          :href="projects.cta.href"
          class="flex items-center gap-2 text-text-muted hover:text-accent transition-colors w-fit group"
          aria-label="See all the projects"
        >
          <span class="md:text-fluid-sm text-fluid-md font-bold">{{ projects.cta.label }}</span>
          <BaseIcon name="arrow_forward" class="group-hover:translate-x-0.5 transition-transform" />
        </NuxtLink>
      </div>
    </div>

    <ul
      v-if="featuredProjects.length"
      class="grid grid-cols-1 gap-6 mt-5 md:mt-10 list-none p-0"
      :class="featuredProjects.length >= 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'"
      aria-label="List of projects"
    >
      <li v-for="project in featuredProjects" :key="project.id" class="reveal">
        <BaseProject v-bind="project" />
      </li>
    </ul>
    <p v-else class="text-center text-fluid-2xl mt-3" role="status">No projects to show yet.</p>
  </section>
</template>
