
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const inputName = document.getElementById('name');
        const userName = inputName.value;
        const inputEmail = document.getElementById('email');
        const userEmail = inputEmail.value;
        const inputCheckbox = document.getElementById('check');
        let checkedCorrect = false;
        let nameCorrect = false;
        let emailCorrect = false;
        event.preventDefault();
        if (userName.length < 2 || userName.length > 100) {
            inputName.style.cssText = 'border-bottom: 0.2rem solid red';
            alert ('Enter name valid');
            
        } else {
            inputName.style.cssText = '';
            inputName.value = '';
            nameCorrect = true;
        }

        if (!regex.test(userEmail)) {
            inputEmail.style.cssText = 'border-bottom: 0.2rem solid red';
            alert ('Enter mail valid');
        } else {
            inputEmail.style.cssText = '';
            inputEmail.value = '';
            emailCorrect = true;
        }

        if (!inputCheckbox.checked) {
            inputCheckbox.style.cssText = 'border: 0.2rem solid red';
            alert ('accept terms and conditions');
        } else {
            inputCheckbox.style.cssText = '';
            inputCheckbox.checked = false;
            checkedCorrect = true;
        }

        const url = 'https://jsonplaceholder.typicode.com/posts';
        const validation = (url) => {
        
        if (nameCorrect && emailCorrect && checkedCorrect) {
        fetch(url, {
            method: 'POST',
            body: {
                name: userName,
                email: userEmail
            }
        }).then((response) => {
            if (response.ok) {
                response.json()
                .then((json) => {
                    console.log(json);
                    alert ('User add successful');
                })
                .catch((error) => console.log(error)); 
            }
        })
        }
        }
        validation(url);
    })

   