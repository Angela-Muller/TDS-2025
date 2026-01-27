/* import { Funcionario } from "./Funcionario"; 

export class Estagiario extends Funcionario{
    receberAjudaDeCusto(){
        let Ajuda = this.salario+100;
        console.log(`Salario de Estragiario é  R$ ${Ajuda}+ 100 R$ de Ajuda`);
    }
} */

import { Funcionario } from "./Funcionario"; 

export class Estagiario extends Funcionario{
    receberAjudaDeCusto(valor: number){
      if(valor > 0) {
        this.salario += valor
        console.log(`Você recebeu uma ajuda de custo de R$ ${valor}`)
      }  else{
        console.log(`A Ajuda de custo precisa ser maior que R$ 0,00.`)
      }
    }
}