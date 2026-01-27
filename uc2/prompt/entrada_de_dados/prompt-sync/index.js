// importa o prompt-sync
const prompt = require(' Prompt-sync')()

// Pede o nome do usuário
const nome = prompt('Qual é o seu nome?')

// Pede a idade do usuário 
const idade = prompt('Qauntos anos você tem?')

// Exibe a resposta no terminal
console.log(`Olá, ${nome}! Você tem ${idade} anos.`)