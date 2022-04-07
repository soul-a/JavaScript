const num = 4;
const text = "4";

// == => Comparação implícita
// Faz a comparação dos 'valores' e não do tipo (number/text)
console.log(num == text) // TRUE


// == => Comparação explícita
// Faz a comparação dos 'valores' e dos 'tipos' presentes em cada uma
console.log(num === text) // FALSE

 // typeof...
console.log(typeof num)
console.log(typeof text)