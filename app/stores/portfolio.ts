import { defineStore } from 'pinia'
import general from '~/data/general.json'
import navigation from '~/data/navigation.json'
import projects from '~/data/projects.json'
import skills from '~/data/skills.json'

export const usePortfolioStore = defineStore('portfolio', () => {
  const isLoaded = ref(false)
  const loadError = ref<string | null>(null)

  const generalData = ref(general)
  const navigationData = ref(navigation)
  const projectsData = ref(projects)
  const skillsData = ref(skills)

  function init() {
    generalData.value = general
    navigationData.value = navigation
    projectsData.value = projects
    skillsData.value = skills
    isLoaded.value = true
    loadError.value = null
  }

  return {
    hero: general.hero,
    about: general.about,
    contact: general.contact,
    footer: general.footer,
    navigation,
    projects,
    skills,
    init,
    isLoaded,
    loadError,
  }
})
