import { Persona } from "./Persona"; export class Professor extends Persona {
    ensinar(): void{
        console.log(`Boa tarde meu nome é ${this.nome} e hoje vamos aprender muito!`)
    }
}