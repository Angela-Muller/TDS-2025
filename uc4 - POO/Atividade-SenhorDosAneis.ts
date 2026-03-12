import * as promptSync from "prompt-sync";
const prompt = promptSync();

import { Personagem } from "./InfoPersonagem";
import { HabilidadePersongem } from "./Habilidade";
import { PaginaNarrativa } from "./PaginaNarrativa";
import { PaginaBatalha } from "./Paginabatalha";
import { ClasseOculta } from "./ClasseOculta";
import {Inventario} from "./inventario";
import { VerificarEscolhas } from "./Interface";

// Variavel Global 
const paginasNarrativas: PaginaNarrativa[] = [
    new PaginaNarrativa(1, "1 - Você acorda em uma caverna escura... \n O ar é úmido e pesado, e você sente o frio das pedras sob o corpo. Aos poucos, seus olhos se acostumam com a penumbra. À esquerda, há um pequeno lago cristalino, e no fundo dele algo brilha intensamente, como se fosse feito de ouro. À frente, uma saída estreita deixa escapar a luz do sol, convidando-o para fora. À direita, um túnel estreito se estende para as profundezas, coberto de musgo e ecoando um som estranho."),// ESCREVER HISTORIA

    new PaginaNarrativa(2, "2 - O laguinho misterioso. \n A água é tão límpida que você consegue ver sua própria imagem refletida, mas o brilho dourado no fundo chama sua atenção com mais força. Ondulações leves se espalham, como se algo lá embaixo o esperasse.Um vento frio sopra pela caverna, quase como um aviso para não se arriscar."),// ESCREVER HISTORIA

    new PaginaNarrativa(3, "O anel dourado \n Você mergulha e sente a água gelada cortar sua pele. Tocando o fundo, seus dedos encontram um objeto circular e pesado. É um anel dourado, brilhante e misterioso. Ao segurá-lo, uma estranha energia percorre seu corpo, como se o próprio destino estivesse agora em suas mãos. Você sobe de volta à superfície, respira com dificuldade e decide retornar ao centro da caverna."),// ESCREVER HISTORIA

    new PaginaNarrativa(4, "O beco sem saída \n O túnel estreito leva você até um corredor apertado, mas ele termina em um paredão coberto de fungos e raízes secas. Não há saída por aqui. O silêncio é perturbador, e algo parece observá-lo nas sombras. Sem alternativas, você volta para onde começou."),// ESCREVER HISTORIA

    new PaginaNarrativa(5, "A floresta misteriosa \n Saindo da caverna, a luz do sol o cega por alguns instantes. Logo, você percebe estar diante de uma vasta floresta antiga, onde as árvores se erguem como gigantes milenares. O canto dos pássaros mistura-se com estalos de galhos quebrando ao longe. Há algo mágico no ar, mas também um perigo que você não sabe identificar."),// ESCREVER HISTORIA

    new PaginaNarrativa(6, "A bifurcação na floresta \n O caminho à sua frente se divide em duas trilhas. A da esquerda é estreita, com pegadas pequenas que lembram passos de anões. A da direita parece mais aberta, mas há sinais de fogo nas árvores, como se algo perigoso tivesse passado por ali."),// ESCREVER HISTORIA

    new PaginaNarrativa(7, "O encontro com os anões \n Seguindo pela trilha estreita, você encontra um grupo de anões reunidos em torno de uma fogueira. Suas barbas longas e machados reluzentes demonstram experiência em batalha. Um deles se aproxima e diz: — Estrangeiro, estamos em tempos sombrios. O mago Gandalf precisa de ajuda, mas não podemos ir até ele. Leve esta Pulseira da Morfação e entregue-a em suas mãos. Você aceita o artefato, sentindo seu peso mágico pulsar como um coração vivo."),// ESCREVER HISTORIA

    new PaginaNarrativa(8, "A batalha dos magos \n No alto de uma colina, você vê Gandalf enfrentando Saruman. O chão treme a cada feitiço lançado, e as árvores ao redor ardem em chamas azuis. Gandalf parece cansado, prestes a ser derrotado. Você corre até ele e entrega a Pulseira da Morfação. Com um grito poderoso, ele ergue o braço: — É HORA DE MORFAR! Em um clarão, Gandalf se transforma no Sidtopiazord, um mecha colossal envolto em magia."),// ESCREVER HISTORIA

    new PaginaNarrativa(9, "A queda de Saruman \n O Mecha Gandalf ergue seu cajado metálico e invoca sua habilidade mais devastadora: Sentinela Nuclear. Uma esfera de luz incandescente se forma e explode em um clarão que desintegra Saruman, reduzindo-o a cinzas no vento.O silêncio recai sobre a floresta. Você respira fundo, sabendo que testemunhou algo impossível de esquecer."),// ESCREVER HISTORIA

    new PaginaNarrativa(10, "A jornada a Mordor \n Gandalf abre a escotilha do mecha e sorri para você: — Suba, pequeno aventureiro. Juntos, ainda temos uma guerra a vencer. Com um salto, você entra na cabine do Sidtopiazord, sentindo o poder mágico percorrer suas veias. O caminho de Mordor se estende diante de vocês, e a sombra de Sauron cresce no horizonte."),// ESCREVER HISTORIA

    new PaginaNarrativa(11, "O confronto final em Mordor \n As terras de Mordor se abrem diante de seus olhos: um deserto de cinzas, rios de lava e o Olho Flamejante de Sauron brilhando no alto da torre de Barad-dûr. De repente, o chão treme. O próprio Sauron surge, colossal, envolto em chamas negras, empunhando uma espada do tamanho de uma montanha.A batalha final começou. O destino da Terra-Média está em suas mãos."),// ESCREVER HISTORIA

    new PaginaNarrativa(12, "Após a vitória esmagadora de Sidtopiazord\n A fumaça da batalha contra Sauron ainda cobre os céus, mas a sensação de triunfo é apenas momentânea. Gandalf, de dentro do mecha, vira-se para você com um olhar sério: — A luta não acabou, jovem. Enquanto o Um Anel existir, o mal sempre encontrará um caminho para retornar.Vocês seguem juntos rumo às Montanhas da Perdição, o único lugar capaz de destruir para sempre o artefato maligno. O ar fica cada vez mais quente, o solo rachado exala fogo, e rios de lava iluminam o horizonte em vermelho intenso.O destino do mundo repousa agora em suas mãos."),// ESCREVER HISTORIA

    new PaginaNarrativa(13, "A escolha final \n Você se encontra diante da fornalha eterna, no coração das Montanhas da Perdição. \n O Anel do Poder brilha em sua mão, pulsando como se tivesse vida própria. Sussurros ecoam em sua mente, prometendo glória, domínio e imortalidade. Atrás de você, Gandalf observa em silêncio, confiante de que você fará o que é certo. \n Agora, a escolha é sua: \n Destruir o Anel: Jogue-o nas chamas ardentes e liberte a Terra-Média de todo o mal. → vá para a página 14 \n Reivindicar o poder para si: Traia Gandalf, tome o poder e torne-se a nova sombra que dominará o mundo. → vá para a página 15"),// ESCREVER HISTORIA

    new PaginaNarrativa(14, "O triunfo da luz \n Com um grito de coragem, você ergue o Anel e o lança nas chamas ardentes da Montanha da Perdição.\n O ouro maldito derrete, liberando uma energia escura que se dissipa em meio à lava. Um rugido de dor ecoa por toda a Terra-Média: Sauron é finalmente destruído.\n Gandalf sorri, orgulhoso. Frodo e os povos livres celebram a vitória. A paz reina, e você será lembrado como o herói que derrotou a escuridão ao lado de Gandalf e de seu Sidtopiazord. \n Fim do Caminho da Luz ✨"),// ESCREVER HISTORIA

    new PaginaNarrativa(15, "O nascimento de um novo mal \n Os sussurros do Anel se tornam irresistíveis. Ao invés de lançá-lo às chamas, você se volta contra Gandalf.\n Com um golpe traiçoeiro, o lança no abismo de lava, ouvindo seu grito desaparecer em meio às labaredas.\n O poder do Anel queima em sua mão, mas ao unir-se à força colossal do Sidtopiazord, você se transforma em algo nunca visto antes: um Senhor das Trevas Mecanizado, invencível.\n Agora, a Terra-Média se curva diante de você. Elfos, anões, homens e hobbits tremem ao ouvir seu nome.\n Com o Anel do Poder e o mecha sob seu comando, nenhum exército poderá detê-lo.\n Fim do Caminho das Sombras ☠️"),// ESCREVER HISTORIA
    
    new PaginaNarrativa(16, " A floresta incendiada \n Seguindo pelo caminho da direita, o cheiro de fumaça invade suas narinas. As árvores ao redor estão queimadas, algumas ainda crepitam em brasas vivas. Você avança com cautela até encontrar uma nova bifurcação: \n Um caminho à esquerda continua floresta adentro, levando a estrondos mágicos no horizonte. → vá para a página 8 \n Um caminho à direita retorna a um desfiladeiro de pedra que leva de volta a uma caverna desconhecida. → vá para a página 20"),// ESCREVER HISTORIA

    new PaginaNarrativa(17, "Voltando para casa \n Exausto da escuridão e do perigo, você decide que aventuras não são para você. Ao sair da caverna, retorna pelos campos até sua casa aconchegante no Condado. \n Lá, aquece um chocolate quente, se enrola em um cobertor e adormece em paz, enquanto o destino da Terra-Média continua sem você. \n Afinal, o que um simples hobbit poderia fazer contra as forças do mal? \n Fim do Caminho do Descanso🛏️"),// ESCREVER HISTORIA

    new PaginaNarrativa(18, "A vitória do Mal \n Você tenta usar o Anel contra Saruman, mas sua força ainda é instável. As vozes dentro dele confundem sua mente, e sua magia falha no momento decisivo. \n Gandalf, já enfraquecido, não resiste aos feitiços do inimigo e cai mortalmente ferido. \n Saruman o captura, arranca o Anel de sua mão e, triunfante, corre para entregá-lo ao verdadeiro senhor das trevas. \n → siga para a página 19"),// ESCREVER HISTORIA

    new PaginaNarrativa(19, "O domínio de Sauron \n Com o Anel recuperado, Sauron desperta em sua forma completa. Sua sombra cobre toda a Terra-Média, e exércitos de orcs, trolls e Nazgûl marcham sem oposição. \n As cidades caem, os povos livres são escravizados e a esperança desaparece. \n Nada pode conter o poder absoluto do Senhor do Escuro. \n Fim do Caminho da Ruína ☠️"),// ESCREVER HISTORIA

    new PaginaNarrativa(20, "A Caverna dos Trolls \n O caminho pela direita leva você até uma gruta úmida e abafada, completamente diferente da primeira caverna onde acordou. O teto é baixo, o ar é pesado, e as paredes estão cobertas de símbolos rudes esculpidos na pedra. \n Você avança cautelosamente até tropeçar em algo metálico entre pilhas de ossos espalhados pelo chão. Ao afastar os restos de cadáveres, encontra uma adaga élfica brilhante, ainda envolta por um leve fulgor azulado. O fio da lâmina parece novo, como se tivesse sido forjado ontem. \n Você pode guardar a adaga élfica no inventário, que poderá ser usada em combates futuros. \n Logo em seguida, um estrondo faz o chão tremer: três trolls imensos estão reunidos ao redor de uma fogueira, devorando ossos ainda cobertos de carne. Suas vozes ecoam como trovões, e o cheiro de sangue e fumaça toma conta do ambiente. \n Eles ainda não notaram sua presença, mas o espaço é apertado demais para simplesmente fugir. Você precisará agir. \n Enfrentar os trolls com toda a sua coragem (se tiver o Anel, a Adaga Élfica, pode usá-los na luta). → vá para a página 21 \n Tentar enganar os trolls, usando astúcia para sobreviver. → vá para a página 22"),// ESCREVER HISTORIA

    new PaginaNarrativa(21, "O Combate Contra os Trolls \n Você avança empunhando sua arma. O brilho da adaga élfica corta a escuridão da caverna, e os trolls finalmente percebem sua presença. Rugindo como tempestades, eles se levantam, enormes e furiosos. \n Você luta com tudo o que tem: esquivas rápidas, cortes certeiros e golpes desesperados. Ainda assim, o peso de cada martelada dos monstros faz o chão tremer, e parece que a derrota é inevitável. \n Quando um dos trolls ergue sua clava para esmagá-lo, uma lâmina atravessa a criatura por trás. \n → Vá para a página 23"),// ESCREVER HISTORIA

    new PaginaNarrativa(22, "Enganando os Trolls \n Você se esconde nas sombras e, aproveitando a escuridão, começa a atirar pedras para distrair os trolls. Eles se viram uns contra os outros, rosnando e discutindo, até que o maior deles ergue a clava para esmagar um companheiro. \n Antes do golpe acontecer, uma lâmina brilhante corta o ar. \n → Vá para a página 23"),// ESCREVER HISTORIA

    new PaginaNarrativa(23, "A Aparição de Aragorn \n Das trevas surge Aragorn, filho de Arathorn, espada em punho. Com golpes rápidos e precisos, ele derruba os três trolls sozinho, finalizando o último com uma estocada certeira no coração. \n O silêncio retorna à caverna. Aragorn limpa a lâmina e olha diretamente para você. \n — “Nenhum mal resistirá enquanto eu estiver por perto. Você teve coragem… mas também sorte em sobreviver.” \n Ele se aproxima e continua: \n — “Fui enviado por Gandalf para encontrar Frodo, o portador do Anel. Há muito tempo sigo o rastro das trevas, e sei que o caminho até a cidade dos elfos é nossa melhor chance de proteger a Terra-Média. Venha comigo — juntos seguiremos rumo aos aliados que nos ajudarão a enfrentar o que está por vir.” \n→ Vá para a página 24"),// ESCREVER HISTORIA

    new PaginaNarrativa(24, " A Cidade dos Elfos \n Guiado por Aragorn, você deixa para trás a caverna dos trolls. Após dias de caminhada pela floresta, o ar pesado de musgo e pedras começa a mudar. Uma brisa leve, perfumada por flores silvestres, enche seus pulmões. \n De repente, diante de seus olhos, ergue-se a magnífica cidade élfica, oculta entre colinas e árvores gigantescas. Torres brancas se misturam à natureza como se fossem parte dela, e pontes de cristal atravessam rios brilhantes. O canto de vozes élficas ecoa, suave como um feitiço. \n Na entrada, um grupo de guardiões o saúda, reconhecendo Aragorn com respeito. Um deles se aproxima e fala em língua comum: \n — “Sejam bem-vindos. O Conselho Élfico já os aguarda.” \n Você é levado até um salão iluminado por tochas mágicas e cristais suspensos no ar. No centro, um trono esculpido em madeira viva abriga Lord Elrond, que observa você com olhos antigos e sábios. \n — “Estranho viajante… carrega em sua alma tanto a sombra quanto a esperança. Seu destino pode mudar o rumo da guerra.” \n Ele então oferece duas opções: \n Aceitar a bênção dos elfos: receber uma malha de Mithril, leve como o linho e mais dura que o ferro mais resistente, capaz de proteger você nas batalhas futuras. → vá para a página 25 \n Recusar e seguir adiante com Aragorn: preferindo manter sua própria força sem depender de presentes élficos. → vá para a página 26"),// ESCREVER HISTORIA

    new PaginaNarrativa(25, "A Dádiva de Mithril \n Você aceita a bênção dos elfos. Elrond ergue a mão, e dois elfos se aproximam trazendo uma pequena caixa prateada. Ao abri-la, você vê algo que reluz como se fosse tecido de estrelas: uma malha de Mithril. \n — “Este presente não é comum, jovem aventureiro. O Mithril é mais leve que o linho e mais duro que o ferro mais resistente. Com ele, sua vida poderá ser poupada diante das maiores ameaças.” \n Aragorn observa em silêncio, mas você percebe respeito em seu olhar. Receber uma dádiva dessas não é apenas um presente: é um voto de confiança dos elfos em seu destino. \n Você veste a malha, sentindo sua leveza quase etérea. É como se estivesse protegido não apenas por metal, mas também pela própria esperança dos povos livres. \n Galadriel sorri para você, transmitindo segurança e confiança: \n — “Com esta proteção, seus passos serão guiados e suas batalhas mais seguras. Mas lembre-se: coragem e sabedoria são tão importantes quanto a armadura que veste.” \n Com a malha em seu inventário, você, Aragorn e Galadriel partem rumo ao próximo destino, o coração da guerra contra Sauron. \n → Vá para a página 27"),// ESCREVER HISTORIA

    new PaginaNarrativa(26, "Seguindo sem a Dádiva de Mithril \p Você decide recusar a dádiva dos elfos, preferindo confiar em sua própria força e nos artefatos que já possui. \p Aragorn assente, respeitando sua escolha: \p — “A coragem não vem apenas das armas ou da proteção. Que sua determinação seja sua armadura.” \p Galadriel observa seu gesto com aprovação, compreendendo que você quer confiar na própria habilidade. \p — “Então seguiremos juntos, mas esteja atento a cada passo. A sombra de Sauron é traiçoeira e não espera por ninguém.” \p Vocês deixam a cidade élfica e se embrenham novamente na floresta, guiados pela experiência de Aragorn e pelo poder de Galadriel. \p→ Vá para a página 27  "),// ESCREVER HISTORIA

    new PaginaNarrativa(27, "Rumo ao Coração das Trevas \n A floresta se abre e uma trilha de pedra se revela, levando vocês a uma planície árida. Montanhas negras se erguem ao longe, e a sombra de Mordor cobre o horizonte. \n Aragorn vira-se para você e fala com seriedade: \n — “O caminho não será fácil. Precisamos atravessar territórios inimigos e chegar até o coração das trevas.” \n Galadriel estende a mão, e uma luz suave envolve vocês, revelando pequenas passagens e atalhos seguros pela planície. \n  — “Fiquem atentos. Cada passo que derem poderá ser decisivo. Use seus artefatos com sabedoria.” \n À frente, dois caminhos se apresentam: \n Seguir pela trilha aberta, rápida, mas com risco de emboscadas. → vá para a página 28 \n Seguir por um desfiladeiro estreito, perigoso, mas possivelmente seguro contra exércitos inimigos. → vá para a página 29"),// ESCREVER HISTORIA

    new PaginaNarrativa(28, "A Trilha Aberta \n Vocês decidem seguir pela trilha aberta. O caminho é mais rápido, mas logo percebem sinais de alerta: rastros de Orcs espalhados pelo solo, árvores queimadas e corvos observando de cima. \n Aragorn aponta discretamente: \n — “Estes sinais indicam emboscadas. Preparem-se.” \nDe repente, um grupo de Orcs surge das sombras, avançando com gritos agudos. Galadriel ergue as mãos, e uma barreira de luz dourada desacelera os inimigos, dando tempo para você reagir. \n Você pode: \n Atacar com a Adaga Élfica, causando grande dano aos Orcs → siga para a página 30 \n Usar o Anel para criar distração ou atacar → siga para a página 31 \n Confiar na proteção da Malha de Mithril e lutar corpo a corpo → siga para a página 32"),// ESCREVER HISTORIA

    new PaginaNarrativa(29, "O Desfiladeiro Estreito \n Vocês escolhem o desfiladeiro estreito. O caminho é perigoso: pedras soltas e penhascos íngremes tornam cada passo arriscado. No entanto, a chance de emboscadas é menor, e vocês se movem com mais cuidado. \n De repente, uma ponte de pedra parcialmente destruída bloqueia o caminho. Um rugido ecoa do desfiladeiro: trolls menores patrulham a área. \n Galadriel levanta a mão, invocando uma luz que revela pontos seguros sobre a ponte e pedras firmes nas bordas do desfiladeiro. \n — “Sigam com cuidado. Um passo em falso pode custar a vida de vocês.” \n Você pode: \n Usar a Adaga Élfica para atacar os trolls à distância, derrubando-os → siga para a página 33 \n Confiar na magia do Anel para confundir os trolls → siga para a página 34 \n Seguir cautelosamente usando a proteção da Malha de Mithril, enfrentando qualquer ataque corpo a corpo → siga para a página 35"),// ESCREVER HISTORIA

    new PaginaNarrativa(30, "Combate na Trilha Aberta (Adaga Élfica) \n Você empunha a adaga élfica, e seu brilho corta a escuridão. Cada golpe atinge Orcs com precisão, derrubando alguns antes que eles possam reagir. \n Aragorn avança com sua espada, eliminando qualquer inimigo que se aproxime. Galadriel conjura rajadas de luz, desorientando os restantes. \n Após uma batalha intensa, todos os Orcs caem, e a trilha aberta está segura. Vocês continuam avançando, sabendo que Mordor está cada vez mais próximo. \n → Vá para a página 36"),// ESCREVER HISTORIA

    new PaginaNarrativa(31, "Combate com Magia do Anel \n Você ativa o Anel, criando ilusões e distrações que confundem os Orcs. Alguns se atacam entre si, outros fogem apavorados. \n Aragorn aproveita a confusão para eliminar os inimigos restantes com golpes precisos, enquanto Galadriel envia ondas de luz que incapacitam os Orcs mais resistentes. \n Após a batalha, a trilha está livre, e vocês prosseguem para Mordor. \n → Vá para a página 36"),// ESCREVER HISTORIA

    new PaginaNarrativa(32, "Combate Corpo a Corpo (Malha de Mithril) \n Com a Malha de Mithril, você se lança contra os Orcs com confiança. A armadura protege você de golpes letais, e você consegue atingir vários inimigos. \n Aragorn e Galadriel combatem lado a lado com você. A batalha é intensa, mas a proteção da malha e a coordenação com seus aliados garantem vitória. \n → Vá para a página 36"),// ESCREVER HISTORIA

    new PaginaNarrativa(33, "Desfiladeiro – Ataque com Adaga Élfica \n Você ataca os Orcs sombrios de Sauron à distância, atingindo pontos vitais. Dois Orcs sombrios de Sauron caem antes mesmo de perceberem sua presença. \n Aragorn corta o terceiro com um golpe certeiro, enquanto Galadriel lança luz sobre a ponte, garantindo que vocês atravessem sem cair. \n → Vá para a página 36"),// ESCREVER HISTORIA

    new PaginaNarrativa(34, "Desfiladeiro – Magia do Anel \n Você usa a magia do Anel para criar ilusões, confundindo os Orcs sombrios de Sauron. Eles começam a atacar uns aos outros, e a passagem se abre. \n Com Aragorn e Galadriel ao lado, vocês derrotam os Orcs sombrios de Sauron e avançam com segurança. \n → Vá para a página 36"),// ESCREVER HISTORIA
    
    new PaginaNarrativa(35, "Desfiladeiro – Corpo a Corpo com Malha de Mithril \n Você se lança contra os Orcs sombrios de Sauron, protegido pela Malha de Mithril. Cada ataque é absorvido pela armadura, e você consegue derrubar os inimigos um a um. \n Galadriel conjura luz para manter o equilíbrio na ponte, enquanto Aragorn finaliza o último Orcs sombrios de Sauron. \n → Vá para a página 36"),// ESCREVER HISTORIA

    new PaginaNarrativa(36, "A Chegada a Mordor \n Vocês finalmente alcançam a entrada de Mordor. O céu está vermelho com nuvens de cinza e fogo. A torre de Barad-dûr ergue-se ameaçadora, e o Olho de Sauron brilha, percebendo sua chegada. \n Aragorn vira-se para você: \n — “Tudo depende de nós agora. Este é o momento decisivo.” \n Galadriel acrescenta: \n — “Se estivermos unidos e usarmos todos os artefatos com sabedoria, há esperança.” \n Vocês veem Sauron no alto de Barad-dûr, empunhando a espada colossal e preparando seu ataque final. \nVocê pode: \n Usar todos os artefatos e a ajuda de Aragorn e Galadriel para enfrentar Sauron diretamente → vá para a página 37 (Vitória) \n Subestimar a batalha ou ser traído pelo Anel, resultando na derrota → vá para a página 38 (Derrota catastrófica)"),// ESCREVER HISTORIA

    new PaginaNarrativa(37, "Vitória Contra Sauron \n Com coordenação perfeita: você usa a Adaga Élfica e o Anel estrategicamente, Aragorn corta o caminho de Sauron, e Galadriel envia rajadas de luz poderosa. \n No momento decisivo, você consegue atingir o ponto fraco de Sauron. Ele é destruído, sua espada despedaçada e a torre de Barad-dûr treme e colapsa. \n O mundo da Terra-Média é libertado da sombra. Frodo celebra a vitória, Gandalf sorri do alto da torre de Barad-dûr, e a paz é restaurada. \n Fim do Caminho da Luz ✨"),// ESCREVER HISTORIA
    
    new PaginaNarrativa(38, "Derrota Catastrófica \n O poder do Anel ou a sobrecarga de magia é demais para controlar. Sauron domina a batalha, e seus ataques devastadores não deixam espaço para defesa. \n Um Tengai Shinsei lançado do Olho de Sauron atinge o solo, destruindo toda a planície, queimando exércitos e aliados. Aragorn, Galadriel e você são atingidos, e a Terra-Média cai sob uma sombra eterna. \n O mundo está perdido. O poder de Sauron é absoluto. \n Fim do Caminho das Sombras ☠️"),// ESCREVER HISTORIA
];

