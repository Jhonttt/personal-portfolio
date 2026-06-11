<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const logo = usePortfolioStore().navigation.logo
  const footerCopy = usePortfolioStore().footer.copy.replace(
    '{year}',
    new Date().getFullYear().toString()
  )
</script>

<template>
  <footer class="border-t border-dark-border">
    <div
      class="py-10 flex items-center px-6 max-w-7xl mx-auto w-full md:px-10 flex-col md:flex-row gap-6 md:py-4"
    >
      <NuxtLink
        href="/"
        class="uppercase font-black flex items-center gap-2 text-text-primary shrink text-fluid-lg"
        :aria-label="`${logo.title} - go home`"
      >
        <div class="size-10 flex items-center justify-center bg-accent rounded-md shrink-0">
          <BaseIcon name="code" />
        </div>
        <span class="tracking-tighter">{{ logo.title }}</span>
      </NuxtLink>

      <div class="flex md:absolute md:left-1/2 md:-translate-x-1/2">
        <LayoutDefaultAppSocial />
      </div>

      <p class="text-fluid-md lg:text-fluid-sm md:text-fluid-xs md:ml-auto shrink-0">
        {{ footerCopy }}
      </p>
    </div>
  </footer>
</template>
