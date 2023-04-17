// script para que el boton aparezca cuando el usuario haga scroll

const botonSubir = document.getElementById('boton-subir');

window.addEventListener('scroll', () => {
  var scrollPos = window.scrollY;
  console.log(scrollPos)
  if (scrollPos > 100) { // Ajusta este valor al punto donde quieres que aparezca el botón
    botonSubir.classList.add('visible');
    botonSubir.classList.remove('hidden');
  } else {
    botonSubir.classList.add('hidden');
    botonSubir.classList.remove('visible');
  }
});