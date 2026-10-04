// Local-only proxy for manual browser checks against an already built Nuxt server.
import { createServer } from 'node:http'
import { setTimeout as delay } from 'node:timers/promises'

const upstream = process.env.ICON_TEST_URL || 'http://127.0.0.1:3000'
const port = Number(process.env.ICON_PREVIEW_PORT || 3101)

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, upstream)
    const locale = url.searchParams.get('lang')
    const headers = { 'accept-language': request.headers['accept-language'] || 'es' }
    if (request.headers.cookie) headers.cookie = request.headers.cookie
    if (locale === 'en' || locale === 'es') headers.cookie = `i18n_redirected=${locale}`
    const result = await fetch(url, { headers, signal: AbortSignal.timeout(15000) })
    response.writeHead(result.status, {
      'content-type': result.headers.get('content-type') || 'application/octet-stream',
      'cache-control': 'no-store',
      'content-security-policy': `font-src 'none'; style-src 'self' 'unsafe-inline';${url.searchParams.has('no-js') ? " script-src 'none';" : ''}`,
    })
    const body = Buffer.from(await result.arrayBuffer())
    await delay(300)
    for (let offset = 0; offset < body.length && !response.destroyed; offset += 8192) {
      response.write(body.subarray(offset, offset + 8192))
      await delay(100)
    }
    response.end()
  } catch {
    if (!response.headersSent) response.writeHead(502)
    response.end('Preview upstream unavailable. Start the production server first.')
  }
}).listen(port, '127.0.0.1', () => {
  process.stdout.write(`Icon network preview: http://127.0.0.1:${port}\n`)
})
