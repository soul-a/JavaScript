const cliente = {
    nome: "Ryan",
    idade: 18,
    cpf: "51663871809",
    email: "ryan191.rs@gmail.com"
}

// Acessando dados com colchetes
const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach(e => console.log(cliente[e]))