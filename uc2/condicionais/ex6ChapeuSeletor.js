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