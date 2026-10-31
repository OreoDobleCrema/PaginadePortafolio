# Guía para exponer el proyecto (5–7 minutos)

## 1. Presentación (30 segundos)
“Mi sitio se llama Rumbo al Grand Line y está dedicado a One Piece. Su frase es Un mar de historias. Una tripulación de sueños. El objetivo es presentar la obra y a sus personajes mediante cinco páginas conectadas.”

## 2. Funcionamiento externo (2–3 minutos)
1. Abre index.html y muestra el logo, la navegación, la imagen responsiva y la sección principal.
2. Cambia de modo claro a oscuro y vuelve a claro. Explica que el botón está disponible en todas las páginas y guarda la preferencia.
3. Usa las flechas del carrusel y selecciona un indicador.
4. Busca “Nami” en la tripulación y abre “Ver ficha”. Cierra el modal con la X. Borra la búsqueda para mostrar todos los personajes.
5. Abre el quiz, responde y muestra la alerta. Completa las tres preguntas para ver la puntuación y reinícialo.
6. En Artículos, selecciona una categoría y abre uno de los textos.
7. En Enlaces de interés, muestra los iFrames de YouTube y Google Maps, los enlaces oficiales y las redes del pie de página. Necesitas internet para estos recursos.
8. En Contacto, muestra el botón “Enviar un correo”. Llena el formulario con datos de prueba, pulsa “Revisar mensaje” y muestra el resumen en el modal. No envíes un correo de prueba a otra persona.
9. En Privacidad, explica qué datos usa el sitio y demuestra cómo borrar la preferencia de tema.
10. Reduce el ancho de la ventana para mostrar el menú móvil, la cuadrícula adaptable y las imágenes. Pasa el mouse sobre una tarjeta y un botón para mostrar los efectos hover.

## 3. Funcionamiento interno (2–3 minutos)
Abre la carpeta completa en Visual Studio Code. Puedes enseñar estos archivos en orden:

| Archivo | Qué explicar |
|---|---|
| index.html | Etiquetas HTML5; head con metadatos, favicon y Google Fonts; body con header, nav, main, section y footer; clases Bootstrap container, row, col-lg-6 e img-fluid. |
| assets/css/estilos.css | Archivo propio separado; variables CSS para los colores; selector [data-bs-theme=dark]; :hover en botones/tarjetas; @media para pantallas pequeñas. |
| assets/js/script.js | addEventListener escucha clics y escritura. aplicarTema modifica data-bs-theme y localStorage conserva la preferencia. La búsqueda compara texto normalizado. |
| assets/js/script.js | new bootstrap.Modal abre las fichas. alerta crea elementos de forma dinámica. El quiz cambia de pregunta y acumula puntos. |
| contacto.html y script.js | required, type=email y minlength validan los campos. preventDefault evita el envío normal. encodeURIComponent prepara asunto y mensaje para mailto. textContent muestra los datos como texto. |
| assets/vendor/ | Copias locales de Bootstrap y Bootstrap Icons; no son código escrito por el estudiante. |

Los comentarios del JavaScript numeran cada bloque. El código propio está separado de las bibliotecas para que puedas explicarlo y modificarlo.

## 4. Publicación y entrega (30 segundos)
Muestra el repositorio y la URL real de GitHub Pages cuando la publicación esté terminada. Explica que GitHub aloja archivos HTML, CSS, JavaScript e imágenes. No es necesario instalar un servidor de base de datos.

Entrega el ZIP del proyecto y el enlace publicado en la plataforma de la clase desde tu propia cuenta.

## Preguntas que pueden hacerte
- **¿Por qué es dinámico?** Porque responde a acciones: cambia el tema, busca personajes, filtra artículos, crea alertas, abre modales y ejecuta el quiz.
- **¿Qué hace Bootstrap?** Aporta la cuadrícula responsiva y componentes como navbar, carrusel, modal y alertas.
- **¿Qué hace tu CSS?** Personaliza colores, fuentes, espaciado, tamaños, efectos hover y diseño móvil.
- **¿Dónde se guardan los datos?** Solo el modo de apariencia se guarda en localStorage. Las respuestas del quiz y el formulario permanecen en memoria mientras la página está abierta.
- **¿El formulario envía mensajes solo?** No. Construye un mailto. El usuario revisa y envía desde su aplicación de correo.
- **¿Para qué sirven los metadatos?** Describen cada página para navegadores, buscadores y vistas previas al compartir. No garantizan una posición en Google.
- **¿Necesita internet?** Los archivos locales funcionan sin internet; Google Fonts, YouTube, Google Maps, los enlaces y la publicación sí lo necesitan.
