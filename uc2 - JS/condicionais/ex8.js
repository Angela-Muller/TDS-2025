function redeSocialFavorita(redeSocial){
 redeSocial = prompt("Dentre essas qual sua rede social favorita? Istagram, TikTok, Twitter, Facebook, Linkedin").toLowerCase()

 switch(redeSocial){
    case "instagram":
        alert("Perfeito para fotos e stories!")
        break
    case "tiktok" :
        alert("Vídeos curtos e muita dança!")
        break
    case "twitter" :
        alert("O lugar das notícias rápidas e memes!")
        break
    case "facebook" :
        alert("Clássico, mas ainda forte para grupos!")
        break
    case "linkedin" :
        alert("Rede profissional e network!")
        break
    default:
        alert("Escolha uma rede dentre as selecionadas!")
        return(redeSocialFavorita())
 }
}
redeSocialFavorita()