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
  <div
    class="flex flex-col mt-5 group cursor-pointer"
    :aria-labelledby="`card-${props.title}`"
    role="group"
  >
    <div class="rounded-3xl overflow-hidden border border-dark-border mb-5 h-72">
      <img
        :src="props.image"
        :alt="props.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <BaseBadge :labels="props.tags" />
        <h3 class="text-xl font-bold">{{ props.title }}</h3>
      </div>
      <div
        class="size-12 rounded-full border border-dark-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors fill-text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M5.4 20L4 18.6L15.6 7H9V5h10v10h-2V8.4z" />
        </svg>
      </div>
    </div>
    <p class="text-text-muted text-pretty font-bold leading-relaxed text-sm">
      {{ props.description }}
    </p>
  </div>
</template>
