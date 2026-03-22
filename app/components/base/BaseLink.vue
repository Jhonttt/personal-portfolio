<script setup lang="ts">
  interface Props {
    link: string
    class?: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <NuxtLink
    :href="props.link"
    :class="[
      'border-2 rounded-lg text-fluid-lg md:text-fluid-sm lg:text-fluid-md font-bold transition shadow-md',
      props.class,
    ]"
  >
    <slot>Learn more</slot>
  </NuxtLink>
</template>
