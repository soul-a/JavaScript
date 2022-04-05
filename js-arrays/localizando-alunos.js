const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

let listaNotasAlunos = [alunos, medias]


// Função que procura pelo nome do aluno
const exibeNomeNota = (nomeDoAluno) => {
    if(listaNotasAlunos[0].includes(nomeDoAluno)) {
        indice = listaNotasAlunos[0].indexOf(nomeDoAluno)
        return `${listaNotasAlunos[0][indice]}, sua média é de ${listaNotasAlunos[1][indice]}`
    } else {
        return `Aluno não cadastrado!`
    }
}

console.log(exibeNomeNota("aa"))