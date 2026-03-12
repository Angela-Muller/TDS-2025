public class pessoa {

    // Atributos (características do objeto)
    String nome; // nome da pessoa
    int idade; // idade da pessoa

    // Construtor: define como o objeto será criado
    public pessoa(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    // método: define o comportamento do objeto
    public void apresentar() {
        // Exibe a mensagem no console
        // sout
        System.out.println("Olá, meu nome é " + nome + " e eu tenho" + idade + " anos.");
        // Método principal: ponto de partida do programa
        // psvm
    }

    public static void main(String[] args) {
    // cria uma instancia (objeto) de classe
    pessoa pessoa1 = new pessoa("Ana",25);
        pessoa pessoa2 = new pessoa("Kalleo",17);
        pessoa pessoa3 = new pessoa("Sidão",46);
    //chama o método "apresentar"
        pessoa1.apresentar();
        pessoa2.apresentar();
        pessoa3.apresentar();

    }


}
