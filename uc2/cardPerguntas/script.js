function mostrarPergunta(tipo){
    // variável para guardar a pergunta que será exibida
    let pergunta =""
    // verificando o tipo de habilidade escolhida
    if(tipo === "soft"){
        pergunta = "Como você lida com trabalho em grupo? Quais foram os maiores desafios e dificuldades que teve até agora nessa área!"
    }else if(tipo === "hard"){
        pergunta = "Quais linguagens você aprendeu até agora? qual delas você mais usa atualmente e por quê?"
    } else{
        pergunta = "tipo desconhecido"
    }

    // mostrar a pergunta na tela dentro da div com id"pergunta"
    document.getElementById("pergunta").textContent = " ❓ " + pergunta
    // Abre uma caixa de prompt para o usuário digitar sua resposta
    const resposta = prompt(pergunta)
    //verifica se o usuário digitou alguma coisa
    if(resposta){
        // Mostra a resposta na tela
        document.getElementById("resposta").textContent = " ☝️🤓 Sua resposta: " + resposta
    }else{
        //mensagem caso o usuário clique em cancelar
        document.getElementById("resposta").textContent = "Nenhuma resposta fornecida 👎😡" 
    }
}