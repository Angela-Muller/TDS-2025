const amigo = {
    nome: 'Márcio',
    idade: 19,
    tarefas: ['Estudar', 'Trabalhar', 'Tocar Guitarra'],
    lamentar: function() {
        console.log('Pior que eu realmente gostava dela cara!')
    }
}
// amigo.lamentar()

// Mais exemplos

const aluno = {
    nome: "Arthur Müller",
    idade: 19,
    turma: "TDS25-1T",
    curso: "Têcnico de Desenvolvimento de Sistemas (TDS)"
}

const alienTurista = {
    nomeGalatico: "Bilu Bulu",
    planetaDeOrigem: "Stringays",
    coisasQueTrouxe: ["lasca do espaço tempo", "JET", "Energético Jesus"],
    assustadoCom: "Jogadores de League of Legends",
    falaPortugues: true
}

// metodos

const chorro = {
    nome: "Bolt",
    raca: "Vira-lata",
    latir: function(){
        console.log("Au au!");
    }
}

// chorro.latir() // chama o método

// objetos dentro de objetos

const donoDoPet = {
    nome: "Arthur Muller",
    pet: {
        nomeDoPet: "Guria",
        raca: "Vira-lata",
        idade: 8
    }
}

// console.log(donoDoPet.pet.idade)

// Arrays dentro de objetos {[]}

const curso = {
    nome: "Noturno Froutend",
    linguagens: ["JS", "CSS", "HTML"]
}

 // console.log(curso.linguagens[0])

// Arrays de objetos [{}]

const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
]

// console.log(professores[1].nome)

// For in


let formulario = {
    nome: "Maria joaquina",
    email: "",
    cidade: ""
}
for(let campo in formulario){
    if(formulario[campo] === ""){ // if(formulario.campo === "")
        console.log(`O campo ${campo} está vazio! Por favor, preencha!`)
    }
}


    let celular = {
        marca: "Nokia",
        modelo: "Tijolão",
        cor: "Preto com branco",
        armazenamento: "1kb"
    }
    for(let cell in celular){
        if(celular.cell !== ""){
            console.log(celular)
        }
    }

 // Espalhamento ou spread ...
 
 const usuario = {
    nome: 'Julio',
    idade: 32,
    email: 'profjulio@gmail.com',
    cargo: 'Professor'
}

const novoUsuario = {
    ...usuario,
    nome: 'Jorge',
    idade: 28,
    email: 'profjorge@gmail.com'
}
console.log(novoUsuario)