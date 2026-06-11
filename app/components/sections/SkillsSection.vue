<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  const skills = usePortfolioStore().skills
</script>

<template>
  <section
    id="stack"
    aria-labelledby="skills-heading"
    class="py-20 px-6 max-w-6xl mx-auto w-full md:px-10"
  >
    <div class="reveal flex flex-col gap-2">
      <BaseHeading
        heading-id="skills-heading"
        :title="skills.title"
        class="md:text-fluid-2xl text-center text-fluid-3xl"
      />
      <p
        class="text-text-muted text-pretty font-bold leading-relaxed md:text-fluid-md text-center text-fluid-lg"
      >
        {{ skills.description }}
      </p>
    </div>
    <ul
      class="grid grid-cols-1 lg:grid-cols-3 mt-10 list-none p-0 lg:gap-6 gap-8 lg:justify-center"
      aria-label="List of techs"
    >
      <li v-for="category in skills.categories" :key="category.id" class="reveal">
        <BaseTechGroup v-bind="category" />
      </li>
    </ul>
  </section>
</template>
