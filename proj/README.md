# Implante subdérmico: web informativa

Reconstrucción web (React + Vite, sin backend) del PDF «ANTICONCEPTIVOS».

## Uso local
```bash
npm install
npm run dev        # desarrollo
npm run build      # compilación en dist/
npm run preview    # probar la compilación
```

## Publicar en GitHub Pages
1. Subí el proyecto a un repositorio (rama `main`).
2. En *Settings → Pages*, elegí **Source: GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica en `https://usuario.github.io/nombre-repo/`.

`vite.config.js` usa `base: './'`, así que las rutas funcionan bajo cualquier subruta. Si preferís una ruta fija: `VITE_BASE=/nombre-repo/ npm run build`.

## Estructura
- `src/data/content.js`: todo el texto del PDF (editable en un solo lugar).
- `src/components/Reveal.jsx`: animación de entrada al hacer scroll.
- `src/index.css`: tokens de diseño (colores, tipografías) y estilos.
- `public/img/`: imágenes extraídas del PDF, convertidas a WebP.

## Limitaciones
- Las ilustraciones vectoriales del PDF se recortaron de páginas renderizadas (fondo transparentizado): pueden tener bordes ligeramente rasterizados. Bajo 1280 px se muestran como una fila de iconos al final de cada sección.
- La tipografía del título del PDF no está incrustada: se aproximó con *Bagel Fat One* (Google Fonts, carga online; hay fuentes de respaldo).
- En el PDF, el subtítulo dice «IntrodImplante»; se respetó tal cual. Parece un error de tipeo para «Introducción» o «Implante».
- La imagen «¡Dato importante!» viene del PDF ya rasterizada con su texto; el texto está además como HTML accesible.
