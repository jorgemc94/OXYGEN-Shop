const currencyValue = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';
let eur ;
let gbp ;
const euro = document.getElementById('eur');
const libra = document.getElementById('gbp');
const dolar = document.getElementById('usd')
let basic = document.getElementById('basic');
let profesional = document.getElementById('profesional');
let premium = document.getElementById('premium');
let usdToeurPro;
let usdToeurProfesional;
let usdToeurPre;
let usdToeurPremium;
let usdTogbpPro;
let usdTogbpProfesional;
let usdTogbpPre;
let usdTogbpPremium;
fetch(currencyValue).then((response) => {
    if (response.ok) {
        response.json()
        .then((jsonUsd) => {
            eur = jsonUsd.usd.eur;
            gbp = jsonUsd.usd.gbp;
            usdToeurPro = 25 * (eur);
            usdToeurProfesional = usdToeurPro.toFixed(2);
            usdToeurPre = 60 * (eur);
            usdToeurPremium = usdToeurPre.toFixed(2);
            usdTogbpPro = 25 * (gbp);
            usdTogbpProfesional = usdTogbpPro.toFixed(2);
            usdTogbpPre = 60 * (gbp);
            usdTogbpPremium = usdTogbpPre.toFixed(2);
        })
        
        euro.addEventListener('click', () => {
            basic.innerText = '';
            basic.innerText = `€${0 * eur}`;
            profesional.innerText = '';
            profesional.innerText = `€${usdToeurProfesional}`
            premium.innerText = '';
            premium.innerText = `€${usdToeurPremium}`;
        })

        libra.addEventListener('click', () => {
            basic.innerText = '';
            basic.innerText = `£${0 * gbp}`;
            profesional.innerText = '';
            profesional.innerText = `£${usdTogbpProfesional}`
            premium.innerText = '';
            premium.innerText = `£${usdTogbpPremium}`;
        })

        dolar.addEventListener('click', () => {
            basic.innerText = '';
            basic.innerText = `$0`;
            profesional.innerText = '';
            profesional.innerText = `$25`
            premium.innerText = '';
            premium.innerText = `$60`;
        })
    }
})


