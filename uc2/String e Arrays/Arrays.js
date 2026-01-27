/*
const meuArray = ["Poodle", "Pitbull", "Bulldog", "Pastor Alemão", "Husky"]
const primeiraRaca = meuArray[0]
const seguntaRaca = meuArray [1]
const terceiraRaca = meuArray [2]
const quartaRaca = meuArray [3]
const quintaRaca = meuArray [4]

console.log(primeiraRaca)
console.log(quintaRaca)
console.log(`A raça da primeira posição é: ${meuArray[0]}`)
console.log(`A raça que mais gosto é ${meuArray[4]}.`) */
/*
const pecasRoupas = ["Meia","Cueca","Tênis All-Star","Bota","pantufa","calça Jeans","calção jeans","calção","Calça Social","Cinto Minimalista","Cinto Rockeiro","Camisa de banda","camisa social","camisa lisa","casaco couro","casaco xadres","sueter gola V"]

let look0 = `${pecasRoupas[0]}, ${pecasRoupas[1]}, ${pecasRoupas[2]}, ${pecasRoupas[5]}, ${pecasRoupas[10]}, ${pecasRoupas[11]}, ${pecasRoupas[15]}`
let look1 = `${pecasRoupas[0]}, ${pecasRoupas[1]}, ${pecasRoupas[3]}, ${pecasRoupas[8]}, ${pecasRoupas[9]}, ${pecasRoupas[12]}, ${pecasRoupas[16]}`
let look2 = `${pecasRoupas[0]}, ${pecasRoupas[1]}, ${pecasRoupas[3]}, ${pecasRoupas[5]}, ${pecasRoupas[10]}, ${pecasRoupas[11]}, ${pecasRoupas[14]}`
let look3 = `${pecasRoupas[1]}, ${pecasRoupas[4]}, ${pecasRoupas[7]}, ${pecasRoupas[13]}`
let look4 = `${pecasRoupas[0]}, ${pecasRoupas[1]}, ${pecasRoupas[2]}, ${pecasRoupas[6]}, ${pecasRoupas[9]}, ${pecasRoupas[13]}, ${pecasRoupas[15]}`

console.log("O look de ir no parque é:", look0)
console.log("O look de ir na entrevista de emprego é:", look1)
console.log("O look de ir em um show a noite é:", look2)
console.log("O look de ficar em casa assistindo filmes é:", look3)
console.log("O look de ir a festa junina do SENAC é:", look4)

const pokemon = ["bulbasauro", "squirtle", "charmander"]

console.log(pokemon.length) */

/*
const homer = ["rosquinha", "rosquinha", "rosquinha"]
const scooby = ["habúrguer", "batata frita", "milkshake", "biscoito Scooby", "pizza"]
const magali = ["melancia", "maçã", "banana", "abacate"]
const bob = ["hambúrger de siri", "refri", "batata", "sorvete", "molho secreto"]

 console.log(`Quantos laches a Homer tem? ${homer.length}`)

 console.log(`Quantos laches a Scooby-Doo tem? ${scooby.length}`)

 console.log(`Quantos laches a magali tem? ${magali.length}`)

 console.log(`Quantos laches a Bob Esponja tem? ${bob.length}`)



const seriesBoas = ["Breaking Bad", "Brooklyn Nine-nine"]

seriesBoas.includes("breaking Bad") // true
seriesBoas.includes("Game of Thrones") // false

*/ /*
pokemonsCapturados = "Pikachu", "Charmander", "Bulbasaur", "Squirtle"

console.log(pokemonsCapturados.includes("Pikachu"))
console.log(pokemonsCapturados.includes("Meowth")) */

// Método push (elemento)

