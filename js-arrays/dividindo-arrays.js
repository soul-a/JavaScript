const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length / 2)
const sala2 = nomes.slice(nomes.length / 2)

console.log(`Sala 1 -> ${sala1}`)
console.log(`Sala 2 -> ${sala2}`)