/**
 * Criação de classe
 */

/**
 * Construtor de cliente
 * @param {String} nome 
 * @param {String} cpf 
 * @param {String} email 
 * @param {Number} saldo 
 */
function Cliente(nome, cpf, email) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = .0;

    /**
     * Deposita um valor na conta do cliente
     * @param {Number} valor 
     */
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

/**
 * Construtor de cliente
 * @param {String} nome 
 * @param {String} cpf 
 * @param {String} email 
 * @param {Number} saldo 
 */
function ClientePoupanca(nome, cpf, email) {
    Cliente.call(this, nome, cpf, email);

    this.saldoPoup = .0;

    this.depositarSaldoPoup = function (valor) {
        this.saldoPoup += valor;
    }
}

const cliPoup = new ClientePoupanca("Jhulia", "58963225603", "jhu@gmail.com");
cliPoup.depositar(150.0);
cliPoup.depositarSaldoPoup(8000.0);

console.table(cliPoup);

// Criando propriedade dentro do objeto usando o protype
ClientePoupanca.prototype.exibir = function() {
    const str = `Seu nome é ${this.nome}, CPF nº ${this.cpf} e e-mail ${this.email}
    R$ ${this.saldo} em sua conta corrente
    R$ ${this.saldoPoup} em sua conta poupança`;
    console.log(str);
};

cliPoup.exibir();

