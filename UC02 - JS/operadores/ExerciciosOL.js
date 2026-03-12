//================================================================================================================================================================================================================
//caso 1

//variaveis

let idade = 19 //idade da pessoa
let assisnaturaPaga = false //se tem assisnatura paga ou não

//checando as condições

let podeEntrar = (idade >= 18) && (assisnaturaPaga == true)

console.log("Caso 1: Ele pode entrar?",podeEntrar) /// true se a pessoa pode entrar, e false se não 

//================================================================================================================================================================================================================

//caso 2

//variaveis

let idade2 = 19 //idade da pessoa
let documentoValido = true

//checando as condições

let podeComprar = (idade >= 18) && (documentoValido == true)

console.log("Caso 2: Ele pode comprar?", podeComprar)

//================================================================================================================================================================================================================

//caso 3

//variaveis

let valorCompra = 100 
let clienteVip = true

//Checando as condições

let cupom = (valorCompra > 100) || (clienteVip == true)

console.log("Caso 3: Ele tem desconto?", cupom)

//================================================================================================================================================================================================================

//caso 4

//variaveis
//1 forma:

let especial = false
let idoso = true

//checando as condições

let podeEstacionar = (especial == true) || (idoso == true)

console.log("Caso 4: Ele pode estacionar na vaga especial?", podeEstacionar)

//2 forma:

let idade4 = 65
let temDeficiencia = true

let ehIdosa = idade4 >= 60 //pessoa é idosa  se a idade for maior ou igual a 60
let podeEstacionar2 = (ehIdosa == true || temDeficiencia == true)

console.log("Caso 4: Ele pode estacionar na vaga especial?",podeEstacionar2)

//================================================================================================================================================================================================================

//caso 5

//variaveis

let controle = false
let consoles = true

// checando as condições

let podeJogar = (controle == true) || (consoles == true)

console.log("Caso 5: Ele pode jogar vídeo game?", podeJogar)

//================================================================================================================================================================================================================

//caso 6

//variaveis

let estaLogado = false
let temPermicao = true

// checando as condições

let areaRestrita = (estaLogado == true) && (temPermicao == true)

console.log("Caso 6: Ele está pode entrar na área restrita?", areaRestrita)

//================================================================================================================================================================================================================

//caso 7

//variaveis

let t1 = 7
let t2 = 9
let t3 = 8
let nr = 8
let nf = 6


//checando as condições

let passouDireto = (nf >= 8)
let condicaoRecuperacao = (nr >= 8)
let condicaoTrabalho = (t1 > 6) || (t2 > 6) && (t1 > 6) || (t3 > 6) && (t2 > 6) || (t3 > 6)
let trabalhosAprovados =(t1 > 6) + (t2 > 6) + (t3 > 6) //Prof
let aprovado = (nf >= 7) || (nr >= 8 && trabalhosAprovados >= 2) //Prof
let passou =  (nf > 7) || (condicaoTrabalho && condicaoRecuperacao) 

console.log("Caso 7: Ele passou?", aprovado)

//================================================================================================================================================================================================================

//caso 8

//variaveis

let temSenha = true
let estaNoAlcance = false

//checando as condições

let acesso = (temSenha == true) && (estaNoAlcance == true)

console.log("Caso 8: Tem acesso?", acesso)

//================================================================================================================================================================================================================

//caso 9

//variaveis

let renda = 2000
let nomeLimpo = true

//vericando as condições

let emprestimo = (renda > 2000) && (nomeLimpo == true)

console.log("Caso 9: Ele pode tirar emprestimo?", emprestimo)