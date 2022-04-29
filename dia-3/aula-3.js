console.log("Olá Mundo! Primeiro comando!")

let idade = 18   // idade recebe o valor 18
let nome = "Fabio Dalla Vechia"
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

// Tipagem estática X dinâmica
// Estática - preciso dizer qual o tipo de váriavel eu estou criando
// Dinâmica - o computador percebe o tipo de variável
// a tipagem varia conforme a linguagem usada

let numero = 10
console.log(numero)
console.log(10)
numero = "texto"
console.log(numero)