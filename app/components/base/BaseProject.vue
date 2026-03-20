<script setup lang="ts">
  interface Props {
    title: string
    description: string
    image: string
    tags: string[]
    url: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <a
    class="flex flex-col mt-5 group"
    :aria-labelledby="`project-${props.title}`"
    :aria-describedby="`project-desc-${props.title}`"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="rounded-3xl overflow-hidden border border-dark-border mb-5 h-72">
      <NuxtImg
        :src="props.image"
        :alt="`Captura de pantalla del proyecto ${props.title}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width="800"
        height="600"
      />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <BaseBadge :labels="props.tags" />
        <h3
          :id="`project-${props.title}`"
          class="md:text-fluid-xl font-bold tracking-tighter text-fluid-2xl"
        >
          {{ props.title }}
          <span class="sr-only">(opens in new tab)</span>
        </h3>
      </div>
      <div
        class="size-12 rounded-full border border-dark-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors fill-text-primary"
        aria-hidden="true"
      >
        <span class="material-symbols-outlined text-white">north_east</span>
      </div>
    </div>
    <p
      :id="`project-desc-${props.title}`"
      class="text-text-muted text-pretty font-bold leading-relaxed md:text-fluid-sm text-fluid-md"
    >
      {{ props.description }}
    </p>
  </a>
</template>
