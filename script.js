const button = document.querySelector('.Convert-button');
const select = document.querySelector('#currency-from');

function convertCurrency() {
    const input = document.querySelector('.currency-input').value;
    const ParagraphValue = document.querySelector('.value-placed');
    const ParagraphResult = document.querySelector('.value-result');
    const select = document.querySelector('#currency-from').value;


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

function changeCurrency() {
    const img = document.querySelector('#bandeiraUsa')

    if (select.value == 'USD') {
        img.src = './assets/USA.png'
    }

    if (select.value == 'EUR') {
        img.src = './assets/images.euro.png'
    }

    if (select.value == 'BRL') {
        img.src = './assets/brasil.png'
    }

    convertCurrency()
}
select.addEventListener('change', changeCurrency);
button.addEventListener('click', convertCurrency);