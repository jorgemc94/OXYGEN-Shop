//Nav menu

    const menu = document.getElementById('menu');
    const content = document.getElementById('content');
    const borrar = document.getElementById('borrar');


    menu.addEventListener('click',() => {
        if(content.style.display === 'none' || content.style.display === '') {
            menu.style.display = 'none';
            content.style.display = 'block';
            borrar.style.display = 'block';

            borrar.addEventListener('click', () => {
                content.style.display = 'none';
                borrar.style.display = 'none';
                menu.style.display = 'inline-block';
            })
        } else {
            content.style.display = 'none';
        }
    })