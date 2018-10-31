export default class Example {
    toggleDisplay() {
        let menuBtn = document.querySelector('.js-hamburger-menu');
        let menu = document.querySelector('.js-nav-container');
        let body = document.querySelector('body');

        menuBtn.addEventListener('click', () => {
            body.classList.toggle('u-scroll');
            menu.classList.toggle('u-visibility-hidden');
            menuBtn.classList.toggle('c-nav__hamburger-menu--active');
        });
    }
}
