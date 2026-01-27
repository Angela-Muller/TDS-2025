import { Gerente } from "./Gerente";
import { Estagiario } from "./Estagiario";

const gerentes = new Gerente("joseph joestar",3400);
const estagiario = new Estagiario("Jotaro Kujo", 1300);

gerentes.aumentarSalario(10);
estagiario.receberAjudaDeCusto(100);