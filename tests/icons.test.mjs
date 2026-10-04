import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { createSSRApp, h } from 'vue'
import { compileScript, parse } from 'vue/compiler-sfc'
import { renderToString } from 'vue/server-renderer'
import ts from 'typescript'

const baseURL = process.env.ICON_TEST_URL || 'http://127.0.0.1:3000'
const ligature = />\s*(?:code|verified|north_east|arrow_forward|arrow_back|search|folder_open)\s*</

async function loadComponent(filename, setup = '') {
  const source = await readFile(
    new URL(`../app/components/base/${filename}`, import.meta.url),
    'utf8'
  )
  const { descriptor } = parse(source)
  const compiled = compileScript(descriptor, { id: filename, inlineTemplate: true })
  const { outputText } = ts.transpileModule(compiled.content, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  })
  const code = (setup + outputText).replace(
    /from ["']vue["']/g,
    `from ${JSON.stringify(import.meta.resolve('vue'))}`
  )
  return (await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`))
    .default
}

test('all local icons render visible geometry without a browser, fonts or client JS', async () => {
  const Icon = await loadComponent('BaseIcon.vue')
  for (const name of [
    'verified',
    'north_east',
    'arrow_forward',
    'arrow_back',
    'search',
    'folder_open',
  ]) {
    const html = await renderToString(createSSRApp({ render: () => h(Icon, { name }) }))
    assert.match(html, /<path d="[^"]+"/)
    assert.match(html, /width="24" height="24"/)
    assert.match(html, /aria-hidden="true"/)
    assert.match(html, /focusable="false"/)
    assert.doesNotMatch(html, ligature)
  }
  const html = await renderToString(
    createSSRApp({ render: () => h(Icon, { name: 'folder_open', size: '1em' }) })
  )
  assert.match(html, /width="1em" height="1em"/)
})

test('empty projects page renders the folder SVG and empty-state message', async () => {
  // Supply an empty store to the real page, without altering production content.
  const Page = await loadComponent(
    '../../pages/projects.vue',
    `
    import { ref, computed } from 'vue';
    const useRuntimeConfig = () => ({ public: { siteUrl: 'http://localhost' } });
    const useI18n = () => ({ t: key => key });
    const definePageMeta = () => {};
    const useSeoMeta = () => {};
    const usePortfolioStore = () => ({ isLoaded: true, projects: { title: '', description: '', items: [] } });
  `
  )
  const Icon = await loadComponent('BaseIcon.vue')
  const app = createSSRApp(Page)
  app.component('BaseIcon', Icon)
  app.component('BaseProject', { render: () => null })
  app.component('NuxtErrorBoundary', {
    setup:
      (_, { slots }) =>
      () =>
        slots.default?.(),
  })
  app.component('NuxtLink', {
    setup:
      (_, { slots }) =>
      () =>
        h('a', slots.default?.()),
  })
  const html = await renderToString(app)
  assert.match(html, /ui\.noProjects/)
  assert.match(html, /<svg[^>]*width="1em"[^>]*>[\s\S]*?<path d="[^"]+"/)
  assert.doesNotMatch(html, ligature)
})

for (const locale of ['es', 'en']) {
  for (const route of ['/', '/projects']) {
    test(`${locale} ${route}: repeated uncached SSR contains icons and accessible controls`, async () => {
      for (let reload = 0; reload < 3; reload++) {
        const response = await fetch(new URL(`${route}?icon-check=${locale}-${reload}`, baseURL), {
          headers: {
            cookie: `i18n_redirected=${locale}`,
            'accept-language': locale,
            'cache-control': 'no-cache',
          },
          signal: AbortSignal.timeout(15000),
        })
        assert.equal(response.status, 200)
        const html = await response.text()
        assert.match(html, new RegExp(`<html[^>]*lang="${locale === 'es' ? 'es-ES' : 'en-US'}"`))
        assert.doesNotMatch(html, /material-symbols|Material\+Symbols|fonts\.googleapis\.com/)
        assert.doesNotMatch(html, ligature)
        const logos = html
          .match(/<svg[^>]*>[\s\S]*?<\/svg>/g)
          ?.filter((svg) => svg.includes('M9.4 16.6'))
        assert.equal(logos?.length, 2)
        for (const logo of logos) {
          assert.match(logo, /width="24" height="24"/)
          assert.match(logo, /aria-hidden="true"/)
        }
        if (route === '/projects') {
          assert.match(html, /<input[^>]*type="search"[^>]*aria-label="[^"]+"/)
        }
        const cssLinks = [...html.matchAll(/<link[^>]*href="([^"]+\.css)"[^>]*>/g)]
        assert.ok(cssLinks.length > 0)
        for (const [, href] of cssLinks) {
          const cssResponse = await fetch(new URL(href, baseURL))
          assert.equal(cssResponse.status, 200)
          assert.doesNotMatch(
            await cssResponse.text(),
            /Material[ +]Symbols|fonts\.googleapis\.com/
          )
        }
        for (const [, href] of html.matchAll(/<use[^>]*href="([^"]+)"/g)) {
          const assetURL = new URL(href, baseURL)
          const id = assetURL.hash.slice(1)
          assetURL.hash = ''
          const sprite = await fetch(assetURL)
          assert.equal(sprite.status, 200)
          assert.ok((await sprite.text()).includes(`id="${id}"`), `Missing sprite symbol ${id}`)
        }
      }
    })
  }
}
