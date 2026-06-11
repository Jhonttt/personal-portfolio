<script setup lang="ts">
  import { iconPaths, type IconName } from '~/utils/icons'

  interface Props {
    name: IconName
  }

  const props = defineProps<Props>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    class="shrink-0"
  >
    <path :d="iconPaths[props.name]" />
  </svg>
</template>
