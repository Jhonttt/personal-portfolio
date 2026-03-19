<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  const projects = usePortfolioStore().projects
</script>

<template>
  <section
    id="projects"
    aria-labelledby="projects-heading"
    class="py-20 px-6 max-w-6xl mx-auto w-full"
  >
    <div class="flex flex-col gap-2">
      <h2 id="projects-heading" class="text-fluid-2xl font-black">
        {{ projects.title }}
      </h2>
      <div class="flex justify-between">
        <p class="text-text-muted text-pretty font-bold leading-relaxed text-fluid-sm">
          {{ projects.description }}
        </p>
        <a
          :href="projects.cta.href"
          class="flex items-center gap-1 transition group"
          aria-label="See all the projects"
        >
          <span class="text-fluid-sm font-bold">{{ projects.cta.label }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
              class="group-hover:translate-x-1 transition-transform"
            />
          </svg>
        </a>
      </div>
    </div>

    <ul
      v-if="projects.items?.length"
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 list-none p-0"
      aria-label="List of projects"
    >
      <li v-for="project in projects.items" :key="project.id">
        <BaseProject v-bind="project" />
      </li>
    </ul>
    <p v-else class="text-center text-fluid-2xl mt-3" role="status">There aren't projects</p>
  </section>
</template>
