// Local preview with a delayed font response to expose any late font swap.
import { createServer } from 'node:http'
import { setTimeout as delay } from 'node:timers/promises'

const upstream = process.env.FONT_TEST_URL || 'http://127.0.0.1:3000/'
const port = Number(process.env.FONT_PREVIEW_PORT || 3102)

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, upstream)
    const lang = url.searchParams.get('lang')
    const headers = { 'accept-language': request.headers['accept-language'] || 'es' }
    if (request.headers.cookie) headers.cookie = request.headers.cookie
    if (lang === 'en' || lang === 'es') headers.cookie = `i18n_redirected=${lang}`
    const result = await fetch(url, { headers, signal: AbortSignal.timeout(15000) })
    response.writeHead(result.status, {
      'content-type': result.headers.get('content-type') || 'application/octet-stream',
      'cache-control': 'no-store',
      ...(lang === 'en' || lang === 'es'
        ? { 'set-cookie': `i18n_redirected=${lang}; Path=/; SameSite=Lax` }
        : {}),
      ...(url.searchParams.has('no-js') ? { 'content-security-policy': "script-src 'none'" } : {}),
    })
    if (url.pathname.endsWith('.woff2')) await delay(4000)
    response.end(Buffer.from(await result.arrayBuffer()))
  } catch {
    if (!response.headersSent) response.writeHead(502)
    response.end('Preview upstream unavailable. Start the production server first.')
  }
}).listen(port, '127.0.0.1', () => {
  process.stdout.write(`Font network preview: http://127.0.0.1:${port}\n`)
})
