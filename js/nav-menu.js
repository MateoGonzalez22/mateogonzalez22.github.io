const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
let isMenuOpen = false;
let isAnimating = false;


window.closeMenu = function () {
    if(isMenuOpen){
        toggleOpenMenu()
    }
};


const toggleOpenMenu = () => {    
    if (!isMenuOpen) {
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-visible');

        menu.addEventListener('transitionend', () => {
            isAnimating = false;
        }, { once: true });
    } else {
        menu.classList.remove('menu-visible');
        menu.classList.add('menu-hidden');
        isAnimating = false;
    }

    isMenuOpen = !isMenuOpen;
    isAnimating = true;
}

menuToggle.addEventListener('click', () => {    
    toggleOpenMenu()
});


/*
Cuando el menu se abre y crece su max-height esto provoca que el tamaño total del scroll crezca
y se llame a la funcion del evento 'scroll' (esto provoca que el menu se ciere apenas se empeiza a abrir)
Por eso utilice el evento transitionend para controlar cuando termina la animacion y evitar
eventos no esperados.
*/

// const handleScroll = () => {
//     if (!isAnimating) {
//         menu.classList.remove('menu-visible');
//         menu.classList.add('menu-hidden');
//         document.body.classList.remove('menu-open');
//         isMenuOpen = false;
//     }
// };

// window.addEventListener('scroll', handleScroll);
