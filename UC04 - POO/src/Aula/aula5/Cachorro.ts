// Classe filha (subclasse)
import { Animal } from "./Animal"; export class Cachorro extends Animal {
  latir() {
    console.log(`${this.nome} está latindo: Au au!`);
  }
}