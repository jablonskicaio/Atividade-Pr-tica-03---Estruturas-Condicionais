/*
7. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
*/
let velocidade = Number.parseInt(prompt(`Insira a velocidade de seu carro:`));
let multa = (velocidade - 80)*5.00;

if(velocidade > 80){
    alert(`VOCÊ PASSOU ACIMA DO LIMITE DE VELOCIDADE, FORA MULTADO!`)
    alert(`O VALOR DE SUA MULTA NO VALOR DE ${multa} R$.`)
}else{
    alert(`Você esta dentro do limite de velocidade`)
}
