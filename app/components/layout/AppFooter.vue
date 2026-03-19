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
    <div class="py-4 flex items-center px-6 max-w-7xl mx-auto w-full relative">
      <a
        href="#"
        class="uppercase font-black flex items-center gap-2 text-text-primary shrink"
        :aria-label="`${logo.title} - go home`"
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
        <span class="tracking-tighter">{{ logo.title }}</span>
      </a>

      <div class="flex absolute left-1/2 -translate-x-1/2">
        <LayoutAppSocial />
      </div>

      <p class="text-fluid-xs lg:text-fluid-sm md:text-fluid-sm ml-auto shrink-0">
        {{ footerCopy }}
      </p>
    </div>
  </footer>
</template>
