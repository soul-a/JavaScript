// Parâmetros em funções

// Sem parâmetro
//function soma() {
//    return 2 + 2;
//}

//console.log(soma())

// Com parâmetros
// Dois parâmetros sendo eles números
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(10,5))
console.log(soma(10,-80))
console.log(soma(85,5))


/**
 * Parâmetro x Argumento
 * Ordem dos parâmetros
 */

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos de idade!`;
}

console.log(nomeIdade("Ryan", 19))


function opMatematica(num1, num2, tipoOperacao) {
    return (tipoOperacao == 1) // SOMA
    ?  num1 + num2

    : (tipoOperacao == 2) // SUBTRAÇÃO
    ? num1 - num2

    : (tipoOperacao == 3) // MULTIPLICAÇÃO
    ? num1 * num2

    : (tipoOperacao == 4) // DIVISÃO
    ? num1 / num2

    : "Por favor indique um tipo de cálculo entre 1 e 4";
}

console.log(opMatematica(52, 5, 3))


// Deixando valores padrão nos parâmetros
// num1 = 1 -> Caso o valor não for informado na função ele atribui por padrão o valor '1'
function somaPadrao(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(somaPadrao(9))