"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.Sexo = void 0;
var Sexo;
(function (Sexo) {
    Sexo["M"] = "M";
    Sexo["F"] = "F";
})(Sexo || (exports.Sexo = Sexo = {}));
var Persona = /** @class */ (function () {
    function Persona(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    Persona.prototype.apresentar = function () {
        console.log("Ol\u00E1 meu nome \u00E9 ".concat(this.nome, ", prazer em lhe conhecer!"));
    };
    return Persona;
}());
exports.Persona = Persona;
