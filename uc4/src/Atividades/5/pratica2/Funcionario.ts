export class Funcionario {
    public nome: string;
    public salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario
    }

    mostrarSalario(){
        console.log(`Meu salário é ${this.salario}`)
    }
}