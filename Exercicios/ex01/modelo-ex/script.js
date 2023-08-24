function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    var fundo = window.document.body
    if (hora >= 0 && hora < 12 ) {
        //bom dia
        img.src = "imagens/manha.png"
        fundo.style.backgroundColor = "#F0C9AC"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "imagens/tarde.png"
        fundo.style.backgroundColor = "#ACB5BC"
    } else {
        //boa noite
        img.src = "imagens/noite.png"
        fundo.style.backgroundColor = "#0B2745"
    }
}