export enum Sexo {
    M = "M",
    F = "F"
}

export class Persona {
    public nome: string;
    public idade: number;
    public sexo: Sexo;


    constructor(nome: string, idade: number, sexo: Sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    apresentar(){
        console.log(`Olá meu nome é ${this.nome}, prazer em lhe conhecer!`)
    }
}