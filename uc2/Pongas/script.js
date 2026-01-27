// Seleciona o canvas da página onde o jogo vai acontecer 
const canvas = document.getElementById('game');

// Pega o contexto 2D do canvas para desenhar as nossas formas, imagem e tudo o que a vossa criatividade precisar :)

const ctx = canvas.getContext('2d');

// seleciona o elemento html que vai mostrar a prontuação do jogador
const scoreDisplay = document.getElementById('score');

//objeto que representa a raquete que o jogador controla
const raquete = {
    x: 10, // Posição horizontal da raquete ( ela fica fixa perto do lado esquerdo)
    y: canvas.height / 2 - 40, //posição vertical inicial (centralizada na tela)
    largura: 10, // largura da raquete
    altura: 100, // altura da nossa raquete
    velocidade: 12 // velocidade com que a raquete se move pra cima e pra baixo
};
// objetp que representa a bola do jogo 
const bola = {
    x: canvas.width / 2, // posição horizontal inicial (no meio do canvas)
    y: canvas.height / 2, // tamnho da bola ( raio do círculo)
    raio: 10,    // Tamanho da bola (raio do círculo)
    dx: 4, // velocidade e direção horizontal da bola (4 pixels por frame)
    dy: 4 // velocidade e direção vertical da bola (tbm 4 pixels pro frame)
}

// variável que guarda a pontuação do jogador (começa com 0)
let pontuacao = 0;

// variável para saver se o jogo acabou (inicialmente falso)
let jogoAcabou = false;

// objeto que vai guardar se as teclas de seta pra cima e pra baixo estão sendo  pressionadas
const teclas = {
    ArrowUp: false, // vai ser true quando a seta para cima estiver pressionada
    ArrowDown: false, // Tbm true quando a tecla para baixo estiver pressionada
};

// adicionamos um "ouvinte" para quando um tecla for pressionada
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowUp') teclas.ArrowUp = true;  // marca que a seta para cima está pressionada
    if (evento.key === 'ArrowDown') teclas.ArrowDown = true;  // marca que a seta para baixo está pressionada
});

// Adiciona um "ouvinte" para quando a tecla for solta
document.addEventListener('keyup', (evento) => {
    if (evento.key === 'ArrowUp') teclas.ArrowUp = false // marca que a seta para cima for solta
    if (evento.key === 'ArrowDown') teclas.ArrowDown = false // marca que a seta para baixo for solta
});

// Função que atualiza a lógica do jogo  em cada frame
function atualizar() {
    if (jogoAcabou) return; // se o jogo acabou, para a atualização

    // Move a raquete para cima se a tecla seta para cima estiver pressionada
    if (teclas.ArrowUp) raquete.y -= raquete.velocidade;

    // move a raquete para baixo se a tecla seta para baixo estiver pressionada
    if(teclas.ArrowDown) raquete.y += raquete.velocidade;

    // imperde que a raquete ultrapase o limite superior da tela
    if (raquete.y < 0) raquete.y = 0

    // Impede que a raquete ultrapassa o limite inferior da tela
    if (raquete.y + raquete.altura > canvas.height) {
        raquete.y = canvas.height - raquete.altura;
    }

    // Atualiza a posição horizontal da bola e somando a velocidade dx
    bola.x += bola.dx;

    // Atualiza a posição vertical da bola somando sua velocidade dy
    bola.y += bola.dy;

    // verifica se a bola bateu no topo da tela
    if (bola.y - bola.raio < 0) {
        bola.dy *= -1; // Inverte a direção vertical da bola para baixo
    }

    // verifica se a bola bateu na parte inferior da tela
    if (bola.y + bola.raio > canvas.height) {
        bola.dy *= -1; // inverte a direção da bola pra cima
    }

    // verifica se a bola está colidindo com a raquete
    if (
        bola.x - bola.raio < raquete.x + raquete.largura && // a bola chegou na largura da raquete
        bola.y > raquete.y && // a bola está em baio do topo da raquete
        bola.y < raquete.y + raquete.altura // a bnola está em cima da base da raquete
    ) {
        bola.dx *= -1 // inverte a direção horizontal da bola (raquete para a direita)
        pontuacao++ // incrementa a pontuação do jogador
        scoreDisplay.textContent = pontuacao // atualiza a pontuação na tela
    }

    // verifica se a bola saiu pela esquerda da tela (perdeu playboi)
    if (bola.x - bola.raio < 0){
        jogoAcabou = true // marca que o jogo terminou

        // espera um pouquinho antes de mostrar o alerta para o jogador
        setTimeout(() => {
            alert('Fim de Jogo! Perdeu seu PAMONHA <(!_!)> . Sua pontuação é: ' + pontuacao)
            document.location.reload() // recarrega a pagina para reiniciar o jogo
        }, 100)
    }
    
     // Verifica se a bola bateu na parede direita da tela
    if (bola.x + bola.raio > canvas.width) {
          bola.dx *= -1; // Inverte a direção horizontal da bola (rebate para a esquerda)
    }
}

// Função que desenha todos os elementos na tela
function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // Limpa a tela para desenhar o próximo frame
    // desenha a raquete (retangulo)
    ctx.fillStyle = 'green' // defini a cor do preenchimento
    ctx.fillRect(raquete.x, raquete.y, raquete.largura, raquete.altura)

    // desenhando a bola
    ctx.beginPath()
    ctx.arc(bola.x, bola.y, bola.raio,0,Math.PI * 2)
    ctx.fillStyle = 'greenyellow'
    ctx.fill()
    ctx.closePath()
}

// Função que roda o loop do jogo, chamando atualizar e desenhar a cada frame
function loopDoJogo() {
    atualizar(); // Atualiza a lógica do jogo
    desenhar();  // Desenha os elementos na tela

    // Continua o loop enquanto o jogo não acabou
    if (!jogoAcabou) {
        requestAnimationFrame(loopDoJogo); // Chama o loop novamente no próximo frame

    }
}

// começa o jogo chamando o loop pela primeira vez
loopDoJogo() 