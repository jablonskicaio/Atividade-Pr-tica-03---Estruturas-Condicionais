/*
12. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
*/

const qtdNumeros = 10;
let media = 0;
let positivos = 0;
let negativos = 0;

for (let contador = 1; contador <= qtdNumeros; contador++) {
    let numero = parseFloat(prompt(`Insira um número:`));
    media = media + numero;
    
    if(numero < 0){
        negativos = negativos + 1;
    }else{
        positivos = positivos + 1;
    }
}

let media1 = media/qtdNumeros;
let negativos1 = (negativos/qtdNumeros)*100;
let positivos1 = (positivos/qtdNumeros)*100;

document.write(`A media aritmetica é ${media1}.`);
document.write(`<br>`);

document.write(`O numero de negativos foi de ${negativos}.`);
document.write(`<br>`);

document.write(`o numero de positivos foi de ${positivos}.`);
document.write(`<br>`);

document.write(`porcentagem de negativo é ${negativos1}.`);
document.write(`<br>`);

document.write(`porcentagem de positivo é ${positivos1}.`);
document.write(`<br>`);
