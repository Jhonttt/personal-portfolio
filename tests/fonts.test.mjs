import assert from 'node:assert/strict'
import test from 'node:test'

const baseURL = new URL(process.env.FONT_TEST_URL || 'http://127.0.0.1:3000/')
const routes = [new URL('.', baseURL), new URL('projects', baseURL)]

for (const lang of ['es', 'en']) {
  for (const route of routes) {
    test(`${lang} ${route.pathname}: font can load without a late swap`, async () => {
      for (let reload = 0; reload < 3; reload++) {
        const response = await fetch(new URL(`?font-check=${lang}-${reload}`, route), {
          headers: {
            cookie: `i18n_redirected=${lang}`,
            'accept-language': lang,
            'cache-control': 'no-cache',
          },
          signal: AbortSignal.timeout(15000),
        })
        assert.equal(response.status, 200)
        const html = await response.text()
        const preload = html.match(/<link[^>]*rel="preload"[^>]*as="font"[^>]*>/)?.[0]
        assert.ok(preload, 'Font preload missing from the initial HTML')
        assert.match(preload, /type="font\/woff2"/)
        assert.match(preload, /crossorigin="anonymous"/)
        const fontPath = preload.match(/href="([^"]+)"/)?.[1]
        assert.ok(fontPath)
        assert.match(fontPath, /\/fonts\/public-sans-latin\.woff2$/)
        assert.match(html, /@font-face\{[^<]*font-family:'Public Sans'[^<]*font-display:optional/)
        assert.ok(html.includes(`url('${fontPath}')`), 'Preload and @font-face must share the URL')
        assert.doesNotMatch(html, /fonts\.googleapis\.com|font-display:swap/)

        const fontResponse = await fetch(new URL(fontPath, route))
        assert.equal(fontResponse.status, 200)
        const fontBytes = Buffer.from(await fontResponse.arrayBuffer())
        assert.equal(fontBytes.toString('ascii', 0, 4), 'wOF2')
        assert.ok(fontBytes.length > 10000 && fontBytes.length < 40000)
      }
    })
  }
}
