let burger = document.querySelector('.header-burger');
let menuMobile = document.querySelector('.menu-device__wrap');
let openMenu = document.querySelector('.open-menu');


burger.addEventListener('click', ()=> {
    menuMobile.classList.toggle('open-menu');
});
