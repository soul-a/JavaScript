// Cálculo de média com inserção em lista

const notas = [10, 6, 8]
notas.push(7) // Inserirndo como último elemento o número 7

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(notas)
console.log('Média - ' + media)