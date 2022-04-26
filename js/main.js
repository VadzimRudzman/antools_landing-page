// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const menuCloseItem = document.querySelector('.menu__close');
    const menuLinks = document.querySelectorAll('.menu__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('menu__active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('menu__active');
    });
    if (window.innerWidth <= 079) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('menu__active');
            });
        }
    }
}());

