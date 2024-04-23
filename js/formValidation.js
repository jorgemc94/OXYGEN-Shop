//Validación formulario

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let inputName = document.getElementById('name');
    let inputEmail = document.getElementById('email');
    let inputCheckbox = document.getElementById('check');

    //Funcion validacion nombre

    const validName = () => {
        // Si la longitud del valor introducido es menor a 2 o mayor a 100
        if(inputName.value.length <= 2 || inputName.value.length > 100) {
            //Asignamos el borde del input de color rojo
            inputName.style.border = '0.2rem solid red';
            return false;
        } else {
            //Asignamos el borde del input de color verde
            inputName.style.border = '0.2rem solid green';
            return true;
        }
    }

    inputName.onchange = () => validName(); //Asignamos el evento onchange a nuestro input y cada vez que cambie su estado llama a la funcion validName();

    //Funcion validación email

    const validEmail = () => {
        //Cuando el valor del inputEmail sea diferente a la variable con la expresion regular
        if(!regex.test(inputEmail.value)) {
            //Asignamos el borde del input de color rojo
            inputEmail.style.border = '0.2rem solid red';
            return false
        } else {
            //Asignamos el borde del input de color verde
            inputEmail.style.border = '0.2rem solid green';
            return true
        }
    }

    inputEmail.onchange = () => validEmail(); //Asignamos el evento onchange a nuestro inputEmail y cada vez que cambie su estado llama a la funcion validEmail();

    //Funcion validacion checkbox

    const validCheck = () => {
        //Si nuestro check es distinto de checked
        if(!inputCheckbox.checked) {
            //Asignamos el borde del input de color rojo
            inputCheckbox.style.border = '0.2rem solid red';
            return false;
        } else {
            //Dejamos nuestro input por defecto
            inputCheckbox.style.border = '';
            return true;
        }
    }

    inputCheckbox.onchange = () => validCheck();//Asignamos el evento onchange a nuestro check y cada vez que cambie su estado llama a la funcion validCheck();