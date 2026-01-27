class Personagem {
  constructor(public nome: string) {}

  atacar(): void {
    console.log(`${this.nome} ataca normalmente 👊`);
  }
}

class Mago extends Personagem {
  atacar(): void {
    console.log(`${this.nome} lança magia de fogo 🔥`);
  }
}

class Guerreiro extends Personagem {
  atacar(): void {
    console.log(`${this.nome} golpeia com espada 🗡️`);
  }
}

const gandalf = new Mago("Gandalf");
const aragorn = new Guerreiro("Aragorn");

gandalf.atacar(); // magia de fogo 🔥
aragorn.atacar(); // espada 🗡️