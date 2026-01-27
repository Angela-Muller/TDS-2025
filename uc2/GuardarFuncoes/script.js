// Escrevendo as funções
function dancar(){
    alert("Você ganhou uma dancinha virtual 💃🕺💃🕺💃🕺")
}

// Função chamarHeroi
function chamarHeroi(heroi){
    alert("Eu sou "+ heroi.toUpperCase()+"!!!")
}

function criarApelido(nome, animal){
    alert("Seu apelido é " + nome + " " + animal + "!!! Seu bobão!")
}
// Função de moedas
function moedasTotais(p, g) {
    return (Number(p)) + (Number(g *5))
}
function mostrarMoedas(){
    let p = Number(prompt("Quantas moedas pequenas você tem?"))
    let g = Number(prompt("Quantas moedas grandes você tem?"))

    let total = moedasTotais(p, g)

    alert(`Você fez ${total} pontos em moedas!`)
}
// Mostrar codinome
 const mostrarCodinome = (objeto, numero ) => {
    objeto = prompt("Me diga algum objeto: ")
    numero = Number(prompt("Me de seu número da sorte: "))
    alert(`Seu codinome secreto é ${objeto}${numero}!!!`)
 }
 // Mostrar chocolate
 const Chocolates = (dinheiro) => {
    return(dinheiro / 2.50)
 }
 const mostrarChocolate = () => {
    dinheiro = Number(prompt("Quantos dinheiros você tem para gastar com chocolates💵💵💵!"))
    quantidade = Chocolates(Number(dinheiro))

    alert(`Você pode comprar ${quantidade} Chocolates de R$2,50 🍫`)
 }
