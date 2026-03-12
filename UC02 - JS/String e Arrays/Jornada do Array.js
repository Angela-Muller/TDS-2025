// =======================================================================================

// A jornada do Array talento do reino dos talentos Tecnológicos

// =======================================================================================

/** Em um reino distante, um jovem e talentoso desenvolvedor descobre uma espada mágica que revela seu destino como herói. com coragem e poucos recursos, ele parte em uma jornada desafiadora.

* O Cenário:
* O jogador é um herói que embarca em uma jornada épica. Ao longo do caminho, ele encontrará inimigos, coletará itens e enfrentará desafios.
*/

// 2. criando o inventário do Herói:
// o Herói começa a sua aventura com alguns itens básicos. vamos armazenar esses itens em um array.

let inventario = ["Espada do Gigante: 4","Escudo da coragem: 3","Poção de vida","Botas da Agilidade: 3","Amuleto do Guardião: 15"]

// 3. Exibindo o inventário inicial do herói

// console.log(inventario)

// 4. Encontrando um tesouro
// O herói encontra um baú de tesouro e ganha um novo item!!!

inventario.push("Templete Martelo: 5")
console.log(`O inventário do Herói é: ${inventario}`)
console.log(`Quantos itens tem o inventário do herói? ${inventario.length}`)

// 5. Enfentando um inimigo 
// O herói enfrenta um goblin chamado GoblinoDoTigrinho. Qual arma você vai usar???
console.log("Um goblin apareceu!!! prepare-se para a batalha!!! Dano: 13")

// Usando Itens do iventário para lutar

let itemUsado1 = inventario[0] // índice do item
console.log(`Você ataca o goblin com sua ${itemUsado1}`)

// 6. O goblin sentiu o golpe.... agora ele tenta seu último ataque com um dano 3! como você finaliza esse adversário?

let itemUsado2 = inventario[1]

console.log(`Você finaliza o goblin com ${itemUsado2}`)

// 7. Um Golem aproveita a sua distração e o ataca violentamente com um soco sísmico! Dano: 9.. Como você revida?

let itemUsado3 = inventario[3]
console.log(`Você revida com ${itemUsado3}`)

// 8. Finalizando a aventura... por enquanto... Nosso adeus não é para sempre...
// Como você finaliza o Golem?

let itemUsado4 = inventario[5]
console.log(`O Herói finaliza sua aventura com um golpe, utilizando: ${itemUsado4}`)

// calcule seus recursos

recursosResistencia = 15
console.log( `Meus recursos de resistência: ${recursosResistencia}`)
