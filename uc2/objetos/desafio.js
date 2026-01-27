pessoa0 = {
    nome: "Arthur Nicolay",
    idade: 20,
    profisao: "Atendente telemarkting"
}

function adiconarDetalesPessoa(pessoa0){
    let pessoa1 = {
        ...pessoa0,
    }

    pessoa1 = {
        nome: "Arthur Müller",
        comidasPreferidas: ['Pizza', 'Cachorro-Quente', 'Hamburger'],
        melhorAmigo: {
            nome: "Arthur Nicolay",
            idade: 20
        }
    }
    console.log(`O nome da pessoa é ${pessoa1.nome} e suas comidas preferidas são ${pessoa1.comidasPreferidas[0]}, ${pessoa1.comidasPreferidas[1]} e ${pessoa1.comidasPreferidas[2]}. Seu melhor amigo se chama ${pessoa1.melhorAmigo.nome} e tem ${pessoa1.melhorAmigo.idade} anos`)
}

adiconarDetalesPessoa()