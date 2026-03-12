const redline = require('readline')

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual é o seu nome? ", function(name) {
    console.log(`Olá, ${name}!`)
    rl.close()
})