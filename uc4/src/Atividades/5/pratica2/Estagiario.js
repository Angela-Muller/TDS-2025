"use strict";
/* import { Funcionario } from "./Funcionario";

export class Estagiario extends Funcionario{
    receberAjudaDeCusto(){
        let Ajuda = this.salario+100;
        console.log(`Salario de Estragiario é  R$ ${Ajuda}+ 100 R$ de Ajuda`);
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
exports.Estagiario = void 0;
var Funcionario_1 = require("./Funcionario");
var Estagiario = /** @class */ (function (_super) {
    __extends(Estagiario, _super);
    function Estagiario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Estagiario.prototype.receberAjudaDeCusto = function (valor) {
        if (valor > 0) {
            this.salario += valor;
            console.log("Voc\u00EA recebeu uma ajuda de custo de R$ ".concat(valor));
        }
        else {
            console.log("A Ajuda de custo precisa ser maior que R$ 0,00.");
        }
    };
    return Estagiario;
}(Funcionario_1.Funcionario));
exports.Estagiario = Estagiario;
