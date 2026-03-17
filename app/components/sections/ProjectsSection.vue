<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  const projects = usePortfolioStore().projects
</script>

<template>
  <section id="hero" aria-labelledby="hero-heading" class="py-20 px-6 max-w-5xl mx-auto w-full">
    <div class="flex flex-col gap-2" role="region" aria-labelledby="hero-heading">
      <h2 id="about-heading" class="text-2xl font-black">
        {{ projects.title }}
      </h2>
      <div class="flex justify-between">
        <p class="text-text-muted text-pretty font-bold leading-relaxed text-sm">
          {{ projects.description }}
        </p>
        <a :href="projects.cta.href" class="flex items-center gap-1 transition group">
          <span class="text-sm font-bold">{{ projects.cta.label }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
              class="group-hover:translate-x-1 transition-transform"
            />
          </svg>
        </a>
      </div>
    </div>
    <div
      v-if="projects.items && projects.items.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
    >
      <BaseProject
        v-for="project in projects.items"
        :id="project.id"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :tags="project.tags"
        :url="project.url"
      />
    </div>
    <div v-else class="text-center mt-3">
      <p class="text-2xl">There aren't projects</p>
    </div>
  </section>
</template>
