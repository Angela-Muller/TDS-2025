import { Veiculo } from "./Veiculo";

export class Moto implements Veiculo {
    constructor(public marca: string, public modelo: string, public velocidade: number){}

    acelerar(){
       if (this.velocidade >= 10 ) {
        this.velocidade += 20
            console.log(`A moto está com ${this.velocidade}`)
       } else if (this.velocidade >= 40) {
        this.velocidade += 50
            console.log(`A moto está com ${this.velocidade}`)
       } else{
        console.log(`A moto está muito rápido já, ele está com ${this.velocidade}km/H!`)
       }
    }
    freiar(){
     if (this.velocidade >= 10 ) {
        this.velocidade -= 30
            console.log(`A moto está com ${this.velocidade}`)
       } else if (this.velocidade >= 40) {
        this.velocidade -= 40
            console.log(`A moto está com ${this.velocidade}`)
       } else{
        console.log(`A Moto está parada!`)
       }
    }
}