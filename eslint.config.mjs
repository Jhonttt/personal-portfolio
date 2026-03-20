// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',

    'vue/html-self-closing': 'off',
    'vue/no-unused-components': 'warn',   
    'vue/no-unused-vars': 'warn',        
    'vue/require-v-for-key': 'error', 
    'vue/no-use-v-if-with-v-for': 'error',

    'vue/component-name-in-template-casing': ['warn', 'PascalCase'], 
    'vue/attributes-order': 'warn',
  },
  ignores: ['commitlint.config.ts'],
})
