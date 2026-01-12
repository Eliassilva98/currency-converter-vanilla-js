const buttonConvert = document.querySelector('.convertButton');
const selectOrigin = document.querySelector('.selectFrom');
const selectDestiny = document.querySelector('.selectTo');

function convertValues() {
    const inputValue = Number(document.querySelector('.inputValues').value);
    const currencyOrigin = document.querySelector('.moedaValorAConverter'); // Valor de Origem
    const currencyDestiny = document.querySelector('.moedaValorConvertido'); // Valor de Destino

    const dolarToday = 5.3;
    const euroToday = 6.2;
    const francoSuicoToday = 6.7;
    const libraEsterlinaToday = 7.2;

    // Valores de Origem
   if (selectOrigin.value === 'real') {
        currencyOrigin.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValue);
   }

   if (selectOrigin.value === 'dolar') {
        currencyOrigin.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue);
   }

   if (selectOrigin.value === 'euro') {
        currencyOrigin.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue);
   }

   if (selectOrigin.value === 'franco suico') {
        currencyOrigin.innerHTML = new Intl.NumberFormat('fr-CH', {
            style: 'currency',
            currency: 'CHF'
        }).format(inputValue);
   }

   if (selectOrigin.value === 'libra') {
        currencyOrigin.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue);
   }

   // CONVERTE: ORIGEM -> REAL (BRL)
   let valueInReal;

   if(selectOrigin.value === 'real') valueInReal = inputValue;
   if(selectOrigin.value === 'dolar') valueInReal = inputValue * dolarToday;
   if(selectOrigin.value === 'euro') valueInReal = inputValue * euroToday;
   if(selectOrigin.value === 'franco suico') valueInReal = inputValue * francoSuicoToday;
   if(selectOrigin.value === 'libra') valueInReal = inputValue * libraEsterlinaToday;

   // CONVERTE: REAL (BRL) -> DESTINO
   let finalValue;

   if(selectDestiny.value === 'real') finalValue = valueInReal;
   if(selectDestiny.value === 'dolar') finalValue = valueInReal / dolarToday;
   if(selectDestiny.value === 'euro') finalValue = valueInReal / euroToday;
   if(selectDestiny.value === 'franco suico') finalValue = valueInReal / francoSuicoToday;
   if(selectDestiny.value === 'libra') finalValue = valueInReal / libraEsterlinaToday;

   // MOSTRA O VALOR DESTINO (formatação)
   if(selectDestiny.value === 'real') {
        currencyDestiny.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(finalValue);
   }

   if(selectDestiny.value === 'dolar') {
        currencyDestiny.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(finalValue);
   }

   if(selectDestiny.value === 'euro') {
        currencyDestiny.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(finalValue);
   }

   if(selectDestiny.value === 'franco suico') {
        currencyDestiny.innerHTML = new Intl.NumberFormat('fr-CH', {
            style: 'currency',
            currency: 'CHF'
        }).format(finalValue);
   }

   if(selectDestiny.value === 'libra') {
        currencyDestiny.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(finalValue);
   }
}

function changeValues() {
    const currencyNameOrigin = document.querySelector('.moedaOrigem');
    const imageOrigin = document.querySelector('.bandeiraOrigem');
    const currencyNameDestiny = document.querySelector('.moedaDestino');
    const imageDestiny = document.querySelector('.bandeiraDestino');
    
    // ORIGEM
    if (selectOrigin.value === 'real') {
        currencyNameOrigin.innerHTML = 'Real';
        imageOrigin.src = './assets/Real.png';
    }

    if (selectOrigin.value === 'dolar') {
        currencyNameOrigin.innerHTML = 'Dólar Americano';
        imageOrigin.src = './assets/Dolar.png';
    }

    if (selectOrigin.value === 'euro') {
        currencyNameOrigin.innerHTML = 'Euro';
        imageOrigin.src = './assets/Euro.png';
    }

    if (selectOrigin.value === 'franco suico') {
        currencyNameOrigin.innerHTML = 'Franco Suiço';
        imageOrigin.src = './assets/suica.png';
    }

    if (selectOrigin.value === 'libra') {
        currencyNameOrigin.innerHTML = 'Libra Esterlina';
        imageOrigin.src = './assets/reino-unido.png';
    }
    
    // DESTINO
    if (selectDestiny.value === 'dolar') {
        currencyNameDestiny.innerHTML = 'Dólar Americano';
        imageDestiny.src = './assets/Dolar.png';

    }

    if (selectDestiny.value === 'real') {
        currencyNameDestiny.innerHTML = 'Real';
        imageDestiny.src = './assets/Real.png';
    }

    if (selectDestiny.value === 'euro') {
        currencyNameDestiny.innerHTML = 'Euro';
        imageDestiny.src = './assets/Euro.png';
    }

    if (selectDestiny.value === 'franco suico') {
        currencyNameDestiny.innerHTML = 'Franco Suiço';
        imageDestiny.src = './assets/suica.png';
    }

    if (selectDestiny.value === 'libra') {
        currencyNameDestiny.innerHTML = 'Libra Esterlina';
        imageDestiny.src = './assets/reino-unido.png';
    }

    convertValues();
}

selectDestiny.addEventListener('change', changeValues);
selectOrigin.addEventListener('change', changeValues);
buttonConvert.addEventListener('click', convertValues);