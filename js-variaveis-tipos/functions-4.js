// Arrow functions

// Sem arrow
function apresentar(nome) {
    console.log(`Olá ${nome}`);
}

// Com arrow
/**
 * Ela pode e deve ser usado somente em variáveis do tipo const para evitar problemas
 * Você indica os parâmetros após o '=', caso for mais de um colocar entre parênteses
 * Após isto vem o bloco de código que ser aexecutado nesta função que devera ser descrito após a 'arrow' '=>'
 * Se o bloco contiver apenas uma linha não sera necessário o return e nem as chaves, mas se possuir mais de uma linha será necessário o return juntamente das chaves
 */
const apresentarArrow = nome => `Olá ${nome}`;

const soma = (num1, num2) => num1 + num2;

const somaNegativaMaisLinha = (num1, num2) => {

    const somaNegativa = (num1 + num2) * -1;

    return somaNegativa;
}

console.log(apresentarArrow("Ryan"))
console.log(soma(10, 20))
console.log(somaNegativaMaisLinha(10, 10))