// - O método push (element) adiciona um ou mais elementos ao final de um array
/*
const numeros = [1, 2, 3]

numeros.push(4)
console.log(numeros) // [1, 2, 3, 4]

numeros.push(5, 6, 7) // [1 , 2, 3, 4, 5, 6, 7]
console.log(numeros) */
/*
const listaDeCompras = ["arroz", "feijão", "macarrão"]

listaDeCompras.push("leite", "banana", "farrinha", "canela", "café", "frango", "margarina", "farofa")

console.log(listaDeCompras) */ /*

// A Lista de Ingredientes para o bolo

let listaDeIngredientes = ["5 Ovos", "2 Kg de farrinha", "Fermento", "Creme de leite", "Leite condensado", "Chocalate", "Creme de avelã", "Creme de leite", "Leite Condensado", "Essencia de limão"]

// As partes do bolo

let baseDoBolo = `Para fazer a base do bolo vai: ${listaDeIngredientes[0]}, ${listaDeIngredientes[1]} e ${listaDeIngredientes[2]}`
let recheio0 = `No Primeiro Recheio vai: ${listaDeIngredientes[3]}, ${listaDeIngredientes[4]} e ${listaDeIngredientes[5]}`
let recheio1 = `No Segundo Recheio vai: ${listaDeIngredientes[6]}`
let recheio2 = `No Terceiro Recheio vai: ${listaDeIngredientes[7]}, ${listaDeIngredientes[8]} e ${listaDeIngredientes[9]}`


let massa = ("Massa")
let camada0 = ("Recheio de Chocolate")
let camada1 = ("Recheio de Creme de avelã")
let camada2 = ("Recheio de Limão")

let boloMontado = (`O bolo montado é: ${massa}, ${camada0}, ${massa}, ${camada1}, ${massa} e ${camada2}`)

console.log(boloMontado)
console.log(baseDoBolo)
console.log(recheio0)
console.log(recheio1)
console.log(recheio2)
*/
/*
let cores = ["azul", "verde"];
cores.unshift("vermelho");
console.log(`${cores}`) // ["vermelho", "azul", "verde"] */ 
/*
// EX7. Metodo unshift - Adiciona no começo um item do array

let marcasCelular = ["Xiaomi", "Sansung", "Apple", "LG"]
console.log(`Marcas de celular: ${marcasCelular}`)

// Adicionando a "Motorola" e imprimindo as informações

marcasCelular.unshift("Motorola")
console.log(`Marcas de celular agora com uma nova marca: ${marcasCelular}`)

// EX8. Metodo Shift - Remove do começo o primeiro item do array

marcasCelular.shift()
console.log(`Removendo uma marca de celular da lista: ${marcasCelular}`) // Xiaomi, Sansung, Apple, LG

// todo o processo

let cidades = ["São Leopoldo", "Caichoeirinha", "Novo Hamburgo"]
console.log(`Estas são as cidades da lista: ${cidades}`)
cidades.shift()
console.log(`Lista atualizadas das cidades: ${cidades}`) */ /*

const meusPeixes = ["Palhaço", "Mandarim", "Esturjão"]
console.log(meusPeixes)

meusPeixes.pop()
console.log(meusPeixes) // ["Palhaço", "Mandarim"]
*/
// Ex9. metodo pop
/*
let tarefas = ["Dar banho no meu Peixe", "Levar minha Vó no boxe", "Correr uma maratona", "Treino matinal de 3:30h", "Cozinhar um Banquete só para mim"]
console.log(`Minhas tarefas: ${tarefas}`)

let removido = tarefas.pop()

console.log(`A tarefa feita foi: ${removido}`)
console.log(`As tarefas restantes são: ${tarefas}`)

*/ /*

// Método splice(i,n)

// - O método slice(i, n) remove n elementos à partir da posição i do array

const letras = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H"]  // da array letras, na psição 2 ("C") remove 1 (o próprio c)
// índices (i) 0 1 2 3 4 5 6 7
console.log(`${letras}`)

letras.splice(2, 1)

// Letras = ["A", "B", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6

console.log(`${letras}`)

letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"] da array letras, na posição 3 ("D") remove 2 (E e F)
console.log(`${letras}`) */

// Exercícioo splice

//criando baralho inicial
/*

let deck = ["Pikachu", "Charmander", "Bulbasaur", "Pikachu", "Squirtle", "Meowth"]
console.log(`Meu deck antes das alterações é: ${deck}`)

// 1. Remover o repetido (índice 3)
// slice(3,1) remover 1 elemento no considerando o índice 3

deck.splice(3, 1)
console.log(`Agora meu deck sem uma carta que estava repetida: ${deck}`)

// 2. Inserir o Snorlax entre 3 e 4
// Aqui podemos utilizar o splice para adicionar tbm... porém utilizando o 0 na sintaxe aquela, logo:
// splice(i,n) ---> a partir/na posição i retiro n elementos
// quando usamos o 0 no lugar do n - sinalizamos que não estamos tirando nada... então ele adiciona

deck.splice(3,0, "Snorlax")
console.log(`Adicionei um pokemon no deck: ${deck}`)

// Adcionar a Eevee no lugar do meowth

deck.splice(5,1, "Eevee")
console.log(`Troquei um pokemon por outro: ${deck}`) */
/*
let frutas = ["maça", "Banana"]
let legumes = ["Cenoura", "Batata"]

let alimentos = frutas.concat(legumes)
console.log(`${alimentos}`) // ["maça", "Banana", "Cenoura", "Batata"] 
*/
/*
let pacote0 = ["Pikachu", "Bulbasaur", "Charmander"]
let pacote1 = ["Squirtle", "Jigglypuff"]
let pacote2 =["Meowth", "Snorlax", "Eevee"]

let cartaTotais = []
*/


// Arrays
// Propriedade .sort()
console.log("***********************************")
console.log("Propriedade .sort()")
// Ordena os elementos em ordem crescente (números) ou ordem alfabética (strings), mas com algumas peculiaridades para números
let frutas3 = ["Banana", "Maçã", "Laranja"]
console.log(`${frutas3}`)
frutas3.sort()
console.log(`${frutas3}`)

// Desafio
console.log("***********************************")
console.log("Desafio")

let frutas4 = [ " maçã", " banana", " laranja"]
console.log(`Array padrão: ${frutas4}`)

// Adicionando no final
frutas4.push(" morango")
console.log(`Adicionando 'morango' no final do array: ${frutas4}`)

// Adicionando no início
frutas4.unshift("abacaxi")
console.log(`Adicionando 'abacaxi' no início do array: ${frutas4}`)

// Removendo o primeiro 
frutas4.shift()
console.log(`Removendo o primeiro elemento do array: ${frutas4}`)

// Removendo o último
frutas4.pop()
console.log(`Removendo o último elemento do array: ${frutas4}`)

// Substituindo o elemento 1
frutas4.splice(1, 1, " manga")
console.log(`Substituindo o elemento 1 por 'manga': ${frutas4}`)

// Strings
// Desafio
console.log("***********************************")
console.log("Desafio")

let frase7 = "   Eu adoro JavaScript e estudar com meus colegas incríveis!   "
let fraseFormatada = frase7.trim().toLowerCase()
let verificar = fraseFormatada.includes("javascript")
let fraseTs = fraseFormatada.replaceAll("javascript", "TypeScript")

console.log(`Frase padrão: ${frase7}`)
console.log(`Frase formatada: ${fraseFormatada}`)
console.log(`Verificando se contém 'javascript': ${verificar}`)
console.log(`Trocando 'javascript' por 'TypeScript': ${fraseTs}`)