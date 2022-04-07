// Conversão implícita
const numero = 456;
const strNumero = "456";

/**
 * == compara valor -> conversão implícita
 * number + string -> concatena os valores fazendo uma conversão implícita
 */
console.log(numero == strNumero); // TRUE
console.log(numero + strNumero); // Concatenou os dois valores -> 456456

// Conversão explícita

/**
 * Number() -> converter string para número
 * |-> caso haja algum caracter como parâmetro na conversão
 * o JS retornara NaN (Not a Number)
 * String() -> converte número em string
 */
console.log(numero + Number(strNumero)); // 912
console.log(String(numero) + strNumero); // 456456