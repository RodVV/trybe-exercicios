// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let number of numbers) {
    console.log(number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];        
}
console.log(sum);


// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log(sum / numbers.length);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 
//               "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let media = sum / numbers.length;
if (media > 20) {
    console.log('valor maior que 20');
}

else {
    console.log('valor menor ou igual a 20');
}
