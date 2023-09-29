import {regiao_cidades} from "./dic-regiao-cidade.js";
import {functionFreight1, functionFreight2, functionFreight3, functionFreight4, functionFreight5, functionFreight6, functionFreight7, functionFreight8, functionFreight9, functionFreight10} from './functions.js';

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
        [valorFrete, valorConstante] = functionFreight1(cubagem);
        break;
    case 'ARARIPINA':
        [valorFrete, valorConstante] = functionFreight2(cubagem);
        break;
        case 'BREJO PERNAMBUCANO':
        [valorFrete, valorConstante] = functionFreight3(cubagem);
        break;
    case 'GARANHUNS':
    case 'ITAPARICA':
    case 'MATA MERIDIONAL PERNAMBUCANA':
    case 'MATA SETENTRIONAL PERNAMBUCANA':
    case 'MEDIO CAPIBARIBE':
        [valorFrete, valorConstante] = functionFreight4(cubagem);
        break;
    case 'ITAMARACA':
    case 'SUAPE':
        [valorFrete, valorConstante] = functionFreight5(cubagem);
        break;
    case 'PAJEU':
        [valorFrete, valorConstante] = functionFreight6(cubagem);
        break;
    case 'PETROLINA':
        [valorFrete, valorConstante] = functionFreight7(cubagem);
        break;
    case 'RECIFE':
    case 'VITORIA DE SANTO ANTAO':
        [valorFrete, valorConstante] = functionFreight8(cubagem);
        break;
    case 'SALGUEIRO':
    case 'SERTAO DO MOXOTO':
        [valorFrete, valorConstante] = functionFreight9(cubagem);
        break;
    case 'VALE DO IPANEMA':
    case 'VALE DO IPOJUCA':
        [valorFrete, valorConstante] = functionFreight10(cubagem);
        break;
    default:
        
        return;
    }

    resultContainer.innerHTML = `Valor do frete: R$ ${valorFrete.toFixed(2)}<p>Valor tabelado do m³: R$ ${valorConstante}</p>`;
}
});