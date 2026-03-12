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
escolherPersonagem()