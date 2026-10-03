<script setup lang="ts">
  import type { NuxtError } from 'nuxt/app'

  const { error } = defineProps<{
    error: NuxtError
  }>()

  const { t } = useI18n()
  const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="error-page min-h-screen flex flex-col items-center justify-center gap-3 text-center">
    <template v-if="error.status === 404">
      <div role="alert">
        <h1 :aria-label="`Error 404: ${t('ui.pageNotFound')}`">
          <span aria-hidden="true" class="text-fluid-xl text-accent">{{ error.status }}</span>
          {{ t('ui.pageNotFound') }}
        </h1>
        <p>{{ t('ui.pageNotFoundDescription') }}</p>
      </div>
    </template>

    <template v-else-if="(error.status ?? 0) >= 500">
      <div role="alert">
        <h1 :aria-label="`Error ${error.status}: ${t('ui.serverError')}`">
          <span aria-hidden="true" class="text-fluid-xl text-accent">{{ error.status }}</span>
          {{ t('ui.serverError') }}
        </h1>
        <p>{{ t('ui.serverErrorDescription') }}</p>
      </div>
    </template>

    <template v-else>
      <div role="alert">
        <h1 :aria-label="`Error ${error.status}`">
          <span aria-hidden="true" class="text-fluid-xl text-accent">{{ error.status }}</span> Error
        </h1>
        <p>{{ error.message }}</p>
      </div>
    </template>

    <BaseLink
      link="/"
      class="border-2 rounded-md py-1.5 px-3.5 text-fluid-xs font-bold hover:text-text-primary hover:bg-accent hover:border-accent transition"
      @click="handleError"
      >{{ t('ui.goHome') }}</BaseLink
    >
  </main>
</template>
