"use strict";
/* import { Funcionario } from "./Funcionario"; export class Gerente extends Funcionario {
aumentarSalario(){
        let bonusSalario = this.salario*0.05;
        let Reajuste = this.salario+bonusSalario;
        console.log(`Gerente Nome ${this.nome} Salario R$ com Reajuste de ${Reajuste}`);
    }
} */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var Funcionario_1 = require("./Funcionario");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.aumentarSalario = function (porcentagem) {
        this.salario += this.salario * (porcentagem / 100);
        console.log("Voc\u00EA recebeu um aumento de ".concat(porcentagem, "% no seu sal\u00E1rio!"));
    };
    return Gerente;
}(Funcionario_1.Funcionario));
exports.Gerente = Gerente;
