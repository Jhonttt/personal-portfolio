<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const navigation = usePortfolioStore().navigation
</script>

<template>
  <header class="border-b py-4 flex items-center justify-between px-25">
    <h2 class="uppercase font-black">{{ navigation.logo.title }}</h2>

    <nav>
      <ul class="flex gap-3">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
      </ul>
    </nav>

    <a
      href="{{ navigation.cta.href }}"
      class="border-2 rounded-md py-1.5 px-3.5 text-xs font-bold"
      >{{ navigation.cta.label }}</a
    >
  </header>
</template>
