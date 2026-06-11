<script setup lang="ts">
  const config = useRuntimeConfig()

  definePageMeta({
    layout: 'projects',
  })

  useSeoMeta({
    title: 'Projects | Juan Atahona',
    description: 'A collection of fullstack projects built with modern web technologies.',
    ogTitle: 'Projects | Juan Atahona',
    ogDescription: 'A collection of fullstack projects built with modern web technologies.',
    ogImage: `${config.public.siteUrl}/og-image.webp`,
    ogImageAlt: 'Preview of the portfolio of Juan Atahona, Fullstack Developer',
    ogUrl: `${config.public.siteUrl}/projects`,
    ogType: 'website',
    ogSiteName: 'Juan Atahona | Fullstack Developer',
    twitterCard: 'summary_large_image',
    twitterImage: `${config.public.siteUrl}/og-image.webp`,
  })

  useHead({
    link: [{ rel: 'canonical', href: `${config.public.siteUrl}/projects` }],
  })

  const store = usePortfolioStore()

  const searchQuery = shallowRef('')

  const allProjects = computed(() => store.projects.items)

  const filteredProjects = computed(() => {
    if (!searchQuery.value.trim()) {
      return allProjects.value
    }

    const query = searchQuery.value.toLowerCase().trim()

    return allProjects.value.filter((project) => {
      const titleMatch = project.title.toLowerCase().includes(query)
      const descriptionMatch = project.description.toLowerCase().includes(query)
      const tagsMatch = project.tags.some((tag) => tag.toLowerCase().includes(query))

      return titleMatch || descriptionMatch || tagsMatch
    })
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

    <div class="py-20 px-6 max-w-6xl mx-auto w-full md:px-10">
      <div class="flex flex-col gap-6 mb-10">
        <div class="flex flex-col md:flex-row justify-between items-end gap-4">
          <div class="flex flex-col gap-2">
            <BaseHeading
              tag="h1"
              :title="store.projects.pageTitle"
              class="md:text-fluid-2xl text-fluid-3xl text-right md:text-left"
            />
            <p
              class="text-text-muted text-pretty font-bold leading-relaxed md:text-fluid-md text-fluid-lg"
            >
              {{ store.projects.description }}
            </p>
          </div>

          <div class="flex flex-col gap-2 items-end">
            <NuxtLink
              href="/"
              class="flex items-center gap-2 text-text-muted hover:text-accent transition-colors w-fit group"
              aria-label="Back to home"
            >
              <BaseIcon
                name="arrow_back"
                class="group-hover:-translate-x-0.5 transition-transform"
              />
              <span class="font-bold text-fluid-sm">Back</span>
            </NuxtLink>
            <label
              class="relative flex items-center bg-dark-raised rounded-full border-3 border-dark-border transition-all duration-200 focus-within:border-accent shrink-0"
            >
              <span class="sr-only">Search projects</span>
              <input
                v-model="searchQuery"
                type="search"
                placeholder="Search projects..."
                class="w-40 sm:w-64 bg-transparent px-4 py-2.5 text-text-primary placeholder:text-text-muted border-none outline-none ring-0 focus:ring-0 transition-colors"
              />
              <BaseIcon name="search" class="size-5 text-text-muted mr-3 ml-1" />
            </label>
            <p class="sr-only" role="status">{{ filteredProjects.length }} projects found</p>
          </div>
        </div>
      </div>

      <ul
        v-if="filteredProjects?.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0"
        aria-label="List of projects"
      >
        <li v-for="project in filteredProjects" :key="project.id" class="reveal">
          <BaseProject v-bind="project" />
        </li>
      </ul>
      <div
        v-else-if="searchQuery"
        class="flex flex-col items-center justify-center min-h-100 gap-4 text-center"
      >
        <p class="text-fluid-2xl font-bold text-text-primary">No projects found matching</p>
        <p class="text-fluid-lg text-text-muted font-semibold bg-dark-raised px-4 py-2 rounded-md">
          "{{ searchQuery }}"
        </p>
      </div>
      <div v-else class="flex flex-col items-center justify-center min-h-100 gap-4 text-center">
        <div class="p-4 bg-dark-raised rounded-full border border-dark-border">
          <BaseIcon name="folder_open" class="size-12 text-text-muted" />
        </div>
        <p class="text-fluid-2xl font-bold text-text-primary">No projects to show yet.</p>
      </div>
    </div>
  </NuxtErrorBoundary>
</template>
