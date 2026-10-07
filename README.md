# Plataforma ENARM para GitHub Pages

## Inicio rápido

1. Sube todos los archivos al repositorio de GitHub.
2. En GitHub entra a **Settings → Pages**.
3. Selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/root`.
5. Guarda y espera la publicación.

## Estructura

- `index.html`: estructura principal.
- `css/style.css`: diseño responsive.
- `js/app.js`: dashboard y navegación.
- `js/simulador.js`: motor de preguntas, resultados y retroalimentación.
- `js/datos/banco-demo.js`: banco de ejemplo.

## Para agregar preguntas

Agregar objetos al arreglo `BANCO_PREGUNTAS` de `js/datos/banco-demo.js`.

El motor permite utilizar el mismo formato para todas las especialidades.

## Nota

Esta versión utiliza `localStorage` para guardar resultados en el navegador. No requiere servidor ni base de datos para funcionar en GitHub Pages.
