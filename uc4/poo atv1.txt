/* teorica
1- Classe Carro, com atributos como cor, modelo, ano e velocidade, e métodos como acelerar(), frear() e buzinar().
Um Chevrolet Impala 67 seria um objeto dessa classe.

Outro exemplo:

Classe Celular, com atributos como marca, modelo e bateria, e métodos como ligar(), desligar() e tirarFoto().
Um iPhone 14 seria um objeto dessa classe.

2- POO organiza o código em torno de objetos, que têm dados (atributos) e ações (métodos). Ela trabalha com conceitos como encapsulamento, herança e polimorfismo.

3- Java, C++, C#, Python, Ruby.
*/
// Pratica
// 1) Crie uma classe Ninja

class Ninja {
    nome: string;
    aldeia: string;
    jutsu: string;

    constructor(nome: string, aldeia: string, jutsu: string) {
        this.nome = nome;
        this.aldeia = aldeia;
        this.jutsu = jutsu 
    };

    usarJutsu() {
        console.log(`O ninja ${this.nome} usou o jutsu ${this.jutsu}!`)
    }
}

let ninjaVerde = new Ninja("Ninja Verde", "Aldeia da Foia", "Razenshuriken")
let ninjaVermelho = new Ninja("Ninja Vermelho", "Aldeia da labareda", "Bola de Fuego")

ninjaVerde.usarJutsu()
ninjaVermelho.usarJutsu()

// 2) Crie uma classe Héroi

class Heroi {
    nome: string;
    universo: string;
    poder: string;

    constructor(nome: string, universo: string, poder: string) {
        this.nome = nome;
        this.universo = universo;
        this.poder = poder;
    }

    lutar(){
        console.log(`O heroi ${this.nome} usou seu poder ${this.poder}.`)
    }
}

let peterParker = new Heroi("Homem Aranha", "Marvel", "Soltar teia e super força")
let bruceWayne = new Heroi("Batman", "DC", "Dinheiro e planejamento")

peterParker.lutar()
bruceWayne.lutar()