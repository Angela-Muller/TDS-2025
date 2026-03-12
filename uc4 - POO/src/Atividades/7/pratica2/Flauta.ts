import { Instrumento } from "./Instrumento";

export class Flauta implements Instrumento{
    constructor(public modelo: string) {}
    tocar(): void {
        console.log(`${this.modelo}: fiuuu tiriii fuííí`)
    }
}