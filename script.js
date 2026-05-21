const button = document.querySelector('.Convert-button');

function convertCurrency() {
    const input = document.querySelector('.currency-input').value;
    const ParagraphValue = document.querySelector('.value-placed');
    const ParagraphResult = document.querySelector('.value-result');

    ParagraphValue.innerHTML = new Intl.NumberFormat('pt-PT', {
        style: 'currency',
        currency: 'AOA'
    }).format(input);

    ParagraphResult.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(convertCurrency);

    const ValllorEmDollar = 5.25;
    convertCurrency = input / ValllorEmDollar;
}
button.addEventListener('click', convertCurrency);