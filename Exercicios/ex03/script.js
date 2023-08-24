function contar() {
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var msg = document.getElementById('mensagem')
    var valorInicio = inicio.value
    var valorfinal = fim.value
    var valorpasso = passo.value

    if (valorInicio === '' || valorfinal === '') {
        msg.innerHTML = 'Impossivel Contar!'
        return
    } else if (passo.value === '') {
        msg.innerHTML = 'Impossivel Contar!'
        return
    } else {
        var passo = Number(passo.value)
        inicio = Number(inicio.value)
        fim = Number(fim.value)
    }

    if (passo === 0) {
        alert("Passo Invalido! Considerando PASSO 1")
        passo = 1
    }

    var c = 0
    var contagem = document.createElement('div')
    var containercont = document.getElementById("bloco-contagem")
    containercont.innerHTML = ""
    document.getElementById("bloco-contagem").appendChild(contagem)
    var emoji = "👉"
    var emojifim = "🏁"
    if (inicio < fim) {
        for (var c = inicio; c <= fim; c+=passo) {
            contagem.innerHTML += `${c} ${emoji}`
        }
    } else {
        for (var c = inicio; c>= fim; c-=passo) {
            contagem.innerHTML += `${c} ${emoji}`
        }
    }
    contagem.innerHTML += `${emojifim}`
}