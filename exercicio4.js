/*
4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/


for(number = 1; number < 251; number++){
    if(number % 3 == 0){
        document.write(`${number} é múltiplo de 3.`);
        document.write(`<br>`);
    }else if(number % 5 == 0){
        document.write(`${number} é múltiplo de 5.`);
        document.write(`<br>`);
    }else{
        document.write(number);
        document.write(`<br>`);
    }
};
