<script setup lang="ts">
  import { usePublicAsset } from '~/composables/usePublicAsset'

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
    class="bg-dark-secondary xl:size-85 lg:size-69 rounded-xl flex flex-col justify-center lg:p-6 p-8 shadow-xl gap-5 border border-dark-border md:mx-6"
    role="group"
    :aria-labelledby="`${props.id}`"
  >
    <div class="flex items-center gap-3">
      <div
        class="xl:size-12 lg:size-9 rounded-xl bg-accent-muted flex items-center justify-center text-text-primary group-hover:scale-110 transition-transform size-12"
      >
        <svg
          class="transition fill-accent xl:size-8 lg:size-6 size-8"
          aria-hidden="true"
          focusable="false"
        >
          <use :href="usePublicAsset('/icons/skills.svg') + '#' + props.icon" />
        </svg>
      </div>
      <h3 :id="props.id" class="xl:text-fluid-xl lg:text-fluid-lg font-bold text-fluid-xl">
        {{ props.label }}
      </h3>
    </div>
    <ul class="grid grid-cols-2 gap-3">
      <li
        v-for="tech in props.items"
        :key="tech.name"
        class="flex flex-col items-center justify-center xl:p-4 lg:p-3 bg-background-dark/50 border border-dark-border rounded-2xl gap-3 hover:border-accent/50 transition-colors group bg-dark-tertiary py-4"
      >
        <div
          class="xl:size-12 lg:size-9 rounded-xl bg-white/5 flex items-center justify-center text-text-primary group-hover:scale-110 transition-transform size-12"
        >
          <svg
            class="transition fill-accent xl:size-8 lg:size-6 size-8"
            aria-hidden="true"
            focusable="false"
          >
            <use :href="usePublicAsset('/icons/skills.svg') + '#' + tech.icon" />
          </svg>
        </div>
        <span class="text-fluid-xs font-bold uppercase tracking-wider text-text-muted">{{
          tech.name
        }}</span>
      </li>
    </ul>
  </div>
</template>
