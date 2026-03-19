<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const navigation = usePortfolioStore().navigation
</script>

<template>
  <header class="border-b border-dark-border">
    <div class="py-4 flex items-center px-6 max-w-7xl mx-auto w-full relative">
      <a
        href="#"
        class="uppercase font-black flex items-center gap-2 text-text-primary shrink"
        :aria-label="`${navigation.logo.title} - go home`"
      >
        <div class="size-8 flex items-center justify-center bg-accent rounded-md shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
            aria-hidden="true"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <span class="tracking-tighter">{{ navigation.logo.title }}</span>
      </a>

      <div class="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <LayoutAppNav />
      </div>

      <div class="ml-auto flex items-center gap-4">
        <a
          :href="navigation.cta.href"
          class="border-2 rounded-md py-1.5 px-3.5 text-fluid-xs font-bold hover:text-text-primary hover:bg-accent hover:border-accent transition"
        >
          {{ navigation.cta.label }}
        </a>
      </div>
    </div>
  </header>
</template>
