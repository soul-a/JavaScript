import { Cliente } from "./Cliente.js";

/**
 * export -> permite que a classe possa ser importada em outro arquivo
 */
export class ContaCorrente {
    /**
     * Atributos
     */
    agencia
    static numeroDeContas = 0
    // Privado
    _saldo = 0 // Inicializa com o valor padrão em 0
    _cliente // Atributo do tipo Cliente.js

    // Encapsulamento
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        this._saldo
    }

    // Construtor
    /**
     * 
     * @param { Cliente } cliente 
     * @param { Number } agencia 
     */
    constructor(cliente, agencia) {
        this.cliente = cliente // Na hora de atribuir ele passa pelo set cliente e verifica se o valor a ser passado é uma instância de Cliente.js
        this.agencia = agencia
        ContaCorrente.numeroDeContas += 1;
    }

    /**
     * Função/Método para saque
     * @param {Number} value 
     */
    Sacar(value) {
        /* Sem early return
        if(this.saldo >= value) {
            this.saldo -= value
            console.log(`Foi sacado R$${value} de R$${this.saldo + value} que estava em sua CC`)
        }
        else {
            return "-----\nNão foi possível efetuar o saque...\nMotivo: Saldo menor que o valor de saque\n-----"
        }
        */

        // Com early return
        if(this._saldo <= value) {
            console.log("-----\nNão foi possível efetuar o saque...\nMotivo: Saldo menor que o valor de saque\n-----") 
            return
        }

        this._saldo -= value
        return value 
    }

    /**
     * Função/Método para depósito de um valor
     * @param {Number} value 
     */
    Deposito(value) {
        /* Sem only return
        if(value > 0) {
            this.saldo += value
            console.log(`Depósito feito no valor de R$${value} totalizando R$${this.saldo} em sua CC`)
        }
        else {
            console.log(`-----\nNão foi possível efetuar o depósito...\nMotivo: Valor de depósito inválido ou igual a zero\n-----`)
        }
        */

        // Com only return
        if(value <= 0) {
            console.log(`-----\nNão foi possível efetuar o depósito...\nMotivo: Valor de depósito inválido ou igual a zero\n-----`)
            return
        }

        this._saldo += value
    }

    /**
     * 
     * @param { Number } valor 
     * @param { ContaCorrente } conta 
     */
    Transferir(valor, conta) {
        if(valor > this._saldo) {
            console.log(`-----\nNão foi possível efetuar a transferencia...\nMotivo: Valor de transferencia maior do que o saldo existente\n-----`)
            return
        } 

        const valorSacado = this.Sacar(valor)
        conta.Deposito(valor)
    }

    // Uso do return
    ToString() {
        return `Agência: ${this.agencia}\nSaldo: R$${this._saldo}\nCliente Nome: ${this._cliente.nome}\nCliente CPF: ${this._cliente.cpf}`
    }
}