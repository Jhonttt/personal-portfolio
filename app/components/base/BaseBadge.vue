<script setup lang="ts">
  interface Props {
    labels: string[]
  }

  const props = defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-1">
    <span
      v-for="(label, index) in props.labels"
      :key="label"
      class="text-accent text-xs uppercase font-bold tracking-wider"
    >
      {{ label }}<template v-if="index < props.labels.length - 1"> • </template>
    </span>
  </div>
</template>
