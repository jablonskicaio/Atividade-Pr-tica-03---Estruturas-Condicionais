/*
9. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;
*/

const pessoa = 15
let maior = 0
let menor = 0

for (let contador = 1; contador < pessoa; contador++) {
    let altura = parseInt(prompt(`Insira a altura ${contador} em centímetros:`));
    if(contador === 1){
        maior = altura
        menor = altura
    }else{
        if(altura > maior){
            maior = altura
        }
        if(altura < menor){
            menor = altura
        }
    }
}
alert(`A maior altura inserida foi ${maior} cm.\nA menor altura inserida foi ${menor} cm.`)