const palavra = "desenvolvimento"
let contador = 0
// cria uma variável com valor inicial 0
// lea será usada para contar quantas vogais existem na palavra

for (const letra of palavra){
    // inicia um laço que percorre cada caractere da string 'palavra'
    // a cada repetição, a variável 'letra' recebe uma letra da palavra
    if("aeiou".includes(letra)){
        // verifica se a letra atual é uma vogal
        // a string "aeiou" contém todas as vogais
        // método includes() retorna true se a letra estiver entre as vogais
        contador ++
        // se a letra for uma vogal, incrementa o contador em 1
    }
}
console.log(`A quantidade de vogais é: ${contador}`)
// exibe no console a quantidade total de vogais encontradas na palavra que é 6... só o Sid que não encontrou 6 :D