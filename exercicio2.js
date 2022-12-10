/*
2. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.
*/

let numero1 =  parseFloat(prompt(`Insira um número:`));
let numero2 =  parseFloat(prompt(`Insira outro número:`));
let operacao = prompt(`Qual operação será realizada: * para multiplicação, + para adição, - para subtração e / para divisão.`);
let resultado = 0

switch(operacao){
    case "*":
        resultado = numero1*numero2
        break;
    case "+":
        resultado = numero1+numero2
        break;
    case "-":
        resultado = numero1-numero2
        break;
    case "/":
        resultado = numero1/numero2
        break;
    default:
        alert(`Operação inválida`);
        break;
}

alert(`O seu resultado é ${resultado}.`);


