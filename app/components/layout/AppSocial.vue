<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  import { usePublicAsset } from '~/composables/usePublicAsset'

  const socials = usePortfolioStore().footer.socials
</script>

<template>
  <div>
    <ul class="flex items-center gap-6">
      <li v-for="social in socials" :key="social.label">
        <a :href="social.href" :aria-label="social.label" target="_blank" rel="noopener noreferrer">
          <svg
            class="hover:fill-accent transition fill-white md:size-5 size-7"
            aria-hidden="true"
            focusable="false"
          >
            <use :href="usePublicAsset('/icons/skills.svg') + '#' + social.icon" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>
