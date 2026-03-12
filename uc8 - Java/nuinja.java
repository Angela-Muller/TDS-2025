/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package animes;
import java.util.Scanner;
/**
 *
 * @author ARTHURANDREMULLER
 */
public class desafio {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Escolha quantos inimigos você quer enfrentar (1 a 5) ");
        int opcao = 0;
        while (opcao != 6){
                   opcao = sc.nextInt();
             switch(opcao){
            case 1:
               nija n1 = new nija(100, "Naluto", 5);
               n1.ver();
             break;
             case 2:
                rival i1 = new rival(100,2);
                i1.ver();
                break;
             case 3: 
                rival i2 = new rival(100,2);
                i2.ver();
            case 4:
                rival i3 = new rival(100,2);    
                i3.ver();
                break;
            case 5:
                rival i4 = new rival(100,2);
                i4.ver();
                break;
                
             default:
                 System.out.println("Opção Indisponivel");
                 break;
        }
        System.out.println("Escolha quantos inimigos você quer enfrentar (1 a 5) ");
        }
    }
}
interface verificar{
    void ver();
}

class nija implements verificar{
    protected int vida;
    protected double dano;
    protected String nome;
    
    public nija (double dano, String Nome,int vida) {
        this.dano = dano;
        this.nome = Nome;
        this.vida = vida;
    }
    @Override
    public void ver() {
        vida = 100;
        dano = 1;
        while (vida>0) {    
            vida --;
            dano +=0.5;
            System.out.println( nome +" esta lutando contra seu rival, Sua Vida esta diminuindo "+vida+" E o dano esta Aumentando "+dano);
        }
        System.out.println("Ninja Morreu!");
    }
}
class rival implements verificar{
    protected int vidaRival;
    protected int danoRival;
    
    public rival(int vidaRival, int danoRival){
        this.vidaRival = vidaRival;
        this.danoRival= danoRival;
    }
    @Override
    public void ver(){
        vidaRival = 100;
        if(vidaRival >100){
            for (int i = 0; i < 100; i++) 
                System.out.println("O Rival está Lutando contra Você "+vidaRival+" Dano Rival "+danoRival);
            }else{
            if(vidaRival<0){
                System.out.println("Inimigo Derrotado");     
           
        } }
    }
}

class luta extends rival implements verificar{
    protected int quantidadeLuta;

    public luta(int quantidadeLuta, int vidaRival, int danoRival) {
        super(vidaRival, danoRival);
        this.quantidadeLuta = quantidadeLuta;
    }

    @Override
    public void ver() {
        Scanner quant = new Scanner(System.in);
        System.out.println("Insira a quantidade de Lutas (0 a 5)");
        quantidadeLuta = quant.nextInt();
        for(int i=1; i<=quantidadeLuta; i++){
            System.out.println(" Quantidade de Lutas entre Ninja e Inimigo "+i);
        }
   }
}
