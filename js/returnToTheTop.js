//Return to the top

    const btn_Up = document.getElementById('button_Up');

    //Evento de escucha cuando hacemos click a nuestro boton con id btn_Up
    btn_Up.addEventListener("click", ()=> {
        //Funcion de temporizar, se ejecutará 0.2 segundos despues de hacer click al botom
        setTimeout(() => {
            //Metodo que especifica que la ventana se desplaza hacia la parte superior de la pagina de forma suave
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 200);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY < (document.body.scrollHeight - window.innerHeight) * 0.25) {
            btn_Up.style.display = 'none';
        } else {
            btn_Up.style.display = 'block';
        }
    })