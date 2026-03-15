<script setup lang="ts">
  interface Props {
    title: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <div
    class="bg-dark-primary w-60 h-30 rounded-xl border-t-accent border-t-4 flex flex-col justify-center p-8 shadow-xl gap-0.5"
  >
    <p class="text-text-muted uppercase text-xs tracking-widest font-black">{{ props.title }}</p>
    <p class="text-text-primary font-black text-2xl">
      <slot>Default</slot>
    </p>
  </div>
</template>
