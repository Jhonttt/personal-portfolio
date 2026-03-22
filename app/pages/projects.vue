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
    ogUrl: `${config.public.siteUrl}/projects`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
  })

  const store = usePortfolioStore()
  if (!store.isLoaded) {
    store.init()
  }

  const searchQuery = ref('')

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
            <h1 class="md:text-fluid-2xl text-fluid-3xl font-black text-right md:text-left">
              {{ store.projects.title }}
            </h1>
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
              <span
                class="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform"
                >arrow_back</span
              >
              <span class="font-bold text-fluid-sm">Back</span>
            </NuxtLink>
            <label
              class="relative flex items-center bg-dark-raised rounded-full border-3 border-dark-border transition-all duration-200 focus-within:border-accent shrink-0"
            >
              <input
                v-model="searchQuery"
                type="search"
                placeholder="Search projects..."
                class="w-40 sm:w-64 bg-transparent px-4 py-2.5 text-text-primary placeholder:text-text-muted border-none outline-none ring-0 focus:ring-0 transition-colors"
              />
              <span
                class="material-symbols-outlined text-text-muted mr-3 ml-1 text-fluid-lg cursor-pointer hover:text-accent transition-colors"
              >
                search
              </span>
            </label>
          </div>
        </div>
      </div>

      <div
        v-if="filteredProjects?.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0"
        aria-label="List of projects"
      >
        <li v-for="project in filteredProjects" :key="project.id">
          <BaseProject v-bind="project" />
        </li>
      </div>
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
          <span class="material-symbols-outlined text-fluid-4xl text-text-muted">folder_open</span>
        </div>
        <p class="text-fluid-2xl font-bold text-text-primary">There aren't projects</p>
      </div>
    </div>
  </NuxtErrorBoundary>
</template>
