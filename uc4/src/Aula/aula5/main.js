"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cachorro_1 = require("./Cachorro");
var Gato_1 = require("./Gato");
// Criando instâncias
var rex = new Cachorro_1.Cachorro("Rex");
var felix = new Gato_1.Gato("Felix");
rex.comer(); // Rex está comendo.
rex.latir(); // Rex está latindo: Au au!
felix.comer(); // Felix está comendo.
felix.miar(); // Felix está miando: Miau!
