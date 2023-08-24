function tabuada() {
    var numero = document.getElementById('num')
    var valornumero = numero.value 
    if (valornumero === "") {
        alert("INFORME UM NUMERO!")
        return
    }
    numero = Number(numero.value)
    var c = 0
    var bloco = document.getElementById('lista-tabuada')
    bloco.innerHTML = ""
    while (c<=10) {
        var res = numero * c
        bloco.innerHTML += `<li>${numero} x ${c} = ${res}</li>`
        c++
    }
}