// Operadores Lógicos 

// Valores de exemplo 

let a = true
let b = false

console.log(" Operadores Lógiscos em JavaScript")

// AND (&&) - Retorna true se ambos forem true

console.log(" true && true => ", true && true)
console.log(" true && false => ", true && false)
console.log(" a && b => ", a && b)

// OR (||) - Retorna true se pelo menos um for true

console.log(" true || false => ", true || false) // true
console.log(" false || false => ", false || false) // false
console.log(" a || b => ", a || b) //true

// NOT (!) - Inverte o valor booleano

console.log(" !true => ", !true) // false
console.log(" !false => ", !false) // true
console.log(" !a => ", !a) // false
console.log(" !b => ", !b) // true

// Combinações mais complexas

console.log(" !(a && b) => ", !(a && b)) // true
console.log(" (a || b) && !b => ", (a || b) && !b) // true
