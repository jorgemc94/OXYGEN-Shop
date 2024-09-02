const popup = document.getElementById('popup');
const close = document.getElementById('close');
const namePopup = document.getElementById('namePopup');
const emailPopup = document.getElementById('emailPopup');
const submitPopup = document.getElementById('submitPopup');
const titlePopup = document.getElementById('titlePopup');
const descriptionPopup = document.getElementById('descriptionPopup');
const formPopup = document.getElementById('formPopup');

if (!localStorage.getItem('newsletterShown')) {
    localStorage.setItem('newsletterShown', 'false');
}

setTimeout(() => {
    if (localStorage.getItem('newsletterShown') === 'false') {
        popup.style.display = 'flex';
    }
}, 5000);

window.addEventListener('scroll', () => {
    if (window.scrollY / document.documentElement.scrollHeight >= 0.25 && localStorage.getItem('newsletterShown') === 'false') {
        popup.style.display = 'flex';
    }
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
    localStorage.setItem('newsletterShown', 'true');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        popup.style.display = 'none';
        localStorage.setItem('newsletterShown', 'true');
    }
});

document.addEventListener('click', (event) => {
    if (event.target !== popup && !popup.contains(event.target)) {
        popup.style.display = 'none';
        localStorage.setItem('newsletterShown', 'true');
    }
});

namePopup.addEventListener('click', (event) => {
    event.stopPropagation();
});

emailPopup.addEventListener('click', (event) => {
    event.stopPropagation();
});

titlePopup.addEventListener('click', (event) => {
    event.stopPropagation();
});

descriptionPopup.addEventListener('click', (event) => {
    event.stopPropagation();
});

submitPopup.addEventListener('click', (event) => {
    event.stopPropagation();
});

const validFormPopup = () => {
    formPopup.addEventListener('submit', (event) => {
        const popupValid = document.getElementById('popup');
        const emailUser = emailPopup.value;
        const nameUser = namePopup.value;
        let validEmail = false;
        let validName = false;
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        event.preventDefault();

        if (nameUser.length > 2 && nameUser.length < 100) {
            validName = true;
        }

        if (regex.test(emailUser)) {
            validEmail = true;
        }

        const urlPopup = 'https://jsonplaceholder.typicode.com/posts';
        const validationPopup = (urlPopup) => {
            if (validName && validEmail) {
                fetch(urlPopup, {
                    method: 'POST',
                    body: JSON.stringify({
                        name: nameUser,
                        email: emailUser
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((json) => {
                        console.log(json);
                        alert('User added successfully');
                        popupValid.style.display = 'none';
                        localStorage.setItem('newsletterShown', 'true');
                    })
                    .catch((error) => console.log(error));
            }
        };
        validationPopup(urlPopup);
    });
};

validFormPopup();
