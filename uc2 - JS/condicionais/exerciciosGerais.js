// Exercicio 1

const comparaNumeros = (num1, num2) => {
    num1 = Number(prompt("Digite o primeiro número!"))
    num2 = Number(prompt("Digite o segundo número!"))

    if(num1 === num2){
    alert("Sucesso! Os números são iguais cara!")
    } else if(num1 !== num2){
        alert("Que peninha... Os números não são iguais cara!")
    } else{
        alert("Digite os números!")
        return(comparaNumeros())
    }
}
// exercicio 2

const chovendo = (chuva) => {
    chuva = prompt("Está chovendo?").toUpperCase()
    if(chuva === "SIM"){
        alert("Leve um guarda-chuva!")
    }else{
        alert("Deixe o guarda-chuva em casa!")
    }
}
// exercício 3

const podeEntrar = (idade, responsavel) => {
    idade = Number(prompt("Qual a sua idade?"))
    responsavel = prompt("Você está acompanhado de um responsável?").toUpperCase()
   
      if((idade >= 16) || (responsavel === "SIM")){
       alert("Pode entrar no cinema")
      }else{
       alert("Você não pode entrar no cinema sem um responsável!")
      } 
}
// exercicio 4

const escolherRoupa = (temperatura) => {
    temperatura = Number(prompt("Qual é a temperatura atual(ºC)?"))
   
    if(temperatura > 30){
       alert("Vista roupas leves. Está muito quente!")
    }else if(temperatura >= 20 && temperatura <= 30) {
       alert("Use algo confortável, Como camiseta e calça")
    }else if(temperatura >= 10 && temperatura <= 19){
       alert("Coloque um casaco. Está fresquinho.")
    }else if(temperatura < 10){
       alert("Vista um casaco bem quente! Está frio.")
       //caso o usuário informe um valor nada a ver, oriente ele
    }else{
        alert("Por favor, informe uma temperatura válida!")
        return(escolherRoupa())
    }
}

// exercicio 5 / desafio

const escolherPersonagem = (personagem, nivel) => {
    personagem = prompt(`Qual sua classe? Guerreiro, Bardo, Paladino, Clérigo, Bucaneiro, Inventor, Caçador, Druida, Cavaleiro, Lutador, Ladino, Mago ou Arqueiro?`).toUpperCase()
    nivel = Number(prompt(`Qual o seu nível?`))
    
    if((personagem === "GUERREIRO") && (nivel >= 50 && nivel <= 100)){
        alert("Você é um guerreiro lendário!")
    } else if((personagem === "MAGO") && (nivel >= 50 && nivel <= 100)){
        alert(`Você domina a magia suprema!`)
    } else if((personagem === "Arqueiro") && (nivel >= 50 && nivel <= 100)) {
        alert(`Você é um mestre das flechas!`)
    } else if((personagem === "BARDO") && (nivel >= 50 && nivel <= 100)) {
        alert(`Você é o Rei das Músicas!`)
    } else if((personagem === "LADINO")&&(nivel >= 50 && nivel <= 100)){
        alert(`Você é o Mais furtivo do reino mortal`)
    } else if((personagem === "PALADINO") && (nivel >= 50 && nivel <= 100)) {
        alert(`Você é devoção em pessoa!`)
    } else if((personagem === "CLÉRIGO") && (nivel >= 50 && nivel <= 100)) {
        alert(`Você é um santo!`)
    } else if((personagem === "BUCANEIRO") && (nivel >= 50 && nivel <= 100)) {
        alert(`Você é o Rei dos Piratas!`)
    } else if((personagem === "LUTADOR") && (nivel >= 50 && nivel <= 100)) {
        alert(`Você é o Rei Marcial!`)
    } else if((personagem === "CAÇADOR") && (nivel >= 50 && nivel <= 100)) {
        alert(`Você é o Rei dos Caçadores!`)
    } else if((personagem === "INVENTOR") && (nivel >= 50 && nivel <= 100)) {
        alert(`Você é o Rei das Invenções!`)
    } else if((personagem === "DRUIDA") && (nivel >= 50 && nivel <= 100)){
        alert(`Você é o Rei da Floresta`)
    } else if((personagem === "BÁRBARO") && (nivel >= 50 && nivel <= 100)){
        alert(`Você é o Rei da Guerra`)
    } else if((personagem === "CAVALEIRO") && (nivel >= 50 && nivel <= 100)){
        alert(`Você é o Rei da Espada`)
    } else if(nivel <= 50){
        alert(`Continue treinando, herói iniciante!`)
        return(escolherPersonagem())
    } else if(nivel > 100 && nivel < 500){
        alert(`Você ${personagem}, transcende e alcança os níveis dos semi-deuses!!!`)
    } else if(nivel > 500 && nivel < 2000){
        alert(`Você ${personagem}, transcende e chega ao nivel dos Deuses!!!`)
    }else if(nivel > 2000){
        alert(`Você escapa do reino da vida e da morte, agora nada pode lhe derrotar`)
    } else{
        alert(`Coloque algo valido!`)
        return(escolherPersonagem())
    }
}
// exercicio 6

