// Tipo string

// Pode se usar aspas simples ou duplas
const texto1 = 'Olá, ';
const texto2 = "Mundo!";

// Concatenação
const concatena = texto1 + texto2;

// Usando ambos
const citacao1 = 'O Ryan disse  "Olá!"';
const texto3 = "Entre aspas 'a'";

console.log(concatena);
console.log(citacao1);
console.log(texto3);

// Caracteres especiais usando UNICODE

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Operadores lógicos e comparações

const cidade = "belo horizonte";
const cidadeInput = "Belo Horizonte";

console.log(cidade === cidadeInput); // FALSE

console.log(cidade === cidadeInput.toLowerCase); // TRUE

const senha = "minhaSenha123";

console.log(senha.length); // Retorna a quantidade de caracteres que possui a string