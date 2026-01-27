const escolherRoupa = (temperatura) => {
    if(temperatura > 30){
        alert("Vista roupas leves. Está muito quente!")
        return
    } if(temperatura >= 20){
        alert("Use algo confortável, Como camiseta e calça")
        return
    } if(temperatura >= 10){
        alert("Coloque um casaco. Está fresquinho.")
        return
    }else{
        alert("Vista um casaco bem quente! Está frio.")
    }
}
temperatura = Number(prompt("Qual é a temperatura atual(ºC)?"))

/* feito da prof
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
 }else("Por favor, informe uma temperatura válida!")
} */