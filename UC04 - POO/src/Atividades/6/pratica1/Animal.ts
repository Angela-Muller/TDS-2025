export enum Sexo{
    M = "M",
    F = "F"
}


export abstract class Animal {
    constructor(public nome: string, protected sexo: Sexo){}

   abstract falar(): void;
}
