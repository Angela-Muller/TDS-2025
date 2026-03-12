"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
// Classe base (superclasse)
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.comer = function () {
        console.log("".concat(this.nome, " est\u00E1 comendo."));
    };
    return Animal;
}());
exports.Animal = Animal;
