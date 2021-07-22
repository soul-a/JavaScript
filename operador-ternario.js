// Operador ternário...

/**
 * O operador ternário age como se fosse um 'if-else'
 * porém mais curto e simplificado
 * 
 * SINTAXE
 * minharVar = (condição) ? "condição true" : "condição false" 
 * 
 */

const num = 4;
let minhaVar;

minhaVar = (num < 5) ? "Menor" : "Maior";

// Poderia ser descrito dessa forma com if-else
//if(num < 5) {
//    minhaVar = "Menor";
//} else {
//    minhaVar = "Maior";
//}

console.log(num + " " + minhaVar + " que 5!")