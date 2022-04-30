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
    this.depositar = function depositar(valor) {
        this.saldo += valor;
    }
}

const cli = new Cliente("Ryan","51663871809","ryan1858.rs@hotmail.com");
cli.depositar(100.0);

console.table(cli);

