// Tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const soma = primeiroNumero + segundoNumero; // Realiza a soma dos dois números
const sub = primeiroNumero - segundoNumero; // Realiza a soma dos dois números
const mult = primeiroNumero * segundoNumero; // Realiza a soma dos dois números
const div = primeiroNumero / segundoNumero; // Realiza a soma dos dois números

// Exibi no console o resultado
console.log("soma: " + soma);
console.log("subtração: " + sub);
console.log("multiplicação: " + mult);
console.log("divisão: " + div);

// Ponto flutuante

const numeroPontoFlutuante = 3.3;
const numeroSemZeroFlutuante = .5;
const operacaoMatematica = numeroPontoFlutuante / numeroSemZeroFlutuante;

console.log("Ponto flutuante (div): " + operacaoMatematica);

// NaN Not a Number (não é um número)

const alura = "Alura";
const operacaoNaN = alura * primeiroNumero;

console.log("NaN: " + operacaoNaN);