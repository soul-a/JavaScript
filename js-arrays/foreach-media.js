const notas = [10, 6.5, 8, 7.5]

let totalNotas = 0

notas.forEach(nota => {
    totalNotas += nota
});

const media  = totalNotas / notas.length

console.log(`Média -> ${media}`)