# Verificación de la fuente

Issue #70. Comprobación del cambio de carga de Public Sans de #69.

## Pruebas automáticas

Iniciar el build de producción en una terminal:

```sh
npm run build
node .output/server/index.mjs
```

En otra terminal:

```sh
npm run test:fonts
```

Por defecto se usa `http://127.0.0.1:3000/`. Para otra URL, definir
`FONT_TEST_URL`, por ejemplo en PowerShell:

```powershell
$env:FONT_TEST_URL='http://127.0.0.1:3190/'
npm run test:fonts
```

Las cuatro pruebas hacen tres solicitudes sin caché por combinación de ruta
(`/`, `/projects`) e idioma (ES, EN). Verifican que el HTML inicial contiene el
`preload`, la definición de Public Sans con `font-display: optional`, que ambos
usan la misma URL y que el recurso es un WOFF2 válido. Se repitieron con
`FONT_TEST_URL=http://127.0.0.1:3191/personal-portfolio/` para comprobar la
subruta de despliegue.

## Red lenta en navegador

Con el servidor de producción activo:

```sh
npm run preview:fonts
```

Abrir `http://127.0.0.1:3102/`. El proxy escucha solo en loopback, desactiva la
caché y retrasa cuatro segundos cada respuesta WOFF2. `?lang=es` y `?lang=en`
seleccionan el idioma; `?no-js` bloquea la ejecución de JavaScript. Para usar
otro servidor o puerto: `FONT_TEST_URL` y `FONT_PREVIEW_PORT`.

Se comprobó `/` y `/projects` en español e inglés a 1280 × 900 y 390 × 844.
En las ocho combinaciones, la página era legible antes de completar la descarga.
`document.fonts.check('900 24px "Public Sans"')` pasó de `false` a `true` tras el
retraso, mientras el tamaño del encabezado principal permaneció igual. No se
apreció un cambio de fuente al terminar la descarga. En una carga normal, la
fuente estaba lista al inspeccionar la página.

Con `font-display: optional`, una conexión lenta puede conservar la fuente del
sistema durante esa visita. Así se evita que el texto ya visible cambie de
tipografía; Public Sans se usará cuando llegue a tiempo o ya esté en caché.
La estabilidad del encabezado no sustituye a una medición de CLS de toda la
página. Lint, tipos y build de producción también pasaron.
