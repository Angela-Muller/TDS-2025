import { Aluno } from "./Aluno";
import { Professor } from "./Professor";
import { Sexo } from "./Persona";

const kal = new Aluno("Kalleo", 16, Sexo.M)
const Dal = new Professor("Dalvana", 25, Sexo.F)


kal.apresentar();
kal.estudar();
console.log("------");
Dal.apresentar();
Dal.ensinar()
