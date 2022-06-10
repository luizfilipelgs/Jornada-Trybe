const sum = (value1, value2) => value1 + value2;
console.log(sum(2, 3));

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordenar = array => array.sort((a, b) => a - b);
     
console.log(`Os números ${ordenar(oddsAndEvens)} se encontram ordenados de forma crescente!`); 

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(2));
  