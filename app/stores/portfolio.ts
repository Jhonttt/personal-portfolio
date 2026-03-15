import general from '~/data/general.json'
import navigation from '~/data/navigation.json'
import projects from '~/data/projects.json'
import skills from '~/data/skills.json'

export const usePortfolioStore = defineStore('portfolio', () => {
  return {
    hero: general.hero,
    about: general.about,
    contact: general.contact,
    footer: general.footer,
    navigation,
    projects,
    skills,
  }
})
