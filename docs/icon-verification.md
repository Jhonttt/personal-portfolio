# Verificación de iconos

Issue #65. Verificación realizada el 4 de octubre de 2026 sobre el build de producción
con las correcciones de #63 y #64.

## Pruebas reproducibles

En una terminal:

```sh
npm run build
node .output/server/index.mjs
```

En otra terminal:

```sh
npm run test:icons
```

El servidor debe estar disponible en `http://127.0.0.1:3000`. Para otro puerto,
configurar `ICON_TEST_URL` (en PowerShell: `$env:ICON_TEST_URL='http://127.0.0.1:3100'`).
Las pruebas usan Node, Vue y TypeScript ya instalados; no añaden dependencias.

Seis pruebas verifican:

- Renderizado SSR de los seis iconos locales, geometría SVG, dimensiones y atributos decorativos.
- Página real de proyectos con un store vacío de prueba: mensaje e icono de carpeta.
- Tres peticiones sin caché por ruta (`/`, `/projects`) e idioma (español, inglés):
  dos logos en el HTML inicial, ausencia de ligaduras y de la fuente Material Symbols,
  nombre accesible del buscador y símbolos existentes en los sprites de tecnologías y redes.

## Comprobación manual con carga lenta

Con el servidor de producción iniciado:

```sh
npm run preview:icons
```

Abrir `http://127.0.0.1:3101`. Este proxy de pruebas escucha solo en loopback:

- Desactiva la caché con `Cache-Control: no-store`.
- Bloquea todas las fuentes mediante CSP y las hojas de estilo externas.
- Retrasa cada respuesta 300 ms y envía bloques de 8 KiB cada 100 ms
  (aproximadamente 80 KiB/s por respuesta, no un límite global de red).
- Con `?no-js`, bloquea la ejecución de scripts mediante CSP.
- Con `&lang=es` o `&lang=en`, selecciona el idioma del HTML inicial.

Ejemplos: `/?no-js&lang=es` y `/projects?no-js&lang=en`.
Sin JavaScript se verifica la presentación inicial; búsqueda y cambio de idioma se
comprueban sin `no-js`. El proxy no forma parte de la aplicación desplegada.

## Resultados

| Comprobación                                                                 | Resultado                                                                    |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Seis pruebas automáticas                                                     | Correctas                                                                    |
| `/` y `/projects`, ES/EN, 1280 × 900 y 390 × 900, dos cargas por combinación | 16 comprobaciones correctas                                                  |
| Caché desactivada, carga lenta, fuentes y scripts bloqueados                 | Ninguna ligadura visible; SVG con dimensiones no nulas                       |
| Logos antes/después de recargar                                              | 24 × 24 px en todas las combinaciones                                        |
| Búsqueda sin coincidencias con fuentes bloqueadas                            | Mensaje correcto en español e inglés                                         |
| Selector de idioma con JavaScript y carga lenta                              | Traducción correcta al inglés                                                |
| Teclado en proyectos                                                         | Selector de idioma → volver al inicio → buscador; los iconos no reciben foco |
| Lint, TypeScript y build de producción                                       | Correctos                                                                    |

La comprobación del estado sin proyectos usa un store vacío en SSR; no modifica los
datos publicados. Las medidas de dimensiones comprueban estabilidad de los iconos,
no constituyen una medición de CLS de toda la página. Los avisos de CSP en el proxy
son esperados. El build conserva avisos de URL local, Browserslist y sourcemaps de dependencias.
