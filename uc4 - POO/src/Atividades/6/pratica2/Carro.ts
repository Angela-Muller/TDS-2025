import { Veiculo } from "./Veiculo";

export class Carro implements Veiculo {
    constructor(public marca: string, public modelo: string, public velocidade: number){}

    acelerar(){
       if (this.velocidade >= 10 ) {
        this.velocidade += 10
            console.log(`O carro está com ${this.velocidade}`)
       } else if (this.velocidade >= 40) {
        this.velocidade += 40
            console.log(`O carro está com ${this.velocidade}`)
       } else{
        console.log(`O carro está muito rápido já, ele está com ${this.velocidade}km/H!`)
       }
    }
    freiar(){
     if (this.velocidade >= 10 ) {
        this.velocidade -= 10
            console.log(`O carro está com ${this.velocidade}`)
       } else if (this.velocidade >= 40) {
        this.velocidade -= 40
            console.log(`O carro está com ${this.velocidade}`)
       } else{
        console.log(`O carro está parada!`)
       }
    }
}