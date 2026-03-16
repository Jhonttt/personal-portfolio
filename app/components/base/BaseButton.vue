<script setup lang="ts">
  interface Props {
    link: string
    class?: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <a
    :href="props.link"
    :aria-label="`Link to ${props.link}`"
    :class="['border-2 rounded-md text-xs font-bold transition shadow-md', props.class]"
  >
    <slot>Default button</slot>
  </a>
</template>
