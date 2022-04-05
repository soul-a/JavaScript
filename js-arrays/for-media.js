const notas = [10, 6.5, 8, 7.5]

let totalNotas = 0

for(let i = 0; i < notas.length; i++) {
    totalNotas += notas[i]
}

const media  = totalNotas / notas.length

console.log(`Média -> ${media}`)