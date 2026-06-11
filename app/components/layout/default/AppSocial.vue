<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  import { usePublicAsset } from '~/composables/usePublicAsset'

  const socials = usePortfolioStore().footer.socials
  const spriteUrl = usePublicAsset('/sprite.svg')
</script>

<template>
  <nav aria-label="Social media">
    <ul class="flex items-center gap-6">
      <li v-for="social in socials" :key="social.label">
        <a
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex transition-transform hover:-translate-y-0.5"
        >
          <svg
            class="hover:fill-accent transition fill-white md:size-5 size-7"
            aria-hidden="true"
            focusable="false"
          >
            <use :href="`${spriteUrl}#${social.icon}`" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>
