<script setup lang="ts">
  interface Props {
    title: string
    tag?: 'h1' | 'h2'
    headingId?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    tag: 'h2',
    headingId: undefined,
  })

  const TERMINAL_PUNCTUATION = ['.', '!', '?']

  const trimmedTitle = computed(() => props.title.trim())
  const endsWithPunctuation = computed(() =>
    TERMINAL_PUNCTUATION.includes(trimmedTitle.value.slice(-1))
  )
  const body = computed(() =>
    endsWithPunctuation.value ? trimmedTitle.value.slice(0, -1) : trimmedTitle.value
  )
  const mark = computed(() => (endsWithPunctuation.value ? trimmedTitle.value.slice(-1) : '.'))
</script>

<template>
  <component :is="tag" :id="headingId" class="font-black"
    >{{ body
    }}<span class="text-accent" :aria-hidden="endsWithPunctuation ? undefined : 'true'">{{
      mark
    }}</span></component
  >
</template>
