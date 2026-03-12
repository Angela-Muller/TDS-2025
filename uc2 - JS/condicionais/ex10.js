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
tipoEvento()