<script setup lang="ts">
  type TechItem = { name: string; icon: string }

  interface Props {
    id: string
    label: string
    icon: string
    items: [TechItem, TechItem, TechItem, TechItem]
  }

  const props = defineProps<Props>()
</script>

<template>
  <div
    class="bg-dark-secondary size-85 rounded-xl flex flex-col justify-center p-8 shadow-xl gap-5 border border-dark-border"
    role="group"
    :aria-labelledby="`${props.id}`"
  >
    <div class="flex items-center gap-3">
      <div
        class="size-12 rounded-xl bg-accent-muted flex items-center justify-center text-primary group-hover:scale-110 transition-transform"
      >
        <span class="material-symbols-outlined">
          <svg class="transition fill-accent size-5" aria-hidden="true" focusable="false">
            <use :href="'/sprite.svg#' + props.icon" />
          </svg>
        </span>
      </div>
      <h3 :id="props.id" class="text-xl font-bold">{{ props.label }}</h3>
    </div>

    <div class="grid grid-cols-2 gap-4" role="list">
      <div
        v-for="tech in items"
        :key="tech.name"
        role="listitem"
        class="flex flex-col items-center justify-center p-4 bg-background-dark/50 border border-dark-border rounded-2xl gap-3 hover:border-accent/50 transition-colors group bg-dark-tertiary"
      >
        <div
          class="size-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"
        >
          <span class="material-symbols-outlined text-3xl">
            <svg class="transition fill-white size-5" aria-hidden="true" focusable="false">
              <use :href="'/sprite.svg#' + tech.icon" />
            </svg>
          </span>
        </div>
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">{{
          tech.name
        }}</span>
      </div>
    </div>
  </div>
</template>
