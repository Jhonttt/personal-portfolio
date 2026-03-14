<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const navigation = usePortfolioStore().navigation.logo
  const footerCopy = usePortfolioStore().footer.copy.replace(
    '{year}',
    new Date().getFullYear().toString()
  )
</script>

<template>
  <footer
    class="border-t py-15 flex items-center bottom-0 justify-between w-full px-25 border-white/10"
  >
    <h2 class="uppercase font-black">{{ navigation.title }}</h2>

    <nav>
      <ul class="flex gap-3">
        <li><a href="#">Icon 1</a></li>
        <li><a href="#">Icon 2</a></li>
        <li><a href="#">Icon 3</a></li>
      </ul>
    </nav>

    <p class="text-sm">{{ footerCopy }}</p>
  </footer>
</template>
