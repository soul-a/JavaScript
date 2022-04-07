// Declara a função
// Faz a impressão de um texto
function imprimiTexto(texto) { // Valor esperado do tipo string
    console.log(texto);
}


// Faz a chamada da função 1 ou mais vezes
imprimiTexto("Olá Mundo!")
imprimiTexto("Hello World!")

// Função com retorno
function soma() {
    // O return tem que ser a última linha da função
    return 2 + 8;
}

console.log("Function c/ return: " + soma())

// Executando duas funções
imprimiTexto("Duas funções sendo executadas: " + soma())