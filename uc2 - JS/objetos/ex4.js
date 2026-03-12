let robo = {
    nome: "Blitzcrank",
    modelo: 1,
    anoDeFabricacao: "02/02/2009",
    aprensentar: function(){
        console.log(`Prazer meu nome é ${this.nome} eu fui fabricado em ${this.anoDeFabricacao}, Eu sei dançar macarena!!! 🕺`)
    },
    falar: function(){
        console.log(`Metal é mais rígido que a carne!!! 🕺🕺🕺`)
    }
}

robo.aprensentar()
robo.falar()