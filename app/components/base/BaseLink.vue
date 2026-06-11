<script setup lang="ts">
  interface Props {
    link: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <NuxtLink
    :href="props.link"
    class="border-2 rounded-lg text-fluid-lg md:text-fluid-sm lg:text-fluid-md font-bold transition shadow-md"
  >
    <slot>Learn more</slot>
  </NuxtLink>
</template>
