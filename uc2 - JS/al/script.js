function pamonha(){
    let s = Number(prompt("Qual a sua idade?"))
    let i = Number(prompt("Qual a idade atual da pessoa?"))
    
    const idadeMinima = (s / 2) + 7
    let iFinal = 14 + (s - i)

    if(idadeMinima >= 14){
        alert(`A idade minima é ${idadeMinima}, já a idade final seria ${iFinal}!`)
    } else if(idadeMinima < 14){
        alert(`Sai dessa cara se vai ser preso!!!`)
    } else if(s === ""){
        alert("Digite a sua idade!")
    } else if(i === ""){
        alert("Digite a idade da pessoa!")
    }
} 