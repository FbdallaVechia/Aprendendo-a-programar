console.log("Olá Mundo! Primeiro comando!")

let idade = 18   // idade recebe o valor 18
let nome = "Fabio"
let boolA = true
let boolB = false

let lista = [18, 20, 40, 'Fabio', 10, 'Cleide', [10, 11, 12, 'outronome']]

let mapa = {
    "faculdade": ['boletim', 'carteirinha', 'provas'],
    "casamento": ['casa', 'certidão'],
    "anos_de_casado": 30
}

// O que usar para cada tipo de variável:
// Strings "texto"
// Number 1234, 1.4 etc
//Booleans true false
// Arrays listas [ ] - começa a contagem do 0 para as posições
// Mapas **objetos** {chave: valor, ...}

// console.log(idade)
// console.log(nome)
// console.log(boolA)
// console.log(boolB)
// console.log(lista)
// console.log(mapa)

console.log(lista[3])
console.log(mapa['faculdade'])

// Operações básicas
console.log(5+50)
console.log(100-9)
console.log(44*2)
console.log(76/3)

// podemos somar variáveis
let numero_a = 21
let numero_b = 7
console.log(numero_a + numero_b)

// podemos criar uma variável que é o resultado de uma opoeração
let soma = (numero_a + numero_b) / 2
console.log(soma)

// por causa da tipagem dinâmica podemos "somar" textos...
let texto_a = "Fabio"
let texto_b = " Dalla Vechia"
console.log(texto_a + texto_b)

// DESAFIO
let texto = "11" 
// é uma string, mas pode ser interpretado como um número se estiver numa operação
let numero = 1 
// interpretado como número
console.log(texto + numero)
console.log(texto - numero)

// Estruturas condicionais e operadores relacionais
// Condições são a "inteligência" do computador - o que nós fizemos ele saber! o jeito de pensar e tomar decisões.
//CONDICIONAIS
if (numero <= 2) {
    console.log("É verdade")
} else {
    console.log("Não é verdade")
}

/*
< é maior
> é menor
== é igual
!= é diferente
>= é maior ou igual
<= é menor ou igual
*/



// Tipagem estática X dinâmica
// Estática - preciso dizer qual o tipo de váriavel eu estou criando
// Dinâmica - o computador percebe o tipo de variável
// a tipagem varia conforme a linguagem usada

// let numero = 10
// console.log(numero)
// console.log(10)
// numero = "texto"
// console.log(numero)