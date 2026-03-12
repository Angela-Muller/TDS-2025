import { Animal } from "./Animal"; export class Gato extends Animal {
  miar() {
    console.log(`${this.nome} está miando: Miau!`);
  }
}
