const button = document.querySelector('.Convert-button');

function convertCurrency() {
    const input = document.querySelector('.currency-input').value;
    const ParagraphValue = document.querySelector('.value-placed');
    const ParagraphResult = document.querySelector('.value-result');
    const select = document.querySelector('#currency-from').value;
    console.log(select)

    const ValorEmDollar = 5.25;
    const ValorEmReal = 182.29;
    const ValorEmEuro = 1000;

    if (select == 'USD') {
        ParagraphResult.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(input / ValorEmDollar);
    }

    if (select == 'EUR') {
        ParagraphResult.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(input / ValorEmEuro);
    }

    if (select == 'BRL') {
        ParagraphResult.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format(input / ValorEmReal);
    }

    ParagraphValue.innerHTML = new Intl.NumberFormat('pt-AO', {
        style: 'currency',
        currency: 'AOA'
    }).format(input)

}
button.addEventListener('click', convertCurrency);