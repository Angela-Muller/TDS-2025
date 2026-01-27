// Classe base (superclasse)
export class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }
}
