const cliente = {
    nome: "André",
    idade: 34,
    cpf: "321321321",
    email: "teste@email.com",
    tels: ["5517981253428", "5517996608685"],
    dependentes: [{
        nome: "Juliana",
        parentesco: "Irmã",
        dataNasc: "02/02/2002"
    }]
}

cliente.dependentes.push({
    nome: "Sâmia Maria",
    parentesco: "Mãe",
    dataNasc: "25/05/1981"
})

// console.log(cliente)

// Usa o filter para filtra o parente mais novo
const parenteMaisNovo = cliente.dependentes.filter(dependente => {
    return dependente.dataNasc === "02/02/2002"
})

// Acessando o resultado do filter
console.log(parenteMaisNovo)
console.log(parenteMaisNovo[0].nome)