// Função de MENU PRINCIPAL
function Historia() {
    let opcao = Number(prompt("\n=== Menu Principal ===\n1 - História\n2 - Personagens\n3 - Habilidades Ocultas\n4 - Batalha\n5 - Escolhas Narrativas\n6 Inventario \n Sair\nEscolha: "));

    while (opcao !== 7) {
        switch (opcao) {
            case 1:
                pagina();
                break;
            case 2:
                Personagem2();
                break;
            case 3:
                Hab();
                break;
            case 4:
                Bat();
                break;
            case 5:
                escolhas();
                break;
            case 6:
                Inv();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
            break;
        }
      opcao = Number(prompt("\n=== Menu Principal ===\n1 - História\n2 - Personagens\n3 - Habilidades Ocultas\n4 - Batalha\n5 - Escolhas Narrativas\n6 Inventario \n Sair\nEscolha: "));
    }
}
Historia();

// Função de MOSTRAR TODAS AS PÁGINAS
function pagina() {
    for (const pagina of paginasNarrativas) {
        pagina.Verificarpagina();
    }
}

// Função de HABILIDADES
function Hab() {
    const gandalf = new HabilidadePersongem("Cajado", 1, 50, "Mão Oculta", 25, "Gandalf", "Dragão de Fogo");
    const aragorn = new HabilidadePersongem("Espada", 1, 40, "Fúria Élfica", 35, "Aragorn", "Exército dos Homens");
    const frodo = new HabilidadePersongem("Adaga do Portador", 1, 15, "Coragem do Anel", 25, "Frodo", "Determinação");
    const galadriel = new HabilidadePersongem("Anel de Nenya", 1, 45, "Luz de Valinor", 40, "Galadriel", "Aura de Proteção");

    gandalf.VerificarStatusPersonagem();
    aragorn.VerificarStatusPersonagem();
    frodo.VerificarStatusPersonagem();

    gandalf.VerificarItens();
    aragorn.VerificarItens();

    gandalf.VerificarHabilidade();
    aragorn.VerificarHabilidade();
    frodo.VerificarHabilidade();
    galadriel.VerificarHabilidade();
}

