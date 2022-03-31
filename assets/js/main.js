/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validar que existen variables
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // Añadimos el show-menu class a la etiqueta div con el nav__menu class
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // Cuando hacemos clic en cada nav__link, eliminamos el show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const nav = document.getElementById('header');
  // Cuando el desplazamiento es mayor que 80 altura de la vista, agregue la scroll-header class de desplazamiento a la etiqueta del encabezado
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // Cuando el pergamino es superior a 560 altura de la vista, agregue la clase de show-scroll a la etiqueta A con la clase Scroll-Top
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

// Tema seleccionado previamente (si seleccionó el usuario)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtenemos el tema actual que la interfaz tiene validando la clase de tema oscuro
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right');

// Validamos si el usuario eligió previamente un tema.
if (selectedTheme) {
  // Si se cumple la validación, le preguntamos cuál era el problema saber si nos activamos o desactivamos la oscuridad.
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}

// Activar / desactivar el tema manualmente con el botón.
themeButton.addEventListener('click', () => {
  // Añadir o quitar el tema oscuro / icono
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Salvamos el tema y el icono actual que el usuario eligió.
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
/*=============== SLIDE DEVELOPERS ===============*/
(function () {
  const sliders = [...document.querySelectorAll('.testimony__body')];
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value;

  buttonNext.addEventListener('click', () => {
    changePosition(1);
  });

  buttonBefore.addEventListener('click', () => {
    changePosition(-1);
  });

  const changePosition = (add) => {
    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
    value = Number(currentTestimony);
    value += add;

    sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');
    if (value === sliders.length + 1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }

    sliders[value - 1].classList.add('testimony__body--show');
  };
})();
