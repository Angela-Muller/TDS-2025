class Calculadora {
  somar(a: number, b: number): number;
  somar(a: string, b: string): string;

  somar(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculadora();
console.log(calc.somar(10, 20));      // 30
console.log(calc.somar("Oi, ", "Daniel")); // "Oi, Daniel"