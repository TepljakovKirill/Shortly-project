let burger = document.querySelector('.header-burger');
let menuMobile = document.querySelector('.menu-device__wrap');

burger.addEventListener('click', ()=> {
    menuMobile.classList.toggle('open-menu');
});
