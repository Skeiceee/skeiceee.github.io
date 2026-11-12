# Victor Nuñez — Portafolio

Portafolio personal hecho con Svelte 5 y Vite. Columna angosta, tipografía
editorial, modo oscuro puro y modo claro puro. Sin frameworks de UI, sin
cookies, sin analytics.

## Desarrollo

```bash
npm install
npm run dev
```

La app queda en `http://localhost:5173`.

## Editar contenido

Casi todo el texto vive en `src/lib/data.js`:

- `site`: nombre, ubicación, GitHub, LinkedIn y correo.
- `intro`: titular, párrafo de presentación y línea de disponibilidad.
- `contact`: pregunta y texto de la sección de contacto.
- `experience`: trabajos, fechas y resúmenes.
- `education`: formación.
- `featuredProject`: Gutter.
- `otherProjects`: proyectos secundarios.
- `stack`: herramientas agrupadas.
- `skills`: habilidades en lista, sin porcentajes.
- `sections`: índice de navegación.

El correo está vacío (`email: ''`). Si lo completas, aparece automáticamente
como tercer enlace en Contacto.

Los metadatos para buscadores y redes (`index.html`), `robots.txt` y
`sitemap.xml` usan `https://skeiceee.github.io/`. Si cambias de dominio,
actualiza esas URLs.

## Editar el diseño

- Colores y tipografía base: `src/app.css`.
- Layout y contenido: `src/App.svelte`.
- Favicon: `public/favicon.svg`.

### Estilo «estilo-terminal»

La rama `estilo-terminal` convierte el portafolio en una sesión de terminal
minimalista:

- Fondo casi negro, tipografía IBM Plex Mono y un único acento verde.
- Cabecera con prompt `victor@valparaiso:~$`, cursor parpadeante y navegación
  tipo `./proyectos`.
- El orden prioriza proyectos, luego experiencia, herramientas y contacto.
- Gutter aparece primero como proyecto destacado y el resto en una lista
  compacta.
- Las habilidades se muestran como una lista de nombres, sin porcentajes ni
  barras.
- Página solo texto: sin retrato, sin imágenes decorativas y sin selector de
  tema claro/oscuro.

## Build

```bash
npm run build
```

El resultado queda en `dist/`. Como `vite.config.js` usa `base: './'`, el build
funciona tanto en la raíz de `skeiceee.github.io` como en un repositorio de
proyecto.

## Publicar en GitHub Pages

### Opción A: GitHub Actions (recomendada)

1. Sube el proyecto a un repositorio en GitHub.
2. En **Settings → Pages**, elige **Source: GitHub Actions**.
3. Haz push a `main`. El workflow `.github/workflows/deploy.yml` compila y
   publica el sitio.

### Opción B: subir `dist` a mano

```bash
npm run build
```

Sube el contenido de `dist/` a la rama que publica tu GitHub Pages (por ejemplo,
`gh-pages` o la raíz de `skeiceee.github.io`). El archivo `.nojekyll` ya está
incluido.
