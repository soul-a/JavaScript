const cliente = {
    nome: "André",
    idade: 34,
    cpf: "321321321",
    email: "teste@email.com",
    tels: ["5517981253428", "5517996608685"],
    dependentes: [
        {
            nome: "Juliana",
            parentesco: "Irmã",
            dataNasc: "02/02/2002"
        },
        {
            nome: "Sâmia Maria",
            parentesco: "Mãe",
            dataNasc: "25/05/1981"
        }
    ],
    saldo: 100.0,

    // Funções
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(450)
console.log(cliente.saldo)

