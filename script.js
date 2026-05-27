const button = document.querySelector('.Convert-button');
const selectUM = document.querySelector('#SelectUM');
const select2 = document.querySelector('#SelectDois');
const iMGconvert = document.getElementById("IMGconvert");
//FUNÇÃO PARA SABER SE O MEU PRIMEIRO SELECT FOI ABERTO

function PRIMEIROSELECT() {
    const selectUM = document.getElementById('SelectUM');
    const img1 = document.querySelector('.CasoUm');
    const paragrafo1 = document.getElementById('paragrafo1');

    if (selectUM.value == 'AOA') {
        img1.src = './assets/ANGOLA.png'
        paragrafo1.innerHTML = 'Kz 000.00'
    }

    if (selectUM.value == 'USD') {
        img1.src = './assets/USA.png'
        paragrafo1.innerHTML = '$ 000.00'
    }

    if (selectUM.value == 'EUR') {
        img1.src = './assets/images.euro.png'
        paragrafo1.innerHTML = '€ 000.00'
    }

    if (selectUM.value == 'BRL') {
        img1.src = './assets/BRASIL.png'
        paragrafo1.innerHTML = 'R$ 000.00'
    }

}

//FUNÇÃO PARA SABER SE O MEU SEGUNDO SELECT FOI ABERTO
function SEGUNDOSELECT() {
    const Select2 = document.getElementById("SelectDois");
    const img2 = document.getElementById("bandeiraUsa");
    const paragrafo2 = document.getElementById('paragrafo2')

    if (select2.value == 'USD') {
        img2.src = './assets/USA.png'
        paragrafo2.innerHTML = '$ 000.00'
    }

    if (select2.value == 'EUR') {
        img2.src = './assets/images.euro.png'
        paragrafo2.innerHTML = '€ 000.00'
    }

    if (select2.value == 'BRL') {
        img2.src = './assets/BRASIL.png'
        paragrafo2.innerHTML = 'R$ 000.00'
    }
    console.log(img2.src)

    if (select2.value == 'AOA') {
        img2.src = './assets/ANGOLA.png'
        paragrafo2.innerHTML = 'Kz 000.00'
    }
}
////////////BOTÃO DE CONVERTER////////////////
function CONVERTERVALORES() {
    const input = Number(document.getElementById('input').value);
    const ValorOrigem = document.querySelector('.Paragrafo1');
    const ValorDestino = document.querySelector('.Paragrafo2');
    const moedaOrigem = document.getElementById('SelectUM').value;
    const moedaDestino = document.getElementById('SelectDois').value;

    const moedas = {

        USD: 1,

        BRL: 5.45,

        EUR: 0.92,

        AOA: 910
    };

    const valorConvertido = (input / moedas[moedaOrigem] * moedas[moedaDestino]);

    const locais = {

        BRL: 'pt-BR',

        USD: 'en-US',

        EUR: 'de-DE',

        AOA: 'pt-AO'
    };

    const localDaMoeda = locais[moedaDestino]

    ValorOrigem.innerHTML = input

    ValorDestino.innerHTML = new Intl.NumberFormat(localDaMoeda, {
        style: 'currency',
        currency: moedaDestino
    }).format(valorConvertido);

}

//CHAMA AS NOSSAS FUNÇÕES GLOBALMENTE, COM EVENTOS LOOP
selectUM.addEventListener('change', PRIMEIROSELECT);
select2.addEventListener('change', SEGUNDOSELECT);
button.addEventListener('click', CONVERTERVALORES);