



function verificaPalindromo (str) {
    let stringFrag = str.split("");
    let stringRev = stringFrag.reverse().join("");
    if (stringRev === str) {
        return true
        
    } else {
        return false
    }
    
}

let str = "arara"

console.log(" A palavra " + "'" + str + "'" +  " é um Polindromo ? " + verificaPalindromo(str));


