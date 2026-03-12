/*
1- a classe inteira se torna publica
2- private é somente acessível dentro dá própria classe, já o protected é acessível dentro dá própria classe e das filhas dela
3- Os dados pessoais da pessoas, como CPF, RG, entre outros dados pessoais, também prontuario médico
 */
// pratica
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    Pessoa.prototype.fazerAniversario = function () {
        this.idade += 1;
        console.log("".concat(this.nome, " fez anivers\u00E1rio agora ele tem ").concat(this.idade));
    };
    Pessoa.prototype.mostrarIdade = function () {
        console.log("A idade de ".concat(this.nome, " \u00E9 ").concat(this.idade));
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa("Menino novo", 26, "Masculino");
var pessoa2 = new Pessoa("Messias", 15, "Masculino");
var pessoa3 = new Pessoa("Kriptoniano", 16, "Masculino");
pessoa1.fazerAniversario();
pessoa2.fazerAniversario();
pessoa3.fazerAniversario();
pessoa1.mostrarIdade();
pessoa2.mostrarIdade();
pessoa3.mostrarIdade();
var Celular = /** @class */ (function () {
    function Celular(bateria, marca, nome) {
        this.nivelBateria = bateria;
        this.marca = marca;
        this.nomeDispositivo = nome;
    }
    Celular.prototype.carregar = function () {
        if (this.nivelBateria = 100) {
            console.log("Sua bateria est\u00E1 cheia!");
        }
        else if (this.nivelBateria < 50) {
            this.nivelBateria += 20;
            console.log("Sua Bateria est\u00E1 com ".concat(this.nivelBateria, "%"));
        }
        else if (this.nivelBateria > 20) {
            this.nivelBateria += 25;
            console.log("Sua Bateria est\u00E1 com ".concat(this.nivelBateria, "%"));
        }
        else if (this.nivelBateria < 5) {
            this.nivelBateria += 10;
            console.log("Sua bateria est\u00E1 perto de acabar, voc\u00EA est\u00E1 com ".concat(this.nivelBateria, "%"));
        }
        else {
            console.log("Bateria descarregada!");
        }
    };
    Celular.prototype.usar = function () {
        if (this.nivelBateria <= 0) {
            console.log("Bateria descarregada... Por favor, carregue o celular.");
            return;
        }
        if (this.nivelBateria > 20) {
            this.nivelBateria -= 5;
        }
        else {
            this.nivelBateria -= 2;
        }
        if (this.nivelBateria < 0)
            this.nivelBateria = 0;
        console.log("Bateria descarregando: ".concat(this.nivelBateria, "%"));
        if (this.nivelBateria < 25) {
            console.log("Sua bateria está prestes a acabar!");
        }
    };
    Celular.prototype.mostrarbateria = function () {
        console.log("Smartphone ".concat(this.nomeDispositivo, " Bateria ").concat(this.nivelBateria, "%"));
    };
    return Celular;
}());
var cell1 = new Celular(15, "Motorola", "Edge 20 lite");
var cell2 = new Celular(25, "Apple", "iphone 16");
var cell3 = new Celular(100, "Samsung", "A25");
cell1.usar();
cell2.usar();
cell3.usar();
cell1.carregar();
cell2.carregar();
cell1.mostrarbateria();
cell2.mostrarbateria();
cell3.mostrarbateria();
// correção
var Person = /** @class */ (function () {
    function Person(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Person.prototype.fazerAniversario = function () {
        this.idade += 1;
    };
    Person.prototype.mostrarIdade = function () {
        console.log("A idade de ".concat(this.nome, " \u00E9 ").concat(this.idade));
    };
    return Person;
}());
var person1 = new Person("Macuin", 26);
var person2 = new Person("Kachau", 16);
console.log("-- CORRE\u00C7\u00C3O --");
console.log("-- EX 1 --");
person1.fazerAniversario();
person1.mostrarIdade();
console.log("-------------------------");
person2.fazerAniversario();
person2.mostrarIdade();
var Cell = /** @class */ (function () {
    function Cell() {
        this.nivelBateria = 100;
    }
    Cell.prototype.usar = function () {
        if (this.nivelBateria <= 0) {
            console.log("Bateria descarregada. Por favor carregue!");
        }
        else {
            this.nivelBateria -= 20;
        }
    };
    Cell.prototype.carregar = function () {
        this.nivelBateria = 100;
    };
    Cell.prototype.mostrarBateria = function () {
        console.log("N\u00EDvel de bateria: ".concat(this.nivelBateria, "%"));
    };
    return Cell;
}());
var motorola = new Cell();
console.log("-- EX 2 --");
motorola.usar();
motorola.mostrarBateria();
motorola.usar();
motorola.usar();
motorola.usar();
motorola.usar();
motorola.usar();
motorola.carregar();
motorola.mostrarBateria();
