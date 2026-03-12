"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
    Moto.prototype.acelerar = function () {
        if (this.velocidade >= 10) {
            this.velocidade += 20;
            console.log("A moto est\u00E1 com ".concat(this.velocidade));
        }
        else if (this.velocidade >= 40) {
            this.velocidade += 50;
            console.log("A moto est\u00E1 com ".concat(this.velocidade));
        }
        else {
            console.log("A moto est\u00E1 muito r\u00E1pido j\u00E1, ele est\u00E1 com ".concat(this.velocidade, "km/H!"));
        }
    };
    Moto.prototype.freiar = function () {
        if (this.velocidade >= 10) {
            this.velocidade -= 30;
            console.log("A moto est\u00E1 com ".concat(this.velocidade));
        }
        else if (this.velocidade >= 40) {
            this.velocidade -= 40;
            console.log("A moto est\u00E1 com ".concat(this.velocidade));
        }
        else {
            console.log("A Moto est\u00E1 parada!");
        }
    };
    return Moto;
}());
exports.Moto = Moto;
