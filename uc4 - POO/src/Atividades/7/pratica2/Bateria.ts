import { Instrumento } from "./Instrumento";

export class Bateria implements Instrumento{
    constructor(public modelo: string) {}
    tocar(): void {
        console.log(`${this.modelo}: tum, pá, tchiiin`)
    }
}