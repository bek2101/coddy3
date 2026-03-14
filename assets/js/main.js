const menu = document.querySelector('.header__menu');
const menuBtn = document.querySelector('.header__menu-btn');

function showMenu(menu, btn) {
    if(menu && btn) {
        btn.addEventListener('click', () => {
           menu.classList.toggle('active');
           document.body.classList.toggle('lock');
           menuBtn.children[0].classList.toggle('fa-xmark');
        })
    }
}

showMenu(menu, menuBtn);