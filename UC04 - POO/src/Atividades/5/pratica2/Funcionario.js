"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.mostrarSalario = function () {
        console.log("Meu sal\u00E1rio \u00E9 ".concat(this.salario));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
