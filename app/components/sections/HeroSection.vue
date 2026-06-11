<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  import { usePublicAsset } from '~/composables/usePublicAsset'

  const hero = usePortfolioStore().hero
  const heroImage = usePublicAsset(hero.image.src)

  useHead({
    link: [{ rel: 'preload', as: 'image', href: heroImage, fetchpriority: 'high' }],
  })
</script>

<template>
  <section
    id="hero"
    aria-labelledby="hero-heading"
    class="relative isolate overflow-hidden py-20 md:px-10"
  >
    <div class="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
    <div
      class="absolute left-1/2 top-0 -z-10 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
      aria-hidden="true"
    />

    <div class="px-6 max-w-6xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center content-center md:gap-12">
        <div class="flex flex-col gap-5">
          <p
            class="anim-rise inline-flex w-fit items-center gap-2 rounded-full border border-dark-border bg-dark-secondary/60 px-3 py-1.5 text-fluid-xs font-bold uppercase tracking-widest text-text-muted"
          >
            <span class="relative flex size-2" aria-hidden="true">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"
              />
              <span class="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {{ hero.eyebrow }}
          </p>

          <h1
            id="hero-heading"
            class="anim-rise [animation-delay:90ms] md:text-fluid-4xl font-black leading-[0.9] tracking-tight text-fluid-5xl"
          >
            {{ hero.headline }}
            <span class="relative inline-block">
              <span
                class="bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent"
                >{{ hero.highlight }}</span
              >
              <svg
                class="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 120 10"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  class="draw-underline"
                  d="M3 8 C 30 3, 90 2, 117 6"
                  pathLength="1"
                  fill="none"
                  stroke="var(--color-accent)"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            {{ hero.headlineEnd }}
          </h1>

          <p
            class="anim-rise [animation-delay:180ms] text-text-muted text-pretty text-lg md:text-md"
          >
            {{ hero.description }}
          </p>

          <div class="anim-rise [animation-delay:260ms] flex gap-4">
            <BaseLink
              :link="hero.cta.primary.href"
              class="bg-accent text-text-primary border-accent hover:bg-transparent hover:text-accent hover:-translate-y-0.5 hover:shadow-accent active:translate-y-0 px-5 py-3"
            >
              {{ hero.cta.primary.label }}
            </BaseLink>
            <a
              :href="usePublicAsset(hero.cta.secondary.href)"
              class="border-2 rounded-lg text-fluid-lg md:text-fluid-sm lg:text-fluid-md font-bold transition shadow-md bg-transparent text-text-primary border-dark-border hover:border-text-primary hover:-translate-y-0.5 active:translate-y-0 px-5 py-3"
              download="curriculum-vitae.webp"
            >
              {{ hero.cta.secondary.label }}
            </a>
          </div>
        </div>

        <div class="anim-scale [animation-delay:200ms] relative">
          <img
            :src="heroImage"
            :alt="hero.image.alt"
            class="md:w-110 w-full md:h-110 h-full mt-10 rounded-2xl object-cover ring-1 ring-white/10 shadow-2xl"
            width="440"
            height="440"
            fetchpriority="high"
            decoding="async"
          />

          <div
            class="absolute -bottom-6 -left-6 text-text-primary px-4 py-2 rounded-md shadow-lg bg-dark-primary/80 backdrop-blur-sm border border-dark-border flex flex-col items-start gap-1"
            aria-hidden="true"
          >
            <span class="text-text-muted text-fluid-xs uppercase font-bold">{{
              hero.badge.label
            }}</span>
            <p class="font-bold text-fluid-xs text-text-primary">{{ hero.badge.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
