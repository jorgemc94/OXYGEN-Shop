
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');

    menu.addEventListener('click', () => {
        content.classList.toggle('nav__content__navbar--active');
        menu.classList.toggle('nav__content__menu--active');
    })
