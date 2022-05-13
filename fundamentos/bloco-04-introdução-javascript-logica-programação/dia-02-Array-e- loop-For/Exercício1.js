let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);
//1º - 7º

let somaN = 0
let mediaN = 0
let maiorN = 0
let menorN = 9999999999999999
let arrayImpar = []
let array1a25 = []
let noImpar = 0


for (let i= 0; i < numbers.length; i++) {
   
    console.log(numbers[i]);
    somaN = somaN + numbers[i]

    if (numbers[i]>maiorN) {
        maiorN = numbers[i]
    }

    if ( numbers[i]<menorN) {
       menorN = numbers[i] 
    }
    if (numbers[i]<=25 ) {
        array1a25.push(numbers[i])
        
    }
    
    if (numbers[i]%2 ===1 ) {
        arrayImpar.push(numbers[i])
        
    }
    
}





console.log("soma = " + somaN);
console.log("maior numero:" + maiorN);
console.log("menor numero:" + menorN);
console.log("array impar:["+ arrayImpar + "]");

if (arrayImpar.length = 0 ) {
    console.log("nenhum valor ímpar encontrado");
}


mediaN = somaN / numbers.length
console.log("Media da array total= " + mediaN);
if (mediaN >20 ) {
    console.log("valor da media é maior que 20");
    
} else {
    console.log("valor da media é menor ou igual a 20");
}

console.log("array menor: ["+ array1a25 + "]");

for (let arr of array1a25) {
    arr = arr/2
    console.log("array menor / 2 [" + arr +"]");
    
}







/* ----------------------------SOMA por For-Of----------------------------
let soma = 0
for (let numero of numbers) {
    console.log("soma por forof");
    console.log(numero);
    soma = soma + numero
    console.log(soma);
}------------------------------------------------------------------------*/

/* -----------------maior e menor numero da Array sem o for------------------  
let maiorNum = 0
let menorNum = 0
maiorNum=Math.max.apply(null,numbers)
console.log("O maior numero da lista é");
console.log(maiorNum);

menorNum=Math.min.apply(null,numbers)
console.log("O menor numero da lista é");
console.log(menorNum);*/