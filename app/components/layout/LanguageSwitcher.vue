<script setup lang="ts">
  const { locale, setLocale, t } = useI18n()
  const nextLocale = computed(() => (locale.value === 'es' ? 'en' : 'es'))
  const nextLanguage = computed(() => (nextLocale.value === 'en' ? 'English' : 'Español'))

  async function switchLanguage() {
    await setLocale(nextLocale.value)
  }
</script>

<template>
  <button
    type="button"
    class="min-h-10 min-w-10 px-2 rounded-md border border-dark-border text-text-primary text-fluid-sm font-bold hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
    :aria-label="t('ui.switchLanguage', { language: nextLanguage })"
    :title="t('ui.switchLanguage', { language: nextLanguage })"
    @click="switchLanguage"
  >
    {{ locale.toUpperCase() }}
  </button>
</template>
