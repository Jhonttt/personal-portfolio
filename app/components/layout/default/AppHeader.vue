<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const { navigation } = storeToRefs(usePortfolioStore())
  const { t } = useI18n()
</script>

<template>
  <header class="border-b border-dark-border md:px-10">
    <div
      class="py-4 flex items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto w-full relative"
    >
      <a
        href="#"
        class="uppercase font-black flex items-center gap-2 text-text-primary shrink text-fluid-lg"
        :aria-label="`${navigation.logo.title} - ${t('ui.home')}`"
      >
        <div class="size-10 flex items-center justify-center bg-accent rounded-md shrink-0">
          <span class="material-symbols-outlined">code</span>
        </div>
        <span class="tracking-tighter hidden sm:flex">{{ navigation.logo.title }}</span>
      </a>

      <div class="flex items-center gap-3 md:gap-6">
        <LayoutDefaultAppNav />
        <LayoutLanguageSwitcher />
      </div>
    </div>
  </header>
</template>
