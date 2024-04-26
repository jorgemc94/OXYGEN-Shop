const popup = document.getElementById('popup');
const close = document.getElementById('close');
const namePopup = document.getElementById('namePopup');
const emailPopup = document.getElementById('emailPopup');
const submitPopup = document.getElementById('submitPopup');
const titlePopup = document.getElementById('titlePopup');
const descriptionPopup = document.getElementById('descriptionPopup');


localStorage.setItem('newsletterShown', 'false');

setTimeout(() => {
    if (localStorage.getItem('newsletterShown') !== 'false') {
        popup.style.display = 'flex';
    }
}, 5000);

window.addEventListener('scroll', () => {
    if(window.scrollY/document.documentElement.scrollHeight >= 0.25 && localStorage.getItem('newsletterShown') !== 'false') {
        popup.style.display = 'flex';
    }
})


close.addEventListener('click', () => {
    popup.style.display = 'none';
    localStorage.setItem('newsletterShown', 'true');
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        popup.style.display = 'none';
        localStorage.setItem('newsletterShown', 'true');
    }
})


document.addEventListener('click', (event) => {
    if (event.target !== popup){
        popup.style.display = 'none';
        localStorage.setItem('newsletterShown', 'true');
    }
})


namePopup.addEventListener('click', (event) => {
    event.stopPropagation();
});

emailPopup.addEventListener('click', (event) => {
    event.stopPropagation();
});

titlePopup.addEventListener('click', (event) => {
    event.stopPropagation();
})

descriptionPopup.addEventListener('click', (event) => {
    event.stopPropagation();
})
