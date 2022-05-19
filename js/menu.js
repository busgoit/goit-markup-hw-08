(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-menu__btn--open'),
    closeMenuBtn: document.querySelector('.mob-menu__btn--close'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('mob-menu-opened');
    refs.menu.classList.toggle('is-hidden');
  }
})();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);
//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.header__mob-menu-btn--open'),
//     closeMenuBtn: document.querySelector('.header__mob-menu-btn--close'),
//     menu: document.querySelector('.header__mob-menu'),
//     body: document.querySelector('.body'),
//   };
//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   function toggleMenu() {
//     refs.menu.classList.toggle('mob-menu-closed');
//     refs.body.classList.toggle('mob-menu-opened');
//   }
// })();
