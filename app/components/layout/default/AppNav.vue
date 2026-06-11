<script setup lang="ts">
  import { usePortfolioStore } from '#imports'

  const links = usePortfolioStore().navigation.links
  const isOpen = shallowRef(false)
  const activeHash = shallowRef('')
  const menuButton = useTemplateRef<HTMLButtonElement>('menuButton')

  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isOpen.value) {
      isOpen.value = false
      menuButton.value?.focus()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)

    const sections = links
      .map((link) => link.href)
      .filter((href) => href.startsWith('#'))
      .map((href) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeHash.value = `#${entry.target.id}`
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach((section) => observer.observe(section))

    onUnmounted(() => {
      window.removeEventListener('keydown', onKeydown)
      observer.disconnect()
    })
  })
</script>

<template>
  <nav aria-label="Main navigation" class="text-fluid-sm font-bold">
    <ul class="hidden md:flex items-center gap-6">
      <li v-for="link in links" :key="link.label">
        <a
          :href="link.href"
          :aria-current="activeHash === link.href ? 'location' : undefined"
          class="relative py-1 transition-colors hover:text-text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
          :class="
            activeHash === link.href ? 'text-text-primary after:scale-x-100' : 'text-text-muted'
          "
          >{{ link.label }}</a
        >
      </li>
    </ul>

    <button
      ref="menuButton"
      type="button"
      class="md:hidden flex items-center justify-center size-10 rounded-md border border-dark-border text-text-primary hover:border-accent transition-colors"
      :aria-expanded="isOpen"
      aria-controls="mobile-menu"
      :aria-label="isOpen ? 'Close menu' : 'Open menu'"
      @click="isOpen = !isOpen"
    >
      <BaseIcon :name="isOpen ? 'close' : 'menu'" />
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul
        v-show="isOpen"
        id="mobile-menu"
        class="md:hidden absolute left-0 right-0 top-full z-50 flex flex-col bg-dark-secondary border-b border-dark-border px-6 py-4 shadow-lg"
      >
        <li v-for="link in links" :key="link.label">
          <a
            :href="link.href"
            class="block py-2 text-text-muted transition-colors hover:text-accent"
            @click="isOpen = false"
            >{{ link.label }}</a
          >
        </li>
      </ul>
    </Transition>
  </nav>
</template>
