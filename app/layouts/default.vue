<template>
  <div class="font-inter min-h-screen flex flex-col overflow-hidden">
    <LayoutDefaultAppHeader />
    <main class="flex-1" :aria-label="$t('ui.portfolio')">
      <slot />
    </main>
    <LayoutDefaultAppFooter />
  </div>
</template>
