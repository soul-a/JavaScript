// Boolean

const contaAtiva = true;
const contaPaga = false;

// Valores truthy ou falsy

/**
 * 0  -> false
 * 1  -> true
 * "" -> false
 * 
 * == -> compara apenas os valores
 * === -> compara o valor e o tipo da variável
 * 
 */

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null -> Vazio ou nada, variável foi iniciada
// undefined -> Valor da variável não foi definido ou a variável não foi inicializada
 let minhaVar;
 let varNull = null;

 console.log(minhaVar);
 console.log(varNull);

 /**
  * O null no JS é na realidade um tipo Object
  * 
  * typeof é uma palavra chave para o JS nos falar qual o tipo da variável
  */
 console.log(typeof minhaVar);
 console.log(typeof varNull);