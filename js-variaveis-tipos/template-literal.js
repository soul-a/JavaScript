// Template literal

const nome = "Ryan";
const idade = 2021 - 2002;
const cidadeNascimento = "Guapiaçu/SP";
let apresentacao;

// Concatenando da maneira convercional
//apresentacao = "Meu nome é " + nome + ", eu tenho " + 
//idade + " anos e nasci na cidade de " + cidadeNascimento;

// Concatenando usando template literal
apresentacao = `Meu nome é ${nome}, e tenho ${idade} anos e nasci na cidade de ${cidadeNascimento}`;

console.log(apresentacao)