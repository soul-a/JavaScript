const clientes = [
    {
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
            }
        ]
    },
    {
        nome: "Juliana",
        idade: 29,
        cpf: "5896587456",
        email: "teste@teste.com.br",
        tels: ["5517989652356", "5517258742563"],
        dependentes: [
            {
                nome: "José",
                parentesco: "Cunhado",
                dataNasc: "28/12/1996"
            }
        ]
    }
]

// Pega o valor listado em clientes[0].dependentes e espalha para a const listaDependentes
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.log(listaDependentes)