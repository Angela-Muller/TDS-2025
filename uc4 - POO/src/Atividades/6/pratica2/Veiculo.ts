export interface Veiculo {
    marca: string;
    modelo: string;
    velocidade: number;
    acelerar(): void;
    freiar(): void 
}