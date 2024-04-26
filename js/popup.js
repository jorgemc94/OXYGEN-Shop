const popup = document.getElementById('popup');
const close = document.getElementById('close');
const nameNewsletter = document.getElementById('nameNewsletter');
const emailNewsletter = document.getElementById('emailNewsletter');
const submitNewsletter = document.getElementById('submitNewsletter');
const titleNewsletter = document.getElementById('titleNewsletter');
const descriptionNewsletter = document.getElementById('descriptionNewsletter');


localStorage.setItem('newsletterShown', 'false');

setTimeout(() => {
    if (localStorage.getItem('newsletterShown') === 'false') {
        popup.style.display = 'flex';
    }
}, 5000);

window.addEventListener('scroll', () => {
    if(window.scrollY/document.documentElement.scrollHeight >= 0.25 && localStorage.getItem('newsletterShown') === 'false') {
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


nameNewsletter.addEventListener('click', (event) => {
    event.stopPropagation();
});

emailNewsletter.addEventListener('click', (event) => {
    event.stopPropagation();
});

titleNewsletter.addEventListener('click', (event) => {
    event.stopPropagation();
})

descriptionNewsletter.addEventListener('click', (event) => {
    event.stopPropagation();
})
