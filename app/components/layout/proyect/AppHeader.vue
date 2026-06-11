<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const navigation = usePortfolioStore().navigation
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-dark-border bg-dark-primary/85 backdrop-blur-md md:px-10"
  >
    <div
      class="py-4 flex items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto w-full relative"
    >
      <NuxtLink
        href="/"
        class="flex items-center gap-2 text-text-primary shrink text-fluid-md"
        :aria-label="`${navigation.logo.title} - go home`"
      >
        <div class="size-10 flex items-center justify-center bg-accent rounded-md shrink-0">
          <BaseIcon name="code" />
        </div>
        <span class="font-mono font-semibold lowercase tracking-tight">{{
          navigation.logo.title
        }}</span>
      </NuxtLink>
    </div>
  </header>
</template>
