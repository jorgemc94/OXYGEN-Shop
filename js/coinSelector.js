    const currencyValue = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';
    const euro = document.getElementById('eur');
    const libra = document.getElementById('gbp');
    const dolar = document.getElementById('usd')
    let basic = document.getElementById('basic');
    let profesional = document.getElementById('profesional');
    let premium = document.getElementById('premium');
    let usdToeurProfesional;
    let usdToeurPremium;
    let usdTogbpProfesional;
    let usdTogbpPremium;
    fetch(currencyValue).then((response) => {
        if (response.ok) {
            response.json()
            .then((jsonUsd) => {
                let eur = jsonUsd.usd.eur;
                let gbp = jsonUsd.usd.gbp;
                usdToeurProfesional = (25 * (eur)).toFixed(2);
                usdToeurPremium = (60 * eur).toFixed(2);
                usdTogbpProfesional = (25 * gbp).toFixed(2);
                usdTogbpPremium = (60 * (gbp)).toFixed(2);
            })
            
            euro.addEventListener('click', () => {
                basic.innerText = '';
                basic.innerText = `€${0}`;
                profesional.innerText = '';
                profesional.innerText = `€${usdToeurProfesional}`
                premium.innerText = '';
                premium.innerText = `€${usdToeurPremium}`;
            })

            libra.addEventListener('click', () => {
                basic.innerText = '';
                basic.innerText = `£${0}`;
                profesional.innerText = '';
                profesional.innerText = `£${usdTogbpProfesional}`
                premium.innerText = '';
                premium.innerText = `£${usdTogbpPremium}`;
            })

            dolar.addEventListener('click', () => {
                basic.innerText = '';
                basic.innerText = `$0`;
                profesional.innerText = '';
                profesional.innerText = `$25`;
                premium.innerText = '';
                premium.innerText = `$60`;
            })
        }
    })


