import { Instrumento } from "./Instrumento";

export class Guitarra implements Instrumento{
    constructor(public modelo: string) {}
    tocar(): void {
        console.log(`${this.modelo}: vrão, tchran`)
    }
}