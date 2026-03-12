// Pegamos os botões de escolha: Pedra, Papel e Tesoura
// Ou seja, buscamos no HTML todos os botões dentro da área com classe "choices"
const botoes = document.querySelectorAll(".choices button"); // Essa linha de código seleciona vários botões no HTML e guarda todos eles em uma variável chamada botoes.

// Pegamos os textos que mostram as mensagens na tela
// Essas mensagens são para mostrar o que o jogador fez e quem venceu
const textoJ1 = document.getElementById("player1-choice"); // Onde vai aparecer a escolha do Jogador 1
const textoJ2 = document.getElementById("player2-choice"); // Onde vai aparecer a escolha do Jogador 2
const textoResultado = document.getElementById("winner");   // Onde aparece o resultado do jogo

// Variáveis que guardam o que cada jogador escolheu
// Começam como "null", ou seja, sem nenhuma escolha
let jogada1 = null;
let jogada2 = null;

/*
 Função que recebe as escolhas dos dois jogadores
 Compara as jogadas e devolve (return) quem venceu ou se foi empate
*/
function verificarVencedor(j1, j2) {
  // Se os dois escolheram a mesma coisa, é empate
  if (j1 === j2) return "Empate! 🫠";

  // Aqui estão as regras do jogo:
  // Pedra ganha da tesoura
  // Papel ganha da pedra
  // Tesoura ganha do papel
  if (
    (j1 === "pedra" && j2 === "tesoura") ||
    (j1 === "papel" && j2 === "pedra") ||
    (j1 === "tesoura" && j2 === "papel")
  ) {
    return "Jogador 1 venceu! 😎👍";
  } else

  // Se nenhuma das condições acima for verdadeira, então o Jogador 2 venceu
  return "Jogador 2 venceu! 😎👍";
}

/*
 Função que reinicia o jogo para uma nova rodada
 Apaga as escolhas anteriores e atualiza os textos na tela
*/
function novoJogo() {
  jogada1 = null; // Zera a escolha do Jogador 1
  jogada2 = null; // Zera a escolha do Jogador 2
  textoJ1.textContent = "Jogador 1: escolha"; // Mostra mensagem inicial
  textoJ2.textContent = "Jogador 2: escolha"; // Mostra mensagem inicial
  textoResultado.textContent = "";            // Apaga o resultado anterior
}

/*
 Aqui é onde tratamos os cliques nos botões
 Ou seja: quando alguém clica em "pedra", "papel" ou "tesoura"
*/
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    
    // Pegamos a escolha que está no botão clicado
    // O valor está guardado no atributo data-choice do HTML
    const escolha = botao.getAttribute("data-choice"); //Ela pega o valor do atributo data-choice do botão que foi clicado. Esse valor pode ser "pedra", "papel" ou "tesoura".

    // Se o Jogador 1 ainda não escolheu
    if (jogada1 === null) {
      jogada1 = escolha; // Guarda a escolha
      textoJ1.textContent = "Jogador 1 já escolheu.👌"; // Mostra que já escolheu (mas não revela o que)
      textoResultado.textContent = "Vez do Jogador 2!👍"; // Informa que agora é a vez do segundo jogador
    }

    // Se o Jogador 1 já escolheu, agora é a vez do Jogador 2
    else if (jogada2 === null) {
      jogada2 = escolha; // Guarda a escolha
      textoJ2.textContent = "Jogador 2 já escolheu.👌"; // Mostra que o Jogador 2 também escolheu

      // Agora que os dois já escolheram, chamamos a função para verificar quem venceu
      const resultado = verificarVencedor(jogada1, jogada2);

      // Mostramos o resultado na tela junto com as jogadas de cada jogador
      textoResultado.textContent = `${resultado} (J1: ${jogada1} | J2: ${jogada2})`;
    }

    // Se os dois jogadores já jogaram, começamos uma nova rodada automaticamente
    else {
      novoJogo(); // Zera tudo para começar de novo
      jogada1 = escolha; // O jogador 1 faz sua nova escolha
      textoJ1.textContent = "Jogador 1 já escolheu.👌";
      textoResultado.textContent = "Vez do Jogador 2!👍";
    }
  });
});

// Quando a página é carregada, chamamos a função para começar o jogo limpo
novoJogo();