const button = document.querySelector('.Convert-button');

function convertCurrency() {
    const input = document.querySelector('.currency-input').value;
    const ParagraphValue = document.querySelector('.value-placed');
    const ParagraphResult = document.querySelector('.value-result');

    ParagraphValue.innerHTML = input
    ParagraphResult.innerHTML = convertCurrency

    const ValllorEmDollar = 5.25;
    convertCurrency = input / ValllorEmDollar;
}
button.addEventListener('click', convertCurrency);