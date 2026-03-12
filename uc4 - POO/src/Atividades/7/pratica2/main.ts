import { Bateria } from "./Bateria";
import { Flauta } from "./Flauta";
import { Guitarra } from "./Guitarra";

const guitar = new Guitarra("Les Paul")
const flau = new Flauta("Yamaha")
const Bat = new Bateria("Ludwig Classic")

guitar.tocar()
flau.tocar()
Bat.tocar()