<script setup lang="ts">
  import type { NuxtError } from 'nuxt/app'

  const { error } = defineProps<{
    error: NuxtError
  }>()

  const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-page">
    <template v-if="error.status === 404">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
    </template>

    <template v-else-if="(error.status ?? 0) >= 500">
      <h1>Server error</h1>
      <p>Something went wrong. Please try again later.</p>
    </template>

    <template v-else>
      <h1>Error {{ error.status }}</h1>
      <p>{{ error.message }}</p>
    </template>

    <button @click="handleError">Go home</button>
  </div>
</template>
