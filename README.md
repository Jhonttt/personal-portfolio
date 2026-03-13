# Juan.dev — Portfolio personal

Portfolio personal desarrollado con Nuxt 4, TypeScript y Tailwind CSS v4.

## Stack

- **Framework**: Nuxt 4
- **Lenguaje**: TypeScript (strict)
- **Estilos**: Tailwind CSS v4
- **Linting**: ESLint + Prettier
- **Git hooks**: Husky + commitlint + lint-staged
- **Despliegue**: Vercel

## Arranque

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
npm run dev
```

## Scripts disponibles

| Comando                | Descripción                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Servidor de desarrollo          |
| `npm run build`        | Build de producción             |
| `npm run preview`      | Preview del build en local      |
| `npm run lint`         | Ejecutar ESLint                 |
| `npm run lint:fix`     | Corregir errores de ESLint      |
| `npm run format`       | Formatear con Prettier          |
| `npm run format:check` | Verificar formato sin modificar |

## Estructura del proyecto

```
personal-portfolio/
├── app/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css          # Estilos globales + import Tailwind
│   │   └── images/               # Imágenes estáticas
│   ├── components/
│   │   ├── base/                 # Componentes reutilizables
│   │   │   ├── BaseButton.vue
│   │   │   ├── BaseCard.vue
│   │   │   └── BaseBadge.vue
│   │   ├── layout/               # Estructura de la página
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   └── AppNav.vue
│   │   └── sections/             # Secciones del portfolio
│   │       ├── HeroSection.vue
│   │       ├── AboutSection.vue
│   │       ├── ProjectsSection.vue
│   │       ├── SkillsSection.vue
│   │       └── ContactSection.vue
│   ├── composables/
│   │   └── useContent.ts         # Carga centralizada de JSONs
│   ├── data/                     # Contenido estático en JSON
│   │   ├── general.json
│   │   ├── navigation.json
│   │   ├── projects.json
│   │   └── skills.json
│   ├── layouts/
│   │   └── default.vue
│   ├── pages/
│   │   └── index.vue
│   └── app.vue
├── public/
│   ├── favicon.ico
│   └── cv.pdf
├── .husky/                       # Git hooks
├── .prettierrc
├── commitlint.config.ts
├── eslint.config.mjs
├── nuxt.config.ts
├── tailwind.config.ts
└── README.md
```

## Convenciones

- **Componentes** en PascalCase: `BaseButton.vue`, `HeroSection.vue`
- **Composables** con prefijo `use`: `useContent.ts`
- **Commits** siguiendo [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`...
- **Estilos** mobile-first con clases de Tailwind
- **Datos** centralizados en JSONs bajo `app/data/`
