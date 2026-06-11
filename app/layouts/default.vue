<template>
  <div class="min-h-screen flex flex-col overflow-x-clip">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-text-primary focus:px-4 focus:py-2 focus:rounded-md font-bold"
      >Skip to main content</a
    >
    <LayoutDefaultAppHeader />
    <main id="main-content" class="flex-1" aria-label="Portfolio of Juan Atahona">
      <slot />
    </main>
    <LayoutDefaultAppFooter />
  </div>
</template>
