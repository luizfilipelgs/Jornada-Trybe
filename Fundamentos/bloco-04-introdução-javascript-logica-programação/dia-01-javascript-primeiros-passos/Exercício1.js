
//1
const a = 3
const b = 5
const c = 2


let adição = (a+b)
console.log (a+b)

let subtração =(a-b)
console.log (a-b)

let multiplicação = (a*b)
console.log(a*b)

let divisão = (a/b)
console.log (a/b)

let resto = (a%b)
console.log (a%b)

//2

if (a > b) {
    console.log(a)
    
} else { console.log(b)} 

// 3 

if (a>b) {
    console.log(a)    
} else if (b>a) {
    console.log(b)
} else {
    console.log(c)
}

// 4 

if (a>0) {
    console.log ("Positivo")

}else if  (a<0) {
    console.log ("negativo")
        
} else {
    console.log ("zero")   
}
// 5
let angA = 45
let angB = 45
let angC = 90

let somaAng = angA+angB+angC
if (somaAng===180) {
    console.log("true");

} else  if (angA <= 0 || angA >= 180 ) {
    console.log("Angulo A Invalido");

} else  if (angB <= 0 || angB >= 180) {
    console.log("Angulo B Invalido");

} else  if (angC <= 0 || angC >= 180) {
    console.log("Angulo C Invalido");
} else {
    console.log ("false, somatoria = "  somaAng );
}
//6  

 //cavalo, piao, bispo, torre, rainha, rei //


let peça = "cavalo"

switch (peça) {
    case "piao":
        console.log("somente para frente, uma casa por vez.")
        break;
    case "bispo":
        console.log("move em uma linha reta diagonalmente.")
         
        break;
    case "torre":
        console.log("move em linha reta horizontalmente e verticalmente")
         
        break;
    case "cavalo":
        console.log("move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto (L)")
         
        break; 
    case "rainha":
        console.log("move-se em qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente")
         
        break;
    case "rei":
        console.log("move-se para qualquer casa adjacente")
     default:
        console.log("peça inexistente") 
         break;
    
 }
// 7 

let nota = 0


if (nota>=90) {
    console.log("A");

} else  if (nota >= 80 ) {
    console.log("B");

} else  if (nota >= 70) {
    console.log("C");

} else  if (nota>= 60) {
    console.log("D");

} else  if (nota >= 50){
    console.log("E");

} else  if (nota <0 || nota >= 100) {
    console.error; ("Nota Invalida");
        
} else {
    console.log ("F");
}

// 8

var x = parseInt(Math.random() * 11);
console.log(x);
var y = parseInt(Math.random() * 11);
console.log(y);
var z = parseInt(Math.random() * 11);
console.log(z);

if (x%2==0 || y%2==0  || z%2==0  ) {
    console.log("true - par")
    
} else {
    console.log("false -par")
    
}
//9 
var x = parseInt(Math.random() * 11);
console.log(x);
var y = parseInt(Math.random() * 11);
console.log(y);
var z = parseInt(Math.random() * 11);
console.log(z);

if (x%2==1 || y%2==1  || z%2==1  ) {
    console.log("true - impar")
    
} else {
    console.log("false -impar")
    
}
//10
 
let custo = 25
let custoImposto = (custo + (custo*20/100))
console.log(custoImposto);
let venda = 55
let valVenda1k = ((venda-custo)*1000)
console.log(valVenda1k);
    
switch (custo) {
    case 0:
        console.log("Valor de custo Invalido");
        
        break;
}
switch (venda) {
    case 0:
        console.log("Valor de venda Invalido");
        
        break;
}

//11

let salarioBruto = 3000;

let aliqInss = "";

let ir = "";

let salarioBase = "";

//------INSS------//
if (salarioBruto <= 1556.94) {
    aliqInss = 0.92
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92 ) {
    aliqInss =  0.91
}  else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliqInss = 0.89    
} else {
    let aliqMaxInss = (570.88)
}
console.log("aliquota Inss = "+ (100 - (aliqInss*100)) + "%");
//console.log("aliquota Inss = "+ aliqInss*100);

//------IR-----//
salarioBase = (salarioBruto*aliqInss)

if (salarioBase <= 1903.98) {
    ir = 0
    

} else if (salarioBase  >= 1903.99 && salarioBase  <= 2826.65 ) {
    ir =  (salarioBase -((salarioBase*(7.5/100))- 142.80))
    

}  else if (salarioBase  >= 2826.66 && salarioBase  <=  3751.05) {
    ir =  (salarioBase-  ((salarioBase*(15/100)) - 354.80 ))
   

}  else if (salarioBase  >= 3751.06 && salarioBase  <= 4664.68) {
    ir =  (salarioBase - ((salarioBase*(22.5/100))- 636.13 ))
   

} else  {
    ir =  (salarioBase - ((salarioBase*(27.5/100)) - 869.36))
   

} 


console.log("salario bruto = " + salarioBruto);
console.log("salario base = " + salarioBase);
console.log("salario liquido = " + ir);

// -------------- FIM ------------------ #VQV----------------//

