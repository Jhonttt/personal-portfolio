<script setup lang="ts">
  type TechItem = { name: string; icon: string }

  interface Props {
    id: string
    label: string
    icon: string
    items: TechItem[]
  }

  const props = defineProps<Props>()
</script>

<template>
  <div
    class="bg-dark-secondary lg:size-80 rounded-xl flex flex-col justify-center p-8 shadow-xl gap-5 border border-dark-border md:size-60"
    role="group"
    :aria-labelledby="`${props.id}`"
  >
    <div class="flex items-center gap-3">
      <div
        class="lg:size-12 rounded-xl bg-accent-muted flex items-center justify-center text-primary group-hover:scale-110 transition-transform md:size-8 size-12"
      >
        <span class="material-symbols-outlined">
          <svg
            class="transition fill-accent md:size-6 size-8 lg:size-8"
            aria-hidden="true"
            focusable="false"
          >
            <use :href="'/icons/skills.svg#' + props.icon" />
          </svg>
        </span>
      </div>
      <h3 :id="props.id" class="lg:text-xl font-bold md:text-lg text-xl">{{ props.label }}</h3>
    </div>

    <div class="grid grid-cols-2 gap-4" role="list">
      <div
        v-for="tech in props.items"
        :key="tech.name"
        role="listitem"
        class="flex flex-col items-center justify-center lg:p-4 bg-background-dark/50 border border-dark-border rounded-2xl gap-3 hover:border-accent/50 transition-colors group bg-dark-tertiary md:p-2 p-4"
      >
        <div
          class="lg:size-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform md:size-8 size-12"
        >
          <span class="text-3xl">
            <svg
              class="transition fill-accent md:size-6 size-8 lg:size-8"
              aria-hidden="true"
              focusable="false"
            >
              <use :href="'/icons/skills.svg#' + tech.icon" />
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
