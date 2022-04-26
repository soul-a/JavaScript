const cliente = {
    // Atributos...
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

    // Funções...
    depositar: function(valor) {
        this.saldo += valor
    }
}

function ofertaSeguro(obj) {
    const propsClientes = Object.keys(cliente)
    
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

ofertaSeguro(cliente)

console.log(Object.keys(cliente))
console.log()
console.log(Object.values(cliente))
console.log()
console.log(Object.entries(cliente))
