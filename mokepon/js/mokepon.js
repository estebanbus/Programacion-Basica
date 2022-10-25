let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.querySelector('.seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let reiniciar = document.querySelector('.reiniciar')
    reiniciar.style.display = 'none'

    let buttonMascotaJugador = document.querySelector('.button-mascota')
    buttonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let buttonFuego = document.querySelector('.button-fuego')
    buttonFuego.addEventListener('click', ataqueFuego)
    let buttonAgua = document.querySelector('.button-agua')
    buttonAgua.addEventListener('click', ataqueAgua)
    let buttonTierra = document.querySelector('.button-tierra')
    buttonTierra.addEventListener('click', ataqueTierra)

    let buttonReiniciar = document.querySelector('.button-reset')
    buttonReiniciar.addEventListener('click', resetGame)
}

function seleccionarMascotaJugador () {
    let sectionSeleccionarMascota = document.querySelector('.seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.querySelector('.seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge = document.querySelector('.hipodoge')
    let inputCapipepo = document.querySelector('.capipepo')
    let inputRatigueya = document.querySelector('.ratigueya')
    let spanMascotaJugador = document.querySelector('.mascota-jugador')

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert ('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo ()
}

function seleccionarMascotaEnemigo () {
    let MascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.querySelector('.mascota-enemigo')

    if(MascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (MascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (MascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo () {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1 ) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2 ) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate ()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function combate() {
    let spanVidasJugador = document.querySelector('.vidas-jugador')
    let spanVidasEnemigo = document.querySelector('.vidas-enemigo')

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje('Empate')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('Ganaste') 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje('Perdiste')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }  

    revisarVidas ()
}

 function revisarVidas () {
    if (vidasEnemigo == 0){
        crearMensajeFinal('GANASTE FELICIDADES 🥳')
    } else if (vidasJugador == 0){
        crearMensajeFinal('LO SIENTO HAS PERDIDO 😢')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.querySelector('.mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.querySelector('.mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let buttonFuego = document.querySelector('.button-fuego')
    buttonFuego.disabled = true
    let buttonAgua = document.querySelector('.button-agua')
    buttonAgua.disabled = true
    let buttonTierra = document.querySelector('.button-tierra')
    buttonTierra.disabled = true

    let reiniciar = document.querySelector('.reiniciar')
    reiniciar.style.display = 'block'
}

function resetGame () {
    location.reload()
}


window.addEventListener('load', iniciarJuego)