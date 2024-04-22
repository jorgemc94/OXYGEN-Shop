//Variables

const btn_Up = document.getElementById('button_Up');
const body = document.getElementById("body");

//Boton hacia arriba

btn_Up.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 200);
});
