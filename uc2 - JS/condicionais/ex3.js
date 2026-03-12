const podeEntrar = (idade, responsavel) => {
   if((idade >= 16) || (responsavel === "SIM")){
    alert("Pode entrar no cinema")
   }else{
    alert("Você não pode entrar no cinema sem um responsável!")
   } 
}
idade = Number(prompt("Qual a sua idade?"))
responsavel = prompt("Você está acompanhado de um responsável?")
podeEntrar(idade, responsavel.toUpperCase())