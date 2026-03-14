<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const navigation = usePortfolioStore().navigation
</script>

<template>
  <header class="border-b py-4 flex items-center justify-between px-25 border-dark-border">
    <h2 class="uppercase font-black">{{ navigation.logo.title }}</h2>

    <LayoutAppNav />

    <a
      href="{{ navigation.cta.href }}"
      class="border-2 rounded-md py-1.5 px-3.5 text-xs font-bold"
      >{{ navigation.cta.label }}</a
    >
  </header>
</template>
