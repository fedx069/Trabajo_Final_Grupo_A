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


// menu hamburguesa
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const menu_item = document.getElementById('btn-menu')

menu_btn.addEventListener('click', function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

menu_item.addEventListener('click', function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});