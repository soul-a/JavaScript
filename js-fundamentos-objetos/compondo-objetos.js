const cliente = {
    nome: "André",
    idade: 34,
    cpf: "321321321",
    email: "teste@email.com",
    tels: ["5517981253428", "5517996608685"]
}

cliente.dependentes = {
    nome: "Juliana",
    parentesco: "Irmã",
    dataNasc: "02/02/2002"
}

console.log(cliente)

cliente.dependentes.nome = "Juliana Silva Souza"

console.log(cliente)