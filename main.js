const cityInput = document.getElementById('city-input');
const volumeInput = document.getElementById('volume-input');
const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');
const resultContainer = document.getElementById('result-container');
  
calculateBtn.addEventListener('click', () => {
const city = cityInput.value.toUpperCase();
const cubagem = parseFloat(volumeInput.value.replace(',', '.'));
let regiao = '';
if (city.trim() === '' || isNaN(cubagem)) {
    resultContainer.textContent = 'Por favor, preencha a cidade e o volume corretamente.';
    return;
}

clearBtn.addEventListener('click', () => {
    cityInput.value = '';
    volumeInput.value = '';
  
    resultContainer.textContent = '';
  });

let cidadeEncontrada = false;
for (let chave in regiao_cidades) {
    if (regiao_cidades[chave].includes(city)) {
    regiao = chave.toString();
    cidadeEncontrada = true;
    break;
    }
}

if (!cidadeEncontrada) {
    resultContainer.textContent = 'Cidade não encontrada. ENTRE EM CONTATO COM A LOGÍSTICA';
} else {
    let valorFrete, valorConstante;

    switch (regiao) {
    case 'ALTO CAPIBARIBE':
        [valorFrete, valorConstante] = function_1(cubagem);
        break;
    case 'ARARIPINA':
        [valorFrete, valorConstante] = function_2(cubagem);
        break;
        case 'BREJO PERNAMBUCANO':
        [valorFrete, valorConstante] = function_3(cubagem);
        break;
    case 'GARANHUNS':
    case 'ITAPARICA':
    case 'MATA MERIDIONAL PERNAMBUCANA':
    case 'MATA SETENTRIONAL PERNAMBUCANA':
    case 'MEDIO CAPIBARIBE':
        [valorFrete, valorConstante] = function_4(cubagem);
        break;
    case 'ITAMARACA':
    case 'SUAPE':
        [valorFrete, valorConstante] = function_5(cubagem);
        break;
    case 'PAJEU':
        [valorFrete, valorConstante] = function_6(cubagem);
        break;
    case 'PETROLINA':
        [valorFrete, valorConstante] = function_7(cubagem);
        break;
    case 'RECIFE':
    case 'VITORIA DE SANTO ANTAO':
        [valorFrete, valorConstante] = function_8(cubagem);
        break;
    case 'SALGUEIRO':
    case 'SERTAO DO MOXOTO':
        [valorFrete, valorConstante] = function_9(cubagem);
        break;
    case 'VALE DO IPANEMA':
    case 'VALE DO IPOJUCA':
        [valorFrete, valorConstante] = function_10(cubagem);
        break;
    default:
        
        return;
    }

    resultContainer.innerHTML = `Valor do frete: R$ ${valorFrete.toFixed(2)}<p>Valor tabelado do m³: R$ ${valorConstante}</p>`;
}
});