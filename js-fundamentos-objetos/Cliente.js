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

const cli = new Cliente("Ryan", "312321", "teste@teste.com");
cli.depositar(856.5);

console.log(`Saldo -> R$ ${cli.getSaldo()}`);
console.table(cli);