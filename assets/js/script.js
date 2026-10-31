/* JavaScript propio: tema, búsqueda, modales, quiz, filtros y contacto. */
'use strict';
// 1. Selectores y preferencia de modo claro/oscuro.
const $ = (id) => document.getElementById(id);
const temaKey = 'grandline-tema';
const themeButton = $('tema');
function aplicarTema(tema) {
  const oscuro = tema === 'dark';
  document.documentElement.setAttribute('data-bs-theme', oscuro ? 'dark' : 'light');
  themeButton.setAttribute('aria-pressed', String(oscuro));
  themeButton.setAttribute('aria-label', oscuro ? 'Activar modo claro' : 'Activar modo oscuro');
  themeButton.querySelector('i').className = oscuro ? 'bi bi-sun' : 'bi bi-moon-stars';
  themeButton.querySelector('span').textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
}
try { aplicarTema(localStorage.getItem(temaKey) || 'light'); } catch { aplicarTema('light'); }
themeButton.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  aplicarTema(next);
  try { localStorage.setItem(temaKey, next); } catch { /* Funciona incluso sin almacenamiento. */ }
});
// 2. Fecha del pie y botón fijo para volver al inicio.
document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });
const topButton = $('subir');
window.addEventListener('scroll', () => { topButton.hidden = window.scrollY < 450; }, { passive: true });
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));
// Crea alertas Bootstrap que pueden cerrarse con la X.
function alerta(contenedor, texto, tipo = 'info') {
  contenedor.replaceChildren();
  const box = document.createElement('div');
  box.className = `alert alert-${tipo} alert-dismissible fade show`;
  box.setAttribute('role', 'alert');
  const content = document.createElement('span');
  content.textContent = texto;
  const close = document.createElement('button');
  close.type = 'button'; close.className = 'btn-close';
  close.setAttribute('data-bs-dismiss', 'alert'); close.setAttribute('aria-label', 'Cerrar alerta');
  box.append(content, close); contenedor.append(box);
}
// 3. Buscador que admite palabras con o sin tildes.
const normalizar = texto => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
$('buscar')?.addEventListener('input', event => {
  const termino = normalizar(event.target.value); let visibles = 0;
  document.querySelectorAll('.crew-item').forEach(item => {
    item.hidden = !normalizar(item.dataset.name).includes(termino);
    if (!item.hidden) visibles++;
  });
  $('sinResultados').hidden = visibles > 0;
});
// 4. Las fichas se muestran en un modal usando la API de Bootstrap.
if ($('fichaModal')) {
  const ficha = new bootstrap.Modal($('fichaModal'));
  document.querySelectorAll('.detalle').forEach(button => button.addEventListener('click', () => {
    $('fichaTitulo').textContent = button.dataset.name;
    $('fichaRol').textContent = button.dataset.role;
    $('fichaDescripcion').textContent = button.dataset.description;
    ficha.show(button);
  }));
}
// 5. Quiz: las respuestas solo viven en memoria durante la visita.
if ($('quizModal')) {
  const preguntas = [
    { texto: '¿Quién es el capitán de los Sombrero de Paja?', opciones: ['Zoro', 'Luffy', 'Sanji'], correcta: 1 },
    { texto: '¿Qué función cumple Nami en la tripulación?', opciones: ['Navegante', 'Médico', 'Músico'], correcta: 0 },
    { texto: '¿Qué mar legendario desea encontrar Sanji?', opciones: ['East Blue', 'Calm Belt', 'All Blue'], correcta: 2 }
  ];
  let actual = 0, puntos = 0, respondida = false;
  const quiz = new bootstrap.Modal($('quizModal'));
  function mostrarPregunta() {
    respondida = false;
    const pregunta = preguntas[actual];
    $('quizProgreso').textContent = `Pregunta ${actual + 1} de ${preguntas.length}`;
    $('quizPregunta').textContent = pregunta.texto;
    $('quizAlerta').replaceChildren(); $('quizOpciones').replaceChildren(); $('quizSiguiente').hidden = true;
    pregunta.opciones.forEach((opcion, indice) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'btn quiz-option'; button.textContent = opcion;
      button.addEventListener('click', () => {
        if (respondida) return;
        respondida = true;
        const correcta = indice === pregunta.correcta;
        if (correcta) puntos++;
        document.querySelectorAll('.quiz-option').forEach(b => { b.disabled = true; });
        alerta($('quizAlerta'), correcta ? '¡Correcto, nakama!' : `La respuesta correcta es ${pregunta.opciones[pregunta.correcta]}.`, correcta ? 'success' : 'warning');
        $('quizSiguiente').textContent = actual === preguntas.length - 1 ? 'Ver resultado' : 'Siguiente pregunta';
        $('quizSiguiente').hidden = false; $('quizSiguiente').focus();
      });
      $('quizOpciones').append(button);
    });
  }
  $('abrirQuiz').addEventListener('click', () => { actual = 0; puntos = 0; mostrarPregunta(); quiz.show($('abrirQuiz')); });
  $('quizSiguiente').addEventListener('click', () => {
    if (actual >= preguntas.length) { actual = 0; puntos = 0; mostrarPregunta(); $('quizOpciones').querySelector('button').focus(); return; }
    if (!respondida) return;
    actual++;
    if (actual < preguntas.length) { mostrarPregunta(); $('quizOpciones').querySelector('button').focus(); return; }
    $('quizProgreso').textContent = 'Travesía completada';
    $('quizPregunta').textContent = `Tu puntuación: ${puntos} de ${preguntas.length}`;
    $('quizOpciones').replaceChildren();
    alerta($('quizAlerta'), puntos === preguntas.length ? '¡Excelente! Conoces muy bien a la tripulación.' : '¡Buen viaje! Explora las fichas y vuelve a intentarlo.', 'success');
    $('quizSiguiente').textContent = 'Volver a jugar';
  });
}
// 6. Filtro de tarjetas de artículos por categoría.
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed', 'true');
  let count = 0;
  document.querySelectorAll('.article-item').forEach(item => {
    item.hidden = button.dataset.filter !== 'todos' && item.dataset.category !== button.dataset.filter;
    if (!item.hidden) count++;
  });
  $('articulosEstado').textContent = count === 1
    ? '1 artículo disponible en esta categoría.'
    : `${count} artículos disponibles en esta categoría.`;
}));
// 7. Validación, resumen en modal y enlace mailto con datos codificados.
if ($('contactoForm')) {
  const modal = new bootstrap.Modal($('correoModal'));
  $('contactoForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const nombre = $('nombre').value.trim(), correo = $('correo').value.trim(), mensaje = $('mensaje').value.trim();
    if (!nombre || mensaje.length < 10) { alerta($('contactoAlerta'), 'Escribe tu nombre y un mensaje de al menos 10 caracteres.', 'warning'); return; }
    const asunto = $('asunto').value;
    const texto = `Nombre: ${nombre}\nCorreo: ${correo}\nAsunto: ${asunto}\n\n${mensaje}`;
    $('resumenCorreo').textContent = texto;
    $('enviarCorreo').href = `mailto:orioljose10@gmail.com?subject=${encodeURIComponent('[Grand Line] ' + asunto)}&body=${encodeURIComponent(texto)}`;
    modal.show(form.querySelector('[type="submit"]'));
  });
  $('enviarCorreo').addEventListener('click', () => {
    modal.hide();
    alerta($('contactoAlerta'), 'Se solicitó abrir tu aplicación de correo. Confirma el envío allí; si no se abre, usa el botón de correo directo.', 'info');
  });
}
// 8. Privacidad: permite borrar la única preferencia guardada.
$('borrarPreferencia')?.addEventListener('click', () => {
  try {
    localStorage.removeItem(temaKey); aplicarTema('light');
    alerta($('privacidadAlerta'), 'Preferencia eliminada. Se ha restablecido el modo claro.', 'success');
  } catch { alerta($('privacidadAlerta'), 'El navegador bloquea el acceso al almacenamiento. Puedes borrar los datos del sitio desde su configuración.', 'warning'); }
});

// 9. Al cerrar un modal se devuelve el foco al botón que lo abrió.
document.querySelectorAll('.modal').forEach(elemento => {
  let botonOrigen;
  elemento.addEventListener('show.bs.modal', event => { botonOrigen = event.relatedTarget; });
  elemento.addEventListener('hidden.bs.modal', () => {
    if (botonOrigen instanceof HTMLElement) botonOrigen.focus();
  });
});
