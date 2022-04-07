export class Cliente {
    /**
     * Atributos da classe
     */
     nome
     _cpf

     // Encapsulamento
     get cpf() {
         return this._cpf
     }

     // Construtor da classe e neste caso o 'cpf' só pode ser atribuido na hora da instanciação da classe
     /**
      * 
      * @param { String } nome 
      * @param { String } cpf 
      */
     constructor(nome, cpf) {
         this._cpf = cpf
         this.nome = nome
     }
 
     // Uso do return
     ToString() {
         return `Nome: ${this.nome}\nCPF: ${this.cpf}`
     }
}