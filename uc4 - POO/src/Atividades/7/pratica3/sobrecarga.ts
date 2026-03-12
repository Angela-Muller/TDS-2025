
class Email{
    enviar(assunto: string, msg:string):string;
    enviar(assunto: string, msg:string):number;

    enviar(assunto: any, msg: any) {
    console.log(`Assunto ${assunto}. Mensagem ${msg}.`)
     return assunto+msg
    }
}
const gmail = new Email();
gmail.enviar("O que eu gosto","Eu gosto de pamonha");
const hotmail = new Email();
hotmail.enviar("aliens","Eu sou um alienigena, biz biz")


