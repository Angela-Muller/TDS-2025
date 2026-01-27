/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package fundamentosjavasenac;

/**
 *
 * @author ARTHURANDREMULLER
 */
public class SalarioMensal {
    public static void main(String[] args) {
        // Valor da hora trabalhado (em reais)
        double valorHora = 9.50;
        // Quantidade de horas trabalhadas
        double horasTrabalhadas = 160;
        // Cãlculo de salário total
        double salario = valorHora * horasTrabalhadas;
        // Exibe o resultado (sout)
        System.out.println("Salário Mensal: R$ " + salario);
    }
    
}
