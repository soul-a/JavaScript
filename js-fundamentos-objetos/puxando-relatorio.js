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

let relatorio = "";

// Percorre usando o forIn o objeto
for (let info in cliente) {
    // Verifica se o tipo da propriedade verificada não é um object ou function
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `${info} -> ${cliente[info]}\r\n`
    }
}

console.log(relatorio)