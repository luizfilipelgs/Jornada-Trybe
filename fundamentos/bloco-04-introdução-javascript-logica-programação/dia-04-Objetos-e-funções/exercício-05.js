



function verificaPalindromo (str) {
    let stringFrag = str.split("");
    let stringRev = stringFrag.reverse().join("");
    if (stringRev === str) {
        return true
        
    } else {
        return false
    }
    
}

console.log(verificaPalindromo("arara123"));
console.log(verificaPalindromo("arara"));

