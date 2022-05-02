/* - Funções 
- Estruturas de repetição: Processar e iterar:
    -- Iterar
    -- ForLoops
    -- Iteração por métodos

Abaixo um exemplo de mapa:
    */

// let pessoa = {
//     'nome': "Fabio Dalla Vechia",
//     'idade': 33,
//     'temIngresso': true
// }
// console.log(pessoa.nome)
// Para chamar uma chave do mapa é só usar o nome da variável e um ponto "." seguido do nome da chave.

/* Como avaliar duas condições ao mesmo tempo?
-- o Comando && - significa "e"
-- o Comando || - significa "ou"
*/
// if (pessoa.idade >= 18 && pessoa.temIngresso == true){
//     console.log("Pode entrar")
// } else {
//     console.log("Não pode entrar")
// }

/*Função é um bloco de códigos que podemos reutilizar - ao invés de ficar repetindo linhas de códigos.
Pode pôr vários parâmetro na função. E depois executar varias.
*/

// function imprimirNome(nome, idade) {
//     console.log(nome)
//     console.log(idade)
// }

// imprimirNome("Fabio da func", "33 anos")
// imprimirNome("Outra coisa", "31 anos")

// A função pode retornar um dado! Uma variável recebe o que veio da função!

// function retornarNome (nome) {
//     return nome
// }

// let nomeRecebidodaFuncao = retornarNome ("Retorno Fabio Dalla Vechia")
// console.log(nomeRecebidodaFuncao)

// function tirarMedia (numero_a, numero_b) {
//     let soma = numero_a + numero_b
//     let media = soma / 2
//     return media
// }

// let mediaRecebidadaFuncao = tirarMedia (100, 50)
// console.log(mediaRecebidadaFuncao)

// criando uma função com arrow function

// const tirarMedia_arrow = (numero_a, numero_b) => {
//     let soma = numero_a + numero_b
//     let media = soma / 2
//     return media
// }
// console.log(tirarMedia_arrow(200, 600))

console.log("RESOLVENDO UM PROBLEMA COM FUNÇÕES")

// para não ter que repetir várias vezes a condição, se cria uma função

// let pessoaA = {'temIngresso': true, 'idade': 30, 'nome': "Tiago Sestari"}
// let pessoaB = {'temIngresso': false, 'idade': 20, 'nome': "José Alfonso"}
// let pessoaC = {'temIngresso': true, 'idade': 15, 'nome': "Ana Maria"}

// function podeEntrar (idade, ingresso) {
//     if (idade >= 18 && ingresso == true) {
//         console.log("Pode Entrar")
//     } else {
//         console.log("Não Pode Entrar")
//     }
// }

// podeEntrar(pessoaA.idade, pessoaA.temIngresso)
// podeEntrar(pessoaB.idade, pessoaB.temIngresso)
// podeEntrar(pessoaC.idade, pessoaC.temIngresso)

/* Iterar é repetir estruturas de código. Algumas situações vão exigir uma repetição de comandos até que uma condição seja atingida! Usando ForLoops:
No forLoops temos uma variável que será o contador. O comando vai se repetir até que o contador chegue em um número desejado.
                de:           até:       aumentando 1U por vez:      
    For (let CONTADOR = 0; contador <10; contador ++)
O JavaScript já tem algumas coisas prontas:
    For (let itemdaLista of lista)
*/

//Exercício 1: passando pela lista imprima apenas os nomes de alunos que fizeram a prova.
//Exercício 2: quantos alunos fizeram a prova?

let alunos = [
    {'nome': 'Tiago', 'fezProva': true, 'media': 10},
    {'nome': 'Alvaro', 'fezProva': true, 'media': 9},
    {'nome': 'Tobias', 'fezProva': false, 'media': 8},
    {'nome': 'Regina', 'fezProva': true, 'media': 9},
    {'nome': 'Julia', 'fezProva': true, 'media': 5},
    {'nome': 'Joana', 'fezProva': false, 'media': 6},
    {'nome': 'Paulo', 'fezProva': false, 'media': 4},
    {'nome': 'Carla', 'fezProva': false, 'media': 2},
    {'nome': 'Luciana', 'fezProva': true, 'media': 1}
]

// para imprimir um item da lista
// console.log("O ", alunos[1].nome, "tirou média ", alunos[1].media)
// exerc.: 1)
// for (let aluno of alunos) {
//     if (aluno.fezProva == true){
//     console.log(aluno.nome)
//     }
// }

// // exerc.: 2)
// let quantidadeDeAlunos = 0
// for (let aluno_b of alunos) {
//     if (aluno_b.fezProva == true){
//       //  quantidadeDeAlunos = quantidadeDeAlunos + 1
//       // quantidadeDeAlunos ++
//       quantidadeDeAlunos += 1
//     }
// }

// console.log("A quantidade de alunos que fizeram prova é: ", quantidadeDeAlunos)

// métodos são "funções" que já existem no javascript, usa-se assim: variável.nomedoMetodo() *** metodo foreach ** uma função pode chamar outra função!!! 
// o parâmetro do método forEach é chamar outra função que será executada para cada item da lista.
// Essa segunda função recebe o parâmetro que será a referência a cada item da lista.

console.log("A chamada a seguir usa o método forEach")

alunos.forEach(
       (aluno) => {
     if (aluno.fezProva == true) {
        console.log(aluno.nome)
     }
    }
)