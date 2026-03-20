<script setup lang="ts">
  interface Props {
    labels: string[]
  }

  const props = defineProps<Props>()
</script>

<template>
  <ul class="flex items-center gap-1" aria-label="Labels">
    <li
      v-for="(label, index) in props.labels"
      :key="label"
      class="text-accent text-fluid-xs uppercase font-black tracking-wider md:text-fluid-2xs"
    >
      {{ label
      }}<template v-if="index < props.labels.length - 1"
        ><span aria-hidden="true"> • </span></template
      >
    </li>
  </ul>
</template>
