let aluno = {
    nome: "Menino Novo",
    idade: 280,
    escola: "Senac LNDL (Lado Negro Da Lua)",
    apresentar: function(){
        console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos e eu estudo na instituição ${this.escola}.`)
    }

}

aluno.apresentar()
// delete aluno.idade --> é assim deletará um valor do objeto