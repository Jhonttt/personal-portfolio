<script setup lang="ts">
  interface Props {
    title: string
  }

  const props = defineProps<Props>()
</script>

<template>
  <div
    class="bg-dark-primary w-full rounded-lg lg:rounded-xl border-t-accent border-t-4 flex flex-col justify-center px-8 py-4 lg:py-5 shadow-lg lg:shadow-xl gap-1 lg:px-5 transition duration-300 hover:-translate-y-1 hover:shadow-accent"
    role="group"
    :aria-labelledby="`card-${props.title}`"
  >
    <p
      :id="`card-${props.title}`"
      class="text-text-muted uppercase text-fluid-xs tracking-widest font-black"
    >
      {{ props.title }}
    </p>
    <p class="text-text-primary font-black text-fluid-2xl">
      <slot>Default</slot>
    </p>
  </div>
</template>
