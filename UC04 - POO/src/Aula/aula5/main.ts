import {Cachorro} from "./Cachorro";
import {Gato} from "./Gato"

// Criando instâncias
const rex = new Cachorro("Rex");
const felix = new Gato("Felix");

rex.comer();   // Rex está comendo.
rex.latir();   // Rex está latindo: Au au!
felix.comer(); // Felix está comendo.
felix.miar();  // Felix está miando: Miau!