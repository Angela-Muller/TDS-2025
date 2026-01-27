import * as promptSync from "prompt-sync";
const prompt = promptSync();
import { Personagem } from "./InfoPersonagem";
import { HabilidadePersongem } from "./Habilidade";
import { PaginaNarrativa } from "./PaginaNarrativa";
import { PaginaBatalha } from "./Paginabatalha";
import { ClasseOculta } from "./ClasseOculta";

const opcao = Number(prompt("Escolha uma opção: "));

function Historia() {
    let opcao = Number(prompt("=== Menu Principal === \n" + "1 - Historia \n" + "2 - Personagens \n" + "3 - Habilidades Ocultas \n" + "4 - Batalha \nEscolha: "));
    while (opcao !== 5) {
        switch (opcao) {
            case 1:
                const pagina1 = new PaginaNarrativa(1, "Você acorda em uma caverna escura...");
                const pagina2 = new PaginaNarrativa(2, "Ao sair da caverna, vê uma floresta misteriosa.");
                const pagina3 = new PaginaNarrativa(3, "Lembra de Gandoff Com seu Cajado e da Risada.");
                const pagina4 = new PaginaNarrativa(4, "Depois de Andar Pela Floresta Ve uns Anoes Caminhado, e Pergunta a Eles Cade o Resto do Grupo");
                const pagina5 = new PaginaNarrativa(5, "Os anoes Perguntam se estou procurando Gandolf , digo a eles que sim");
                const pagina6 = new PaginaNarrativa(6, "Vejo Um Brilho No Horizonte Gandoff Tinha invocado o Mecha Gandoff que usou sua magia especial Sentinela Nuclear");
                const pagina7 = new PaginaNarrativa(7, "Me pergunto O que e aquilo, os anoes ficam olhando, E pensando o que e aquilo?");
                const pagina8 = new PaginaNarrativa(8, "Os anoes falam Aquele velho chamo aquela coisa de Novo");
                const pagina9 = new PaginaNarrativa(9, "Os Anoes dizem, Ultima vez que chamou aquela coisa ele explodiu a floresta e acabo com o castelo");
                const pagina10 = new PaginaNarrativa(10, "Os Anoes Contam a Historia de como ele enfrentou seu tutor com o Mecha Gandoff");
                const pagina01 = new PaginaNarrativa(11, "Gandoff Descobre um Artefato Milenar e uma magia Arcana Suprema e um Grimorio Antigo nela tambem encontra algumas coisas");
                const pagina02 = new PaginaNarrativa(12, "Tempo Depois Gandoff Invoca o Mecha Gandoff, Que luta com seu Tutor, até seu tutor ficar cansado, Assim chama o Nuclear Strike");
                const pagina03 = new PaginaNarrativa(13, "Gandoff Então sai de perto e o tutor e Incinerado, Gandoff Ri e diz esse e diferente");
                pagina1.Verificarpagina();
                pagina2.Verificarpagina();
                pagina3.Verificarpagina();
                pagina4.Verificarpagina();
                pagina5.Verificarpagina();
                pagina6.Verificarpagina();
                pagina7.Verificarpagina();
                pagina8.Verificarpagina();
                pagina9.Verificarpagina();
                pagina10.Verificarpagina();
                console.log("===Historia da Vitoria de Gandoff sobre Saruman==")
                pagina01.Verificarpagina();
                pagina02.Verificarpagina();
                pagina03.Verificarpagina();
                console.log("===Historia do Rei Arthur==")
                const pagina04 = new PaginaNarrativa(14, "Ao terminar com Saruman ele estava cansado e com fome por conta disso ele abre o chat e coloca /effect give @Gandalf saturation 1 255 true");
                const pagina05 = new PaginaNarrativa(15, "Ao ficar satisfeito ele dá /tp @Gandalf @frodo");
                const pagina06 = new PaginaNarrativa(14, "");
                const pagina07 = new PaginaNarrativa(14, "");
                const pagina08 = new PaginaNarrativa(14, "");
                const pagina09 = new PaginaNarrativa(14, "");
                const pagina010 = new PaginaNarrativa(14, "");
                const pagina11 = new PaginaNarrativa(14, "");
                break;
            case 2:
                const gandalf = new HabilidadePersongem("Cajado", 1, 50, "Mão Oculta", 25, "Gandalf", "Dragão de Fogo");
                const aragorn = new HabilidadePersongem("Espada", 1, 40, "Fúria Élfica", 35, "Aragorn", "Exército dos Homens");
                const frodo = new HabilidadePersongem( "Adaga do Portador",1,15,"Coragem do Anel",25,"Frodo","Determinação");
                const galadriel = new HabilidadePersongem("Anel de Nenya", 1,45,"Luz de Valinor",40,"Galadriel","Aura de Proteção");
                gandalf.VerificarStatusPersonagem();
                aragorn.VerificarStatusPersonagem();
                gandalf.VerificarItens();
                aragorn.VerificarItens();
                gandalf.VerificarHabilidade();
                aragorn.VerificarHabilidade();
                frodo.VerificarHabilidade();
                frodo.VerificarStatusPersonagem();
                galadriel.VerificarHabilidade();
                break;
            case 3:
                const gadoff = new ClasseOculta("Cajado", 1, 100, "Passiva Maluca", 15, "Gadoff", "Explosão Final");
                gadoff.VerificarStatusPersonagem();
                gadoff.VerificarItens();
                gadoff.VerificarHabilidade();
                const Sauron = new ClasseOculta( "Cálice Sombrio",1, 666,"Explosão Cósmica Sombria", 9999,"Sauron", "Sussurro das Trevas");
                Sauron.VerificarStatusPersonagem();
                Sauron.VerificarItens();
                Sauron.VerificarHabilidade();
                const gala = new ClasseOculta ("Olhar do Vazio",1, 700,"Explosão Cósmica Sombria", 99999,"Galadriel", "Brilho Eterno");
                gala.VerificarHabilidade();
                gala.VerificarItens();
                gala.VerificarStatusPersonagem();
                break;
            case 4:
                const heroi = new Personagem("Espada", 1, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
                const batalha = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll da Montanha", 25, heroi);
                const heroi2 = new Personagem("Orbe do Infinito", 2, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
                const batalha2 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Anao Grande", 25, heroi2);
                const heroi3 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Espadada Fatal");
                const batalha3 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll da Montanha", 25, heroi);
                batalha.Verificarpagina();
                console.log("===Luta do Aragorn===");
                batalha2.Verificarpagina();
                batalha3.Verificarpagina();
                break;
            default:
                console.log("Estamos Criando Ainda, Lamentamos o Ocorrido");
                break;
        }
         opcao = Number(prompt("=== Menu Principal === \n" + "1 - Historia \n" + "2 - Personagens \n" + "3 - Habilidades Ocultas \n" + "4 - Batalha \nEscolha: "));
    }

}
Historia();