<script setup lang="ts">
  import type { NuxtError } from 'nuxt/app'

  const { error } = defineProps<{
    error: NuxtError
  }>()

  const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-page min-h-screen flex flex-col items-center justify-center gap-3 text-center">
    <template v-if="error.status === 404">
      <div>
        <h1>
          <span class="text-xl text-accent">{{ error.status }}</span> Page not found
        </h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </template>

    <template v-else-if="(error.status ?? 0) >= 500">
      <div>
        <h1>
          <span class="text-xl text-accent">{{ error.status }}</span> Server error
        </h1>
        <p>Something went wrong. Please try again later.</p>
      </div>
    </template>

    <template v-else>
      <div>
        <h1>
          <span class="text-xl text-accent">{{ error.status }}</span> Error
        </h1>
        <p>{{ error.message }}</p>
      </div>
    </template>

    <div @click="handleError">
      <BaseButton
        link="/"
        class="border-2 rounded-md py-1.5 px-3.5 text-xs font-bold hover:text-text-primary hover:bg-accent hover:border-accent transition"
        >Go home</BaseButton
      >
    </div>
  </div>
</template>
