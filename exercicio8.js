/*
8. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
...
*/
alert(`Bem vindo a tabuada da GrowDev!`);

let multiplicando = Number.parseInt(prompt(`Insira o multiplicando:`));
let multiplicador = Number.parseInt(prompt(`Insira a quantidade de multiplicadores desejados, eles começam no 1 até o número desejado:`));

for(let contador = 1; contador <= multiplicador; contador++){
    let resultado = multiplicando*contador
    document.write(`${multiplicando} x ${contador} = ${resultado}`);
    document.write(`<br>`);
}