# PaginadePortafolio — One Piece

Proyecto académico de Oriol José. Sitio «Rumbo al Grand Line», de cinco páginas, en español.

Sitio web: https://oreodoblecrema.github.io/PaginadePortafolio/
Repositorio: https://github.com/OreoDobleCrema/PaginadePortafolio

## Abrir el sitio
1. Extrae el ZIP completo.
2. Abre `index.html` en Chrome, Edge o Firefox.
3. Conserva la estructura de carpetas para cargar los estilos, las imágenes y JavaScript.

No requiere instalación ni base de datos. Bootstrap, Bootstrap Icons e imágenes están incluidos localmente. Google Fonts, el video de YouTube, Google Maps y los enlaces externos necesitan internet. Si el navegador bloquea el video al abrir archivos locales, utiliza su enlace directo o un servidor local (`python -m http.server 8000` y visita `http://localhost:8000`).

## Archivos
- index.html: inicio, carrusel, listas, tripulación, buscador y quiz.
- articulos.html: artículos originales con filtro por categoría.
- enlaces.html: iFrames de YouTube y Google Maps y recursos oficiales.
- contacto.html: contacto con mailto y formulario con revisión en modal.
- privacidad.html: políticas y control del almacenamiento del tema.
- assets/css/estilos.css: estilos personalizados y efectos hover.
- assets/js/script.js: lógica y funciones dinámicas.
- assets/img/: imágenes y logo/favicon SVG.
- assets/vendor/: Bootstrap 5.3.8 y Bootstrap Icons 1.13.1.
- REQUISITOS.md: ubicación de cada requisito para la exposición.

## Contacto
Se usa orioljose10@gmail.com como correo del autor. Si deseas cambiarlo, reemplázalo en contacto.html, privacidad.html y assets/js/script.js.
El formulario no envía correos automáticamente: crea un enlace mailto y requiere confirmar el envío en una aplicación de correo configurada.

## Publicación en GitHub Pages
El sitio está terminado y las funciones principales se han probado. Repositorio público: `OreoDobleCrema/PaginadePortafolio`. GitHub Pages está configurado para publicar la rama `main` desde `/(root)`. Los cambios de esa rama vuelven a publicar el sitio automáticamente.
1. Inicia sesión en GitHub y crea un repositorio público nuevo, por ejemplo `PaginadePortafolio`. Puedes marcar la opción de añadir un README para que exista la rama `main`.
2. Extrae el ZIP. En el repositorio, entra en `Add file > Upload files` y arrastra los archivos y la carpeta `assets` que están dentro de `one-piece`. `index.html` debe quedar en la raíz del repositorio. No subas solo el ZIP ni la carpeta contenedora `one-piece`.
3. Confirma la carga con `Commit changes`.
4. Ve a `Settings > Pages > Build and deployment`.
5. Elige `Deploy from a branch`, rama `main`, carpeta `/(root)` y guarda.
6. Espera a que termine la publicación. En `Settings > Pages`, GitHub mostrará el enlace del sitio. Abre ese enlace y comprueba también Contacto, Artículos y Enlaces de interés.
7. Sube el ZIP y pega la URL publicada en la plataforma de la clase. El nombre del repositorio y el usuario forman parte de la dirección final.

Si todavía no aparece la rama `main`, confirma primero la carga de los archivos. Si se ve el README en vez de la portada, revisa que `index.html` esté en la raíz y que Pages use esa misma carpeta.

Guía oficial: https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Metadatos
Incluye charset, viewport, descripción por página, keywords, autor, robots, theme-color, color-scheme, application-name, Open Graph y Twitter Cards. Las etiquetas og:image, twitter:image, og:url y canonical utilizan la dirección absoluta de GitHub Pages. Si cambias el usuario o el nombre del repositorio, actualiza esas direcciones en las cinco páginas.

## Fuentes y créditos
- Obra: https://one-piece.com/
- Información del anime e imágenes: https://www.toei-animation-usa.com/one-piece.html
- Personajes: https://www.bandainamcoent.com/es_mx/news/one-piece-odyssey-straw-hat-crew
- Bootstrap (licencia MIT): https://getbootstrap.com/
- Bootstrap Icons (licencia MIT): https://icons.getbootstrap.com/
- Google Fonts: Inter (SIL OFL) y Barlow Condensed (SIL OFL).
- Video: tráiler de One Piece de Netflix en YouTube.
- Mapa: búsqueda de Luffy Statue, Kumamoto, Japan en Google Maps.

Las ilustraciones de One Piece pertenecen a sus titulares; su atribución no concede una licencia de redistribución comercial. Proyecto académico de fans, sin afiliación oficial. Los artículos son textos introductorios propios, no noticias actuales.

## Cómo explicar el funcionamiento
HTML organiza las páginas; Bootstrap ofrece cuadrícula, navbar, carrusel, modales y alertas; CSS define colores, tipografías y adaptación móvil; JavaScript cambia el tema, filtra contenido, abre modales, valida el contacto y ejecuta el quiz. localStorage conserva solamente el modo de apariencia. No hay backend.

## Preparación para exponer
Consulta EXPOSICION.md para la demostración externa e interna del sitio.

Referencias técnicas: https://getbootstrap.com/docs/5.3/ y https://docs.github.com/es/pages
Imagen adicional del anime: https://www.toei-animation.com/catalog/one-piece/

## Verificación del proyecto
Revisión del 31 de octubre de 2026: navegación y recursos locales, carrusel, búsqueda de personajes y fichas, cambio y persistencia del tema, cuestionario con puntuación, alertas con cierre, filtros de artículos, formulario con revisión y mailto, reproducción integrada de YouTube y carga de Google Maps. Se corrigieron un título recortado y el desbordamiento horizontal a 320 px. La revisión del formulario se hizo con datos de ejemplo sin enviar correos.
