/*
6. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/
let alturaPedro = 1.50;
let alturaLucas = 1.10;
let ano = 0;

while (alturaLucas < alturaPedro){
    alturaLucas+=0.03;
    alturaPedro+=0.02;
    ano+=1;
}

document.write(`Levará ${ano} anos para Pedro e Lucas terem o mesmo tamanho,<br>
 Pedro com ${alturaPedro.toFixed(1)}m, e Lucas com ${alturaLucas.toFixed(1)}m. 
E levará ${ano+=1} anos para que<br>
 Lucas seja maior que Pedro.`);
document.write(`<br>`);


