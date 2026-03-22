<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const navigation = usePortfolioStore().navigation
</script>

<template>
  <header class="border-b border-dark-border md:px-10">
    <div
      class="py-4 flex items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto w-full relative"
    >
      <a
        href="#"
        class="uppercase font-black flex items-center gap-2 text-text-primary shrink text-fluid-lg"
        :aria-label="`${navigation.logo.title} - go home`"
      >
        <div class="size-10 flex items-center justify-center bg-accent rounded-md shrink-0">
          <span class="material-symbols-outlined">code</span>
        </div>
        <span class="tracking-tighter">{{ navigation.logo.title }}</span>
      </a>
    </div>
  </header>
</template>
