<template>
  <div class="font-inter min-h-screen flex flex-col overflow-hidden">
    <LayoutAppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
