import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Sexo } from "./Animal";

const dog = new Cachorro("Guria", Sexo.F)
const cat = new Gato("Lucky", Sexo.M)

console.log(`O nome do dog é ${dog.nome}`)
dog.falar()
console.log("--------")
console.log(`O nome do dog é ${cat.nome}`)
cat.falar()