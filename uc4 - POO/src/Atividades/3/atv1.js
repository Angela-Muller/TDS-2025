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
var Ninja = /** @class */ (function () {
    function Ninja(nome, aldeia, jutsu) {
        this.nome = nome;
        this.aldeia = aldeia;
        this.jutsu = jutsu;
    }
    ;
    Ninja.prototype.usarJutsu = function () {
        console.log("O ninja ".concat(this.nome, " usou o jutsu ").concat(this.jutsu, "!"));
    };
    return Ninja;
}());
var ninjaVerde = new Ninja("Ninja Verde", "Aldeia da Foia", "Razenshuriken");
var ninjaVermelho = new Ninja("Ninja Vermelho", "Aldeia da labareda", "Bola de Fuego");
ninjaVerde.usarJutsu();
ninjaVermelho.usarJutsu();
// 2) Crie uma classe Héroi
var Heroi = /** @class */ (function () {
    function Heroi(nome, universo, poder) {
        this.nome = nome;
        this.universo = universo;
        this.poder = poder;
    }
    Heroi.prototype.lutar = function () {
        console.log("O heroi ".concat(this.nome, " usou seu poder ").concat(this.poder, "."));
    };
    return Heroi;
}());
var peterParker = new Heroi("Homem Aranha", "Marvel", "Soltar teia e super força");
var bruceWayne = new Heroi("Batman", "DC", "Dinheiro e planejamento");
peterParker.lutar();
bruceWayne.lutar();
