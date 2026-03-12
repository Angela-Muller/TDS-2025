/* Concatenação de Strings

- também podemos juntar várias stings para formar uma nova
- Chamamos esse processo de CONCATENAÇÃO e utilizamos o sinal de + para fazê-lo 

const nome = "Miku"
const idade = 27
const frase = "Meu nome é " + nome + " e tenho " + idade + " anos"

/* Template Strings

- Não há diferença entre usar aspas simples ou duplas
- A única diferente é a TEMPLETE STRING, pois ela nos permite colocar variáveis javascript no meio da sting 

const frase2 = `Meu nome é ${nome} e tenho ${idade} anos`
*/
/*
const nome = "Arthur"
const corFavorita = "verde"
const filmeFavorito = "Violet Evergarden"
const timeFavorito = "celtics"

const frase = ("Meu nome é " + nome + " e minha cor favorita é " + corFavorita + ". Gosto muito de estudar no SENAC e curto o Anime " + filmeFavorito + ". Além disso, meu time é o " + timeFavorito )
const frase2 = `Meu nome é ${nome} e minha cor favorita é ${corFavorita}. Gosto muito de estudar no SENAC e curto o Anime ${filmeFavorito}. Além disso, meu time é o ${timeFavorito}`

console.log(frase)
console.log(frase2) */

// Propriedade length 

// - A proproedade length nos diz qual é o tamanho de uma string, incluindo os espaços

/*
const nome = "Vitor Hugo"
const comidaFavorita = "Pizza"


console.log(nome.length) //10
console.log("Minha comida favorita é", comidaFavorita, "length: ", comidaFavorita.length) /5 */
/*
const frase = "OieEeEee!"
const fraseMinuscula = frase.toLowerCase()
const fraseMaiscula = frase.toUpperCase()
const email = "      miku@gmail.com      "
const frase2 = "Hoje comi cenoura!"
const frase3 = "Hoje comi cenoura, adoro cenoura!"
const frase4 = frase3.replaceAll("cenoura","batata")

 console.log(fraseMinuscula)
 console.log(fraseMaiscula)
 console.log(email.trim())
 console.log(frase2.includes("cenoura")) // true
 console.log(frase2.includes("Batata")) // false
 console.log(frase4)

 */

 