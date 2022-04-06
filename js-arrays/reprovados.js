const nomes = ["Ana", "Marcos", "Maria", "Mauro"]
const notas = [7, 4.5, 7, 7.5]


// No JavaScript quando não usamos algum parâmetro mas ele precisa ser passado
// usamos o controlador '_', como no exemplo abaixo
const reprovados = nomes.filter( (_, indice) => {
    return  notas[indice] < 5
})

console.log(`Reprovados: ${reprovados}`)