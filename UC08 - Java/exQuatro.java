/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package fundamentosjavasenac;

/**
 *
 * @author ARTHURANDREMULLER
 */
public class exQuatro {

    public static void main(String[] args) {
    exQuatro e1 = new exQuatro(0, "Dado",(short) 10, 'D');
    e1.produtosRestantes();
    }
        int codProduto;
        String nomeProduto;
        short  estoque;
        char categoria;

    public exQuatro(int codProduto, String nomeProduto, short estoque, char categoria) {
        this.codProduto = codProduto;
        this.nomeProduto = nomeProduto;
        this.estoque = estoque;
        this.categoria = categoria;
    }

    public void produtosRestantes() {
        System.out.println("O Protudo " + nomeProduto + " da categoria " + categoria + "e com o codigo " + codProduto + " tem " + estoque + " em estoque!");
    }

}
