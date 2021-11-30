// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let number of numbers) {
    console.log('exercicio 1 : ' + number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let index = 0; index < numbers.length; index+=1) {
    sum += numbers[index];        
}
console.log('exercicio 2 : ' + sum);


// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log('exercicio 3 : ' + sum / numbers.length);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 
//               "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let media = sum / numbers.length;
if (media > 20) {
    console.log('exercicio 4 ' + 'valor maior que 20');
}

else {
    console.log('exercicio 4 ' +'valor menor ou igual a 20');
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0;
for (let index = 0; index <= maiorValor; index +=1 ) {
    if (numbers[index] > maiorValor){
        maiorValor = numbers[index]
    }   
}

console.log('exercicio 5 : ' + maiorValor);