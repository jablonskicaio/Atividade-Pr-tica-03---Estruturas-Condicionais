/*
10. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
*/
let numero = Number.parseInt(prompt(`Insira um número inteiro e positico para contagem:`));

for(let contador=0; contador <= numero; contador++){
    document.write(contador);
    document.write(`<br>`);
}
