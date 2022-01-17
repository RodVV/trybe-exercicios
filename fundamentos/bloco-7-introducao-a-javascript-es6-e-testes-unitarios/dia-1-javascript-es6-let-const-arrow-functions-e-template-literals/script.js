// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals 

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

  const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';

  const testingScope = (escopo) => (escopo === true) ? `${ifScope} ótimo, fui utilizada no escopo !` : 'Não devo ser utilizada fora meu escopo (else)'

  console.log(testingScope(true));
  console.log(testingScope(false));


//   Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); 
//   retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!". 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function(a, b){return a-b});

// https://www.w3schools.com/jsref/jsref_sort.asp


console.log(`Os numeros ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