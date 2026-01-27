/* import { Funcionario } from "./Funcionario"; export class Gerente extends Funcionario {
aumentarSalario(){
        let bonusSalario = this.salario*0.05;
        let Reajuste = this.salario+bonusSalario;
        console.log(`Gerente Nome ${this.nome} Salario R$ com Reajuste de ${Reajuste}`);
    }
} */

import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    aumentarSalario(porcentagem: number): void{
        this.salario += this.salario * (porcentagem/100);
        console.log(`Você recebeu um aumento de ${porcentagem}% no seu salário!`)
    }
}