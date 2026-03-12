let numeros = [10,90,1000,78]
// criamos uma array chamada "numeros" com quatro valores
let maior = numeros[0]
// cria uma variável 'maior' e atribui a ela o primeiro número da array, no caso armazenado o 10 no índice 0
// Neste momento, estamos assumindo que 10 é o maior número (mas pode mudar...)
for(let i=1; i <numeros.length; i++){
    // inicia um laço "for" que começa com índice 1 (ou seja, o segundo número da array)
    // a condição i< numeros.length garante que o laço percorra os elemento restantes da array
    // a variável 'i' vai de 1 até 3 (índice dos últimos elementos)
    if(numeros[i] > maior){
        // verifica se o número atual do array é maior do que o que está na váriavel 'maior'
        // se for , isso significa que encontramos um número ainda maior
        maior = numeros[i]
        // atualiza o valor da variável 'maior' com o novo número maior encontrado
    }

}

console.log("O maior número é o " + maior + ".")