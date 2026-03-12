"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.Sexo = void 0;
var Sexo;
(function (Sexo) {
    Sexo["M"] = "M";
    Sexo["F"] = "F";
})(Sexo || (exports.Sexo = Sexo = {}));
var Animal = /** @class */ (function () {
    function Animal(nome, sexo) {
        this.nome = nome;
        this.sexo = sexo;
    }
    return Animal;
}());
exports.Animal = Animal;
