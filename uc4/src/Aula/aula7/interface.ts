interface Lutador {
  nome: string;
  lutar(): void;
}

class Jedi implements Lutador {
  constructor(public nome: string) {}
  lutar(): void {
    console.log(`${this.nome} luta com sabre de luz 🔵`);
  }
}

class Sith implements Lutador {
  constructor(public nome: string) {}
  lutar(): void {
    console.log(`${this.nome} luta com sabre vermelho 🔴`);
  }
}

const luke = new Jedi("Luke");
const vader = new Sith("Vader");

luke.lutar();  // sabre azul
vader.lutar(); // sabre vermelho