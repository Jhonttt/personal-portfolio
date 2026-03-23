<script setup lang="ts">
  import { usePortfolioStore } from '#imports'
  const contact = usePortfolioStore().contact
</script>
<template>
  <section
    id="contact"
    aria-labelledby="contact-heading"
    class="py-20 bg-dark-secondary border-y border-dark-border text-center md:px-10"
  >
    <div class="px-6 max-w-2xl mx-auto w-full flex flex-col items-center gap-3">
      <h2 id="contact-heading" class="md:text-fluid-2xl font-black text-fluid-3xl">
        {{ contact.title }}
      </h2>
      <p
        class="text-text-muted text-pretty font-bold leading-relaxed md:text-fluid-md text-fluid-lg"
      >
        {{ contact.description }}
      </p>
      <a
        :href="`https://mail.google.com/mail/?view=cm&to=${contact.email}&su=Let's talk`"
        target="_blank"
        class="group relative mt-2 inline-flex items-center gap-3 px-8 py-4 rounded-full border border-dark-border bg-transparent overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_24px_-4px_--theme(--color-accent/40%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-fluid-md text-fluid-lg"
        :aria-label="`Send email to ${contact.email}`"
      >
        <span
          class="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-linear-to-r from-transparent via-white/5 to-transparent"
          aria-hidden="true"
        />

        <span
          class="relative text-text-muted group-hover:text-text-primary font-semibold tracking-wide transition-colors duration-300"
        >
          {{ contact.email }}
        </span>
        <span
          class="relative size-10 rounded-full border border-dark-border group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-text-muted group-hover:fill-white transition-all duration-300 group-hover:translate-x-px group-hover:-translate-y-px size-6"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M5.4 20L4 18.6L15.6 7H9V5h10v10h-2V8.4z" />
          </svg>
        </span>
      </a>
    </div>
  </section>
</template>
