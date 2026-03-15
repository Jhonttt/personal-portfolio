<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const links = usePortfolioStore().navigation.links
</script>

<template>
  <nav>
    <ul class="flex items-center gap-6">
      <li v-for="link in links" :key="link.label">
        <a
          :href="link.href"
          class="text-xs text-text-muted transition hover:text-accent tracking-wider font-medium"
          >{{ link.label }}</a
        >
      </li>
    </ul>
  </nav>
</template>
