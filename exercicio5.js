/*
5. Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade Peso Categoria
Até 12 anos - Infantil
13 a 16 anos Até 40kg Juvenil leve
Acima de 40kg Juvenil pesado
17 a 24 anos Até 45kg Sênior leve
Acima de 45kg até 60kg Sênior médio
Acima de 60kg Sênior pesado
Acima de 24 anos - Veterano
*/

alert(`Bem vindo ao campeonato de Kung Fu das Ilhas GrowDev!`);
alert(`Para saber sua categoria de competição insira seus dados nas próximas telas!`);

let idade = parseInt(prompt(`Insira sua idade:`));
let peso = parseFloat(prompt(`Insira seu peso:`));

if(idade <= 12){
    document.write(`Você se enquadra na categoria Infantil.`);
}else if(idade >= 13 && idade <= 16){
    if(peso < 40){
        document.write(`Você se enquadra na categoria Juvenil Leve.`);
    }else{
        document.write(`Você se enquadra na categoria Juvenil Pesado.`);
    }
}else if(idade >= 17 && idade <= 24){
    if(peso < 45){
        document.write(`Você se enquadra na categoria Sênior Leve.`);
    }else if(peso > 45 && peso <= 60){
        document.write(`Você se enquadra na categoria Sênior Médio.`);
    }else{
        document.write(`Você se enquadra na categoria Sênior Pesado.`);
    }
}else{
    document.write(`Você se enquadra na categoria Veterano.`);
}