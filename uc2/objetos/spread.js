/*
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

usuario.cpf = "123.456.789.10"
usuario.endereco = "Avenida dos Spread's, num 99"

const novoUsuario1 = {
    ...usuario,
    nome: 'Pamela',
    cpf: '109.876.543.21',
    endereco: "Rua dos Objetos, num 6",
    email: 'pammuller@gmail.com'
}
console.log(usuario)
console.log(novoUsuario1) */

const listaDeNomes = ['Mika', 'Paula', 'Victor']

const copiaListaDeNomes = [...listaDeNomes]
copiaListaDeNomes[0] = 'Dalvana'

console.log(copiaListaDeNomes) //['Mika', 'Paula', 'Victor']