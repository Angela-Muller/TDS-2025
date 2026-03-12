function selecioneDia(dia) {
    // Pedindo para o usuário digitar um número de 1 a 5
 dia = Number(prompt("Digite um número de 1 a 5 para o dia da semana: "))

 // Verificando com switch qual dia foi escolhido
 switch(dia){
    case 1:
        // se o número for 1 
        alert("Segunda-feira: Obaaa inglês... 😭")
        break
    case 2:
        // se o número for 2
        alert("Terça-feira: é Quase quarta!")
        break
    case 3:
        // se o número for 3
        alert("Quarta-feira: Dia de jogo!")
        break
    case 4:
        // se o número for 4
        alert("Quinta-feira: Quase sexta!")
        break
    case 5:
        // se o número for 5
        alert("Sexta-feira: Sextooooouuuuuuu!!!!!!!")
        break
    default:
        alert("Dia inválido!")
        return(dia)
 } 
}
selecioneDia()