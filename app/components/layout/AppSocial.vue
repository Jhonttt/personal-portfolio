<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const socials = usePortfolioStore().footer.socials
</script>

<template>
  <div>
    <ul class="flex items-center gap-6">
      <li v-for="social in socials" :key="social.label">
        <a :href="social.href" class="transition">
          <svg class="hover:fill-accent transition fill-white size-5">
            <use :href="'/sprite.svg#' + social.icon" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>
