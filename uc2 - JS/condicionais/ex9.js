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
modoTransporte()