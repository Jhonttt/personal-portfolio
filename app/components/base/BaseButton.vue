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
    :class="[
      'border-2 rounded-md py-1.5 px-3.5 text-xs font-bold hover:text-text-primary transition',
      props.class,
    ]"
  >
    <slot>Default button</slot>
  </a>
</template>
