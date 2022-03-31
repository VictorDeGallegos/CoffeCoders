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

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

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
