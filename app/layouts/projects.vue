<template>
  <div class="font-inter min-h-screen flex flex-col overflow-hidden">
    <LayoutProyectAppHeader />
    <main class="flex-1" aria-label="Portfolio of Juan Atahona">
      <slot />
    </main>
    <LayoutProyectAppFooter />
  </div>
</template>
