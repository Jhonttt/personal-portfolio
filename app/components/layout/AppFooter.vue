<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const logo = usePortfolioStore().navigation.logo
  const footerCopy = usePortfolioStore().footer.copy.replace(
    '{year}',
    new Date().getFullYear().toString()
  )
</script>

<template>
  <footer
    class="border-t py-15 flex items-center bottom-0 justify-between w-full px-25 border-dark-border"
  >
    <h2 class="uppercase font-black">{{ logo.title }}</h2>

    <LayoutAppSocial />

    <p class="text-sm">{{ footerCopy }}</p>
  </footer>
</template>
