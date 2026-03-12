const exemplo = (chuva) => {
    chuva = prompt("Está chovendo?").toUpperCase()
    if(chuva === "SIM"){
        alert("Leve um guarda-chuva!")
    }else{
        alert("Deixe o guarda-chuva em casa!")
    }
}