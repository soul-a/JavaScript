class Cliente {

    constructor(nome, cpf, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = .0;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

class ClientePoupanca extends Cliente {

    constructor(nome, cpf, email) {
        super(nome, cpf, email);
        this.saldoPoup = .0;
    }

    depositarPoup(valor) {
        this.saldoPoup += valor;
    }
}

const cliPoup = new ClientePoupanca("dd","258369147", "e@tdsa.com");
console.log(cliPoup)