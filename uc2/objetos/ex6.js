let filme = {
    nome: "Koolab's bizarre adventure",
    direcao: '"Jojo" Joseph Joestar',
    anoDeLancamento: 2030,
    elenco: ["Ozzy Osborne", "Detonator", "Varus", "Freddy Fazbear", "'Alucard' Adrian Fahrenheit Tepes"],
    jaAssisti: false,
}

// adcionando a lista

filme.personagens = [
    {persona: "Jotaro Kujo"},
    {persona: "Jean Pierre Polnareff"},
    {persona: "Noriaki Kakyoin"},
    {presona: "Mohammed Avdol"},
    {persona: "Joseph Joestar"}
]

// mostrando o que cada pessoa vai interpretar 

console.log(`O Personagem enterpretado pelo ${filme.elenco[0]} é o ${filme.personagens[0].persona}`)
console.log(`O Personagem enterpretado pelo ${filme.elenco[1]} é o ${filme.personagens[1].persona}`)
console.log(`O Personagem enterpretado pelo ${filme.elenco[2]} é o ${filme.personagens[2].persona}`)
console.log(`O Personagem enterpretado pelo ${filme.elenco[3]} é o ${filme.personagens[3].persona}`)
console.log(`O Personagem enterpretado pelo ${filme.elenco[4]} é o ${filme.personagens[4].persona}`)

// Alterando a primeira pessoa do elenco por xuxa

filme.elenco[0] = "Xuxa"

// imprimindo todas as propriedades!

console.log(filme)