const chapelSeletor = (qualidade) => {
    qualidade = prompt("Qual qualidade mais define você: Coragem, amizade, ambição ou sabedoria?").toUpperCase()

    if(qualidade === "CORAGEM"){
        alert("Você foi escolhido para a Grifinória!")
    } else if(qualidade === "AMIZADE"){
        alert("Você foi escolhido para a Lufa-lufa!")
    } else if(qualidade === "AMBIÇÃO"){
        alert("Você foi escolhido para a Sonserina!")
    } else if(qualidade === "SABEDORIA"){
        alert("Você foi escolhido para a Corvinal!")
    } else{
        alert("Selecione uma Qualidade válida!")
        return(chapelSeletor())
    }
}

// exercicio 7

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

// exercicio 8

function redeSocialFavorita(redeSocial){
    redeSocial = prompt("Dentre essas qual sua rede social favorita? Instagram, TikTok, Twitter, Facebook, Linkedin").toLowerCase()
   
    switch(redeSocial){
       case "instagram":
           alert("Perfeito para fotos e stories!")
           break
       case "tiktok" :
           alert("Vídeos curtos e muita dança!")
           break
       case "twitter" :
           alert("O lugar das notícias rápidas e memes!")
           break
       case "facebook" :
           alert("Clássico, mas ainda forte para grupos!")
           break
       case "linkedin" :
           alert("Rede profissional e network!")
           break
       default:
           alert("Escolha uma rede dentre as selecionadas!")
           return(redeSocialFavorita())
    }
   }

   // Exercicio 9

   function modoTransporte(transporte) {
    transporte = prompt("Qual meio de trasporte você vai usar pra se deslocar: Carro, ônibus, bicicleta, metrô ou andando").toLowerCase()
    
    switch(transporte){
      case "carro" :
          alert("Não esqueça de revisar o combustível!")
          break
      case "ônibus" :
          alert("Fique de olho no ponto e na carteira.")
          break
      case "bicicleta" :
          alert("Use capacete e respeite as regras de trânsito.")
          break
      case "metrô" :
          alert("Evite horários de pico para viajar tranquilo.")
          break
      case "andando" :
          alert("Aproveite para escutar música e relaxar.")
          break
      default :
          alert("Escolha um transporte acima!")
          return(modoTransporte())
    }
  }

  // exercicio 10

  const tipoEvento = (tipo) =>{
    tipo = prompt("Qual tipo de evento você vai organizar? (aniversário, formatura, casamento, festa suspresa ou churrasco)")
    
    switch(tipo){
        case "aniversário":
            alert("Salão de festas ou espaços kids.")
            break
        case "formatura":
            alert("Buffet com pista de dança")
            break
        case "casamento" :
            alert("Jardim ou igreja charmosa.")
            break
        case "festa surpresa":
            alert("Casa de amigos ou rooftop")
            break
        case "churrasco":
            alert("Área externa ou parque")
            break
        default:
            alert("Selecione uma das opções acima!!!")
            return(tipoEvento())
     }
    }