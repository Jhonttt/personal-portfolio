import { defineStore } from 'pinia'
import enJson from '../../i18n/locales/en.json?raw'
import esJson from '../../i18n/locales/es.json?raw'
import type esLocale from '../../i18n/locales/es.json'

type PortfolioContent = typeof esLocale
const en = JSON.parse(enJson) as PortfolioContent
const es = JSON.parse(esJson) as PortfolioContent

export const usePortfolioStore = defineStore('portfolio', () => {
  const isLoaded = ref(false)
  const loadError = ref<string | null>(null)

  const { locale } = useNuxtApp().$i18n
  const content = computed(() => (locale.value === 'en' ? en : es))

  function init() {
    isLoaded.value = true
    loadError.value = null
  }

  return {
    hero: computed(() => content.value.general.hero),
    about: computed(() => content.value.general.about),
    contact: computed(() => ({
      ...content.value.general.contact,
      email: 'juanatahonadev@gmail.com',
    })),
    footer: computed(() => content.value.general.footer),
    navigation: computed(() => content.value.navigation),
    projects: computed(() => content.value.projects),
    skills: computed(() => content.value.skills),
    init,
    isLoaded,
    loadError,
  }
})
