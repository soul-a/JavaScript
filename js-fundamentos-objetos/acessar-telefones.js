const cliente = {
    nome: "André",
    idade: 34,
    cpf: "321321321",
    email: "teste@email.com",
    tels: ["5517981253428", "5517996608685"]
}

// Acessando o array dentro do objeto
cliente.tels.forEach(telefones => console.log(telefones))