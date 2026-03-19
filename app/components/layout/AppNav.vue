<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const links = usePortfolioStore().navigation.links
</script>

<template>
  <nav
    aria-label="Main navigation"
    class="hidden md:flex md absolute left-1/2 -translate-x-1/2 text-fluid-sm font-bold"
  >
    <ul class="flex items-center gap-6">
      <li v-for="link in links" :key="link.label">
        <a
          :href="link.href"
          :aria-current="$route.hash === link.href ? 'true' : undefined"
          class="text-text-muted transition-colors hover:text-accent"
          >{{ link.label }}</a
        >
      </li>
    </ul>
  </nav>
</template>
