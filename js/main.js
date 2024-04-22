//Scroll 

const progress = document.getElementById('progress');
//Evento en elemento windows
window.addEventListener('scroll', () => {
    //Scroll del usuario en px
    let scrollUser = document.documentElement.scrollTop;
    //Altura de nuestro documento en px menos la altura interior de la ventana en px
    let height = document.documentElement.scrollHeight - window.innerHeight
    //Porcentaje scroll
    let porcentageScroll = (scrollUser/height) * 100;
    //Aplicar el porcentaje a nuestro progreso
    progress.style.width = porcentageScroll + '%';
})

//Boton hacia arriba

const btn_Up = document.getElementById('button_Up');

btn_Up.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 200);
});
