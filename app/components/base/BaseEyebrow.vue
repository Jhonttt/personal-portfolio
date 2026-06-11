<script setup lang="ts">
  interface Props {
    label: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <p class="font-mono text-fluid-xs font-semibold lowercase tracking-widest text-text-muted">
    <span class="text-accent" aria-hidden="true">//</span>
    {{ props.label }}
  </p>
</template>
