<template>
  <div class="font-inter min-h-screen flex flex-col overflow-hidden">
    <LayoutProyectAppHeader />
    <main class="flex-1" :aria-label="$t('ui.portfolio')">
      <slot />
    </main>
    <LayoutProyectAppFooter />
  </div>
</template>
