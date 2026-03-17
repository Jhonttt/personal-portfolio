<script setup lang="ts">
  interface Props {
    title: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <div
    class="bg-dark-primary w-full rounded-lg lg:rounded-xl border-t-accent border-t-2 lg:border-t-4 flex flex-col justify-center px-4 lg:px-6 py-4 lg:py-5 shadow-lg lg:shadow-xl gap-1"
    role="group"
    :aria-labelledby="`card-${props.title}`"
  >
    <p class="text-text-muted uppercase text-xs tracking-widest font-black">
      {{ props.title }}
    </p>
    <p class="text-text-primary font-black text-xl lg:text-2xl">
      <slot>Default</slot>
    </p>
  </div>
</template>