// Função de PERSONAGENS OCULTOS
function Personagem2() {
    const gadoff = new ClasseOculta("Cajado", 1, 100, "Passiva Maluca", 15, "Gadoff", "Explosão Final");
    const sauron = new ClasseOculta("Cálice Sombrio", 1, 666, "Explosão Cósmica Sombria", 9999, "Sauron", "Sussurro das Trevas");
    const galadriel = new ClasseOculta("Olhar do Vazio", 1, 700, "Explosão Cósmica Sombria", 99999, "Galadriel", "Brilho Eterno");

    gadoff.VerificarStatusPersonagem();
    gadoff.VerificarItens();
    gadoff.VerificarHabilidade();

    sauron.VerificarStatusPersonagem();
    sauron.VerificarItens();
    sauron.VerificarHabilidade();

    galadriel.VerificarStatusPersonagem();
    galadriel.VerificarItens();
    galadriel.VerificarHabilidade();
}

// Função de  BATALHAS
function Bat() {
    const heroi = new Personagem("Espada", 1, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
    const batalha1 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll Comum", 25, heroi);

    const heroi2 = new Personagem("Orbe do Infinito", 2, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
    const batalha2 = new PaginaBatalha(2, "Você entra em uma Floresta Oculta", "Anão Grande", 25, heroi2);

    const heroi3 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Cajado Supremo");
    const batalha3 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll da Montanha", 25, heroi3);

    const heroi4 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Mecha Gandoff");
    const batalha4 = new PaginaBatalha(2, "Gandoff luta contra Saruman", "Saruman", 25, heroi4);

    batalha1.Verificarpagina();
    console.log("=== Luta do Aragorn ===");
    batalha2.Verificarpagina();
    console.log("=== Luta do Gandoff ===");
    batalha3.Verificarpagina();
    console.log("=== Luta do Gandoff 2 vs Saruman ===");
    batalha4.Verificarpagina();
}

// Função de ESCOLHAS NARRATIVAS
function escolhas() {
    console.log("Você chegou a uma bifurcação na estrada:");

    // Lista de escolhas possíveis
    const opcoes = [
        { numero: 1, descricao: "Seguir pela esquerda (floresta)", pagina: 5 },
        { numero: 2, descricao: "Seguir pela direita (montanhas)", pagina: 16 },
        { numero: 3, descricao: "Mergulhar no lago dourado", pagina: 2 },
        { numero: 4, descricao: "Seguir pelo túnel sombrio", pagina: 4 },
        { numero: 5, descricao: "Ir atrás do som misterioso", pagina: 7 },
        { numero: 6, descricao: "Procurar os anões", pagina: 8 },
        { numero: 7, descricao: "Seguir Gandalf até Mordor", pagina: 10 },
        { numero: 8, descricao: "Entrar na floresta antiga", pagina: 6 },
        { numero: 9, descricao: "Subir a colina", pagina: 11 },
        { numero: 10, descricao: "Examinar as ruínas", pagina: 12 },
        { numero: 11, descricao: "Voltar para a caverna", pagina: 1 },
        { numero: 12, descricao: "Seguir sinais de fumaça", pagina: 9 },
        { numero: 13, descricao: "Chamar por ajuda", pagina: 13 },
        { numero: 14, descricao: "Esperar no mesmo lugar", pagina: 3 },
        { numero: 15, descricao: "Seguir pegadas estranhas", pagina: 7 },
        { numero: 16, descricao: "Explorar cavernas profundas", pagina: 4 },
        { numero: 17, descricao: "Tentar escalar a montanha", pagina: 11 },
        { numero: 18, descricao: "Seguir o vento frio", pagina: 2 },
        { numero: 19, descricao: "Procurar por comida", pagina: 5 },
        { numero: 20, descricao: "Invocar coragem e seguir em frente", pagina: 10 },
    ];

    // Mostrar todas as opções
    opcoes.forEach(op => {
        console.log(`${op.numero} - ${op.descricao}`);
    });

    const escolha = Number(prompt("Escolha um caminho: "));

    // Buscar a escolha do jogador
    const caminho = opcoes.find(op => op.numero === escolha);

    if (caminho) {
        const paginaEscolhida = paginasNarrativas.find(p => p.paginaNumero === caminho.pagina);
        if (paginaEscolhida) {
            paginaEscolhida.Verificarpagina();
        } else {
            console.log("Página ainda não criada.");
        }
    } else {
        console.log("Escolha inválida.");
    }
}

function Inv() {
    const inventario = new Inventario(10,[]);
    inventario.AdicionarItem("Mecha Gandalf");
    inventario.AdicionarItem("Cajado do Gandalf");
    inventario.AdicionarItem("Anel Prime");

    let escolha = Number(prompt("1 - Ver Inventário \n2 - Jogar Item Fora \n3 - Ver Inventário Total \n 4-Voltar ao Menu Principal Escolha: "));

    while (escolha !== 4) {
        switch (escolha) {
            case 1:
                inventario.VerificarItens();
                break;
            case 2:
                const itemRemover = prompt("Digite o nome do item que deseja remover: ");
                inventario.RemoverItem(itemRemover);
                break;
            case 3:
                console.log(`Total de itens no inventário: ${inventario['itens'].length}`);
                break;
            case 4:
                Historia();
                console.log(`Voltando ao Menu Iniciar`);   
                break;
            default:
                console.log("Opção inválida.");
        }

        escolha = Number(prompt("1 - Ver Inventário \n2 - Jogar Item Fora \n3 - Ver Inventário Total \n 4-Voltar ao Menu Principal Escolha: "));
    }
}
