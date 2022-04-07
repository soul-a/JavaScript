// Expressões em JS

// Por boas práticas sempre identar muito bem o código para que seja mais fácil de ler o código
const soma = function(num1, num2) { return num1 + num2 };

console.log(soma(1, 1))


/**
 * Diferença principal entre função e a expressão de função
 * 
 * 
 * 
 * Função -> pode ser usada antes de ser declarada, é feito algo chamado HOISTING que é a listagem de todas as funções e var que são feitas no topo
 * 
 * Expressão -> só pode ser usada quando a expressão for feita, isso occore por que ela se comporta como uma variável não permitindo seu uso sem antes declara-lá
 * 
 * 
 * obs.: Por padrão deve-se colocar sempre expressões en 'const' para que não seja reatribuido o valor dela durante o código ocasionando a perca da expressão criadas
 */
console.log(apresentar())

function apresentar() {
    return "Hello world!";
}

// ******************************************************

console.log(somaComExpressao(1, 1))

const somaComExpressao = function(num1, num2) { return num1 + num2 };