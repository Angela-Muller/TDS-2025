import javax.swing.JOptionPane;

public class SaudacaoSwing {
    // importa a biblioteca swing que utilizamos para const interfaces gráficas
        public static void main(String[] args) {
            // Exibe uma pequena janela pedindo o nome do usuário
            String nome = JOptionPane.showInputDialog("Qual é o nome do querido da TDSPSG251T, que disse que não irira vir pq não teria coisa importante? ");
            String idade = JOptionPane.showInputDialog("Qual é a idade do meliante");
            // mostra a janela
            JOptionPane.showMessageDialog(
                    null, // janela padrão
                    "Olá " +nome+ " ! Você errou pai,",  "Boas vindas", // título da janela
                    JOptionPane.INFORMATION_MESSAGE
            );

        }
}
