"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gerente_1 = require("./Gerente");
var Estagiario_1 = require("./Estagiario");
var gerentes = new Gerente_1.Gerente("joseph joestar", 3400);
var estagiario = new Estagiario_1.Estagiario("Jotaro Kujo", 1300);
gerentes.aumentarSalario(10);
estagiario.receberAjudaDeCusto(100);
