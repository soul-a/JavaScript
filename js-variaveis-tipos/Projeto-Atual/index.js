/**
 * Para que o index.js seja executado como um módulo e não como um script, você deve abrir o terminal (Ctrl + j) e digitar 'npm init' e ir preenchendo os parâmetros para que seja criado o 'package.json' com todas as informações sobre o projeto, logo após isso para que realmente funcione defina no 'package.json' o module colocando-o desta forma "type": "module"
 */

/**
 * Fazendo import 
 * import { Classe } from "path absoluto do arquivo JS"
 */
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// Cria um novo cliente
const clienteRyan = new Cliente("Ryan", "51663871809");

// Cria um segundo cliente
const clienteRicardo = new Cliente("Ricardo", "12345689020");

// Cria um nova conta corrente
const contaCRyan = new ContaCorrente(clienteRyan, 1920);
contaCRyan.Deposito(1000); // Faz o deposito de R$1000
contaCRyan.Sacar(80);

// Cria uma segunda conta
const conta2 = new ContaCorrente(clienteRicardo, 920);
conta2.Deposito(1500);
conta2.Sacar(80);
conta2.Transferir(1000, contaCRyan);

console.log();
console.log(contaCRyan.ToString() + "\n");
console.log(conta2.ToString());

console.log(ContaCorrente.numeroDeContas);