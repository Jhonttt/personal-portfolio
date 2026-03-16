<script setup lang="ts">
  interface Props {
    labels: string[]
  }

  const props = defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-1" role="list" aria-label="labels">
    <span
      v-for="(label, index) in props.labels"
      :key="label"
      role="listitem"
      class="text-accent text-xs uppercase font-bold tracking-wider"
    >
      {{ label
      }}<template v-if="index < props.labels.length - 1"
        ><span aria-hidden="true"> • </span></template
      >
    </span>
  </div>
</template>
