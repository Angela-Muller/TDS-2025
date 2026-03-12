"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
    Carro.prototype.acelerar = function () {
        if (this.velocidade >= 10) {
            this.velocidade += 10;
            console.log("O carro est\u00E1 com ".concat(this.velocidade));
        }
        else if (this.velocidade >= 40) {
            this.velocidade += 40;
            console.log("O carro est\u00E1 com ".concat(this.velocidade));
        }
        else {
            console.log("O carro est\u00E1 muito r\u00E1pido j\u00E1, ele est\u00E1 com ".concat(this.velocidade, "km/H!"));
        }
    };
    Carro.prototype.freiar = function () {
        if (this.velocidade >= 10) {
            this.velocidade -= 10;
            console.log("O carro est\u00E1 com ".concat(this.velocidade));
        }
        else if (this.velocidade >= 40) {
            this.velocidade -= 40;
            console.log("O carro est\u00E1 com ".concat(this.velocidade));
        }
        else {
            console.log("O carro est\u00E1 parada!");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
